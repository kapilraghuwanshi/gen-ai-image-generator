import logo from '../images/logo.svg';
import '../App.css';

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} />
        <p>
         Gen AI - Image Generator
        </p>
        <a
          className="App-link"
          href="https://www.segmind.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SendGrid
        </a>
      </header>
    </div>
  );
}

export default NavBar;
