import styles from './Localization.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';

const Localization = () => {

  return (
    <div className="container">
      <h1 className="title">Lokalizacja</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9376.702569739331!2d14.735354!3d54.0174065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98243bab746dda5!2sDomki%20na%20Komandorskiej!5e0!3m2!1spl!2spl!4v1661023704574!5m2!1spl!2spl" width="800" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" className={styles.frame}></iframe>
      <h1 className="title">Odległości</h1>
      <ListGroup variant="flush">
        <ListGroup.Item><p className="descriptionDark">500 m - Plaża - 5 minut</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">1000 m - Centrum miasta - 15 minut</p></ListGroup.Item>  
        <ListGroup.Item><p className="descriptionDark">600 m - Market Dino - 10 minut</p></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Localization;