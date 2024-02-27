const form  = document.getElementById("form")
const select = document.getElementById("selection")
const select2 = document.getElementById("selection2")
const select3 = document.getElementById("selection3")
const banane1 = document.getElementById("Banane") 
const pomme1 = document.getElementById("Pomme") 
const result = document.getElementById("result")
const pomme = []
const orange = []
const banane = []
form.onsubmit =(event) =>{ 
    event.preventDefault()
pomme.push (select.value)
const pommeV = (pomme1.value ) 
    console.log(pommeV)
result.innerText = "Pomme Montant -- " +  ( pommeV)   + (orange) + orange.value + (banane) + banane.value

};

form2.onsubmit =(event) =>{ 
    event.preventDefault()
orange.push (select2.value)
result.innerText = (banane)+(orange)+(pomme)   


};
form3.onsubmit =(event) =>{ 
    event.preventDefault()
orange.push (select3.value)
result.innerText =(banane)+(orange)+(pomme)   

};

