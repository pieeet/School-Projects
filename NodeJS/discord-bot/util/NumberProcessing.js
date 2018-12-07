let output = {}

output.commafy = (num) => {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

output.compare = (num1,num2) => {
    if(num1 == num2)
        return 0;
    if(num1 == 0 || num2 == 0)
        return 0
    
    if(num1 < num2){
        let out = num2 / num1;
        return out.toFixed(2);
    }else{
        let out = num1/num2;
        return -out.toFixed(2);
    }

}

module.exports = output;