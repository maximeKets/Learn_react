import {useState} from "react";
import s from './style.module.css'

export function MenuListItemps({onClick, difficulty}) {
    const [isHovered, setIsHovered] = useState(false)
    return <div
                onClick={() => onClick(difficulty)}
                style={{backgroundColor: isHovered ? "green" : "grey"}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
        set to : {difficulty}</div>
}