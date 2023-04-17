import { Route, HashRouter as Router } from 'react-router-dom'
import { HomePage } from "./pages/HomePage";
import { ContactIndex } from './pages/ContactIndex'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { AppHeader } from './components/AppHeader';
import { Charts } from './components/Charts';
import { ContactDetails } from './pages/ContactDetailsPage';
import {ContactEdit} from './pages/ContactEdit.jsx'
import { Signup } from './pages/Signup';

function App() {
  return (
    <Router>
      <section className="App">
        <AppHeader />

        <main className="main-container">
          {/* MORE SPECIFIC SHOW FIRST */}
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/contacts" component={ContactIndex} />
            <Route path="/signup" component={Signup} />
            <Route path="/charts" component={Charts} />
            <Route path="/" component={HomePage} />
          </Switch>

        </main>

        <footer>
          <section className="container">
            misterBit 2022 &copy;
          </section>
        </footer>
      </section>
    </Router>
  );
}

export default App;
