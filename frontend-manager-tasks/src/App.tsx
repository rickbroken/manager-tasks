import './App.css'
import MenuNavigation from './components/MenuNavigation'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Lexend:100,200,300,400,500,600,700,800,900', 'Droid Serif']
  }
});

function App() {

  return (
    <main className='w-full bg-gray-50'>
      <MenuNavigation />
    </main>
  )
}

export default App
