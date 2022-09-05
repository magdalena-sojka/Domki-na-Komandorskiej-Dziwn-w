import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
      <p className={styles.contactTitle}>Skontaktuj się z nami</p>
        <div className="d-flex flex-wrap align-items-center">
          <div className="col-12 col-md-5">
            <p className="descriptionLight">Domki na Komandorskiej</p>
            <p className="descriptionLight">ul. Komandorska 18</p>
            <p className="descriptionLight">72-420 Dziwnów</p>
          </div>
          <div className="col-12 col-md-2 d-flex align-items-center justify-content-center">
            <a href="https://www.facebook.com/DomkiNaKomandorskiej" className={styles.aFacebook}><FontAwesomeIcon icon="fa-brands fa-square-facebook" className={styles.facebook} /></a>
          </div> 
          <div className="col-12 col-md-5">
            <p className="descriptionLight">Telefon: 697 419 920</p>
            <p className="descriptionLight">E-mail: domki.komandorska@gmail.com</p>
          </div>
        </div>  
      </div>  
    </div>
  );
}

export default Contact;


