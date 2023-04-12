import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { TaskForm } from './components/TaskForm'
import { Navigation } from './components/Navigation'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='task/create' element={<TaskForm />} />
          <Route path='task/:id' element={<TaskForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
