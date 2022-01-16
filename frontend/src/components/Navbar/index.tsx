
import { ReactComponent as GithubIcon } from 'assets/img/instagram1.svg';
import './styles.css';
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Kinha Art's</h1>
                    <a href="https://www.instagram.com/kinha_arts/">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Kinha Art's </p>
                        </div>

                    </a>
                </div>
            </nav>
        </header>)

} export default Navbar;