module.exports = function toReadable (number) {
    const unitsRank = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    const tensRank = {
        1: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        2: 'twenty',
        3: 'thirty',
        // 4: 'fourty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    const hundred = 'hundred';
  
    let count = 0;
    let cloneNum = number;
  
    while (cloneNum > 0) {
      count++;
      cloneNum = Math.floor(cloneNum / 10);
    }
  
    if (count === 1 || count === 0) {
        return unitsRank[number];
    }
  
    if (count === 2) {
        let u = number % 10;
        let t = Math.floor(number / 10);
        
        if (number > 10 && number < 20) {
            return tensRank[number];
        } else {
            if (u !== 0) {
                return `${tensRank[t]} ${unitsRank[u]}`;
            } else {
                return tensRank[t];
            }
        }
    }
  
    if (count === 3) {
        let u = number % 10;
        let t = Math.floor(number / 10) % 10;
        let h = Math.floor(number / 100);
  
        if (u === 0) {
            if (t === 0) {
                return `${unitsRank[h]} ${hundred}`;
            } else {
                return `${unitsRank[h]} ${hundred} ${tensRank[t]}`;
            }
        } else if (t === 0) {
            return `${unitsRank[h]} ${hundred} ${unitsRank[u]}`;
        } else if (t === 1) {
            let tu = number % 100;
            return `${unitsRank[h]} ${hundred} ${tensRank[tu]}`; 
        } else {
            return `${unitsRank[h]} ${hundred} ${tensRank[t]} ${unitsRank[u]}`;
        }
    }
  }
