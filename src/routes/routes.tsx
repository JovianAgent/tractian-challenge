import React, { lazy } from 'react'
import { RouteObject } from 'react-router'
import { useRoutes } from 'react-router-dom'



const Main = lazy(async () => await import('../pages/main'))
const Assets = lazy(async () => await import('../pages/assets'))
const Users = lazy(async () => await import('../pages/users'))
const Units = lazy(async () => await import('../pages/units'))
const Companies = lazy(async () => await import('../pages/companies'))

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Main />,
        caseSensitive: true,
      children: [
        {
          path: 'assets',
          element: <Assets />
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'units',
          element: <Units />
        },
        {
          path: 'companies',
          element: <Companies />
        }
      ]
    }
]

const MainRoutes = (): any => {
    return useRoutes(routes)
}
  
export default MainRoutes