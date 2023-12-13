import s from './style.module.css'
export function DisplayDifficulty(props) {
    return <div className={s.container}>
        { props.difficulty ? `Difficulty set to : ${props.difficulty}` : `Pas de difficultés selectionné`}
    </div>
}