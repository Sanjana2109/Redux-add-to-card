import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import { Provider } from 'react-redux';
import { cartStore } from './components/redux/store';

function App() {
  return (
    <>
    <Provider store={cartStore}>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cart/:id' element={<CardDetails/>}/>
    </Routes>
    </Provider>
    </>
  );
}

export default App;
