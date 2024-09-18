const App = () => {
  return (
    <div className="app">
      <section className="search-section">
        <p>What do you want to know?
          <button className="surprise">Surprise me</button>
        </p>
        <div className="input-container">
          <input value={""} 
          placeholder="When is Christmas...?" 
          onChange={""} />
            <button>Ask Me</button>
            <button>Clear</button>
        </div>
      </section>
    </div>
  )
}

export default App