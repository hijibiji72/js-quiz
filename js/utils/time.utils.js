
export const getMinutesAndSeconds = total_seconds => {
    
    const minutes = Math.floor(total_seconds / 60)
    const seconds = total_seconds - (minutes * 60)

    return {
        minutes,
        seconds
    }
}