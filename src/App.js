import Header from './components/Header/Header.js';
import PageTitle from './components/PageTitle/PageTitle.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Gallery from './components/Gallery/Gallery.js';
import WoodHouse from './components/Gallery/WoodHouse/WoodHouse.js';
import BrickHouse from './components/Gallery/BrickHouse/BrickHouse.js';
import PriceList from './components/PriceList/PriceList.js';
import Localization from './components/Localization/Localization.js';
import Statute from './components/Statute/Statute.js';
import Attractions from './components/Attractions/Attractions.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/NotFound/NotFound.js';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faFacebook, faUmbrellaBeach, faVideo, faBed, faCar, faDog, faBars)


const App = () => {

  return (
    <div>
      <Header />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/woodhouse" element={<WoodHouse />} />
        <Route path="/gallery/brickhouse" element={<BrickHouse />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/localization" element={<Localization />} />
        <Route path="/statute" element={<Statute />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
      <Footer />
    </div>  
  );
};

export default App;