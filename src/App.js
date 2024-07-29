import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import MoviePage from './pages/Movies/MoviePage';
import Homepage from './pages/Homepage/Homepage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';




// 홈페이지 /
// 영화 전체보여주는 페이지(서치) /movies?q=마블
// 영화 디테일 페이지 /movies/:id
// 추천영화 /movies/:id/recommandation
// 리뷰 /movies/:id/review
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}> 
        <Route index element={<Homepage/>}/> 
        <Route path="movies">
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
      </Route>
      {/* <Route path="/admin" element={<AdminLayout/>}/> */}
      <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  );
}

export default App;
