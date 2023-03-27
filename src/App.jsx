import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Posts } from './components/Posts';
import { Users } from './components/Users';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Posts />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/users" element={<Users />} />
    </Routes>
  </>
);

export default App;
