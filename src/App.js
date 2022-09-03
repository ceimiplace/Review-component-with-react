import { useState } from 'react'

function Header(){
  return <h1>Give us feedback!</h1>
}
function Button(props){
  return <button onClick={props.onClick}>{props.text}</button>
}
function Statistics(props){ console.log(props)
  return <> <p>Statistics</p>
  <div>good {props.good}</div>
  <div>bad {props.bad}</div>
  <div>neutral {props.neutral}</div>

  </>
}
function TotalReview({data,text,fallback}){
  if(data === 0){
    return <div>{fallback}</div>
  }
  return <div>{text}{data}</div>
}
function Average({data,text,fallback}){console.log(data)
if(Number.isNaN(data)){
  return <div>{fallback}</div>
}
  return <div>{text}{`${(data*100).toFixed(2)}%`}</div>
}
const App = (props) => {
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);
 

  return <> <Header/>
  <Button onClick={()=>setGood(good+1)} text="good"/>
  <Button onClick={()=>setNeutral(neutral+1)} text="medium"/>
  <Button onClick={()=>setBad(bad+1)} text="bad"/>
  <Statistics good={good} bad={bad} neutral={neutral}/>
  <TotalReview text="The number of total reviews is " data={good+bad+neutral} fallback="No reviews at the moment"/>
  <Average data={(good - bad)/(good+bad+neutral)} text={"The average score "} fallback="No average score can be given right now" />
  
  
  </>
 
}

export default App


