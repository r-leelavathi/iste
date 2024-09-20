import './App.css';
import Date from './components/Dates/Date';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Links from './components/Links/Links';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import Committee from './components/Committee/Committee';
function App() {
  return (
    <div className="App">
          <Hero/>
          <About />
          <Programs/>
          <Plans/>
          <Registration/>
          <Links />
          <Committee/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
