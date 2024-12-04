import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi, I am {process.env.REACT_APP_NAME}</h1>
      <h1>I work in {process.env.REACT_APP_COMPANY}</h1>
      <h2>
        Here we are hosting this website on
        {process.env.REACT_APP_HOSTING}
      </h2>
    </div>
  );
}

export default App;
