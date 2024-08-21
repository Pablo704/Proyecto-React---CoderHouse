import React, { useState } from 'react'
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [error, setError] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const validateForm = () => {
        const { name, phone, email } = formData

        if (!name || !phone || !email) {
            return 'Todos los campos son obligatorios.'
        }

        if (!/^[0-9]+$/.test(phone)) {
            return 'El número de teléfono solo puede contener dígitos.'
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 'Por favor, ingresa un email válido.'
        }

        return null
    }

    const handleConfirm = (event) => {
        event.preventDefault()

        const errorMessage = validateForm()
        if (errorMessage) {
            setError(errorMessage)
            return
        }

        setError('')
        onConfirm(formData)
    }

    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    Nombre
                    <input 
                        className='input' 
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label className='label'>
                    Telefono
                    <input 
                        className='input' 
                        type='text'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                <label className='label'>
                    Email
                    <input 
                        className='input' 
                        type='text'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                {error && <p className='error'>{error}</p>}
                <div className='label'>
                    <button type='submit' className='option'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
