import iconsSprite from './../../assets/icons/iconsSprite.svg'
type IconPropsType = {
    width?: string,
    height?:string,
    iconId : string,
    viewBox? : string
}

export const Icon:React.FC <IconPropsType>= (props:IconPropsType) => {
    return(
        <svg width={props.width || "88px"} height={props.height || "88px"} viewBox={props.viewBox || '0 0 88 88'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}