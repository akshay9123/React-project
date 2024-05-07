import React, { useState } from 'react'

const App = () => {
  const [weight,setWeight] = useState(40);
  const [height,setHeight] = useState(100);

  function weightHandler(event){
    setWeight(event.target.value)
  }

  function heightHandler(event){
    setHeight(event.target.value)
  }

  const bmi = ()=>{
  
    return(
      (weight/((height*height)/10000)).toFixed(1)
    )
  }
  return (
    <>
      <main>
        <div className='heading'>
          <h1>Project 1 : BMI CALCULATOR</h1>
        </div>
        <p>Weight : {weight} kg </p>
        <input type="range" step={1} min={40} max={100} onChange={weightHandler}/>
        <p>Height : {height} cm</p>
        <input type="range" step={1} min={100} max={200} onChange={heightHandler}/>
        <p>Your BMI is</p>
        {bmi()}
      </main>
    </>
  )
}

export default App