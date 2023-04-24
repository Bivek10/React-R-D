import "./App.css";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import { Profiledata } from "./module/profile";
import Welcome  from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Avatar user={Profiledata.user} />
      <Greet name={Profiledata.user.name} />
      <Welcome />
    </div>
  );
}

export default App;
