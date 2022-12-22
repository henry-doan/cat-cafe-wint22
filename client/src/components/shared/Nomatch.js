import { Link } from 'react-router-dom';
import XmasCat from '../styles/imgs/catsxmas.jpeg';

const Nomatch = () => (
  <>
    <img src={XmasCat} />
    <h1>404 - Page not Found</h1>
    <Link to='/'>
      Return Home
    </Link>
  </>
)

export default Nomatch;