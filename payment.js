const payment = document.querySelector(".payment");

function paywithSeerbit() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  let currentProductPrice = document
    .querySelector(".productPrice")
    .textContent.replace(/[#K]/g, "");
  //   console.log(fullname, email, currentProductPrice);

  SeerbitPay(
    {
      //replace with your public key
      public_key: import.meta.env.VITE_PAYMENT_KEY,
      tranref: new Date().getTime(),
      currency: "NGN",
      country: "NG",
      amount: `${currentProductPrice}.00`,
      email,
      //optional field. Set to true to allow customer set the amount
      setAmountByCustomer: false,
      full_name: fullname, //optional
      tokenize: false, // set to true to allow token capture
      //   planId: "123456abcd", // subcription plan id.
      callbackurl: "http://localhost:5173/",
    },
    function callback(response, closeModal) {
      console.log(response); //response of transaction
    },
    function close(close) {
      console.log(close); //transaction close
    }
  );
}

const checkout = document.getElementById("checkout-form");
checkout.addEventListener("submit", (e) => {
  e.preventDefault();
  payment.style.display = "none";
  paywithSeerbit();
});
