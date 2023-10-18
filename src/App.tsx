import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Cards} from "./layout/sections/cards/Cards";
import {Best} from "./layout/sections/best/Best";
import {Artists} from "./layout/sections/artists/Artists";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Cards/>
            <Best/>
            <Artists/>
            <Subscribe/>
        </div>
    );
}

export default App;