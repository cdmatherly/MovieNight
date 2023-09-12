import './App.css';
import Main from './views/Main'
import Home from './views/Home';
import Popular from './views/Popular';
import TopRated from './views/TopRated';
import MyLists from './views/MyLists';
import NewList from './views/NewList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Main/>} path='/'>
        <Route element={<Home/>} path='/'/>
        <Route element={<Popular/>} path='/popular'/>
        <Route element={<TopRated/>} path='/toprated'/>
        <Route element={<MyLists/>} path=':user_id/lists'/>
        <Route element={<NewList/>} path='/newlist'/>
      </Route>
    </Routes>
  );
}

export default App;
