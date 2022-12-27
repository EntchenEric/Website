
var board;
var score = 0;
var rows = 4;
var columns = 4;
let gameover = false

window.onload = function () {
    setGame();
}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile)
        }
    }
    spawnTile(true)
    spawnTile(true)
}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) {
                return true
            }
        }
    }
    return false
}

function gameOver(){
    let body = document.getElementById("body");
    let gameoverdiv = document.createElement("div")
    console.log(gameoverdiv)
    gameoverdiv.id = "gameover";
    let element = document.createElement("h1")
    element.innerText = "Spiel Verloren."
    gameoverdiv.appendChild(element);
    element = document.createElement("h1")
    element.innerText = "Deine Punkte: " + score
    gameoverdiv.appendChild(element);
    element = document.createElement("h2")
    element.innerText = "Rekord: " + 0
    gameoverdiv.appendChild(element);
    element = document.createElement("h2")
    element.innerText = "Weltrekordhalter: " + "ich"
    gameoverdiv.appendChild(element);
    restartbutton = document.createElement("button")
    restartbutton.innerText = "Neustarten"
    restartbutton.addEventListener('click', function () {
        window.location.reload();
    })
    gameoverdiv.appendChild(restartbutton);



    body.prepend(gameoverdiv);
}

function spawnTile(hastobe2 = false) {
    if (!hasEmptyTile()) {
        gameover = true
        gameOver();
        return;
    }

    let found = false;
    let weight2 = 0
    let weight4 = 0
    let weight8 = 0
    if (hastobe2 == false) {
        weight2 = 70
        weight4 = 30
        weight8 = 10
    } else {
        weight2 = 100
        weight4 = 0
        weight8 = 0
    }
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if (board[r][c] == 0) {
            overallweight = weight2 + weight4 + weight8
            let rng = Math.floor(Math.random() * overallweight);
            let num = 2
            if (rng <= weight2) {
                num = 2
            } else if (rng <= weight2 + weight4) {
                num = 4
            } else if (rng <= weight2 + weight4 + weight8) {
                num = 8
            }
            board[r][c] = num;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = num;
            tile.classList.add("x" + num.toString());
            found = true
        }
    }
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile")
    if (num > 0) {
        tile.innerText = num;
        if (num < 4096) {
            tile.classList.add("x" + num.toString());
        } else {
            tile.classList.add("x8192")
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (gameover == false) {
        if (e.code == "ArrowLeft") {
            spawnTile()
            slideLeft();

        }
        else if (e.code == "ArrowRight") {
            spawnTile()
            slideRight();
        }
        else if (e.code == "ArrowUp") {
            spawnTile()
            slideUp();
        }
        else if (e.code == "ArrowDown") {
            spawnTile()
            slideDown();
        }
    }
    document.getElementById("score").innerText = score
})

function filterZero(row) {
    return row.filter(num => num != 0)
}

function slide(row) {
    row = filterZero(row);

    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }

    row = filterZero(row)

    while (row.length < columns) {
        row.push(0);
    }

    return row;
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r] = row

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]]
        row = slide(row)
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]]
        row.reverse()
        row = slide(row)
        row.reverse()
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}