//import styles from './RightNav.module.scss';
import styled from 'styled-components';
import '../../../styles/settings.scss';

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  z-index: 99;

  .navLink {
    margin: 0 14px;
    position: relative;
    color: #227093;
    font-family: 'Dosis';
    text-decoration: none;
    font-size: 24px;
  }
  
  .navLink:hover {
    border-bottom: 1px solid #227093;
    color: #227093;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #227093;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 12px;
    transition: transform 0.3s easy-in-out;

    li {
      padding: 20px 0;
    }

    .navLink {
      color: #fff;;
      font-size: 20px;
    }
    
    .navLink:hover {
      border-bottom: 1px solid #fff;;
      color: #fff;;
    }
    
  }
`;


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/about" className="navLink">Obiekt</a>
      </li>
      <li>
        <a href="/gallery" className="navLink">Galeria</a>
      </li>
      <li>
        <a href="/price-list" className="navLink">Cennik</a>
      </li>
      <li>
        <a href="/localization" className="navLink">Lokalizacja</a>
      </li>
      <li>
        <a href="/attractions" className="navLink">Atrakcje</a>
      </li>
      <li>
        <a href="/statute" className="navLink">Regulamin</a>
      </li>
    </Ul>
  );
}

export default RightNav;