
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import './Sidebar.css'
import './Header.css'
import Feed from './Feed';
import './Feed.css'
import Widgets from './Widgets'


function App() {
  const user="venny";
  return (
    <div className="app">
    {!user ? (
      <h1>Login</h1>
    ):(
      <>
      {/*Header */}
  <Header></Header>


  <div className="app__body">
  {/*Sidebar*/}
  <Sidebar></Sidebar>

  {/*Feed*/}
  <Feed></Feed>
  {/*Widgets */}
  <Widgets></Widgets>

  </div>

  
    
      </>
    )
    
  }
  </div>
  );
 
}

export default App;
