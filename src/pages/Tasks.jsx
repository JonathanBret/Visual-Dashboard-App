import { useQuery } from "@tanstack/react-query"
import Card from "../components/Card.jsx"


const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks")
    if (!res.ok) throw new Error("Erreur lors du fetch")
    return res.json()
  }
  
export default function Tasks() {
  const { data: tasks, isLoading, isError } = useQuery(["tasks"], fetchTasks)

  if (isLoading) return <div>Chargement...</div>
  if (isError) return <div>Erreur lors du chargement</div>

  return (
    <div className="p-6 space-y-4">
      {tasks.map(task => (
        <Card key={task.id} title={task.title} content={task.content} />
      ))}
    </div>
  )
}
