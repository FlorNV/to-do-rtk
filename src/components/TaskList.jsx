import styled from 'styled-components'
import { Task } from './Task'

const Tasks = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
`

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 1.5rem 2rem 2rem;
  z-index: 1;
`

// export const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.taskList)
//   const filter = useSelector((state) => state.tasks.filterStatus)
//   const [list, setList] = useState([])

//   useEffect(() => {
//     if (filter === 'completed') {
//       return setList(tasks.filter(task => task.completed))
//     }

//     if (filter === 'active') {
//       return setList(tasks.filter(task => !task.completed))
//     }

//     setList(tasks)
//   }, [filter, tasks])

//   return (
//     <Tasks>
//       <TaskContainer>
//         {list.map((task) => (
//           <Task key={task.id} task={task} />
//         ))}
//       </TaskContainer>
//     </Tasks>
//   )
// }

export const TaskList = ({ list }) => {
  return (
    <Tasks>
      <TaskContainer>
        {list.id
          ? list.taskList?.map((task) => (
            <Task key={task.id} task={task} listId={list.id} />
          ))
          : list?.map((task) => (
            <Task key={task.id} task={task} listId={task.listId} showList />
          ))}
      </TaskContainer>
    </Tasks>
  )
}
