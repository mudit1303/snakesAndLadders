function playGame(playersCount,snakes,ladders){
    let playersArr = []
    
    for(let i=0;i<playersCount;i++){
        let playerName = prompt("enter Player Name")
        let playerObj = new Players(playerName,0)
        playersArr.push(playerObj)
    }

    let p = ""
    
    for(let i=0;;i++){
            let rollDice = parseInt(prompt("enter dice number"))
            let prevPos = playersArr[i].getCurrentPosition()
            playersArr[i].currPos += rollDice

            if(playersArr[i].currPos > 100){
                playersArr[i].currPos = prevPos
            }
            
            for(let j=0;j<snakes.length;j++){
                if(playersArr[i].getCurrentPosition() === snakes[j].start){
                    playersArr[i].currPos = snakes[j].end
                }
            }

            for(let j=0;j<ladders.length;j++){
                if(playersArr[i].getCurrentPosition() === ladders[j].start){
                    playersArr[i].currPos = ladders[j].end
                }
            }
            p = `${playersArr[i].playerName}  rolled a ${rollDice} and moved from  ${prevPos} to ${playersArr[i].getCurrentPosition()}` 
           document.getElementById("updateDiv").innerHTML += "<br></br>" + p

           if(playersArr[i].getCurrentPosition()===100){
            p = `${playersArr[i].playerName} wins the game`
            document.getElementById("updateDiv").innerHTML += "<br></br>" + p
            break;
            }

        if((i+1)%playersCount===0){
            i = -1
        }
    }
}