import styled from "styled-components";
import { font } from "../../styles/font";
import { S } from "../../components/menu/menu_styles";

export type TabsStatusType = "all" | "react" | "landing" | "spa"

type ProjectTabsPropsType = {
    tabsData: Array<{ title: string, status: TabsStatusType }>,
    changeFilterStatus : (value:TabsStatusType) => void,
    currentFilterStatus : string
}

export const ProjectTabs = (props: ProjectTabsPropsType) => {
    return (
        <Tabs>
            <ul>
                {props.tabsData.map((item,index)=> {
                    return (
                        <S.MenuItem key={index} active = {props.currentFilterStatus === item.status}>
                            <button onClick={()=> {props.changeFilterStatus(item.status)}}>
                                {item.title}
                            </button>
                        </S.MenuItem>
                    )
                })}
            </ul>

        </Tabs>
    );
}

const Tabs = styled.nav`
    ul {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        justify-content:center;
        width: 100%;
        gap: 25px;
        margin:0 auto 50px;
        
    }

    button {
        font-size: 18px;
    }
`

