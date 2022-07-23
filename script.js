// Gather elements
const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex')

// Add button event
btn.addEventListener('click', generateColors);


function generateColors()
{
    for (let i=0; i<color.length; i++)
    {
        //have random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        //assign random color as background
        color[i].style.background = "#" + randomColor;

        //animation
        color[i].classList.add('fade-in');
        setTimeout(() => color[i].classList.remove('fade-in'),400)

        //add the hexcode text
        hex[i].innerHTML = randomColor;
    }
}

//Page load
generateColors();