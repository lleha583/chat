import { useState } from "react"

const Form = () => {

    const [form, setForm] = useState({
        name: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value 
        })
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
                    onChange={handleChange} 
                    value={form.name} 
                />
                <input 
                    type="submit" 
                    value="submit"
                />
            </form>
        </div>
    )
}

export default Form