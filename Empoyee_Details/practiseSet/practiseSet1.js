let product=[
    {product:"laptop",stock:5},
    {product:"mobile",stock:2},
    {product:"fan",stock:3},
];
for(let i =0;i<product.length;i++)
{
    console.log(product[i].product +" : "+ product[i].stock);
}

const passwords= ["Password123", "short", "ValidPass123", "too_long_passwordexample", "12345"];
function validatePasswords (passwords) 
{
    const regex=/^[a-zA-Z0-9]{8,20}$/;
    for (let i=0; i < passwords.length; i++)
    {
        if (regex.test(passwords[i])) {
            console.log(`${passwords[i]} is valid.`);
} else {
            console.log(`${passwords[i]} is invalid.`);
}
    }
}
validatePasswords(passwords);
const regex=/^[a-zA-Z0-9]{8,20}$/;
console.log(regex.test("hafdbG123"));
console.log("short");

const orders= [
{ item: "Espresso", quantity: 2, price: 3.5},
{ item: "Latte", quantity: 3, price: 4.0 },
{ item: "Cappuccino", quantity: 1, price: 4.5}
];
function generateReceipt (orders){
    let total=0;
    for(let i=0;i<orders.length;i++)
    {
        total+=orders[i].quantity*orders[i].price;

    }
    console.log("Total bill is : "+total);
}
generateReceipt(orders);