import React, { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const Routes = lazy(async () => await import('./routes'))

const Router: React.FC = () => {

  return (
    <Suspense fallback={<div>carregando...</div>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
