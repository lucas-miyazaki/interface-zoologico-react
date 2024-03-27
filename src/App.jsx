import './App.css'
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import { BrowserRouter as Roteador, Routes, Route} from 'react-router-dom';
import Fotos from './pages/Fotos/Fotos';

function App() {

  return (
    <>
      <Roteador>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/animais' Component={Animais} />
          <Route path='/Fotos' Component={Fotos} />
        </Routes>
      </Roteador>
    </>
  )
}

export default App
