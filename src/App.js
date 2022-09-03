import { useState } from 'react'
import Header from "./Header.js"
import Button from "./Button.js"
import Statistics from "./Statistics.js"
import TotalReview from "./TotalReview.js"
import Average from "./Average.js"
import Positive from "./Positive"
import Content from "./Content.js"
const App = (props) => {
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);
  return <> <Header/>

  <Button onClick={()=>setGood(good+1)} text="good"/>
  <Button onClick={()=>setNeutral(neutral+1)} text="medium"/>
  <Button onClick={()=>setBad(bad+1)} text="bad"/>
  <hr/> 
  <Content condition1={good} condition2={bad} condition3={neutral}>
  <Statistics good={good} bad={bad} neutral={neutral}/>
  
  <TotalReview text="The number of total reviews is " data={good+bad+neutral} fallback="No reviews at the moment"/>
  <Average data={(good - bad)/(good+bad+neutral)} text={"The average score "} fallback="No average score can be given right now" />
  <Positive text={"The nummber of possitive review is "} data={((good*100)/(good+bad+neutral))} fallback={"Cannot show possitive reviews at the moment"}/>
  </Content>
  </>
 
}

export default App


