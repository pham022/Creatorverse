import React, { useState, useEffect } from 'react'
import { supabase } from '../client'
import './ViewCreator.css'

const ViewCreator = ({ creatorId, onBack }) => {
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCreator()
  }, [creatorId])

  const fetchCreator = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', creatorId)
        .single()

      if (error) throw error
      setCreator(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching creator:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="loading">Loading creator...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (!creator) return <div className="error">Creator not found</div>

  return (
    <div className="view-creator-page">
      <button onClick={onBack} className="btn btn-back">
        ← Back to All Creators
      </button>

      <div className="creator-detail">
        {creator.imageURL && (
          <img src={creator.imageURL} alt={creator.name} className="creator-image" />
        )}

        <div className="creator-info">
          <h1>{creator.name}</h1>
          <p className="description">{creator.description}</p>

          {creator.url && (
            <a href={creator.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
              Visit {creator.name}'s Channel
            </a>
          )}

          <div className="creator-meta">
            <p>
              <strong>Created:</strong> {new Date(creator.created_at).toLocaleDateString()}
            </p>
            {creator.updated_at && (
              <p>
                <strong>Last Updated:</strong> {new Date(creator.updated_at).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCreator
