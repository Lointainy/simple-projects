import { useEffect, useState } from 'react'

/* Components */
import { Button } from '@/components'

/* Icons */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Data */
import words from './data/words'

const EnglishWord: React.FC = () => {
  /* CAN BE CHANGED */
  const answersMaxLength: number = 3 // max length answers with true answer
  const baseMode: number = 10 // max length for quiestions

  /* STATE */
  const [questionsMaxLength, setQuestionsMaxLength] = useState<number>(baseMode) // mode name for game
  const [selectedMode, setSelectedMode] = useState<string>(baseMode.toString())
  const [currentQuestion, setCurrentQuestion] = useState<number>(1) // current question number

  const [answer, setAnswer] = useState<{ word: string; wordTranlate: string }>({
    word: '',
    wordTranlate: '',
  }) // question word == answer word
  const [answers, setAnswers] = useState<{ name: string; status: boolean }[]>([]) // all answers

  /* SCORE */
  const [score, setScore] = useState<number>(0) // current score
  const [bestScore, setBestScore] = useState<number>(0) // high score

  /* FUNTCTION`s */
  const randomValue = () => Math.ceil(Math.random() * (words.length - 1) + 1) // random number

  const getRandom = () => {
    setAnswer(words[randomValue()]) // get random word from data
    console.log(answer)
  }

  const handleClickAnswer = (value: boolean) => {
    if (value == true) {
      setCurrentQuestion((prev) => prev + 1)
      setScore((prev) => prev + 1)
      getRandom()
    } else {
      handleRestart()
    }
  } // check answer

  const handleRestart = () => {
    setQuestionsMaxLength(Number(selectedMode))
    setCurrentQuestion(1)
    setScore(0)
    getRandom()
  } // reset current sesion

  const handleNextAnswers = () => {
    setCurrentQuestion((prev) => prev + 1)
    getRandom()
  } // go to next question / get new random word

  const handleSelectMode = (value: string) => {
    if (value == '10') setSelectedMode('10')
    if (value == '100') setSelectedMode('100')
    if (value == 'infinity') setSelectedMode('1000')
    getRandom()
  }

  const handleNewGame = () => {
    setAnswers([])
    setCurrentQuestion(1)
    setScore(0)
  }

  /* WATCHER`s */

  useEffect(() => {
    score > bestScore ? setBestScore(score) : '' // if score > global highscore
  }, [score])

  useEffect(() => {
    if (answer != null) {
      setAnswers([{ name: answer.wordTranlate, status: true }])
      for (let i = 1; i <= answersMaxLength; i++) {
        setAnswers((prev) => [...prev, { name: words[randomValue()].wordTranlate, status: false }])
      }
    }
    setAnswers((prev) => prev.sort(() => Math.random() - 0.5)) // randomize answers
  }, [answer])

  useEffect(() => {
    currentQuestion > questionsMaxLength ? handleRestart() : ''
  }, [currentQuestion])

  useEffect(() => {
    setQuestionsMaxLength(Number(selectedMode))
  }, [selectedMode])

  return (
    <div className="quiz-fuild w-auto lg:w-[50rem] mx-auto bg-slate-700 p-4 rounded-xl grid gap-4">
      <div className="quiz-header text-white pb-4 md:col-span-1 col-span-2">
        {answers.length ? (
          <>
            <div className="quiz-title font-black text-3xl">
              Question {currentQuestion}
              <span className="font-light text-base ml-1 text-slate-400">/ {questionsMaxLength}</span>
            </div>
            <div className="quis-subtitle flex flex-wrap w-[30rem] text-slate-400">
              choice currect answer for quiestion:
              <div className="text-xl font-black text-white">
                Word is
                <span className="text-xl font-black text-teal-500 mx-2">{answer.word}</span>
                translate -
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        <div className="score-fuild bg-slate-800 rounded-xl p-6 my-2 w-full md:w-2/4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon="trophy"></FontAwesomeIcon>
              <span className="ml-2">{score}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon="star"></FontAwesomeIcon>
              <span className="ml-2">{bestScore}</span>
            </div>
          </div>
        </div>
      </div>

      {answers.length ? (
        <ul className="quiz-answers grid grid-rows-4 gap-4 mb-2 text-white md:col-span-1 col-span-2">
          {answers.map((i, id) => {
            return (
              <li
                key={id}
                onClick={() => handleClickAnswer(i.status)}
                className="w-full flex items-center py-2 px-4 bg-green-100 text-slate-800  rounded-[0.65rem] hover:bg-teal-500 hover:text-white cursor-pointer transition duration-250 ease-out hover:ease-in">
                {i.name}
              </li>
            )
          })}
        </ul>
      ) : (
        ''
      )}

      <div className="footer flex flex-wrap gap-2 md:gap-4 justify-center md:justify-between items-center col-span-2">
        <Button
          handleClick={handleRestart}
          name={answers.length ? 'restart' : 'start'}
          iconName={'arrows-rotate'}></Button>

        {answers.length ? (
          <>
            <Button handleClick={handleNewGame} name={'new game'} iconName={'plus-circle'}></Button>
            <Button handleClick={handleNextAnswers} name={'next'} iconName={'circle-chevron-right'}></Button>
          </>
        ) : (
          ''
        )}
        {!answers.length ? (
          <div className="select-mode flex gap-4 w-full justify-center md:w-auto md:justify-items-start">
            <Button handleClick={handleSelectMode} name={'10'} iconName={'trophy'}></Button>
            <Button handleClick={handleSelectMode} name={'100'} iconName={'trophy'}></Button>
            <Button handleClick={handleSelectMode} name={'infinity'} iconName={'trophy'}></Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default EnglishWord
