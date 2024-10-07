import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from 'react-scroll';
import { useEffect, useState } from "react";

export const GoUpButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    },[])

    return ( 
        <>
            {isVisible && 
                <StyledGoUpButton onClick={()=>{animateScroll.scrollToTop()}}>
                <Icon iconId="arrowUp" width="30px" height="30px" viewBox="0 0 90 90"/>
            </StyledGoUpButton>
            }
        </>
        
        
    );
}
 
const StyledGoUpButton = styled.button`
    position: fixed;
    right:30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 999;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.9);
`