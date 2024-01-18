import { useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx';
import Home from './pages/home.jsx';

function App() {
  useEffect(() => {
    document.title = 'Instagram Clone'; //sets title
  }, []);

  return (
      <div className='App'>
        <Header />
        <Home />
      </div>
  )
}

export default App
