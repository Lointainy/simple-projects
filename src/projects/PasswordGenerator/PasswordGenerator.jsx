import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { CheckBox } from '@/components/CheckBox'

export const PasswordGenerator = () => {
  const [passwordSettings, setPasswordSettings] = useState({
    length: 4,
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
  })

  const [errorValue, setErrorValue] = useState({
    status: false,
    title: 'please enter length for password',
  })

  const [password, setPassword] = useState('')

  const alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i))
  const numbers = [...Array(10).keys()]
  const symblol = '!@#$%^&*,'

  const randomPassword = () => {
    const random = [...alphabet, ...numbers, ...symblol]
    return random
      .sort(() => Math.random() - 0.5)
      .join('')
      .slice(0, passwordSettings.length)
  }

  const handleSelectSettings = (name, value) => {
    setPasswordSettings({ ...passwordSettings, [name]: value })
    console.log(passwordSettings)
  }

  const handleGenerate = () => {
    setPassword(randomPassword)
  }

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password) // copy for buffer
  }

  useEffect(() => {
    handleGenerate() // refresh password
    passwordSettings.length > 0
      ? setErrorValue({ ...errorValue, status: false })
      : setErrorValue({ ...errorValue, status: true })
  }, [passwordSettings.length])

  return (
    <div className="password-gen">
      {errorValue.status ? <span className="w-full flex justify-center text-red-500">{errorValue.title}</span> : ''}
      <input
        value={password}
        onChange={(e) => setPassword(e.target.name)}
        className="w-full my-10 bg-slate-800 outline-none text-green-100 text-2xl"
        type="text"
        placeholder="Generate password ..."
        disabled
      />

      <div className="my-10 flex flex-row xl:flex-row gap-4 text-white items-center">
        <input
          step="4"
          min="0"
          max="16"
          value={passwordSettings.length}
          onChange={(e) => setPasswordSettings({ ...passwordSettings, length: e.target.value })}
          type="range"
          className="h-2 bg-teal-500 text-green-100 rounded-lg appearance-none cursor-pointer"
        />
        <CheckBox
          handleChange={handleSelectSettings}
          value={passwordSettings.lowercase}
          name={'lowercase'}
          title={'LowerCase alphabet'}></CheckBox>
      </div>

      <div className="flex flex-wrap justify-between">
        <Button handleClick={handleGenerate} name={'generate'} iconName={'arrows-rotate'}></Button>
        <Button handleClick={handleCopyPassword} name={'copy'} iconName={'copy'}></Button>
      </div>
    </div>
  )
}
