import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Memes } from './components/pages/Memes';

function App() {
  return (
    <section className='grid-container'>
      <Router>
        <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/memes" exact={true}>
          <Memes />
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
      </Switch>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
