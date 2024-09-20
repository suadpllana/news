import News from "./Components/News"
import Nav from './Nav';
import { useState } from 'react';

function App() {

  const [category, setCategory] = useState("general")
  return (
    <>
      <Nav setCategory={setCategory}/>
      <News category={category}/>
    </>
  )
}

export default App
