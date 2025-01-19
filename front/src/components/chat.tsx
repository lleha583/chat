import { useEffect, useState } from "react"

interface IChat {
  name: string,
  message: string,
  type: string
}

export default function Chat({ socket, user }: any) {

  const [messages, setMessages] = useState<(string | IChat)[]>([])

  console.log(messages);

  useEffect(() => {
    socket.on('message', (message: string | IChat) => {
      console.log(message);
      setMessages((prev: (string | IChat)[]) => [...prev, message]);
    });
  }, [])

  return (
    <div className="chat">
      {
        messages.map((item: (string | IChat)) => {

          return (
            <>
              {
                (item.name !== undefined) ? (
                  <>
                    {
                      (item.name !== user) && <span className="username">{item.name}</span>
                    }
                    <p className={`message user-${(item.name === user) ? 0 : 1}`}>{item.message}</p>

                  </>
                ) : (
                  <>
                    <span>{item}</span>
                  </>
                )
              }
            </>
          )
        })
      }
    </div >
  )
};
