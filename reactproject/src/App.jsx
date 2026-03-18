import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Member from './pages/Member';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/About' element={<About />} ></Route>
            <Route path='/Member' element={<Member />} ></Route>
            <Route path='/Contact' element={<Contact />} ></Route>
            <Route path='/Media' element={<Media />} ></Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}
