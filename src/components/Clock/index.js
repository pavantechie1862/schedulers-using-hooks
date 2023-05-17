import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  const now = time.toLocaleTimeString()

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    console.log('timer function')

    return () => {
      clearInterval(timerId)
      console.log('clean up  functions')
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time>{now} </Time>
    </ClockContainer>
  )
}

export default Clock
