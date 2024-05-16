
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Quiz } from './components/Quiz'
import { Routes } from 'react-router-dom'
import { History } from './components/History'
import { useState } from 'react'
import { useEffect } from 'react'
import questions from './data/question.json'

function App() {

  const [question, setQuestion] = useState([]);

  useEffect(()=>{
    setQuestion(questions)
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path='quiz' element={<Quiz questions={question} />} />
          <Route path='history' element={<History questions={question}/>}/>
          <Route index element={<Home/>} />
        </Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
