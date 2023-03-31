import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
