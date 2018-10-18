
// En konstruktor som skapar "skal"-objekt. Av Person kan sedan flera objekt med samma parametrar skapas. 
function Person(namn, email, mobil, adress){
    this.namn = namn;
    this.email = email;
    this.mobil = mobil;
    this.adress = adress;
    
    // I objektet finns en metod som skall skriva ut adressen enligt svensk standard.
    this.print = function(){
        console.log(this.namn +'\n\n'+ 
        this.adress.gatunamn + '\n' + 
        this.adress.postnr + ' ' + 
        this.adress.ort);
    }
}

// En till konstruktor som skapar adress-objekt. Dessa ska sedan läggas in i Person-objekten.
function Adress(gatunamn, postnr, ort){
    this.gatunamn = gatunamn;
    this.postnr = postnr;
    this.ort = ort;
}


// Först skapas en adress som sedan läggs in på fjärde parameterns i obejktet emmi.
let adress1 = new Adress ('Garvargatan 5', '11221', 'Stockholm');
let emmi = new Person ('Emmi Torstensson', 'emmitors@gmail.com', '0737193977', adress1);

// En nytt objekt där jag återanvänder adressen.
let cecilia = new Person ('Cecilia Andersson', 'ca@gmail.com', '0789234567', adress1 );

// Sist kallas metoden print som skriver ut namn + adress
emmi.print();
console.log();
cecilia.print();