// alert(`Hi There!!`)
// console.log(`Hello!!`)
var click = 0 
function ageInDays(){
    if(click==0){
    let birthYear = prompt(`Whats your birth Year .. dear frined?`)
    console.log("birthYear", birthYear, birthYear.length, !birthYear.length, !!birthYear.length )
    if(birthYear != null && !!birthYear.length){
    var days = ( new Date().getFullYear() - birthYear) * 365;
    var h1 = document.createElement('h1')
    var text = document.createTextNode(`You are ${days} days old :) !!`)
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1)
    click = 1;
    }
    }
}

function reset(){
    document.getElementById('ageInDays').remove()
    click = 0 
}

// ?Second Challenge
function generateCat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    image.height = "200"
    image.width = "200"
    div.appendChild(image)
}

// Challenge 3: Rock Paper Scissor

function rpsGame(imageEle){
    // console.log("imageEle", imageEle)
    let userChoice = imageEle.id;
    console.log("userChoice", userChoice)
    let botChoice = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)]
    console.log("botChoice", botChoice)
    let userPoint, botPoint

function findWinner(userChoice, botChoice){
    const rpsDatabase = { 
        "rock":{"scissor": 1, "rock": 0.5, "paper": 0},
        "paper":{"scissor": 0, "rock": 1, "paper": 0.5},
        "scissor":{"scissor": 0.5, "rock": 0, "paper": 1}
    }

    userPoint = rpsDatabase[userChoice][botChoice]
    botPoint = rpsDatabase[botChoice][userChoice]

    console.log("userPoint", userPoint)
    console.log("botPoint", botPoint)
    
}

findWinner(userChoice, botChoice)

function outputMessage(userPoint){
    if(userPoint === 1){
        return{"message":"YOU WON!!", "color": "green"}
    }else if((userPoint === 0.5)){
        return{"message":"ITS TIE!!", "color": "yellow"}
    }else{
        return{"message":"YOU LOST!!", "color": "red"}
    }
}

console.log(outputMessage(userPoint))
const result = outputMessage(userPoint)

const imgDatabase = {
    "rock" : document.getElementById("rock").src,
    "paper" : document.getElementById("paper").src,
    "scissor" : document.getElementById("scissor").src,
}

function updateFrontEnd(userChoice, botChoice, result){
    console.log("message",result.message)
    console.log("color",result.color)
    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissor").remove()

    let userDiv = document.createElement("div")
    let userImage= document.createElement("img")
    userImage.setAttribute("src", imgDatabase[userChoice])
    userDiv.appendChild(userImage)
    document.getElementById("flex-box-rps-div").append(userDiv)

    let messageDiv = document.createElement("div")
    let messageH1 = document.createElement("h1")
    let textMsg = document.createTextNode(result.message)
    messageH1.appendChild(textMsg)
    messageH1.setAttribute("style", `color: ${result.color}; word-wrap: normal; font-size: 50px; width:150px;`)
    messageDiv.appendChild(messageH1)
    document.getElementById("flex-box-rps-div").append(messageDiv)

    let botDiv = document.createElement("div")
    let botImage= document.createElement("img")
    botImage.setAttribute("src", imgDatabase[botChoice])
    botDiv.appendChild(botImage)
    document.getElementById("flex-box-rps-div").append(botDiv)

}

updateFrontEnd(userChoice, botChoice, result)

}

// Challenge 4 : Change Button Colors

const buttonsInPage = document.getElementsByTagName("button")
// console.log("buttonsInPage", buttonsInPage)
const btnList = Array.from(buttonsInPage)
// console.log("btnList", btnList)
const btnColorsInOrder = btnList.map(btn => btn.classList[1])
// console.log("btnColorsInOrder", btnColorsInOrder)

const changeBtnCol = (btnColor) => {
    // console.log("btnColor", btnColor)
    // console.log("btnColorValue", btnColor.value)
    const color = btnColor.value

    const colorToAllBtns = (buttonColor)=>{
        console.log("buttonColor", buttonColor)
        btnList.forEach((element, index) => {
            element.classList.remove(element.classList[1])
            element.classList.add(buttonColor)
        });
    }

    const randomColorToAllBtns = () =>{
        btnList.forEach((element, index)=>{
            const randomColor = ["red", "yellow", "blue", "green"][(Math.floor(Math.random() * 4))]
            console.log("randomColor", randomColor)
            element.classList.remove(element.classList[1])
            element.classList.add(btnColorData[randomColor])
        })
    }
    
    const resetBtnsColor = () =>{
        btnList.forEach((element, index)=>{
            element.classList.remove(element.classList[1])
            element.classList.add(btnColorsInOrder[index])
        })
    }
    const btnColorData = {
        red: "btn-danger",
        yellow: "btn-warning",
        blue: "btn-primary",
        green: "btn-success",
    }

    if(color === "random"){
        randomColorToAllBtns()
    }else if(color === "reset"){
        resetBtnsColor()
    }else{
        colorToAllBtns(btnColorData[color])
    }
}

// Challenge 5 : BlackJack

