import './CheckBox.css'

type Props = {
  value: boolean
  name: string
  title: string
  handleChange: (id: string, checked: boolean) => void
}

const CheckBox: React.FC<Props> = ({ value, name, title, handleChange }) => {
  return (
    <label htmlFor={name} className="custom-switch">
      <input
        checked={value}
        type="checkbox"
        id={name}
        onChange={(e) => handleChange(e.target.id, e.target.checked)}
        className="custom-switch__input"
      />
      <div
        className={
          value
            ? 'custom-switch__slider bg-teal-500 before:bg-white'
            : 'custom-switch__slider bg-green-100 before:bg-slate-800'
        }></div>
      <span className="custom-switch__title cursor-pointer">{title}</span>
    </label>
  )
}

export default CheckBox
