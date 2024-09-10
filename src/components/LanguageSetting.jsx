import { useState } from 'react';
import Swap2 from '../assets/swap2.svg';

export default function LanguageSetting(props) {

  const [flexState, setflexState] = useState('flex-row')
  const [rotation, setrotation] = useState('rotate-90')

  function swapLangguage() {

    if (flexState === 'flex-row') {
      setflexState('flex-row-reverse')
      setrotation('-rotate-90')


    }
    else {
      setflexState('flex-row')
      setrotation('rotate-90')


    }
    // eslint-disable-next-line react/prop-types
    props.flipLanguage()
  }

  return (
    <div className={`flex ${flexState} justify-evenly items-center mt-10 mb-[-50px] w-screen delay-300`}>

      <div className='w-[20%] text-center delay-300 '>
        <h1 className="text-[150%] md:text-5xl w-auto font-type1 text-[#EBC051]">English</h1>
      </div>

      <img className={`duration-300 w-[8%] sm:w-[5%] md:w-[5%] pointer-events-all ${rotation}`} src={Swap2} onClick={swapLangguage} alt="Swap Icon" />

      <div className='w-[20%]  text-center'>
        <h1 className="text-[150%] md:text-5xl w-auto font-type1 text-[#EBC051]">German</h1>
      </div>

    </div>
  )
}