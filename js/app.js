import quizStore from './store/quiz.store.js'
import quizModel from './model/quiz.model.js'
import QuizRenderer from './renderer/QuizRenderer.js'

window.quizStore = quizStore

const quizRenderer = new QuizRenderer( quizModel )
quizRenderer.render()