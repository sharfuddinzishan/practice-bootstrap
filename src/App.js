import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Shared/Home/Home';
import AccordionBs from './Pages/AccordionBs/AccordionBs';
import Alert from './Pages/Alert/Alert';
import Badge from './Pages/Badge/Badge';
import Button from './Pages/Button/Button';
import Dropdown from './Pages/Dropdown/Dropdown';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/accordion' element={<AccordionBs></AccordionBs>}></Route>
      <Route path='/alert' element={<Alert></Alert>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/badge' element={<Badge></Badge>}></Route>
      <Route path='/button' element={<Button></Button>}></Route>
      <Route path='/dropdown' element={<Dropdown></Dropdown>}></Route>
    </Routes>
    </>
  );
}

export default App;
