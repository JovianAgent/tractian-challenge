import React, { lazy } from 'react'
import { RouteObject } from 'react-router'
import { useRoutes } from 'react-router-dom'



const Main = lazy(async () => await import('../pages/main'))
const Welcome = lazy(async () => await import('../pages/welcome'))
const Assets = lazy(async () => await import('../pages/assets'))
const AssetList = lazy(async () => await import('../pages/assetList'))
const Users = lazy(async () => await import('../pages/users'))
const UserList = lazy(async () => await import('../pages/userList'))
const Units = lazy(async () => await import('../pages/units'))
const UnitList = lazy(async () => await import('../pages/unitList'))
const Companies = lazy(async () => await import('../pages/companies'))
const CompanyList = lazy(async () => await import('../pages/companyList'))

export const routes: RouteObject[] = [
    {
      path: '/',
      element: <Main />,
      caseSensitive: true,
      children: [
        {
          path: '',
          element: <Welcome />
        },
        {
          path: 'assets',
          element: <Assets />,
          children: [
            {
              path: '',
              element: <AssetList />
            }
          ]
        },
        {
          path: 'users',
          element: <Users />,
          children: [
            {
              path: '',
              element: <UserList />
            }
          ]
        },
        {
          path: 'units',
          element: <Units />,
          children: [
            {
              path: '',
              element: <UnitList />
            }
          ]
        },
        {
          path: 'companies',
          element: <Companies />,
          children: [
            {
              path: '',
              element: <CompanyList />
            }
          ]
        }
      ]
    }
]

const MainRoutes = (): any => {
    return useRoutes(routes)
}
  
export default MainRoutes