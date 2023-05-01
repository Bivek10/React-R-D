import "./App.css";
import ComponentD from "./components/UseContextEx";
import UseReducerEx from "./components/UseReducerEx";
import ComponentE from "./components/componentE";
import ParentCompoent from "./components/useCallbacksEx/ParentCompoent"
import CounterMemo from "./components/useMemoHookEx/CounterMemo";
import FocusInput from './components/useRefHook/FocusInput'
import HookTimer from "./components/useRefHook/HookTimer";
import React from "react";


export const UserContext = React.createContext();
export const AddressContext = React.createContext();

function App() {
  return (
    <div className="App">
      <HookTimer/>
      {/* <UserContext.Provider value={"Bivek Karki"}>
        <AddressContext.Provider value={"Dilibazar, Kathamndu"}>
         <ComponentD/>
          <ComponentE/>
        </AddressContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterMemo/> */}
      {/* <FocusInput/> */}
     {/* <ParentCompoent/> */}
      {/* <UseReducerEx/> */}
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
