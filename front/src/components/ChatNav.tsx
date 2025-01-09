import { useState } from "react"

export default function ChatNav({ sendMessage }: {sendMessage: (message: string) => void}) {

    const [input, setInput] = useState('') 

    const handleClick = () => {
        sendMessage(input)
        setInput('')
    }

    return (
        <div className="chat-nav">
            <input type="text" placeholder="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
            <button onClick={handleClick} >send</button>
        </div>
    )
};
