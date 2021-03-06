const snakesInput = function(){
    const snakesCount = parseInt(prompt("enter the number of snakes"))
    for(let i=0;i<snakesCount;i++){
       let head = parseInt(prompt("enter head of snake"))
       let tail = parseInt(prompt("enter tail of snake")) 
        let snakeObj = new Snakes(head,tail)
        snakesArr.push(snakeObj)
    }
    return snakesArr ;
}

const laddersInput = function(){
    const ladderCount = parseInt(prompt("enter the number of ladders"))
    for(let i=0;i<ladderCount;i++){
       let head = parseInt(prompt("enter head of ladder"))
       let tail = parseInt(prompt("enter tail of ladder")) 
        let ladderObj = new Snakes(head,tail)
        ladderArr.push(ladderObj)
    }
    return ladderArr;
}

const playersInput = function(){
    const playersCount = parseInt(prompt("enter number of Players"))
    return playersCount
}

const rollDice = function(){
    const diceNumber = parseInt(prompt("enter dice number"))
    return diceNumber
}