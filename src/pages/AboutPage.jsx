import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>
            This is a react page for people to leave feedback on your service or
            product
          </p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;
