
// Skapar en funktion som returnerar en array med 1000 element. Elementen är siffror mellan 1-6.
function randomDice(){
    let array = [];
    for(let i = 0; i < 1000; i++){
        array[i] = Math.floor(Math.random() * 6) +1;
    }
    return array; 
}

// En funktion som printar ut en tabell
function print(){

    /* Först kallas dunktionen randomDice() för att generera 
    en array som är grunden för våran tabell. */

    let listaSlag = randomDice();
    
    // Deklarerar mina variablar vars alla värde börjar på 0
    let ett = 0;
    let tva = 0;
    let tre = 0;
    let fyra = 0;
    let fem = 0;
    let sex = 0;

    // En for loop som kör igenom hela min array
    for(let i = 0; i <= listaSlag.length; i++){
    
    // Testar flera gånger om aktuellt slag passar in på ett villkor
    // Om det gör det ökas den variabeln med 1.  
    if(listaSlag[i] === 1){
        ett++;  
    }
    if(listaSlag[i] === 2){
        tva++;
    }
    if(listaSlag[i] === 3){
        tre++;
    }
    if(listaSlag[i] === 4){
        fyra++;
    }
    if(listaSlag[i] === 5){
        fem++;
    }
    if(listaSlag[i] === 6){
        sex++;
    }
    }

    // Funktionen skriver ut en tabell med antalet slag
    console.log('\nNummer\tAntal\n\n' +
                'Ettor\t' + ett + 
                '\nTvåor\t' + tva +
                '\nTreor\t' + tre +
                '\nFyror\t' + fyra + 
                '\nFemmor\t' + fem +
                '\nSexor\t' + sex + '\n');

}
    
// Funktionen print kallas för att skriva ut en tabell.
print();