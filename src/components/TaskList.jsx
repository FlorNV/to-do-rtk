import styled from 'styled-components'
import { Task } from './Task'

const Tasks = styled.div`
  overflow-y: auto;
`

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 1rem 2rem 2rem;
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
  const { id, taskList } = list

  return (
    <Tasks>
      <TaskContainer>
        {taskList?.map((task) => (
          <Task key={task.id} task={task} listId={id} />
        ))}
      </TaskContainer>
    </Tasks>
  )
}
