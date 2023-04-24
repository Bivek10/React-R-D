import "./App.css";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import { Profiledata } from "./module/profile";

function App() {
  return (
    <div className="App">
      <Avatar user={Profiledata.user} />
      <Greet name={Profiledata.user.name} />
    </div>
  );
}

export default App;
