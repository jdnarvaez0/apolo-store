import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Cart from './components/pages/Cart'
import About from './components/pages/About'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route path='/item/:itemId'>
            <ItemDetailContainer />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
