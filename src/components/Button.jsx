import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ name, iconName }) => {
  return (
    <button className="btn flex items-center py-2 px-4 bg-green-100 text-slate-800  rounded-[0.65rem] hover:bg-teal-500 hover:text-white cursor-pointer transition duration-250 ease-out hover:ease-in">
      {name}
      {iconName ? <FontAwesomeIcon className="btn-icon ml-2" icon={iconName} /> : ''}
    </button>
  )
}
