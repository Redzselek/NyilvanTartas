console.log("Hello")

var emberek = [
    {
        nev: "Tóth Zoltán", eletkor: 43, magassag: 180, hazas: true
    },

    {
        nev: "Egyedi Róbert", eletkor: 18, magassag: 175, hazas: false
    },
    
    {
        nev: "Ebéd Elek", eletkor: 20, magassag: 182, hazas: true
    }
]

var hazasokSzama = 0

for(var i = 0; i<emberek.length; i++)
{
    if (emberek[i].hazas == true) {
        hazasokSzama++;
    }
}

console.log(hazasokSzama);

function Hozzaad() 
{
    var obj = { 
    nev : document.getElementById("nev").value,   
    eletkor : parseINT(document.getElementById("eletkor").value),   
    magassag : parseINT(document.getElementById("magassag").value),   
    hazas : document.getElementById("hazas").checked,    
    }
    emberek.push(obj)
    
}