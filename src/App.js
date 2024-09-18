import { useState } from "react"


const App = () => {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [chatHisotry, setChatHistory] = useState([])

  const surpriseOptions = [
    'Who won the latest Novel Peace Prize?',
    'Where does pizza come from?',
    'Who do you make a BLT sandwich'
  ]

  const surprise = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randomValue)
  }

  return (
    <div className="app">
      <p>What do you want to know?
        <button className="surprise" onClick={surprise} disabled={!chatHisotry}>Surprise me</button>
      </p>
      <div className="input-container">
        <input value={value}
          placeholder="When is Christmas...?"
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button>Ask Me</button>}
        {error && <button>Clear</button>}
      </div>
      {error && <p>{error}</p>}
      <div className="search-result">
        <div key={""}>
          <p className="answer"></p>
        </div>
      </div>
    </div>
  )
}

export default App