import { theme } from "./theme"

type fontPropsType = {
    family? : string,
    weight? : number,
    color? : string,
    lineHeight? : number,
    Fmin? : number,
    Fmax? : number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax} : fontPropsType) => `
    font-family : ${family || "Poppins"};
    font-weight : ${weight || 300} ;
    color : ${color || theme.colors.primary};
    line-height : ${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`