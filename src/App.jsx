import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselEffect from "./components/Carousel/Carousel";
import Catagory from './components/Catagory/Catagory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <CarouselEffect/>
    <Catagory/>
    </>
  )
}

export default App
