import './App.css'
import Cart from './components/Cart'
import Cards from './components/Cards'
function App() {


  return (
    <>

      <h1 className="text-4xl text-center font-bold">Course Registration</h1>
      <div className="w-11/12 mx-auto flex">
        <div className="w-9/12">

          <Cards></Cards>
        </div>
        <div>
       <Cart></Cart>
        </div>

      </div>
    </>
  )
}

export default App
