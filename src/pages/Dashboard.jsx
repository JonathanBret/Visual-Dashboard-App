import Card from "../components/Card.jsx"
import { useQuery } from "@tanstack/react-query"
import { Bar, Pie, Line } from "react-chartjs-2"

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
  
    const labels = ["Done", "Pending"]
  
    const doneCount = tasks.filter(task => task.status === "done").length
    const pendingCount = tasks.filter(task => task.status === "pending").length
  
    const values = [doneCount, pendingCount]
  
    const dataPie = {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: ["#22c55e", "#ef4444"],
        },
      ],
    }
  
    const dataBar = {
      labels,
      datasets: [
        {
          label: "Tasks",
          data: values,
          backgroundColor: ["#22c55e", "#ef4444"],
        },
      ],
    }
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Dashboard
        </h1>
  
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {tasks.map(task => (
            <Card
              key={task.id}
              title={task.title}
              content={task.content}
            />
          ))}
        </div>
  
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="mb-4 font-semibold">Bar Chart</h2>
            <Bar data={dataBar} />
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="mb-4 font-semibold">Pie Chart</h2>
            <Pie data={dataPie} />
          </div>
        </div>
  
      </div>
    )
  }
  