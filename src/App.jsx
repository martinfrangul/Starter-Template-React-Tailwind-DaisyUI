import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-48 flex flex-col m-auto justify-center items-center gap-7 h-screen'>
      <div className='flex flex-row' >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-4xl underline'>Vite + React</h1>
      <div className="card">
        <button className="btn btn-active btn-secondary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
