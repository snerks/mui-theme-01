import React, { useContext, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

// console.warn(ThemeContext);

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App: React.FC = () => {
  const [showDarkTheme, setShowDarkTheme] = useState(false);
  // const [theme, setTheme] = useState(themes.light);

  const handleUseDarkTheme = () => {
    setShowDarkTheme(!showDarkTheme);
  };

  return (
    <ThemeContext.Provider value={showDarkTheme ? themes.dark : themes.light}>
      <>
        <label>Dark: </label>{" "}
        <input type="checkbox" onChange={() => handleUseDarkTheme()} />
        <Toolbar />
      </>
    </ThemeContext.Provider>
  );
};

const Toolbar: React.FC = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
};

export default App;
