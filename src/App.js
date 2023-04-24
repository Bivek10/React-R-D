import "./App.css";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import { Profiledata } from "./module/profile";

function App() {
  return (
    <div className="App">
      <Greet name={Profiledata.user.name} />
      <Avatar user={Profiledata.user} />
    </div>
  );
}

export default App;
