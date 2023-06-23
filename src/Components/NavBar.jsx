import logo from '../../src/logo.svg';
import '../App.css';

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} />
        <p>
        Image Generator - GenAI
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
