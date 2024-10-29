import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

export default function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    );
}