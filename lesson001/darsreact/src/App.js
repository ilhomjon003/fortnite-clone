import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
        <Header>
          <div className="sidebar">
          <Sidebar/>
          </div>
        </Header>
        </div>
  );
}

export default App;
