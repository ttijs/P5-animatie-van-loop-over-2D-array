let cols = 5;
let rows = 5;
let pixelArtArray = [];
let currentCol = 0;
let currentRow = 0;
let cellSize = 100;

let arrayKleuren = ["red", "orange", "yellow", "green"];

function setup() {
    //createCanvas(cols * cellSize, rows * cellSize);
    createCanvas(1400, 1200);
    frameRate(1); // Verlaag de snelheid zodat we de iteratie kunnen zien

    // Maak een 2D-array met willekeurige waarden
    for (let i = 0; i < rows; i++) {
        pixelArtArray[i] = [];
        for (let j = 0; j < cols; j++) {
            pixelArtArray[i][j] = int(random(4)); // willekeurige waarden tussen 0 en 9
        }
    }
}

function draw() {
    background(200);

    // Teken de grid en vul elke cel met een waarde
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Controleer of dit de huidige cel is

            let tekst = "";
            if (i === currentRow && j === currentCol) {
                fill(255, 204, 0); // Gele kleur voor de huidige cel
                tekst += "[" + i + "," + j + "]";
            } else if (i === currentRow) {
                fill("orange"); // Gele kleur voor de huidige cel
            } else {
                fill(200); // Grijs voor de andere cellen
            }

            tekst += "\r\n" + pixelArtArray[i][j];

            strokeWeight(1);
            stroke(0);
            rect(j * cellSize, i * cellSize, cellSize, cellSize);

            // Toon de waarde in de cel
            fill(0);
            textSize(32);
            textAlign(CENTER, CENTER);
            text(
                //array[i][j] + "\r\n[" + i + "," + j + "]",
                //"[" + i + "," + j + "]\r\n" + array[i][j] ,
                tekst,

                j * cellSize + cellSize / 2,
                i * cellSize + cellSize / 2
            );
        }
    }

    diplayArrayKleuren();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Controleer of dit de huidige cel is
            if (i === currentRow && j === currentCol) {
                strokeWeight(5);

                //textFont("Courier New");
                let hoeKomJeAanDeKleurenTekst = "";
                hoeKomJeAanDeKleurenTekst +=
                    "Dit is de code voor het kleuren van de blokjes:\r\n";
                hoeKomJeAanDeKleurenTekst +=
                    "fill ( arrayKleuren[ pixelArtArray[i][j] ] ) \r\n";
                hoeKomJeAanDeKleurenTekst += "\r\n";
                hoeKomJeAanDeKleurenTekst +=
                    "pixelArtArray[i][j] wordt het getal " +
                    pixelArtArray[i][j] +
                    "\r\n";
                hoeKomJeAanDeKleurenTekst +=
                    "dus wordt er " +
                    pixelArtArray[i][j] +
                    " ingevuld in arrayKleuren[...]\r\n";
                hoeKomJeAanDeKleurenTekst +=
                    "en arrayKleuren[" +
                    pixelArtArray[i][j] +
                    "] wordt " +
                    arrayKleuren[pixelArtArray[i][j]] +
                    "\r\n";
                hoeKomJeAanDeKleurenTekst +=
                    "dus wordt de kleur fill(" +
                    arrayKleuren[pixelArtArray[i][j]] +
                    ")\r\n";
                push();
                strokeWeight(1);
                textAlign(LEFT, TOP);
                text(hoeKomJeAanDeKleurenTekst, (cols + 1) * cellSize, 550);
                pop();
            } else {
                strokeWeight(1);
            }
            fill(arrayKleuren[pixelArtArray[i][j]]);
            rect(
                j * cellSize + (cols + 1) * cellSize,
                i * cellSize,
                cellSize,
                cellSize
            );

            // Toon de waarde in de cel
            fill(0);
            textSize(32);
            textAlign(CENTER, TOP);
            text(
                //array[i][j] + "\r\n[" + i + "," + j + "]",
                //pixelArtArray[i][j],

                j * cellSize + cellSize / 2 + (cols + 1) * cellSize,
                i * cellSize + cellSize / 2
            );
        }
    }

    // Toon de array structuur als tekst onder de grid
    displayArrayAsText();

    // Update de huidige positie in de for-loop (net als een dubbele for-loop over een 2D-array)
    currentCol++;
    if (currentCol >= cols) {
        currentCol = 0;
        currentRow++;
    }

    // Als we aan het einde van de array zijn, stop de animatie
    if (currentRow >= rows) {
        //        noLoop(); // Stopt de draw-loop
        currentCol = 0;
        currentRow = 0;
    }
}


function displayArrayAsText() {
    // Toon de 2D-array als een string onder de grid
    let arrayText = "";

    arrayText += "let pixelArtArray = [\n";

    for (let i = 0; i < rows; i++) {
        arrayText += "\t[";
        for (let j = 0; j < cols; j++) {
            arrayText += pixelArtArray[i][j];
            if (j < cols - 1) {
                arrayText += ", ";
            }
        }
        arrayText += "]\n"; // Nieuwe regel na elke rij
    }
    arrayText += "]\n";

    // Stel tekstuitlijning en grootte in
    fill(0);
    textSize(32);
    strokeWeight(1);
    textAlign(LEFT, TOP);
    text(arrayText, 10, rows * cellSize + 100); // Zet de tekst onder de grid
}

function diplayArrayKleuren() {
      textAlign(LEFT);
    let arrayKleurenInTekst =
        'let arrayKleuren = ["' +
        arrayKleuren.join('", "') +
        '"] \r\ndus \r\n\r\n';
    text(arrayKleurenInTekst, 20, 980);

    let arrayKleurenIndexInTekst = arrayKleuren.map((kleur, index) => {
        return "[" + index + "] = " + kleur + "\r\n";
    });
    textAlign(LEFT, TOP);
    text(arrayKleurenIndexInTekst.join(""), 20, 1000);
}