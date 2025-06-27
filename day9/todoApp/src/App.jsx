import React from 'react'
import InputForm from './components/InputForm';
import AppCreate from './components/App-Create-Delete-in-arr-obj'
import Edit from './components/Edit';


const App = () => {
  return (
    <div>
      <InputForm/>
      <h1>Hello</h1>
      {/* <AppCreate/> */}
      <Edit/>
    </div>
  )
}

export default App;