import '../Components/NavBar.css';
import logo from '../Components/Assets/mixlr-logo.png';
   

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img className="logo" src={logo} alt="Mixlr" />
                        <a className="navbar-brand" href="#Mixlr">Mixlr</a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#Home">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Features">Listen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Pricing">Login</a>
                            </li>
                            <li className="nav-item">
                                <button className="get-started-button">
                                 <a className="nav-link" href="#GetStarted">Get started</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;