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
    eletkor : parseInt(document.getElementById("eletkor").value),   
    magassag : parseInt(document.getElementById("magassag").value),   
    hazas : document.getElementById("hazas").checked 
    }
    emberek.push(obj)
    TablaKirajzol() 
}

function TablaKirajzol() {
    var s = "<table><tr><th>Név</th><th>Kor</th><th>Magasság</th><th>Házas</th></tr>"
    for (let i = 0; i < emberek.length; i++) {
        s += "<tr><td>"+emberek[i].nev+"</td><td>"+emberek[i].kor+"</td><td>"+emberek[i].magassag+"</td><td>"+emberek[i].hazas+"</td><tr>"
        if (emberek[i].hazas) {
            s += "Igen</td></tr>"
        }
        else
        {
            s+="Nem</td></tr>"
        }
    }
    s+="</table>"
    document.getElementById("tablazat").innerHTML = s;
}
TablaKirajzol()