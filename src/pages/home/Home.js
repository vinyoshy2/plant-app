import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={"/logo.svg"} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/pages/home/Home.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
