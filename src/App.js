import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Shared/Home/Home';
import AccordionBs from './Pages/AccordionBs/AccordionBs';
import Alert from './Pages/Alert/Alert';
import Badge from './Pages/Badge/Badge';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/accordion' element={<AccordionBs></AccordionBs>}></Route>
      <Route path='/alert' element={<Alert></Alert>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/badge' element={<Badge></Badge>}></Route>
    </Routes>
    </>
  );
}

export default App;
