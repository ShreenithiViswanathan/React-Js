import './App.css';

function App() {
   let name = "Mohammed joseph muniyandi";
   let age = 18;
   let setStatus = false;
   let userDefault = undefined;
   let responseValue = null;
   let oldAge=age;
   age = 25;
  const sendAlert =()=>{
    alert("Message from javascript Alert");
    console.log("Message for the developer");
  }
  const print =()=>{
    alert("Check the console output")
    console.log(name,age,setStatus,userDefault,responseValue,oldAge);
  }

  return (
    <>
      <div>
        <h1>Let us see the output of javascript</h1>
        <button  onClick={sendAlert}>click me </button>
      </div>




      <div>


        <button  onClick={print}>click me </button>

      </div>


    </>
  );
}

export default App;
