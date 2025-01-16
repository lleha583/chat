import { useEffect, useRef } from "react"

export default function ChatNav({ sendMessage }: {sendMessage: (input: string) => void}) {

    const inputRef = useRef() as React.LegacyRef<HTMLInputElement>

    useEffect(() => {

        window.addEventListener('keydown', handleKey)

        return () =>  window.removeEventListener('keydown', handleKey)
    }, [])

    const handleKey = (e) => { 
        if(e.code === 'Enter')  handleSubmit()
    }

    const handleSubmit = () => {
        const handleInput = inputRef.current

        if(handleInput === undefined || handleInput.value === '') return
        
        sendMessage(handleInput.value)
        handleInput.value = ''
    }

    return (
        <div className="chat-nav">
            <input ref={inputRef} type="text" placeholder="text" />
            <button onClick={handleSubmit}>send</button>
        </div>
    )
}