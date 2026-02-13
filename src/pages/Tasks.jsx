import { useQuery } from "@tanstack/react-query"
import Card from "../components/Card.jsx"

const fetchTasks = async () => {
  const res = await fetch("http://localhost:3000/tasks")
  if (!res.ok) throw new Error("Erreur lors du fetch")
  return res.json()
}

export default function Tasks() {
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  })

  if (isLoading) return <div className="p-6">Chargement...</div>
  if (isError) return <div className="p-6 text-red-500">Erreur lors du chargement</div>

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tasks</h1>
        <p className="text-gray-600">Toutes vos tâches</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map(task => (
          <Card
            key={task.id}
            title={task.title}
            content={task.description}
            status={task.state}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  )
}