
//isomorphic strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    const map1 = {};
    const map2 = {};
    for(let i = 0 ; i < s.length; i++ ){
        let itemS = s[i];
        let itemT = t[i];
        if(!(itemS in map1) && !(itemT in map2)){
            map1[itemS] = itemT;
            map2[itemT] = itemS;
        }else{
            if(map1[itemS] !== itemT) return false;
        }
    }
    return true;
};
