import { Link } from "react-router-dom";
import { Search, Clapperboard } from "lucide-react";
import NavBarContainer from "./styles";

function Navbar() {
    return (
        <NavBarContainer>
            <h2>
                <Link to='/'>
                    <Clapperboard size={38}/>
                    MoviesLib
                </Link>
            </h2>

            <form >
                <input type="text" placeholder="Busque um Filme"/>
                <button type="submit"><Search/></button>
            </form>
        </NavBarContainer>
    )
};

export default Navbar;
