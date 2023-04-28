import "./App.css";
import ComponentD from "./components/UseContextEx";
import React from "react";

export const UserContext = React.createContext();
export const AddressContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Bivek Karki"}>
        <AddressContext.Provider value={"Dilibazar, Kathamndu"}>
          <ComponentD />
        </AddressContext.Provider>
      </UserContext.Provider>

      {/* <HookDataFetch /> */}
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <HookCounterFive/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo/> */}
      {/* <Timer/> */}
      {/* <Counter /> */}
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
