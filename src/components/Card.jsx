import React from 'react'
import './Card.css'

const Card = ({ creator, onEdit, onDelete, onView }) => {
  return (
    <div className="card">
      {/* Creator Image */}
      <div className="card-image-container">
        {creator.imageURL ? (
          <img 
            src={creator.imageURL} 
            alt={creator.name} 
            className="card-image" 
          />
        ) : (
          <div className="card-image-placeholder">
            <span className="placeholder-text">No Image</span>
          </div>
        )}
      </div>

      {/* Creator Content */}
      <div className="card-content">
        {/* Creator Name */}
        <div className="card-header">
          <h2 className="card-name">{creator.name}</h2>
        </div>

        {/* Creator Description */}
        {creator.description && (
          <p className="card-description">{creator.description}</p>
        )}

        {/* Creator URL/Channel Link */}
        {creator.url && (
          <div className="card-url-container">
            <a 
              href={creator.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-url-link"
              title="Visit creator's channel"
            >
              <span className="url-text">Visit Channel</span>
              <span className="url-icon">→</span>
            </a>
          </div>
        )}

        {/* Action Buttons */}
        <div className="card-actions">
          <button 
            onClick={() => onView(creator.id)} 
            className="btn btn-view"
            title="View creator details"
          >
            View
          </button>
          <button 
            onClick={() => onEdit(creator.id)} 
            className="btn btn-edit"
            title="Edit creator information"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(creator.id)} 
            className="btn btn-delete"
            title="Delete creator"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card