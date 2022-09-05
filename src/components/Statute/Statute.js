//import styles from './Statute.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';

const Statute = () => {

  return (
    <div className="container">
      <h1 className="title">Regulamin obiektu</h1>
      <ListGroup variant="flush">


        <ListGroup.Item><p className="descriptionDark">Z domku mogą korzystać tylko osoby zgłoszone przy rezerwacji (maksymalnie 6 osób).</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">W przypadku stwierdzenia większej liczby osób zamieszkujących w domku Właściciel może zerwać umowę z klientem bez konieczności zwrotu opłaty.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Przekazanie i odbiór kluczy następuje zawsze w obecności Właściciela lub osoby przez niego upoważnionej.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Ze względów bezpieczeństwa w obiekcie obowiązuje bezwzględny zakaz palenia i używania otwartego ognia.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Osoby zamieszkujące w domku ponoszą odpowiedzialność finansową za szkody, zniszczenia lub braki w wyposażeniu domku.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">W przypadku wystąpienia zniszczeń i usterek proszę bezzwłocznie powiadomić Właściciela.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Właściciel nie ponosi odpowiedzialności za przedmioty i pieniądze pozostawione w domku.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Właściciel nie ponosi odpowiedzialności za ewentualne przerwy ze strony dostawców wody czy prądu.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">W sytuacji skrócenia czasu pobytu, niezależnej od Właściciela, płatność za niewykorzystany czas nie jest zwracana.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Obowiązuje zakaz wnoszenia materiałów wybuchowych i łatwopalnych na teren obiektu.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Przy każdym opuszczaniu domku należy pamiętać o wyłączeniu urządzeń elektrycznych oraz zamknięciu drzwi i okien.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Proszę  o  rozpalanie grilla z dala od domku, poza jego zadaszoną częścią. Na terenie wokół domków obowiązuje zakaz palenia ogniska. </p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Goście proszeni są o segregację śmieci w przeznaczonych do tego celu pojemnikach znajdujących się na terenie obiektu.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Goście są zobowiązani do utrzymywania i zwrotu domku w stanie pierwotnym z dnia przyjazdu. </p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Za zgubienie klucza do domku naliczamy opłatę 50 zł za 1 sztukę.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Cisza nocna obowiązuje od godziny 23.00 do 6.00 rano.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">W sytuacji rażącego naruszania ciszy nocnej/interwencji policji możliwe jest wypowiedzenie umowy przez Właściciela bez zwrotu pieniędzy.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Właściciel obiektu nie ponosi kosztów interwencji policji.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Właściciel może wypowiedzieć umowę ze skutkiem natychmiastowym bez zwrotu pieniędzy w przypadku nieprzestrzegania regulaminu.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">W przypadku pobytu ze zwierzętami domowymi należy powiadomić Właściciela obiektu.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Zwierzęcia domowe muszą pozostawać pod opieką swoich Właścicieli.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Potrzeby fizjologiczne zwierzę powinno załatwiać poza posesją.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Właściciel zobowiązany jest do sprzątania po swoim zwierzęciu wewnątrz domku i na terenie posesji.</p></ListGroup.Item>
        <ListGroup.Item><p className="descriptionDark">Ewentualne szkody powstałe z udziałem zwierzęcia pokrywa Właściciel zwierzęcia.</p></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Statute;