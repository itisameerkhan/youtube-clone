import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import WatchPage from './components/WatchPage/WatchPage';

const App = () => {
  return (
    <Provider store={appStore}>
        <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path='/' element={<Body />}>
              <Route index element={<Main />} />
              <Route path='/watch' element={<WatchPage />} />
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
    </Provider>
  )
}

export default App;