import "../assets/styles/Header.css"
import logo from "../assets/imgs/globe.svg"

function Header (){
    return (
        <header className="header-container">
            <nav>
                <h1>Project Language<img className='image' src={logo} /></h1>
            </nav>
        </header>
    );
}

export default Header;