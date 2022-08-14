import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextInput = (e) => {
    if (text === '') {
      setIsDisabled(true);
      setMessage('');
    } else if (text !== '' && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage('Text must be more than 10 characters');
    } else {
      setMessage('');
      setIsDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating
      };
      addFeedback(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        ></RatingSelect>
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextInput}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
