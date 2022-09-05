import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h6 className={styles.textFooter}>Copyright © Domki na Komandorskiej 2022</h6>
      </div>
    </div>
  );
}

export default Footer;