import {useState} from "react";
import s from './style.module.css'

export function MenuListItemps(props) {
    const [isHovered, setIsHovered] = useState(false)
    console.log('***', isHovered)
    return <div className={s.container}
                style={{ backgroundColor : isHovered ? "green" : "grey" } }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
        set to : {props.difficulty}</div>
}