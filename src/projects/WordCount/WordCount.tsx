import { useEffect, useState } from 'react'

const WordCount: React.FC = () => {
  const [wordCount, setWordCount] = useState<number | undefined>(0)
  const [symbolCount, setSymbolCount] = useState<number>(0)

  const [text, setText] = useState<string>('')

  const handleText = (value: string) => {
    setText(value)
  }

  useEffect(() => {
    if (text.length > 1) {
      /* word */
      setWordCount(text.match(/\S+/g)?.length)
      /* symbol */
      let reg: RegExp = /^[a-z]+$/i
      setSymbolCount(text.split('').filter((i: any) => i == i.match(reg)).length)
    }
  }, [text])

  return (
    <div className="word-count">
      <textarea
        value={text}
        onChange={(e) => handleText(e.target.value)}
        name=""
        id=""
        className="word-count__text-field my-10 bg-slate-800 w-full outline-none text-green-100 text-2xl"
        placeholder="Enter your text here"></textarea>
      <ul className="word-count__list flex text-green-100 font-medium text-md gap-3">
        <li className="word-count__list-item">
          Words:<span className="font-black ml-2">{wordCount}</span>
        </li>
        <li className="word-count__list-item">
          Symbol:<span className="font-black ml-2">{symbolCount}</span>
        </li>
      </ul>
    </div>
  )
}

export default WordCount
