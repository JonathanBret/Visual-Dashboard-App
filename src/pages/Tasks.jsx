import Card from "../components/Card.jsx"

export default function Tasks() {
    const tasks = [
        { id:1, title: "Tâche 1", content: "Finir le projet"},
        { id:2, title: "Tâche 2", content: "Envoyer mail"},
        { id:3, title: "Tâche 3", content: "Préparer ca"},
    ]
    return (
      <div className="p-6 text-2xl">
        {tasks.map(task => (
            <Card key={task.id} title={task.title} content={task.content} />
        ))}
      </div>
    )
  }
  