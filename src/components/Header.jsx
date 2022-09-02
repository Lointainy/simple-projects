import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  const [dropdown, setDropdown] = useState(false)

  const [link, setLink] = useState('')
  const links = [
    {
      id: 1,
      name: 'word count',
    },
  ]

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleSelectLink = (value) => {
    setLink(value)
  }

  return (
    <div className="header flex justify-between container h-20 items-center">
      <div className="header__logo text-green-100 font-black text-2xl flex items-center cursor-pointer">
        <span className="text-slate-800 uppercase w-10 h-10 mr-1 bg-green-100 rounded-[0.65rem] flex justify-center items-center">
          s
        </span>
        imple project
      </div>
      <div className="dropdown relative">
        <div
          onClick={() => handleDropdown()}
          className="link-selected flex items-center text-white hover:bg-green-100 hover:text-slate-800 cursor-pointer p-4 rounded-[0.75rem] transition ease-in-out duration-300">
          {link ? (
            <>
              <span className="mr-3">{link}</span>
              <button
                onClick={() => {
                  setLink('')
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
          <div className="links-list absolute right-0 mt-1 w-[10rem] rounded-[0.35rem] p-2 flex flex-wrap bg-green-100">
            {links.map((item) => {
              return (
                <label
                  key={item.id}
                  htmlFor={item.name}
                  className="links-list__item py-2 px-6 rounded-[0.35rem] hover:bg-teal-500 cursor-pointer w-full relative hover:text-white">
                  <input
                    value={item.name}
                    onChange={(e) => {
                      handleSelectLink(e.target.value)
                      handleDropdown()
                    }}
                    className="hidden"
                    type="radio"
                    name="filter"
                    id={item.name}
                  />
                  {item.name}
                </label>
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
