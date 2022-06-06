// Template Strings / Literals

let client = {
  name : {
    first : 'Princess',
    last : 'Zelda',
    middle: 'of Hyrule'
  },
  purchase: {
    qty: 3,
    item: 'empty jar',
    price: 50,
  },
  shop: "Beedle's Ship Shop"
}


// With Concatenation just on ONE LINE:
console.log(client.name.first + ' ' + client.name.last + ' purchased ' + client.purchase.qty + ' ' + client.purchase.item + '/s')
// With Concatenation AND Interpolation ${...} as a TEMPLATE STRING `` which can be shown in MULTIPLE LINES:
console.log(`${client.name.first} ${client.name.last} 
purchased ${client.purchase.qty} 
${client.purchase.item}/s`)


function calculatePrice(qty, price) {
  return qty * price
}


let receipt = `
Hello ${client.name.first},
Thank you for purchasing ${client.purchase.qty} ${client.purchase.item}(s).

Order Details: 
    Buyer: ${client.name.first} ${client.name.last}, ${client.name.middle}.
    ${client.purchase.qty} x $${client.purchase.price} = $${calculatePrice(client.purchase.qty, client.purchase.price)} of ${client.purchase.item}

Please come again! ${client.shop}

`
console.log(receipt)


let myTemplate = `
<header>
  <h1>Hello ${client.name.first}!</h1>
  <small>: )</small>
</header>
`

let myElement = document.createElement('div')
myElement.innerHTML = myTemplate
document.querySelector('body').appendChild(myElement)