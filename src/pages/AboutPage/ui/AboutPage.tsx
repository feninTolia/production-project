import { Link } from 'react-router-dom';

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <Link to={'/'}>Main page</Link>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
