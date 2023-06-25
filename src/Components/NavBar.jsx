import logo from '../images/logo.svg';
import '../App.css';

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} />
        <p>
         GenAI - Image Generator
        </p>
        <a
          className="App-link"
          href="https://www.segmind.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SegMind
        </a>
      </header>
    </div>
  );
}

export default NavBar;
