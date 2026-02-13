export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Login
          </h1>
  
          <input
            type="text"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
            Se connecter
          </button>
        </div>
      </div>
    )
  }
  