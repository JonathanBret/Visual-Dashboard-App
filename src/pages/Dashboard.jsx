import Card from "../components/Card.jsx"
import { useQuery } from "@tanstack/react-query"
import { Bar, Pie, Line } from "react-chartjs-2"

const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks")
    if (!res.ok) throw new Error("Erreur lors du fetch")
    return res.json()
  }

export default function Dashboard() {
    const {data: tasks, isLoading, isError} = useQuery(["tasks"], fetchTasks)

    if (isLoading) return <div>"Chargement..."</div>
    if (isError) return <div>"Erreur lors du chargement</div>

    const labels = ["done", "pending"]
    const values = [1, 1]
    const dataPie = {labels, datasets:[{data: values, backgroundColor:["green","red"]}]}
    const dataLine = {labels, datasets:[{data: values, label:"Tasks"}]}
    const data = {
        labels: labels,
        datasets: [{ label: "Tasks", data: values, backgroundColor: ["green","red"] }]
}


    return (
      <div className="p-6 bg-gray-50 text-black-500">
       {tasks.map(task => (
        <Card key={task.id} title={task.title} content={task.content} />
      ))}
       <Bar data={data} />
       <Pie data={dataPie} />
       <Line data={dataLine} />
      </div>
    )
  }
  