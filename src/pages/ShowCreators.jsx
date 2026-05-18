import React, { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'
import './ShowCreators.css'

const ShowCreators = ({ onAddCreator, onEditCreator, onViewCreator }) => {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCreators()
  }, [])

  const fetchCreators = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.from('creators').select('*')
      
      if (error) throw error
      setCreators(data || [])
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching creators:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      try {
        const { error } = await supabase.from('creators').delete().eq('id', id)
        if (error) throw error
        setCreators(creators.filter(creator => creator.id !== id))
      } catch (err) {
        console.error('Error deleting creator:', err)
        alert('Failed to delete creator')
      }
    }
  }

  if (loading) return <div className="loading">Loading creators...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="show-creators-page">
      <div className="page-header">
        <h1>CREATORVERSE</h1>
        <div className="header-buttons">
          <button onClick={onAddCreator} className="btn btn-primary">
            ADD A CREATOR
          </button>
          <button onClick={fetchCreators} className="btn btn-secondary">
            VIEW ALL CREATORS
          </button>
        </div>
      </div>

      {creators.length === 0 ? (
        <div className="no-creators">
          <p>NO CREATORS YET</p>
        </div>
      ) : (
        <div className="creators-grid">
          {creators.map(creator => (
            <Card
              key={creator.id}
              creator={creator}
              onView={onViewCreator}
              onEdit={onEditCreator}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ShowCreators