import styles from './PageTitle.module.scss';

const PageTitle = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Domki na Komandorskiej w Dziwnowie</h1>
      <h2 className={styles.pageSubtitle}>Wynajem domków letniskowych</h2>
    </div>  
  );
}

export default PageTitle;