let blackJackGame = {
    you : {scoreSpan:"#yourScore", div:"#your-box", score:0},
    dealer : {scoreSpan:"#dealerScore", div:"#dealer-box", score:0},
    card : [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    hit : true,
    stand : false,
    deal : false
}

const YOU = blackJackGame['you']
const DEALER = blackJackGame['dealer']
const hitSound = new Audio('./sounds/swish.m4a')
const winSound = new Audio('./sounds/cash.mp3')
const lossSound = new Audio('./sounds/aww.mp3')

const hitbtn= document.querySelector('#hitBtn').addEventListener('click', blackJackHit);
const standBtn= document.querySelector('#standBtn').addEventListener('click', blackJackStand);
const dealBtn= document.querySelector('#dealBtn').addEventListener('click', blackJackDeal);
let stop = false;

function blackJackHit(){
    if(blackJackGame['hit']=== true){
        const score = blackJackGame["you"]["score"]
        blackJackGame['stand']= true;
        if(score <= 21){
            showCard(YOU)
        }
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function blackJackStand(){
    if(blackJackGame['stand'] === true){
        let score = parseInt(blackJackGame["dealer"]["score"])
        // console.log("score", score)
        while(score <= 21){
            showCard(DEALER)
            score = parseInt(blackJackGame["dealer"]["score"])
            // console.log("score in loop", score)
            // console.log("stop", stop)
            if(stop === true){
                console.log("stop", stop)
                break;
            }
            await sleep(1000)
        }
        blackJackGame['deal']=true;
    }
}

function blackJackDeal(){
    if(blackJackGame['deal'] === true){
        const allImgs = document.querySelector(".flex-bj-row-1").querySelectorAll("img")
        console.log("allImgs", allImgs)
        allImgs.forEach(ele => ele.remove())
        hitSound.play()
        document.querySelector('#yourScore').innerHTML= 0
        document.querySelector('#dealerScore').innerHTML= 0
        document.querySelector('#yourScore').style.color = 'white';
        document.querySelector('#dealerScore').style.color = 'white';
        blackJackGame["you"]["score"] = 0
        blackJackGame["dealer"]["score"] = 0;
        document.querySelector('#bj-result').innerHTML= "Let's Play!!"
        document.querySelector('#bj-result').style.color = 'blue';
        stop = false;
        blackJackGame['hit'] = true;
        blackJackGame['stand'] = false;
        blackJackGame['deal'] = false;
    }
}

function showCard(activePlayer){
    let rCard = randomCard()
    console.log("rCard", rCard)
    const {card, cardScore} = rCard;
    // console.log("card",card)
    // console.log("cardScore",cardScore)
    let cardImage = document.createElement('img');
    cardImage.src =`./images/blackJack/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    hitSound.play()
    updateScore(activePlayer, cardScore)
}

function updateScore(activePlayer, cardScore){
    const currentScore = activePlayer['score'] += cardScore;
    document.querySelector(activePlayer['scoreSpan']).innerHTML= currentScore;

    // const dScore = parseInt(document.querySelector('#dealerScore').textContent)
    // const yScore = parseInt(document.querySelector('#yourScore').textContent)
    const dScore = parseInt(blackJackGame['dealer']['score'])
    const yScore = parseInt(blackJackGame['you']['score'])

    console.log("dScore", dScore)
    console.log("yScore", yScore)
    console.log("currentScore", currentScore)
    console.log("activePlayer", activePlayer)
    
    if((dScore === 21) && (yScore === 21)){
        let draw = document.querySelector('#drawScore').textContent
        console.log("draw", draw)
        document.querySelector('#drawScore').textContent= parseInt(draw) + 1;
        document.querySelector('#bj-result').innerHTML= "It's Draw!!"
        document.querySelector('#bj-result').style.color = 'yellow';
        stop = true;
        return;
    }
    if(currentScore > 21){
        document.querySelector(activePlayer['scoreSpan']).innerHTML= `${currentScore}... It's BUST!!`;
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        if(activePlayer['scoreSpan'] === '#yourScore'){
            let loss = document.querySelector('#lossScore').textContent
            console.log("loss", loss)
            document.querySelector('#lossScore').textContent= parseInt(loss) + 1;
            lossSound.play()
            document.querySelector('#bj-result').innerHTML= "You Loose!!"
            document.querySelector('#bj-result').style.color = 'red';
            blackJackGame['stand'] = false;
            blackJackGame['deal'] = true;

            console.log("stand", blackJackGame['stand'])
            console.log("deal", blackJackGame['deal'])
            stop = true;
            return;
        }else{
            let win = document.querySelector('#winScore').textContent
            console.log("win", win)
            document.querySelector('#winScore').textContent= parseInt(win) + 1;
            winSound.play()
            document.querySelector('#bj-result').innerHTML= "You Win!!"
            document.querySelector('#bj-result').style.color = 'green';
            stop = true;
            return;
        }
    }
    if(dScore > yScore){
        let loss = document.querySelector('#lossScore').textContent
        console.log("loss", loss)
        document.querySelector('#lossScore').textContent= parseInt(loss) + 1;
        lossSound.play()
        document.querySelector('#bj-result').innerHTML= "You Loose!!"
        document.querySelector('#bj-result').style.color = 'red';
        stop = true;
        return;
    }

}
function randomCard(){
    const rCard =  blackJackGame['card'][Math.floor(Math.random() * 13)]
    if(['J', 'Q', 'K', 'A'].includes(rCard)){
        return {card: rCard, cardScore: 10}
    }else{
        return {card: rCard, cardScore: parseInt(rCard)}
    }
}
