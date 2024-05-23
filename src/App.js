import { useEffect, useState } from "react"

function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(function(){
    getAdvice()
  }, [])

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}


function Message (props){
  return (
    <p>You have read <b>{props.count}</b> Advice</p>
  )
}

export default App
