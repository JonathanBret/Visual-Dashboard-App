function Card({ title, content }) {
    return (
      <div className="p-4 rounded shadow bg-white text-gray-800">
        <h2>{title}</h2>
        <p>{content}</p>
        
        <div className="rounded shadow p-4 bg-gray-100 text-gray-800 mt-2">
          <h2>Titre</h2>
          <p>la description du titre.</p>
        </div>
      </div>
    )
  }

  export default Card
  