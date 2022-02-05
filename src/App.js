import ItemListContainer from './components/ItemListContainer.jsx'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
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
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
