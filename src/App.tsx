import './App.css';
import {Header} from "./layout/header/Header";
import {Explore} from "./layout/sections/explore/Explore";
import {Collections} from "./layout/sections/collections/Collections";
import {Marketplace} from "./layout/sections/marketplace/Marketplace";
import {Artists} from "./layout/sections/artists/Artists";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";
import iconsSprite from "./assets/images/icons-sprite.svg";


function App() {
    return (
        <div className="App">
            <Header/>
            <Explore sprite={iconsSprite}/>
            <Collections/>
            <Marketplace/>
            <Artists/>
            {/*<Subscribe/>*/}
        </div>
    );
}

export default App;