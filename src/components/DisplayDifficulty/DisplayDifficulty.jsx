import s from './style.module.css'
export function DisplayDifficulty({dificulty}) {
    return <div className={s.container}>
        { dificulty ? `Difficulty set to : ${dificulty}` : `Pas de difficultés selectionné`}
    </div>
}