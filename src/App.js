import Topbar from './components/navbars/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home';
import "./app.css";


function App() {
  return (
    <div className="App">
     <Topbar />
     <div className="container">
      <Sidebar />
      <Home />
     </div>
    </div>
  );
}


export default App;
