import styles from './BrickHouse.module.scss';

const BrickHouse = () => {

  return (
    <div class="container">
      <h1 class="title">Galeria</h1>
      <ul class="d-flex flex-wrap row px-0">
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/43N0wzFB/20220703-161933.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/Pq9MZYGL/20220703-162724.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/QC09gZB6/20220703-162435.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/QCb56WzJ/20220703-162926.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/CKGKHpXj/20220703-163518.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/CLRLrq9M/20220703-163803.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/9FwCYjqr/20220703-164017.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/bNRcTNwY/20220703-164337.jpg" alt="" />
        </li>
        <li className="col-lg-4 col-12 py-3 py-3">
          <img className={styles.img} src="https://i.postimg.cc/GpKCmL6S/image000000-12.jpg" alt="" />
        </li>
      </ul> 
    </div>
  );
}

export default BrickHouse;