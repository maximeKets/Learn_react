import s from './style.css';
import {DisplayDifficulty} from "./components/DisplayDifficulty/DisplayDifficulty";
import {MenuListItemps} from "./components/MenuListItems/MenuListItemps";
import {MenuList} from "./components/MenuList/MenuList";
import {useState} from "react";


function App() {
    const [currentDifficulty, SetCurrentDifficulty] = useState('')
    function updateDifficulty(difficulty){
        SetCurrentDifficulty(difficulty);
    }

    return (
        <div className={s.container}>
            <MenuList
                onItemClick={updateDifficulty}
                difficulty={currentDifficulty} />
            <DisplayDifficulty dificulty={currentDifficulty} />
        </div>
    );
}

export default App;
