import * as React from 'react';
import { Link } from 'react-router-dom';

function BuyButtonComponent() {
  // Paste the stripe-buy-button snippet in your React component
  return (

   <div className='payment'>
 <div className='paymentcontent'>
  <p>
  Being able to provide lifesaving medical treatment to hundreds of stray cats every year is incredibly rewarding for us, but also costly. We couldn’t do it without the support we receive from our friends, family and donors.

Your donation would go towards:
Sterilization or spay/neuter of stray cats
Inpatient care for critically sick or injured cats
Emergency surgeries such as amputations/dental extractions
Special diets for ill or underweight cats
  </p>
 </div>

   < Link to="https://checkout.stripe.com/c/pay/cs_test_a1Pq8iv9Jz9YjGdr5lfOKT2fXpiYGEkrmHI9tcB790SKFDT1vnXxigkL15#fidkdWxOYHwnPyd1blpxYHZxWjA0S0hnSzxWQDdtbEBMQUFgPGo9MHN0f11mYUkzcVBkUU9Nd0tUQGlBfTQwfE1LPTU9SHBhZ210ZHRvPGxmTnZTS2F%2FdUlcNGd3QW43fD1HTnBRMHU0TWNENTV8V3xhU2xwNycpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVpkQFA3PG08SjFiVzE0a2RhVFQneCUl" target="_blank" rel="noopener noreferrer">
     <button className='donatebutton'>DONATE</button>
   </Link>
  
 </div>
 
  );
}

export default BuyButtonComponent;