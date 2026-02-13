import Card from "../components/Card.jsx"
import { useQuery } from "@tanstack/react-query"
import { Bar, Pie } from "react-chartjs-2"

const fetchTasks = async () => {
  const res = await fetch("http://localhost:3000/tasks")
  if (!res.ok) throw new Error("Erreur lors du fetch")
  return res.json()
}

export default function Dashboard() {
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  })

  if (isLoading) return <div className="p-6">Chargement...</div>
  if (isError) return <div className="p-6 text-red-500">Erreur</div>

  const doneCount = tasks.filter(task => task.state === "done").length
  const inProgressCount = tasks.filter(task => task.state === "inProgress").length
  const toDoCount = tasks.filter(task => task.state === "toDo").length

  const labels = ["To Do", "In Progress", "Done"]
  const values = [toDoCount, inProgressCount, doneCount]

  const dataPie = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#facc15", "#3b82f6", "#22c55e"],
      },
    ],
  }

  const dataBar = {
    labels,
    datasets: [
      {
        label: "Tasks by State",
        data: values,
        backgroundColor: ["#facc15", "#3b82f6", "#22c55e"],
      },
    ],
  }

  const optionsBar = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
    },
  }

  console.log(tasks)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">Vue d'ensemble de vos tâches</p>
      </div>

      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Tâches récentes</h2>
          <a 
            href="/tasks" 
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Voir tout →
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.slice(0, 5).map(task => (
            <Card
              key={task.id}
              title={task.title}
              content={task.description}
              status={task.state}
              priority={task.priority}
            />
          ))}
          {tasks.length > 5 && (
            <div className="p-6 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
              <a href="/tasks" className="text-center">
                <p className="text-gray-500 font-medium mb-1">
                  +{tasks.length - 5} tâches
                </p>
                <p className="text-sm text-gray-400">Cliquez pour voir tout</p>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Bar Chart</h2>
          <Bar data={dataBar} options={optionsBar} />
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Pie Chart</h2>
          <Pie data={dataPie} />
        </div>
      </div>
    </div>
  )
}