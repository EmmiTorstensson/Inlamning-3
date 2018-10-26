
// Här är en funktion som räknar ut en trinagels hypotenusa.
function hypotenusa(a, b){
    let svar = Math.sqrt((a*a)+(b*b));
    return svar.toFixed(2); // svaret får endast ha två deciamler.
}
// Längden på tringelns kateter matas in
console.log(hypotenusa(3,7));

