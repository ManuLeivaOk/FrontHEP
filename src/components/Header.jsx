import fondoHeader from '../assets/images/headerConLetras.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
    <Nav />
    <img className="container mx-auto" src={fondoHeader} alt="fondoHeader" />
    </header>
  );
};

export default Header;
