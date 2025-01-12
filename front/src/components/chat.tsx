import { useEffect, useState } from "react"

export default function Chat({ socket }) {

    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        socket.on('message', (message: string) => {
            console.log(message);
            setMessages((prev: string[]) => [...prev, message]);
          });
    }, [])

  return (
    <div className="chat">
        {
            messages.map((item) => {
                return <p className={`message user-${1}`}>{item}</p>
            })
        }
    </div>
  )  
};
