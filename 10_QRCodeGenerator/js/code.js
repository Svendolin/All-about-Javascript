
/* Function to download the image as a png file */
$(document).ready(function () {
  const element = $("#image"); // image element

  $("#download").click(function () { // When the button id="download" is clicked
    html2canvas(element, { // the image element from line 23 is converted to a canvas
      onrendered: function (canvas) {
        const imageData = canvas.toDataURL('image/png'); // the canvas is converted to a data url as PNG
        const newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#download").attr("download", "QRCode.png").attr("href", newData); // download the image as QRCode.png
      }
    });
  });
});


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

/* Function to let the download button appear when the QR Code is generated */
$(document).ready(function () {
  $("#QR").click(function () {
    $("#download").show();
  });
});


