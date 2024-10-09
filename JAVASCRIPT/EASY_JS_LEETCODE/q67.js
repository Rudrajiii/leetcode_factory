var getLucky = function(s, k) {
    let g = 'abcdefghijklmnopqrstuvwxyz'
    let f = {}
    let h = '';
    for(let i of g){
        f[i] = g.indexOf(i) + 1;
    }
    for(let i of s){
        h += f[i]
    }
    let m = BigInt(h);
    let res;
    for(let i = 0 ; i < k ; i++){
        m = digitSum(m);
    }
    return m;
};

var digitSum = (m) => {
    let sum = 0n
    while(m !== 0n){
        let r = m % 10n;
        sum += r;
        m = m / 10n;
    }
    return sum;
}