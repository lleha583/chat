import { useState } from "react"

const Form = ({ setUser }) => {

    const [name, setName] = useState('')

    const onSubmit = () => {
        localStorage.setItem('user', name)
        setUser(name)
    }   

    return (
        <div className="main-form">
            <h2>Form</h2>
            <form>
                <input 
                    className="form-input"
                    type="text" 
                    name="name"
                    placeholder="Name"
                    onChange={(e) => {setName(e.target.value)}} 
                    value={name} 
                />
                <input 
                    type="submit" 
                    value="submit"
                    onClick={onSubmit}
                />
            </form>
        </div>
    )
}

export default Form