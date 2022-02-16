import useLocalStorage from "use-local-storage";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
function App() {
  // Determine whether the user has a default color scheme (light or dark)
  // Store their preference in local storage for next time the user visits
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
