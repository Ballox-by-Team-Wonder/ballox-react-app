import { AiOutlineUser } from "react-icons/ai"
import {RiArrowDropDownLine } from "react-icons/ri"


export const UserIcon=({size,color,onClick})=>{
    return(
        <>
        <AiOutlineUser onClick={onClick} size={size} color={color} />

        </>
    )
}

export const DropDownIcon=({size,color,style,fontWeight,onClick})=>{
    return(
        <>
        <RiArrowDropDownLine style={style} onClick={onClick} fontWeight={fontWeight} size={size} color={color} />

        </>
    )
}