import { useEffect } from "react";

export default function DonateButton() {
  useEffect(() => {
    // Only append the script once
    if (!document.getElementById("paypal-donate-sdk")) {
      const script = document.createElement("script");
      script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
      script.charset = "UTF-8";
      script.id = "paypal-donate-sdk";
      script.onload = () => {
        if (window.PayPal && window.PayPal.Donation) {
          window.PayPal.Donation.Button({
            env: 'production',
            hosted_button_id: 'PXSG8X767F6CU',
            image: {
              src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
              alt: 'Donate with PayPal button',
              title: 'PayPal - The safer, easier way to pay online!',
            }
          }).render('#donate-button');
        }
      };
      document.body.appendChild(script);
    } else if (window.PayPal && window.PayPal.Donation) {
      // Script already loaded, just render button
      window.PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'PXSG8X767F6CU',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        }
      }).render('#donate-button');
    }
  }, []);

  return (
    <div id="donate-button-container" style={{ textAlign: "center", margin: "32px 0" }}>
      <div id="donate-button"></div>
    </div>
  );
}
