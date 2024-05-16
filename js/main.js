const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "yellow";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#e6f7f6";


class Circle {//Constructor que carga los valores predeterminados del objeto
    constructor(x, y, radius, color, text, backcolor,) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) { //metodo para renderizar el objeto 
        context.beginPath();

        // Dibujar y rellenar el círculo primero
        context.fillStyle = this.backcolor;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI *2, false); //renderiza un arco  el 0 es donde empiza y el math.pi*2 es donde termina
        context.fill();
        context.lineWidth = 2; //ancho de la linea
        context.strokeStyle = this.color;
        context.stroke(); //hace el dibujo        

        // Dibujar el texto encima del círculo
        context.fillStyle = "white";
        context.textAlign = "center"; //aliniacion horizontal
        context.textBaseline = "middle"; //aliniacion vertical
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY); //renderiza un texto en el centro del objeto

        context.closePath(); //termina de hacer el renderizado del objeto
    }
}

 //  valores 
let miCirculo = new Circle(canvasOOP.width/2, canvasOOP.height/2, 50, 'red', 'Tec','rgb(58, 158, 229)');
miCirculo.draw(ctx);


// Función para asegurar que los círculos no se corten en los bordes del canvas
function validPlacement(x, y, radius, canvas) {
    return (x - radius > 0 && x + radius < canvas.width && y - radius > 0 && y + radius < canvas.height);
}


// Dibujar círculo en el segundo canvas (aleatorio)
let randomX, randomY, randomRadius;
do {
    randomRadius = Math.floor(Math.random() * 50 + 30); // Radio entre 30 y 80
    randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
    randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;
} while (!validPlacement(randomX, randomY, randomRadius, canvasRandom));
let miCirculoRandom = new Circle(randomX, randomY, randomRadius, 'black', 'Tec', 'rgb(242, 172, 32)');
miCirculoRandom.draw(ctxRandom);

// Dibujar múltiples círculos en el tercer canvas
let arrayCircle = [];
for (let i = 0; i < 10; i++) {
    do {
        randomRadius = Math.floor(Math.random() * 30 + 30); // Radio entre 30 y 60
        randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
        randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
    } while (!validPlacement(randomX, randomY, randomRadius, canvasMultiple));

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1, 'rgb(88, 242, 32)');
    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
}