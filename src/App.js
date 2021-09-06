import Topbar from './components/navbars/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import "./app.css"


function App() {
  return (
    <div className="App">
     <Topbar />
     <div className="container">
      <Sidebar />
     <div className="others">Unknown .......</div>
     </div>
    </div>
  );
}


export default App;
