import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cart' element={<Cards/>}/>
    </Routes>
    </>
  );
}

export default App;
