import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import MenuNavigation from './components/MenuNavigation'
import WebFont from 'webfontloader'
import Home from './pages/Home';
import Emails from './pages/Emails';
import Config from './pages/Config';

WebFont.load({
  google: {
    families: ['Lexend:100,200,300,400,500,600,700,800,900', 'Droid Serif']
  }
});

function App() {
  const location = useLocation();

  return (
    <main className='w-full bg-gray-100 flex gap-1 z-10'>
      {location.pathname !== '/login' &&
        <>
          <MenuNavigation />
        </>
      }
      <section className='w-10/12 z-20 px-10 py-5'>
        <Routes>
          <Route path='/login' element={
            //<Login />
            <></>
          } />
          <Route path='/home' element={
            <Home />
          } />
          <Route path='/emails' element={
            <Emails />
          } />
          <Route path='/config' element={
            <Config />
          } />
          <Route path='*' element={
            <Home />
          } />
        </Routes>
      </section>
    </main>
  )
}

export default App
