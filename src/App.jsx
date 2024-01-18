import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Body />
      </div>
    </Provider>
  )
}

export default App;