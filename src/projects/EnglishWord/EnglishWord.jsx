import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import words from './data/words'

export const EnglishWord = () => {
  /* CAN BE CHANGED */
  const questionsMaxLength = 10 // max length for quiestions
  const answersMaxLength = 3 // max length answers with true answer

  /* STATE */
  const [currentQuestion, setCurrentQuestion] = useState(1) // current question number

  const [answer, setAnswer] = useState('') // question word == answer word
  const [answers, setAnswers] = useState([]) // all answers

  /* SCORE */
  const [score, setScore] = useState(0) // current score
  const [bestScore, setBestScore] = useState(0) // high score

  /* FUNTCTION`s */
  const randomValue = () => Math.ceil(Math.random() * (words.length - 1) + 1) // random number

  const getRandom = () => {
    setAnswer(words[randomValue()]) // get random word from data
  }

  const handleClickAnswer = (value) => {
    if (value == true) {
      setCurrentQuestion((prev) => prev + 1)
      setScore((prev) => prev + 1)
      getRandom()
    } else {
      handleRestart()
    }
  } // check answer

  const handleRestart = () => {
    setCurrentQuestion(1)
    setScore(0)
    getRandom()
  } // reset current sesion

  const handleNextAnswers = () => {
    setCurrentQuestion((prev) => prev + 1)
    getRandom()
  } // go to next question / get new random word

  /* WATCHER`s */

  useEffect(() => {
    score > bestScore ? setBestScore(score) : '' // if score > global highscore
  }, [score])

  useEffect(() => {
    if (answer != '') {
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

  return (
    <div className="quiz-fuild w-auto lg:w-[50rem] mx-auto bg-slate-700 p-4 rounded-xl grid grid-cols-2">
      <div className="quiz-header text-white pb-4">
        {answers.length ? (
          <>
            <div className="quiz-title font-black text-3xl">
              Question {currentQuestion}
              <span className="font-light text-base ml-1">/ {questionsMaxLength}</span>
            </div>
            <div className="quis-subtitle">{answer.word}</div>
          </>
        ) : (
          ''
        )}
        <div className="score-fuild bg-slate-800 rounded-xl p-6 my-2 w-2/4">
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

      <ul className="quiz-answers grid grid-rows-4 gap-4 mb-2 text-white">
        {answers.map((i, id) => {
          return (
            <li
              key={id}
              onClick={() => handleClickAnswer(i.status)}
              className="flex items-center py-2 px-4 bg-green-100 text-slate-800  rounded-[0.65rem] hover:bg-teal-500 hover:text-white cursor-pointer transition duration-250 ease-out hover:ease-in">
              {i.name}
            </li>
          )
        })}
      </ul>
      <div className="footer flex justify-between items-center col-span-2">
        <Button
          handleClick={handleRestart}
          name={answers.length ? 'restart' : 'start'}
          iconName={'arrows-rotate'}></Button>
        {answers.length ? (
          <Button handleClick={handleNextAnswers} name={'next'} iconName={'circle-chevron-right'}></Button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
