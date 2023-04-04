import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress'
function App() {
  return (
    <div className="main">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    

    </div>
  );
}

export default App;
