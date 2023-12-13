import {MenuListItemps} from "../MenuListItems/MenuListItemps";
import s from './style.module.css'

export function MenuList({onItemClick, difficulty} ) {
    return (
        <div className={s.container}>
            <MenuListItemps onClick={onItemClick} difficulty="low"/>
            <MenuListItemps onClick={onItemClick} difficulty="hard"/>
            <MenuListItemps onClick={onItemClick} difficulty="expert"/>
            <MenuListItemps onClick={onItemClick} difficulty="insane"/>
        </div>
    )
}