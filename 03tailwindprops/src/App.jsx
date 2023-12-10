import "./App.css";
import Card from "./components/Card"
function App() {

  let array=[1,2,3];
  let obj={username:"hello",
age:1074}
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card Username="David"  someObj={array}/>
      <Card someobj2={obj}/>
    </>
  );
}


export default App