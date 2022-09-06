import styles from './Gallery.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Gallery = () => {

  return (
    <div className="container">
      <h1 className="title">Galeria</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <Card className="col-12 col-lg-3">
          <Card.Img variant="top" src="https://i.postimg.cc/yYDffbCV/20220703-164344.jpg" className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Domek murowany</p>
            <Button href="/gallery/brickhouse" variant="secondary"><p className={styles.buttonText}>Zobacz galegię</p></Button>
          </Card.Body>
        </Card>
        <Card className="col-12 col-lg-3">
          <Card.Img variant="top" src="https://i.postimg.cc/VL0R90Xv/1.jpg" className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Domki drewniane</p>
            <Button href="/gallery/woodhouse" variant="secondary"><p className={styles.buttonText}>Zobacz galerię</p></Button>
          </Card.Body>
        </Card>
      </div>  
    </div>
  );
}

export default Gallery;