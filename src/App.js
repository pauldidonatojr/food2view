import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, ErrorPage } from './pages/Index'
import { Navbar, Sidebar, Geolocation, Footer } from './components'

function App() {
 return (
  <Router>
   <Navbar />
   {/* <Geolocation /> */}
   <Sidebar />
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>
    <Route path="/about">
     <About />
    </Route>

    <Route path="*">
     <ErrorPage />
    </Route>
   </Switch>
   {/* <Footer /> */}
  </Router>
 )
}

export default App
