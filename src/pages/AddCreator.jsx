import React, { useState } from 'react'
import { supabase } from '../client'
import './CreatorForm.css'

const AddCreator = ({ onBack, onCreatorAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    imageURL: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (!formData.name.trim()) {
      setError('Creator name is required')
      return
    }

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('creators')
        .insert([formData])
        .select()

      if (error) throw error

      alert('Creator added successfully!')
      setFormData({ name: '', description: '', url: '', imageURL: '' })
      onCreatorAdded()
      onBack()
    } catch (err) {
      setError(err.message)
      console.error('Error adding creator:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-page">
      <button onClick={onBack} className="btn btn-back">
        ← Back
      </button>

      <div className="form-container">
        <h1>Add a New Creator</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Creator Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter creator name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe this creator..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Channel URL</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageURL">Image URL</label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Creator'}
            </button>
            <button type="button" onClick={onBack} className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCreator
