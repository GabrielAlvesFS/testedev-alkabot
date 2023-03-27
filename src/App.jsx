import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Posts } from './components/Posts';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Posts />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/users" />
    </Routes>
  </>
);

export default App;
