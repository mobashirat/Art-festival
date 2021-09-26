
import './App.css';
import Galleries from './components/Galleries/Galleries';
import Header from './components/Header/Header';
import background from './images/backgroundimg.jpg'


function App() {
  return (

    <div style={{ background: `url(${background})` }}>

      <Header></Header>
      <Galleries></Galleries>
    </div>
  );
}

export default App;
