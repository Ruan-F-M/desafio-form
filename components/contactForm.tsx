import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.')
      return
    }
    setError('')
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSuccessMessage('Mensagem enviada com sucesso!')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 2000)
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center my-6">Contato</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="subject">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-gray-100 p-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
