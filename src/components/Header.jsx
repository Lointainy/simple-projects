import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { projectLinks } from '../utils/links'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  const navigate = useNavigate()

  const [dropdown, setDropdown] = useState(false)

  const [link, setLink] = useState('')

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleSelectLink = (value) => {
    setLink(value)
  }

  return (
    <div className="header flex justify-between container h-20 items-center">
      <Link
        to="/"
        onClick={() => {
          setLink('')
          setDropdown(false)
        }}>
        <div className="header__logo text-green-100 font-black text-2xl flex items-center cursor-pointer">
          <span className="text-slate-800 uppercase w-10 h-10 mr-1 bg-green-100 rounded-[0.65rem] flex justify-center items-center">
            s
          </span>
          imple project
        </div>
      </Link>
      <div className="dropdown relative">
        <div
          onClick={() => {
            handleDropdown()
          }}
          className="link-selected flex items-center text-white hover:bg-green-100 hover:text-slate-800 cursor-pointer p-4 rounded-[0.75rem] transition ease-in-out duration-300">
          {link ? (
            <>
              <span className="mr-3">{link}</span>
              <button
                onClick={() => {
                  setLink('')
                  navigate('/', { replace: true })
                }}
                className="link-selected__button-del flex items-center justify-center rotate-45 cursor-pointer bg-green-100 w-6 h-6 rounded-xl text-slate-800 hover:bg-teal-500 transition duration-250 ease-out hover:ease-in">
                <FontAwesomeIcon className="search__btn-icon" icon="plus" />
              </button>
            </>
          ) : (
            <FontAwesomeIcon icon="bars" />
          )}
        </div>
        {dropdown ? (
          <div className="links-list absolute right-0 mt-1 w-[20rem] rounded-[0.35rem] p-2 flex flex-wrap bg-green-100">
            {projectLinks.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/project/${item.tag}`}
                  className="py-2 px-6 rounded-[0.35rem] hover:bg-teal-500 cursor-pointer w-full relative hover:text-white transition duration-250 ease-out hover:ease-in"
                  name={item.name}
                  onClick={(e) => {
                    handleSelectLink(e.target.name)
                    setDropdown(false)
                  }}>
                  {item.name}
                </Link>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
