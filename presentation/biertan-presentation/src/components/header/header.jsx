import './header.css';

function Header() {
    return(
        <div className='header'>
            <div className='logoName'>
                <img className='logo' src='images/StemaBiertan_smaller80.png' alt='logo'></img>
                <p className='primaryName'>Biertan</p>
            </div>

            <div className='navigation'>
                <p>Primarie</p>
                <p>Acomodare</p>
                <p>Localnici</p>
                <p>Vizitatori</p>
                <p>Contact</p>
            </div>

            <div className='languages'>
                <p>Romana</p>
                <div id='verticalLine'></div>
                <p>English</p>
                <div id='verticalLine'></div>
                <p>Deutsch</p>
            </div>
        </div>
    )
}

export default Header;
