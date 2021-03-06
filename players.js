class Players {
    constructor(playerName,currPos){
        this.playerName = playerName
        this.currPos = currPos
    }

    getCurrentPosition(){
        return this.currPos
    }
}