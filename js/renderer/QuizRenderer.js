import ButtonRenderer from './ButtonRenderer.js'
import QuestionRenderer from './QuestionRenderer.js'
import TimeRender from './TimeRender.js'

export default class QuizRenderer {
    constructor( quizModel ) {
        this.quizModel = quizModel
        this.renderers = [
            ButtonRenderer,
            QuestionRenderer,
            TimeRender
        ]
    }

    render() {
        for (const RendererClass of this.renderers) {
            const renderer = new RendererClass( this.quizModel )
            renderer.render()
        }
    }
}