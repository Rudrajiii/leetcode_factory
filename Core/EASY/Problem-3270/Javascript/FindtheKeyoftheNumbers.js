/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    let d = new Array(4).fill(0);
        let k = 0, ans = 0;

        while (num1 > 0 && num2 > 0 && num3 > 0) {
            let n1 = num1 % 10;
            let n2 = num2 % 10;
            let n3 = num3 % 10;

            d[k] = minOf3(n1, n2, n3);
            ans += Math.pow(10, k) * d[k];
            k++;
            num1 = Math.floor(num1 / 10);
            num2 = Math.floor(num2 / 10);
            num3 = Math.floor(num3 / 10);
        }
        return ans;
};
var minOf3 = (n1, n2, n3) => {
        return Math.min(n1, n2 , n3);
}