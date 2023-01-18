import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./layout/MainLayout";

import IcoPage from "./pages/ico/ico";

const renderLoader = () => (
  <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center bg-gradient-to-t from-indigo-500 via-purple-400 to-pink-300">
    <img src={'./image/loading.png'} alt="logo" className="animate-pulse" />
  </div>
);

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {
        ready ? (
          <div className="App" >
            <Router>
              <MainLayout>
                <Suspense fallback={renderLoader()}>
                  <Routes>
                    <Route path="/" element={<IcoPage />} />
                  </Routes>
                </Suspense>
              </MainLayout>
              <ToastContainer pauseOnFocusLoss={true} position="top-right" toastClassName={'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'} />
            </Router>
          </div>
        ) : (
          renderLoader()
        )
      }
    </>
  );
}

export default App;
