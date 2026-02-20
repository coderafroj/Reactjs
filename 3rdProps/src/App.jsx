import './App.css'
import Card from './components/Card'
import logo from './assets/react.svg'
function App() {
 const s={name:"kartik koli",
  age:22
 }

  return (
    <>
      <h1 className='text-orange-600'>coderafroj </h1>
      <Card name="sohil beta " data={s} b={{name:'afroj'}} job="barber" logo={logo}/>
      <Card name="rahul babu" job='founder of bytecore' logo={logo}/>
      <Card name="coderafroj" job='berozgaar' logo={logo}/>
      <Card name="sohil beta " job="barber"/>
        <Card name="ram lakhan " job="cs teacher"/>

    </>
  )
}

export default App
