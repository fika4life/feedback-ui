import './App.css';

import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import { useState } from 'react';
import FeedbackData from './data/data';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats />
                  <FeedbackList></FeedbackList>
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          </Routes>

          <AboutIcon></AboutIcon>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
