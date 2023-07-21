import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navigation, Home, Importants, ListDetails, TasksFoundList } from './pages/index'
import { Modal } from './components/Modal'
import { useSelector } from 'react-redux'

function App () {
  const showModal = useSelector(state => state.modal.showModal)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/list/inbox' replace />} />
        <Route path='/list' element={<Navigation />}>
          <Route path='inbox' element={<Home />} />
          <Route path='important' element={<Importants />} />
          <Route path=':id' element={<ListDetails />} />
          <Route path='search' element={<TasksFoundList />}>
            <Route path=':query' el ement={<TasksFoundList />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      {showModal && <Modal />}
    </BrowserRouter>
  )
}

export default App
