let winCombo = false;

let storedData = [];

let Computer = {

    bestMove: function() {
        
        if (fields[4] === null) {
            return 4;
        } else {
            if (fields[0] === null) {
                return 0;
            } else if (fields[2] === null) {
                return 2;
            } else if (fields[6] === null) {
                return 6;
            } else if (fields[8] === null) {
                return 8;
            } else {
                let rn = Math.floor(Math.random() * Math.floor(8));
                if (fields[rn] === null) {
                    return rn;
                } else {
            
                }
            }
        }        
    }
}