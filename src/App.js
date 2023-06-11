import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_APP;
  const [progress, setprogress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            path="/home"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
