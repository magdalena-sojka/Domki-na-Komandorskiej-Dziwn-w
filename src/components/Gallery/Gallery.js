import styles from './Gallery.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Gallery = () => {

  return (
    <div className="container">
      <h1 className="title">Galeria</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/76MC62Ld/20220703-164344.jpg" style={{ height: '16rem', width: '20rem' }} className="m-3"/>
          <Card.Body>
            <p className="descriptionTitle">Domek murowany</p>
            <Button href="/gallery/brickhouse" variant="secondary"><p className={styles.buttonText}>Zobacz galegię</p></Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/VsrSSMCR/1.jpg" style={{ height: '16rem', width: '20rem' }} className="m-3"/>
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