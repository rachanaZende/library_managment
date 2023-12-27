
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import List from './pages/List';
import Editlist from './pages/Editlist';
import Delete from './pages/Delete';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='/list' element={<List/>}></Route>
    <Route path='/bookList/update/:bookId'element={<Editlist/>}></Route>
    <Route path='/bookList/delete/:bookId'element={<Delete/>}></Route>
   </Routes>
 
   </>
  );
}

export default App;
