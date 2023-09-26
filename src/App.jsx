import './App.css'
import Cart from './components/Cart'
import Cards from './components/Cards'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [credit, setCresit] = useState(0);
  const [prices, setprices] = useState(0);
  const [remainingHour, setRemaining] = useState(20);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelectButton = (data) => {
    const { price, credit_hour } = data;
    const isCardSelected = selectedCards.some((card) => card === data.title);


    if (!isCardSelected && credit <= 20) {
      const newcredit = credit + credit_hour;
      const newRemaining = remainingHour - credit_hour;
      const newPrice = prices + parseFloat(price);
      if (newcredit <= 20) {
        setCresit(newcredit);
        setRemaining(newRemaining);
        setSelectedCards((prevSelectedCards) => [...prevSelectedCards, data.title]);
        setprices(newPrice);

      } else {
        toast.error('You can not take more the 20hr Credit', {
          position: 'top-right',
          autoClose: 6000,
        });
      }





    }
    else {
      // Show a toast notification for selecting a course twice
      toast.error('This course has already been selected!', {
        position: 'top-right',
        autoClose: 6000, //  6 seconds
      });



    }


  }
  console.log(selectedCards);
  return (
    <div className="bg-[#f3f3f3]">

      <h1 className="text-4xl text-center font-bold mb-6">Course Registration</h1>
      <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-4">
        <div className="w-9/12">

          <Cards handleSelectButton={handleSelectButton}></Cards>
        </div>
        <div >
          <Cart credit={credit} price={prices} remainingHour={remainingHour} selectedCards={selectedCards}></Cart>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default App
