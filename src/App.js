import "./App.css";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";
import { Profiledata } from "./module/profile";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import { BookData } from "./module/booklist";
import { people } from "./module/person";
import RenderPersonList from "./components/PersonList";
import SubscribeComp from "./components/Subscribe";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <SubscribeComp/> */}
      {/* <Avatar user={Profiledata.user} />
      <Greet name={Profiledata.user.name} />
      <Welcome /> */}
      {/* <BookList bookData= {BookData} /> */}
      {/* <RenderPersonList data={people} /> */}
    </div>
  );
}

export default App;
