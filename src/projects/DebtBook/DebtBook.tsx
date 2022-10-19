import { Button } from '@/components'

export const DebtBook: React.FC = () => {
  return (
    <div className="debt-book__fuild bg-slate-700 p-4 rounded-xl">
      <div className="debt-book__header bg-slate-800 rounded-xl p-6 my-2 text-slate-400 flex flex-col">
        Current Clients Debt:
        <span className="text-3xl font-black  text-teal-500">1000</span>
      </div>
      <Button className="w-full" name={'add new'} iconName={'plus'}></Button>
    </div>
  )
}

export default DebtBook
