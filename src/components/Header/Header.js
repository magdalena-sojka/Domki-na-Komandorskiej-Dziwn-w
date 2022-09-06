import styles from './Header.module.scss';
import Burger from './Burger/Burger.js';

const Header = () => {

  return (
    <div>
      <div className={styles.container}>
        <div className="d-flex flex-row justify-content-around align-items-center">
          <div>
            <a href="/"><img src="https://i.postimg.cc/HktdJPxM/IMG-20210604-WA0007.jpg" width="200" height="200" alt="Domki na Komandorskiej" loading="lazy" className={styles.logo}></img></a>
          </div>
          <div>
            <Burger />
          </div>  
        </div>
      </div>  
    </div>
  );
}

export default Header;