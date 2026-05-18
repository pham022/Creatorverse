import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import './CreatorForm.css'

const EditCreator = ({ onBack, onCreatorUpdated }) => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    imageURL: ''
  })
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCreator()
  }, [id])

  const fetchCreator = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      setFormData({
        name: data.name || '',
        description: data.description || '',
        url: data.url || '',
        imageURL: data.imageURL || ''
      })
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching creator:', err)
    } finally {
      setLoading(false)
    }
  }

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

    if (!formData.name.trim()) {
      setError('Creator name is required')
      return
    }

    try {
      setSubmitting(true)
      const { error } = await supabase
        .from('creators')
        .update(formData)
        .eq('id', id)

      if (error) throw error

      alert('Creator updated successfully!')
      onCreatorUpdated()
      onBack()
    } catch (err) {
      setError(err.message)
      console.error('Error updating creator:', err)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <div className="loading">Loading creator...</div>

  return (
    <div className="form-page">
      <button onClick={onBack} className="btn btn-back">
        ← Back
      </button>

      <div className="form-container">
        <h1>Edit Creator</h1>

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
            <button type="submit" className="btn btn-submit" disabled={submitting}>
              {submitting ? 'Updating...' : 'Update Creator'}
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

export default EditCreator