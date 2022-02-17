import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import JobDetailsPage from "./Components/JobDetailsPage/JobDetailsPage";
import Main from "./Components/UI/Main";
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

  // Used to keep a constant record of all the available job postings
  const [allJobs, setAllJobs] = useState([]);
  // A constantly changing list of jobs based on the users filters
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Fetching the JSON data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  return (
    <div className={styles.app} data-theme={theme}>
      <Router>
        <Header switchTheme={switchTheme} theme={theme} />
        <Main>
          <Routes>
            <Route
              path="/job/:id"
              element={<JobDetailsPage jobs={filteredJobs} />}
            />
            <Route
              path="/"
              element={
                <HomePage
                  allJobs={allJobs}
                  filteredJobs={filteredJobs}
                  setFilteredJobs={setFilteredJobs}
                />
              }
            />
          </Routes>
        </Main>
      </Router>
    </div>
  );
}

export default App;
