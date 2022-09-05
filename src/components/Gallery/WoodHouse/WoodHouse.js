import styles from './WoodHouse.module.scss';

const WoodHouse = () => {

  return (
    <div className="container">
      <h1 className="title">Galeria</h1>
      <ul className="d-flex flex-wrap row px-0">
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/W3tvHGvf/0.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/VsrSSMCR/1.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/9Qpz3Y6W/2.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/28KN1HPc/3.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/wM4Zsvby/4.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/h49WckRc/5.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/4x2jWZVb/6.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/hPcFj2Kx/7.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/SNrBzcKP/8.jpg" alt="" />
        </li>
      </ul>  
    </div>
  );
}

export default WoodHouse;