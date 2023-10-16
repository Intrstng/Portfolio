import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Amazing} from "./layout/sections/amazing/Amazing";
import {Best} from "./layout/sections/best/Best";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Amazing/>
            <Best/>
        </div>
    );
}

export default App;