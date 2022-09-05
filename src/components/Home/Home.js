import styles from './Home.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Feature from '../Feature/Feature.js';

const Home = () => {

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/3xKF9KTr/20220703-164344-1.jpg" style={{ height: '14rem', width: '18rem' }} className="m-3"/>
            <Card.Body>
              <p className="descriptionTitle">Opis obiektu</p>
              <p className="descriptionDark">Zapoznaj się z naszą ofertą</p>
              <Button href="about" variant="secondary"><p className={styles.buttonText}>Dowiedz się więcej</p></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src="https://i.postimg.cc/BQZTC3Rc/20200501-140854.jpg" style={{ height: '14rem', width: '18rem' }} className="m-3"/>
            <Card.Body>
              <p className="descriptionTitle">Cennik</p>
              <p className="descriptionDark">Sprawdź ceny w wybranych terminach</p>
              <Button href="/price-list" variant="secondary"><p className={styles.buttonText}>Dowiedz się więcej</p></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/MTJ00Smx/20220721-100843.jpg" style={{ height: '14rem', width: '18rem' }} className="m-3"/>
            <Card.Body>
              <p className="descriptionTitle">Atrakcje</p>
              <p className="descriptionDark">Sprawdź co warto zobaczyć w okolicy</p>
              <Button href="/attractions" variant="secondary"><p className={styles.buttonText}>Dowiedz się więcej</p></Button>
            </Card.Body >
          </Card>
        </div>
      </div>
      <Feature />
    </div>    
    
  );
}

export default Home;