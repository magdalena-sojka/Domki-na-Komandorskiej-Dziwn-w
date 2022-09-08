//import styles from './Attractions.module.scss';
import Card from 'react-bootstrap/Card';

const Attractions = () => {

  return (
    <div className="container">
      <h1 className="title">Lokalne atrakcje</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/05BR9Xkx/20210608-183338.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Promenada wschodnia</p>
            <p className="descriptionDark">1,5 km</p>
          </Card.Body>
        </Card> 
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/WbC3tW8Q/20220721-100843.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Most zwodzony</p>
            <p className="descriptionDark">600 m</p>
          </Card.Body>
        </Card>   
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/Hs0B0c7W/3.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Statki wycieczkowe</p>
            <p className="descriptionDark">2 km</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/cLSg1kXX/2.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Aleja Gwiazd Sportu</p>
            <p className="descriptionDark">1 km</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/fyX62Z6K/20220807-124656.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Jezioro Martwa Dziwna</p>
            <p className="descriptionDark">400 m</p>
          </Card.Body>
        </Card>  
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/cJrkk03n/20220807-125142.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Falochron, ujście rzeki Dziwny</p>
            <p className="descriptionDark">500 m</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/3rjH5L0K/1.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Place zabaw w Dziwnowie</p>
            <p className="descriptionDark">500m</p>
          </Card.Body>
        </Card>  
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/xCKBQCCs/IMG-20220820-WA0008.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Motylaria</p>
            <p className="descriptionDark">500 m</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/76g3KZxX/20220807-130829.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Mini golf w Strefie Pirata</p>
            <p className="descriptionDark">500 m</p>
          </Card.Body>
        </Card>
      </div>
      <h1 className="title">Warto zobaczyć również</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/sX42j0YB/20220902-121828.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Katedra w Kamieniu Pomorskim</p>
            <p className="descriptionDark">18 km</p>
          </Card.Body>
        </Card> 
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/q7qy1vD7/20220902-121528.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Ratusz w Kamieniu Pomorskim</p>
            <p className="descriptionDark">18 km</p>
          </Card.Body>
        </Card> 
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/q7d0NxM2/20220902-122704.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Baszta w Kamieniu Pomorskim</p>
            <p className="descriptionDark">18 km</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/PxSkFGbM/20220902-121214.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Marina w Kamieniu Pomorskim</p>
            <p className="descriptionDark">18 km</p>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/bJTTzwKr/20220729-110810.jpg" style={{ height: '20rem' }} className="px-2 py-2"/>
          <Card.Body>
            <p className="descriptionTitle">Nadmorski Park Dinozaurów we Wrzosowie</p>
            <p className="descriptionDark">15 km</p>
          </Card.Body>
        </Card> 
      </div>
    </div>
  );
}

export default Attractions;