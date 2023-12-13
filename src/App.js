import s from './style.css';
import {DisplayDifficulty} from "./components/DisplayDifficulty/DisplayDifficulty";
import {MenuListItemps} from "./components/MenuListItems/MenuListItemps";
import {MenuList} from "./components/MenuList/MenuList";


function App() {
    return (
        <div className={s.container}>
            {/*<DisplayDifficulty />*/}
            <MenuList />
        </div>
    );
}

export default App;
