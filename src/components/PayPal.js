"use client";

import React, { useEffect } from "react";

function PaymentPortal() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.type = "text/javascript";
      script.onload = () => {
        // PayPal script has loaded; now you can initialize PayPal buttons
        window.paypal
          .Buttons({
            // Set up the transaction
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "0.01", // Can be dynamically set
                    },
                  },
                ],
              });
            },
            // Finalize the transaction
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}!`);
              });
            },
          })
          .render("#paypal-button-container");
      };
      document.head.appendChild(script);
    };

    // Check if PayPal script is already loaded
    if (window.paypal) {
      // If PayPal SDK is already loaded, directly initialize the buttons
      window.paypal
        .Buttons({
          // PayPal Buttons configuration...
        })
        .render("#paypal-button-container");
    } else {
      // If not loaded, add the script to load PayPal SDK
      addPaypalScript();
    }
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Payment Portal</h2>
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default PaymentPortal;
