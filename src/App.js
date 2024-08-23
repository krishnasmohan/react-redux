import { Fragment } from 'react';
import './App.css';
import { Routes,Route} from  "react-router-dom"
import { Home } from './pages/Home';
import { Products } from './components/navlinks/Products';
import { Contact } from './components/navlinks/Contact';
import CategoryProduct from './components/navlinks/CategoryProduct';
import Cart from './components/navlinks/Cart';
import SingleProduct from './pages/SingleProduct';
import SignIn from './components/navlinks/SignIn';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category/:categoryName' element={<CategoryProduct />}/>
        <Route path='products' element={<Products />}/>
        <Route path='product/:productId' element={<SingleProduct/>}/>
        <Route path='contacts' element={<Contact />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='signIn' element={<SignIn />}/>
        <Route path='*' element={<div className='text-center text-danger'>Page not found</div>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
