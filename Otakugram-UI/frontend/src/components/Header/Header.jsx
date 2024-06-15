import { Link, NavLink } from 'react-router-dom'
import classNames from '../../utils/joinClassNames'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Anime', to: '/anime' },
]

export default function Header() {
  return (
    <nav className="header">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className='mr-2'>
              <img
                className="h-8 w-auto"
                src="Otakugram Logo.png"
                alt="Otakugram Logo"
              />
            </Link>

            <div className="flex space-x-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'button' : 'hover:bg-gray-700',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )
                  }
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className='button rounded-md px-3 py-2 text-sm font-medium'
            >
              Login
            </Link>
            <Link
              to="/register"
              className='button rounded-md px-3 py-2 text-sm font-medium'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
