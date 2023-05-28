import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navigation, ListForm } from './components/index'
import { Home, Importants, ListDetails, TasksFoundList } from './pages/index'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/list/inbox' replace />} />
        <Route path='/list' element={<Navigation />}>
          <Route path='inbox' element={<Home />} />
          <Route path='important' element={<Importants />} />
          <Route path='create' element={<ListForm />} />
          <Route path=':id' element={<ListDetails />} />
          {/* <Route path='task/create' element={<TaskForm />} /> */}
        </Route>
        <Route path='/search' element={<TasksFoundList />}>
          <Route path=':query' element={<TasksFoundList />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
