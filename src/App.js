import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RoutesApp from './routes/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
