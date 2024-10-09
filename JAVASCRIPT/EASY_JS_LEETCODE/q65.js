var chalkReplacer = function(chalk, k) {
    let res = 0;
    let i = 0
    let n = chalk.length;
    while(true){
    if(chalk[i] <= k){
        k -= chalk[i];
        i++;
        if(n === i){
             i=0;
        }
    }else{
            res = i;
            break;
        } 
    }
    return res;
};