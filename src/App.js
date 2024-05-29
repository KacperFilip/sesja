import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react';
import './App.css';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [future, setFuture] = useState(Date.parse("June 27, 2024 12:00:00"))
  const [now, setNow] = useState(new Date())
  const [diff, setDiff] = useState(future - now)
  const [d, setD] = useState(Math.floor( diff / (1000*60*60*24) ))
  const [h, setH] = useState(Math.floor( diff / (1000*60*60) ))
  const [m, setM] = useState(Math.floor( diff / (1000*60) ))
  const [s, setS] = useState(Math.floor( diff / 1000 ))
  const [days, setDays] = useState(d)
  const [hours, setHours] = useState(h - d  * 24)
  const [minutes, setMinutes] = useState(m  - h * 60)
  const [seconds, setSeconds] = useState(s  - m  * 60)
  const [reward, setReward] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFuture(Date.parse("June 27, 2024 12:00:00"))
      setNow(new Date())
      setDiff(future - now)
      setD(Math.floor( diff / (1000*60*60*24) ))
      setH(Math.floor( diff / (1000*60*60) ))
      setM(Math.floor( diff / (1000*60) ))
      setS(Math.floor( diff / 1000 ))
      setDays(d)
      setHours(h - d  * 24)
      setMinutes(m  - h * 60)
      setSeconds(s  - m  * 60)
      diff <= 0 ? setReward(1) : setReward(0)
    }, 1000)
    return () => clearInterval(interval)
  }, [future, now, diff, d, h, m, s, days, hours, minutes, seconds, reward])


  return (
    <Card isBlurred className='mx-auto w-5/6 md:w-2/4 top-4 md:top-44 p-10 border-double border-8 border-lime-950 rounded-none'>
      <CardHeader>
         <h1 className='text-center mx-auto text-3xl'>KONIEC SESJI</h1>
      </CardHeader>
      <CardBody className='grid grid-cols-1 md:grid-cols-4 gap-y-5'>
        <div className='flex flex-col justify-center align-middle'>
          <span className='text-center text-5xl'>{diff >= 0 ? days < 0 ? 0 : days : 0}</span>
          <span className='text-center text-xs'>DNI</span>
        </div>
        <div className='flex flex-col justify-center align-middle'>
          <span className='text-center text-5xl'>{diff >= 0 ? hours < 10 ? "0" + hours : hours : 0}</span>
          <span className='text-center text-xs'>GODZIN</span>
        </div>
        <div className='flex flex-col justify-center align-middle'>
          <span className='text-center text-5xl'>{diff >= 0 ? minutes < 10 ? "0" + minutes : minutes : 0}</span>
          <span className='text-center text-xs'>MINUT</span>
        </div>
        <div className='flex flex-col justify-center align-middle'>
          <span className='text-center text-5xl'>{diff >= 0 ? seconds < 10 ? "0" + seconds : seconds : 0}</span>
          <span className='text-center text-xs'>SEKUND</span>
        </div>
      </CardBody>
      <CardFooter className='mt-5 py-6'>
        {reward === 1 ? <Button as={Link} href='https://drive.google.com/file/d/1t_MWkUi2kLVBcpOBYgQ_1dOjIhMTJH0R/view?usp=drive_link' download={true} radius='md' className='mx-auto border-double border-4 border-lime-950 py-6 bg-transparent animate-bounce'>Odbierz nagrodę</Button> : <Button isDisabled radius='md' className='mx-auto border-double border-4 border-lime-950 py-6 bg-transparent'>Odbierz nagrodę</Button>}
      </CardFooter>
      <Analytics/>
    </Card>
  );
}

export default App;
