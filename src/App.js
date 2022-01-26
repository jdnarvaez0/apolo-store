import ItemListContainer from './components/ItemListContainer.jsx'
import Navbar from './components/Navbar.jsx'
import ItemDetailContainer from './components/ItemDetailContainer'
// import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <ItemListContainer /> 
      </section>
      <section>
        <ItemDetailContainer /> 
      </section>
    </>
  )
}

export default App
