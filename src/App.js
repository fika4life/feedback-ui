import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import { useState } from 'react';
import FeedbackData from './data/data';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIcon from './components/AboutIcon';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                ></FeedbackList>
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        </Routes>
        <AboutIcon></AboutIcon>
      </div>
    </Router>
  );
}

export default App;
