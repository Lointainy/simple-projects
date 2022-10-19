import { useEffect, useState } from 'react'

/* Components */
import { Button, CheckBox } from '@/components'

const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>('')

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

  const alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i))
  const numbers = [...Array(10).keys()]
  const symblols = '!@#$%^&*,'

  /* function for create random password */

  const randomPassword = () => {
    const random = [
      ...(passwordSettings.lowercase ? alphabet.map((e) => e.toLowerCase()) : []),
      ...(passwordSettings.uppercase ? alphabet.map((e) => e.toUpperCase()) : []),
      ...(passwordSettings.numbers ? numbers : []),
      ...(passwordSettings.symbols ? symblols : []),
    ]
    return random
      .sort(() => 0.5 - Math.random())
      .join('')
      .slice(0, passwordSettings.length)
  }

  const handleSelectSettings = (name: any, value: any) => {
    setPasswordSettings({ ...passwordSettings, [name]: value })
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
  }, [passwordSettings])

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

      <div className="my-10 flex flex-wrap flex-row xl:flex-row gap-8 text-white items-center">
        <label htmlFor="password-length" className="flex items-center gap-4">
          <input
            id="password-length"
            step="4"
            min="0"
            max="16"
            value={passwordSettings.length}
            onChange={(e) => setPasswordSettings({ ...passwordSettings, length: e.target.value })}
            type="range"
            className="h-2 bg-teal-500 text-green-100 rounded-lg appearance-none cursor-pointer"
          />
          {passwordSettings.length}
        </label>
        <CheckBox
          handleChange={handleSelectSettings}
          value={passwordSettings.lowercase}
          name={'lowercase'}
          title={'LowerCase alphabet'}></CheckBox>

        <CheckBox
          handleChange={handleSelectSettings}
          value={passwordSettings.uppercase}
          name={'uppercase'}
          title={'uppercase alphabet'}></CheckBox>

        <CheckBox
          handleChange={handleSelectSettings}
          value={passwordSettings.numbers}
          name={'numbers'}
          title={'Numbers from 0 to 9'}></CheckBox>
        <CheckBox
          handleChange={handleSelectSettings}
          value={passwordSettings.symbols}
          name={'symbols'}
          title={'Symblol from . to *'}></CheckBox>
      </div>

      <div className="flex flex-wrap justify-between">
        <Button handleClick={handleGenerate} name={'generate'} iconName={'arrows-rotate'}></Button>
        <Button handleClick={handleCopyPassword} name={'copy'} iconName={'copy'}></Button>
      </div>
    </div>
  )
}

export default PasswordGenerator
