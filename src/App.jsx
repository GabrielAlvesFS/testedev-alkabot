import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/posts" />
      <Route exact path="/users" />
    </Routes>
  </>
);

export default App;
