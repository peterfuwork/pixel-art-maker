console.log("--> script")

var grid = document.querySelector('.grid');
var current = document.querySelector('.tool-box .colors');
var onlyColorClass = ["box","white"];
var colors = document.querySelectorAll('.color-palette .colors');

var toolbox = document.querySelector('.tool-box');
var click = document.querySelector('.tool-box .click');
var draw = document.querySelector('.tool-box .draw');
var clear = document.querySelector('.tool-box .clear');


/* Create all the boxes */
for(var i=0; i<25; i++) {
    var row = document.createElement('section');
    row.classList.add('row');
    grid.appendChild(row);
    for(var j=0; j<40; j++) {
        var div = document.createElement('div');
        div.classList.add('box');
        div.classList.add('white');
        row.appendChild(div);
    }
}
/* Grab all the boxes */
var boxes = document.querySelectorAll('.box');

/* Set color to current color */
function setColor() {
    this.setAttribute('class','box ' + onlyColorClass[1]);
}

/* Change boxes' color (default) */
for(var j=0; j<boxes.length; j++) {
    boxes[j].addEventListener('click', setColor);
}

/* Select a color */
for(var k = 0; k<colors.length; k++) {
    colors[k].addEventListener('click', function(){
        colors = this.getAttribute('class');
        onlyColorClass = colors.split(' ');
        current.classList = "colors " + onlyColorClass[1];
        console.log(current);
    })
}

/* Change boxes' color (Click) */
click.addEventListener('click', function() {
    draw.classList.remove('active');
    this.classList.add('active');
    for(var y=0; y<boxes.length; y++) {
        boxes[y].removeEventListener('mouseover', setColor);
        boxes[y].addEventListener('click', setColor);
    }
});

/* Change boxes' color (Draw) */
draw.addEventListener('click', function() {
    click.classList.remove('active');
    this.classList.add('active');
    for(var z=0; z<boxes.length; z++) {
        boxes[z].removeEventListener('click', setColor);
        boxes[z].addEventListener('mouseover', setColor);
    }
});

// Reset all the boxes to white
clear.addEventListener('click', function() {
    for(var b=0; b<boxes.length; b++) {
        boxes[b].setAttribute('class','box white');
    }
});










