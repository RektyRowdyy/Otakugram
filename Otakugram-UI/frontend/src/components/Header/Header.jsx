import { Link, NavLink } from 'react-router-dom'
import classNames from '../../utils/joinClassNames'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { headerNavigation } from '../../constants.jsx';

export default function Header() {
  return (
    <nav className="header">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">

            {/* Otakugram Logo */}
            <Link to="/" className='mr-2'>
              <img
                className="h-8 w-auto"
                src="Otakugram Logo.png"
                alt="Otakugram Logo"
              />
            </Link>

            {/* Navigation Items */}
            <div className="flex space-x-2 items-center">
              {headerNavigation.map((item) => (
                <div key={item.name}>
                  {item && !item.items ?
                    // If No SubItems
                    (<NavLink
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
                    </NavLink>)
                    :
                    // If you have SubItems
                    (<Popover className="relative">
                      {({ open }) => (
                        <>
                          <PopoverButton
                            className={classNames(
                              'rounded-md px-3 py-2 text-sm font-medium',
                              open ? 'button' : 'hover:bg-gray-700'
                            )}
                          >
                            {item.name}
                          </PopoverButton>
                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <PopoverPanel
                              className="absolute z-10 mt-3 w-96 divide-y divide-white/5 rounded-md bg-gray-950 text-sm"
                            >
                              <div>
                                {item.items.map((subItem) => (
                                  <NavLink
                                    key={subItem.name}
                                    to={subItem.to}
                                    className="flex items-center py-2 px-3 transition hover:bg-orange-500 "
                                  >
                                    <subItem.icon size={20} className="text-white mr-5" />
                                    <div>
                                      <p className="font-semibold text-white">{subItem.name}</p>
                                      <p className="text-white/50">{subItem.description}</p>
                                    </div>
                                  </NavLink>
                                ))}
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>)
                  }
                </div>
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
