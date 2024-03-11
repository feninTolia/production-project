import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/useTheme';

const MainPage = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <Link to={'/about'}>About page</Link>
      <h1>Main page</h1>
      <button style={{ padding: '0.5em 1em' }} onClick={toggleTheme}>
        Theme - 2
      </button>
    </div>
  );
};

export default MainPage;
