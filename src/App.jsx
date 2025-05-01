import './app.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SlideButton from './Components/SlideButton';
import Header from './Components/header';
import Error404 from './Components/Error404';
import SlideShow from './Components/Slideshow';
import PrevSlidebutton from './Components/PrevSlidebutton';
import Footer from './Components/Footer';
import Memberdescripition from './Components/Memberdescripition';
import { useEffect } from 'react';

function Content() {
  const index = useSelector((state) => state.slide.currentIndex);
  const location = useLocation();

  const hidebuttons =
    location.pathname === '/membro' || location.pathname === '/*';

  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <>
      <Header />
      {!hidebuttons && index > 0 && <PrevSlidebutton />}
      <Routes>
        <Route path="/" element={<SlideShow />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
        <Route path="/membro" element={<Memberdescripition />}></Route>
      </Routes>
      {!hidebuttons && index < 3 && <SlideButton />}
      {!hidebuttons && index >= 3 && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

export default App;
