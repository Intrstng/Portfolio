import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Amazing} from "./layout/sections/amazing/Amazing";
import {Best} from "./layout/sections/best/Best";
import {Artists} from "./layout/sections/artists/Artists";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Amazing/>
            <Best/>
            <Artists/>
            <Subscribe/>
        </div>
    );
}

export default App;