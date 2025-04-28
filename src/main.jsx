import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import './style.css'
import Layout from './Layout'
import Contact from './component/Contact'
import AdminLogin from './component/Admin/AdminLogin'
import AdminLayout from './component/AdminLayout'
import AdminContact from './component/Admin/AdminContact'
import AddCategory from './component/Admin/AddCategory'
import DeleteCategory from './component/Admin/DeleteCategory'
import DeleteContact from './component/Admin/DeleteContact'
import EditCategory from './component/Admin/EditCategory'
import AddProduct from './component/Admin/AddProduct'
import DeleteProduct from './component/Admin/DeleteProduct'
import EditProduct from './component/Admin/EditProduct'
import AboutUs from './component/AboutUs'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import Cart from './component/Cart'
import Checkout from './component/Checkout'
import Register from './component/Register'
import Login from './component/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signin' element={<Login/>}/>

        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/our-products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products-details/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout-here' element={<Checkout />} />


        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin-login/dashboard' element={<AdminLayout/>}/>
        <Route path='/admin-login/admin-contact' element={<AdminContact/>}/>
        <Route path='/admin-login/delete-contact/:id' element={<DeleteContact/>}/>
        <Route path='/admin-login/add-category' element={<AddCategory/>}/>
        <Route path='/admin-login/delete-category/:id' element={<DeleteCategory/>}/>
        <Route path='/admin-login/edit-category/:id' element={<EditCategory/>}/>
        <Route path='/admin-login/add-product' element={<AddProduct/>}/>
        <Route path='/admin-login/delete-product/:id' element={<DeleteProduct/>}/>
        <Route path='/admin-login/edit-product/:id' element={<EditProduct/>}/>

        </Routes>
      </Router>
  </StrictMode>,
)
