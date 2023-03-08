import { useState } from 'react'
import Header from './components/header'
import './css/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className="chat">
      <div className="box-chat">
        <div className="title">
          <h1>chatBox</h1>
        </div>
        <div className="chat-space">

        </div>
        <div className="chat-input">
          <input type="text" placeholder='Mensagem' />
          <button>Send</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
