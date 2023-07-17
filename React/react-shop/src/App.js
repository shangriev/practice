import Card from './components/card';
import Drawer from './components/drawer';
import Header from './components/header';

function App() {
  return <div className="wrapper">
    <Drawer />
    <Header />
    <div className="content">

      <div className="search-block">
        <h1>Все кроссовки</h1>
          <div className="search-info">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..." />
          </div>
      </div>

      <div className="cards">

            <Card />

      </div>

    </div>
  </div>;
}

export default App;
