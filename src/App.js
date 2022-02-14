import useLocalStorage from "use-local-storage";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = (userTheme) => {
    setTheme(userTheme);
  };

  return (
    <div className={styles.app} data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      <Main />
    </div>
  );
}

export default App;