import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Navi from './Components/Navi';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Contact from './Components/contact';
import Blog from './Components/blog';
import About from './Components/about'

function App() {
  return (
    <div className="App">
      <Navi />
      <Nav />
      <Footer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>

      <table className="border border-separate">
        <tbody>
          <tr>
            <th className='border'>Column 1</th>
            <th className='border'>Column 2</th>
          </tr>
          <tr>
            <td className='border'>This item</td>
            <td className='border'> Another item</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
