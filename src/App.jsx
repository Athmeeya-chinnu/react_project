// import hero from './assets/hero.png'
// import Header from './components/Header'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <>
//     <Header title="the first header" />
//       <div>
//         <h1>HI WORLD</h1>
//         <p>This is basics for react learners</p>
//       </div>
//       <div>
//         <img src={hero} alt="Hero" />
//       </div>
//       <Footer  name="the first footer" />
//     </>
//   )
// }



import {useState} from 'react';

const App = ()=>{
  const [count,setCount] =useState(0)
  //setCount(6)

  const increasebtn=()=>{
    console.log("submitted")
      
      setCount(count+1)
  }
  return(
    <>
    <p>{count}</p>
    <button onClick={increasebtn //()=>{
      //console.log("submitted")
      //setCount(6)
      //setCount(count+1)
    //}

    }>button</button>
    </>
  )
}

export default App;