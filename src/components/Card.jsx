function Card({ title, content, status, priority }) {
    const badgeColor =
      status === "done"
        ? "bg-green-500"
        : status === "inProgress"
        ? "bg-blue-500"
        : status === "toDo"
        ? "bg-yellow-500"
        : "bg-gray-400";
  
    const badgeText =
      status === "done"
        ? "Terminé"
        : status === "inProgress"
        ? "En cours"
        : status === "toDo"
        ? "À faire"
        : status;
  
    const priorityColor =
      priority === "urgent"
        ? "text-red-600"
        : priority === "high"
        ? "text-yellow-600"
        : "text-gray-500";
  
    const priorityText =
      priority === "urgent"
        ? "Urgent"
        : priority === "high"
        ? "Haute"
        : "Modérée";
  
    return (
      <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-200">
        {status && (
          <span
            className={`inline-block mb-3 px-3 py-1 text-xs font-semibold text-white rounded-full ${badgeColor}`}
          >
            {badgeText}
          </span>
        )}
  
        <h2 className="font-bold text-lg text-gray-900 mb-2">{title}</h2>
  
        <p className="text-gray-600 text-sm mb-3">{content}</p>
  
        {priority && (
          <p className={`text-sm font-medium ${priorityColor}`}>
            Priorité: {priorityText}
          </p>
        )}
      </div>
    );
  }
  
  export default Card;