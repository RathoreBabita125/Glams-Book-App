// const buyButtonHandler = async () => {

//     const payButton = document.getElementsByClassName('buyButton');
   
//     const payData = {
//       "amount": 100.00,
//       "customer_id": "jn",
//       "customer_phone": "8290909090",
//       "customer_name": "HI",
//       "customer_email": "abc@yest.om"
//     }

//     function initializeCashfreePayment(result) {
//     const cashfree = Cashfree({ mode: "sandbox" });
//     const { payment_session_id } = result;

//     const options = {
//       paymentSessionId: payment_session_id,
//       redirectTarget: "_self",
//     };
//     console.log(payment_session_id);
//     cashfree.checkout(options);

//     // showPaymentSuccess(paymentData);
//   }

//     try {
//       payButton.disabled = true;
//       payButton.textContent = "Processing...";

//       const response = await fetch("https://pg-integration.onrender.com/createOrder", {
//         method: "POST",
//         headers: {
//           "content-Type": "application/json",
//         },
//         body: JSON.stringify(payData),
//       });

//       const result = await response.json();
//       console.log(result);
//       initializeCashfreePayment(result);

//     } catch (err) {
//       console.log(err);
//     } finally {
//       payButton.disabled = false;
//       payButton.textContent = "Buy Now";
//     }
//   }


//   export default buyButtonHandler;