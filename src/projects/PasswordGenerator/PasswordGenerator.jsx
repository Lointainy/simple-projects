import { Button } from '@/components/Button'

export const PasswordGenerator = () => {
  return (
    <div className="password-gen">
      <input
        className="w-full my-10 bg-slate-800 outline-none text-green-100 text-2xl"
        type="text"
        name=""
        id=""
        placeholder="Generate password ..."
        disabled
      />
      <div className="flex flex-wrap justify-between">
        <Button name={'generate'} iconName={'arrows-rotate'}></Button>
        <Button name={'copy'} iconName={'copy'}></Button>
      </div>
    </div>
  )
}
