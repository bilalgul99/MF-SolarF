import { useState, useEffect } from 'react'
import './App.css'
import LeftBar from './Components/LeftBar/LeftBar'
import RightBlock from './Components/RightBlock/RightBlock'
import axios from 'axios';



// stripe things 
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  async function getStripeKey() {
    const { data } = await axios.get('/api/mfsolars/v1/stripekey');
    setStripeKey(data.stripePublishableKey);
  }
  const [stripeKey, setStripeKey] = useState('');

  useEffect(() => {
    getStripeKey();
  }, []);

  return (
    <>

      <Elements stripe={loadStripe(stripeKey)}>
        <ToastContainer
          position="top-center"
          newestOnTop
          closeOnClick
        />
        <div style={{display:"flex"}}>
        <LeftBar />
        <RightBlock />
        </div>
      </Elements>
    </>
  )
}

export default App;
