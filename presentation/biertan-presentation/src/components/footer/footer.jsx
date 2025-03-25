import './footer.css';

function Footer() {
    return(
        <div className='footer'>
            <div className="logo">
                <img src="images/StemaBiertan_smaller60.png" alt="Stema"></img>
                <div className='name'>
                    <p>Comuna</p>
                    <p id='primaryName'>Biertan</p>
                    <p>Sibiu</p>
                </div>
            </div>

            <div className='info'>
                <div className='contact'>
                    <img src='images/location.png' alt='location'></img>
                    <p>
                        Piața 1 Decembrie 1918 19, Biertan 557045
                    </p>
                </div>
                <div className='contact'>
                    <img src='images/phone.png' alt='phone'></img>
                    <p>
                        0269 868 359
                    </p>
                </div>
                <div className='contact'>
                    <img src='images/email.png' alt='email'></img>
                    <p>
                        primariabiertan@yahoo.com
                    </p>
                </div>
                <div className='contact' id='mediaContact'>
                    <div className='mediaButton'>
                        <img src='images/facebook.png' alt='facebook'></img>
                    </div>
                    <div className='mediaButton'>
                        <img src='images/instagram.png' alt='instagram'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;