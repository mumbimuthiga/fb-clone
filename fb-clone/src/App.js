
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import './Sidebar.css'
import './Header.css'
import Feed from './Feed';
import './Feed.css'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider';


function App() {
  const [{user} ,dispatch]=useStateValue();
  return (
    <div className="app">
    {!user ? (
      <Login></Login>
    ):(
    
      <>
<Header></Header>
<div className="app__body">
 <Sidebar></Sidebar>
 <Feed></Feed>
<Widgets></Widgets>

  </div>

  
    
      </>
    )
    
  }
  </div>
  );
 
}

export default App;
