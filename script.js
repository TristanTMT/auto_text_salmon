let texte = document.getElementById("texte");
let prog = "J'aime La Programmation !";
let index = 1;

setInterval(writeText, 200);

function writeText()
{
    texte.innerHTML = prog.slice(0, index);

    index++;

    if(index > prog.length)
    {
        index = 1;
    }
}