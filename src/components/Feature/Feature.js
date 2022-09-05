import styles from './Feature.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feature = () => {

  return (
    <div className="container">
      <h1 className="title">Co nas wyróżnia?</h1>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-2">
            <div className={styles.cardFeature}>
              <div className={styles.cardBody}>
                <FontAwesomeIcon icon="fa-solid fa-umbrella-beach" className={styles.icon} />
                <h4 className="descriptionDark">Tylko 5 minut do morza</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className={styles.cardFeature}>
              <div className={styles.cardBody}>
                <FontAwesomeIcon icon="fa-solid fa-video" className={styles.icon} />
                <h4 className="descriptionDark">Obiekt monitorowany</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className={styles.cardFeature}>
              <div className={styles.cardBody}>
                <FontAwesomeIcon icon="fa-solid fa-bed" className={styles.icon} />
                <h4 className="descriptionDark">Osobne sypialnie</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className={styles.cardFeature}>
              <div className={styles.cardBody}>
                <FontAwesomeIcon icon="fa-solid fa-car" className={styles.icon} />
                <h4 className="descriptionDark">Bezpłatne miejsca parkingowe</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <div className={styles.cardFeature}>
              <div className={styles.cardBody}>
                <FontAwesomeIcon icon="fa-solid fa-dog" className={styles.icon} />
                <h4 className="descriptionDark">Przyjmujemy ze zwierzętami</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Feature;