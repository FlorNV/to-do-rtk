import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigation, TaskForm, ListForm } from './components/index'
import { Home, Importants, ListDetails } from './pages/index'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='task/create' element={<TaskForm />} />
          {/* <Route path='task/:id' element={<TaskForm />} /> */}
          <Route path='task/important' element={<Importants />} />
          <Route path='list/create' element={<ListForm />} />
          <Route path='list/:id' element={<ListDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
