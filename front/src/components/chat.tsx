export default function Chat({ messages }) {
  return (
    <div className="chat">
        {
            messages.map((item) => {
                return (
                    <div>
                        <p>item</p>
                    </div>
                )
            })
        }
    </div>
  )  
};
