/* Function to generate QR Code */
function generateQRCode() {

  /* Define input and output variables */
  const textinput = document.getElementById("textinput").value;  /* Input text (We always catch a new value after clicking the button) */
  const qrcodeouput = document.getElementById("QRoutput"); /* Output QR Code */

  qrcodeouput.innerHTML = ""; /* Clear output when we want to generate a new input */


  /* Generates QR Code */
  new QRCode(qrcodeouput, { /* We need to call the const codeoutput */
    text: textinput,
    width: 250,
    height: 250,
    // colorDark: "#000000",
    // colorLight: "#000000",
  });

}

