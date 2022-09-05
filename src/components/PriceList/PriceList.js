//import styles from './PriceList.module.scss';

const PriceList = () => {

  return (
    <div className="container">
      <h1 className="title">Cennik</h1>
      <table className="table">
        <tbody>
          <tr>
            <th scope="col" className="descriptionDark">Zakres dat</th>
            <th scope="col" className="descriptionDark">Cena za dobę</th>
          </tr>
          <tr>
            <td className="descriptionDark">do 30 czerwca</td>
            <td className="descriptionDark">450 zł</td>
          </tr>
          <tr>
            <td className="descriptionDark"> 1 lipca - 21 sierpnia </td>
            <td className="descriptionDark">550 zł</td>
          </tr>
          <tr>
            <td className="descriptionDark">Po 21 sierpnia </td>
            <td className="descriptionDark">450 zł</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="col" className="descriptionDark">Inne opłaty</th>
            <th scope="col" className="descriptionDark">Koszt</th>
          </tr>
          <tr>
            <td className="descriptionDark">Opłata klimatyczna</td>
            <td className="descriptionDark">2 zł</td>
          </tr>
          <tr>
            <td className="descriptionDark">Opłata za zwierzęta</td>
            <td className="descriptionDark">50 zł</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PriceList;