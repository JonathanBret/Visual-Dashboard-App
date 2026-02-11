function Input({ type, placeholder, value, onChange }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 rounded border focus:outline-none focus:ring"
      />
    )
  }
  
  export default Input
  