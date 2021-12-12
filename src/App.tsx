import 'materialize-css/dist/css/materialize.min.css';
import unded_1a from './data/warbands';
import { ArmyList } from './components/ArmyList';

import './App.css';

export const App = () => {
  return (
    <>
      <header className="grey darken-1 center-align">
        <h3>Mordheim builder</h3>
      </header>
      <div className="grey darken-1 container">
        <ArmyList warband={unded_1a} />
      </div>
      <footer className="grey darken-1 center-align">2021</footer>
    </>
  );
};
