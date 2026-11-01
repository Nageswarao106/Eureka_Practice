import Navbar from './Components/navbar/Navbar';
import Categories from './Components/categories/Categories.jsx';
import Carousel from './Components/carousel/Carousel.jsx';
import Body from './Components/body/Body.jsx';
import Footer from './Components/footer/Footer.jsx';

function App() {

  return <div>
    {/* <h2> This is my 1st application</h2> */}
     <Navbar />
    <Categories />
    <Carousel />
    <Body />
    <Footer />
  </div>
}

export default App;
