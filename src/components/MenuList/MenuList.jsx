import {MenuListItemps} from "../MenuListItems/MenuListItemps";
import s from './style.module.css'

export function MenuList(props) {
    return (
        <div className={s.container}>
            <MenuListItemps difficulty="low"/>
            <MenuListItemps difficulty="hard"/>
            <MenuListItemps difficulty="expert"/>
            <MenuListItemps difficulty="insane"/>

        </div>
    )
}