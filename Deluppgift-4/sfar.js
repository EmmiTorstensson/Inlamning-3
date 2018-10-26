
// En funktion som läser in en sfärs radie för att sedan räkna ut volym och area. 
function sfar(radie){
    let volym = (Math.pow(radie, 3)*4*Math.PI)/3;
    let area = (4*Math.PI)*(Math.pow(radie, 2))
    return 'Sfärens volym är: ' + volym.toFixed(2) + 'cm3 och arena är: ' + area.toFixed(2) + 'cm2.';
}

// Här matas sfärens radie in
console.log(sfar(4));