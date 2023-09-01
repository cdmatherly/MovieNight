import './App.css';
import Main from './views/Main'
import Home from './views/Home';
import Popular from './views/Popular';
import TopRated from './views/TopRated';
import MyGroups from './views/MyGroups';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route element={<Main/>} path='/'>
        <Route element={<Home/>} path='/'/>
        <Route element={<Popular/>} path='/popular'/>
        <Route element={<TopRated/>} path='/toprated'/>
        <Route element={<MyGroups/>} path='/mygroups'/>
      </Route>
    </Routes>
  );
}

export default App;
