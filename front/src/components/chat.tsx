import { useEffect, useState } from "react"

interface IChat {
  name: string,
  message: string,
  type: string
}

export default function Chat({ socket, user }: any) {

  const [messages, setMessages] = useState<IChat[]>([])

  useEffect(() => {
    socket.on('message', (message: IChat) => {
      console.log(message);
      setMessages((prev: IChat[]) => [...prev, message]);
    });
  }, [])

  return (
    <div className="chat">
      {
        messages.map((item) => {
          return (
            <>
              <p className={`message user-${(item.name === user) ? 0 : 1}`}>{item.message}</p>
              
            </>
            )
        })
      }
    </div >
  )
};
