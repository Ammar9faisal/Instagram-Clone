import { useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import SideBar from './components/sidebar.jsx';
function App() {
  useEffect(() => {
    document.title = 'Instagram Clone'; //sets title
  }, []);

  return (
      <div className='App'>
        <Header />
        <SideBar />
        <Home />
      </div>
  )
}

export default App
