import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Cursor from "./components/Cursor";
import {
  ShakeThatIcon,
  IamSloty,
  Bianki,
  ContactGuard,
  Casinoble,
} from "./pages/projects";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MobileView from "./components/MobileView";
import { projects } from "./constants";
import { useRef } from "react";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let isMobile = windowSize && windowSize.current[0] <= 600;
  return (
    <>
      <div className="App">
        {/* Пробвай да пиннеш Routes за да може да се скролне фуутъра над пейджа */}
        {isMobile ? (
          <MobileView />
        ) : (
          <>
            <Cursor />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="shake-that-icon"
                element={
                  <ShakeThatIcon
                    project={{
                      ...projects[0],
                      recentProjects: [projects[1], projects[2]],
                    }}
                  />
                }
              />
              <Route
                path="iam-sloty"
                element={
                  <IamSloty
                    project={{
                      ...projects[1],
                      recentProjects: [projects[0], projects[2]],
                    }}
                  />
                }
              />
              <Route
                path="bianki"
                element={
                  <Bianki
                    project={{
                      ...projects[2],
                      recentProjects: [projects[1], projects[3]],
                    }}
                  />
                }
              />
              <Route
                path="contact-guard"
                element={
                  <ContactGuard
                    project={{
                      ...projects[3],
                      recentProjects: [projects[2], projects[4]],
                    }}
                  />
                }
              />
              <Route
                path="casinoble"
                element={
                  <Casinoble
                    project={{
                      ...projects[4],
                      recentProjects: [projects[3], projects[0]],
                    }}
                  />
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
