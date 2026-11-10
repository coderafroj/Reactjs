import Card from './Card'

function App() {
  

  return (
    <div className='w-full grid gap-4 grid-col-2 place-content-center h-screen bg-linear-150 via-gray-500 ring-amber-700 '>
    <div className=' text-blue-500'>hey coderafroj</div>
    <Card name='coderafroj' profession='software engineer' location="india"/>
    <Card name="sam alt" profession="machine learing engineer"location='usa'/>
    </div>
  )
}

export default App
