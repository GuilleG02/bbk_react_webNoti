import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Form.scss'

export const Form = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        title: '',
        abstract: '',
    })

    const initialState = {
        title: '',
        abstract: '',
    }
    const clearState = () => {
        setData(initialState)
    }


    const handleInputChange = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!data.title || !data.abstract) {
            alert('Please fill in both Title and Abstract before submitting.')
            return
        }

        localStorage.setItem('formData', JSON.stringify(data))
        const savedData = localStorage.getItem('formData')
        console.log('Data saved to localStorage:', JSON.parse(savedData))

        console.log(`sending data… ${data.title} ${data.abstract}`)
        clearState()

        setTimeout(() => {
            navigate('/list')
        }, 1000)
    }



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a Title"
                    value={data.title}
                    onChange={handleInputChange}
                    name="title"
                />
                <input
                    type="text"
                    placeholder="Enter an Abstract"
                    value={data.abstract}
                    onChange={handleInputChange}
                    name="abstract"
                />
                <button type="submit" disabled={!data.title || !data.abstract}>
                    Enviar
                </button>
            </form>
        </div>
    )

}

export default Form

