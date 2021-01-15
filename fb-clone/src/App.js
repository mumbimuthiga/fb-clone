
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import './Sidebar.css'
import './Header.css'
import Feed from './Feed';
import './Feed.css'

function App() {
  return (
    <div className="app">
  {/*Header */}
  <Header></Header>


  <div className="app__body">
  {/*Sidebar*/}
  <Sidebar></Sidebar>

  {/*Feed*/}
  <Feed></Feed>
  {/*Widgets */}

  </div>

  
    </div>
  );
}

export default App;
