import React from 'react'
import { useRoutes, useNavigate } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import './App.css'

function App() {
  const navigate = useNavigate()

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <ShowCreators
          onAddCreator={() => navigate('/add')}
          onViewCreator={(id) => navigate(`/creator/${id}`)}
          onEditCreator={(id) => navigate(`/edit/${id}`)}
        />
      )
    },
    {
      path: '/creator/:id',
      element: <ViewCreator onBack={() => navigate('/')} />
    },
    {
      path: '/add',
      element: <AddCreator onBack={() => navigate('/')} onCreatorAdded={() => navigate('/')} />
    },
    {
      path: '/edit/:id',
      element: <EditCreator onBack={() => navigate('/')} onCreatorUpdated={() => navigate('/')} />
    }
  ])

  return <div className="app">{routes}</div>
}

export default App