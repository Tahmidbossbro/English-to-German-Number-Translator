import Zone from './components/Zone';
import Header from './components/Header';
import LanguageSetting from './components/LanguageSetting';
import { useState } from 'react';

function App() {


  const [currentLanguage, setCurrentLanguage] = useState('English')
  const [data_1, setData_1] = useState('')
  const [data_2, setData_2] = useState('')

  function flipLanguage() {

    var x = data_1;
    var y = data_2;
    

    setCurrentLanguage(currentLanguage === 'English' ? 'German' : 'English');
    setData_1(y)
    setData_2(x)

  }

  function getData_1(data) {
    setData_1(data)
  }
  function getData_2(data) {
    setData_2(data)
  }

  return (
    <div className="bg-[#295F98] h-screen flex md:justify-center items-center flex-col space-y-12 overflow-hidden">
      <Header />
      <LanguageSetting flipLanguage={flipLanguage} />
      <Zone getData_1={getData_1} getData_2={getData_2} data_1={data_1} data_2={data_2} language={currentLanguage} />
    </div>

  )
}

export default App
