import { getMinutesAndSeconds } from '/js/utils/time.utils.js'

export default class TimeRenderer {
    constructor( quizModel ) {
        this.quizModel = quizModel

        const timerEl = document.querySelector( '.js_timer' )
        this.elements = {
            timerEl,
            timeEl: timerEl.querySelector( '.time' ),
            minutesEl: timerEl.querySelector( '.minutes' ),
            secondsEl: timerEl.querySelector( '.seconds' ),
        }
    }

    render() {  
        const total_seconds = this.quizModel.settings.max_seconds_per_question
        quizStore.currentTime = getMinutesAndSeconds( total_seconds )

        this.setTheTime()
    }

    setTheTime() {
        const {
            minutesEl,
            secondsEl
        } = this.elements

        const {
            minutes,
            seconds
        } = quizStore.currentTime
        
        minutesEl.innerHTML = minutes
        secondsEl.innerHTML = seconds
    }

    
}