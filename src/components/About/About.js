//import styles from './About.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const About = () => {

  return (
    <div className="container">
      <h1 className="title">Opis obiektu</h1>
      <div className="my-4 d-flex flex-row align-items-center justify-content-center flex-wrap">
        <div className="col align-items-center">
          <ListGroup variant="flush">
            <ListGroup.Item><p className="descriptionDark">W naszej ofercie posiadamy 3 całoroczne domki letniskowe.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Jeden domek murowany z orzewaniem gazowym i dwa drewniane z ogrzewaniem elektrycznym.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Domki zostały oddane do użytkowania w 2020 roku i w 2022 roku.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">W każdym z domków jest możliwość zakwaterowania maksymalnie 6 osób.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Każdy z domków posiada 2 osobne sypialnie na I piętrze.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Jedna z sypialni posiada łóżko małżeńskie, a druga dwa pojedyńcze łóżka.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Dodatkowo każdy domek posiada dwa miejsca noclegowe w pokoju dziennym na parterze.</p></ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col d-flex justify-content-center">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/76MC62Ld/20220703-164344.jpg" style={{ height: '18rem' }} className="m-3"/>
          </Card>
        </div>
      </div>
      <div className="my-4 d-flex flex-row align-items-center justify-content-center flex-wrap">
        <div className="col d-flex justify-content-center">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/wM4Zsvby/4.jpg" style={{ height: '18rem' }} className="m-3"/>
          </Card>
        </div>
        <div className="col align-items-center">
          <ListGroup variant="flush">
            <ListGroup.Item><p className="descriptionDark">Każdy z domków posiada własny zadaszony taras z meblami ogrodowymi.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Kuchnie wyposażone są w lodówkę, kuchenkę mikrofalową, płytę kuchenną oraz czajnik.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Dodatkowo do dyspozycji gości jest komplet garnków, talerzy, kubków, sztućców czy innych niezbędnych narzędzi kuchennych.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Na miejscu można skorzystać także z suszarki do włosów, żelazka czy odkurzacza.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Po wcześneijszym zgłoszeniu istnieje możliwość skorzystania z łóżeczka turystycznego dla niemowląt.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">W domkach znajdują się leżaki i parawan do dyspozycji gości.</p></ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="my-4 d-flex flex-row align-items-center justify-content-center flex-wrap">
        <div className="col align-items-center">
          <ListGroup variant="flush">
            <ListGroup.Item><p className="descriptionDark">Domki posiadają dostęp do internetu.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Do każdego zarezerwowanego domku przysługuje bezpłatne miejsce parkingowe.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">W cenę pobytu wliczona jest pościel oraz ręczniki.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Zapraszamy gości wraz ze swoimi pupilami /psy, koty/.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">Na miejscu do dyspozycji dla dzieci plac zabaw.</p></ListGroup.Item>
            <ListGroup.Item><p className="descriptionDark">W okresie wakacyjnym domki wynajmujemy w terminach tygodniowych od soboty do soboty.</p></ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col d-flex justify-content-center">
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/0yBfBs8b/20220703-162437.jpg" style={{ height: '18rem' }} className="m-3"/>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;