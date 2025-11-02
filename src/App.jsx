import './App.css'

import About from "./components/about/About";
import AdditionalDetails from './components/addl-details/AdditionalDetails';
import Home from './components/home/Home';
import Product from './components/product/Product';
import { ContextProvider } from './Context';
// import ScreenWrapper from "./components/reusables/screen-wrapper/ScreenWrapper";

export default function App() {

  return(
    <> 
    <ContextProvider>
      <Home />
      <About />
      <AdditionalDetails />
      <Product />
    </ContextProvider>
    </>
  )
}