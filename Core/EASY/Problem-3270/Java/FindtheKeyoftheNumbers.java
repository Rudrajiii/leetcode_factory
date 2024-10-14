class Solution {
    public int minOf3(int n1 , int n2 , int n3){
        int t = Math.min(n1 , n2);
        return Math.min(t , n3);
    }
    public int FindtheKeyoftheNumbers(int num1, int num2, int num3) {
        int[] d = new int[4];
        int k = 0 , ans = 0;
        while (num1>0 && num2>0 && num3>0){
            int n1 = num1 % 10;
            int n2 = num2 % 10;
            int n3 = num3 % 10;

            d[k] = minOf3(n1 , n2 , n3);
            ans += (Math.pow(10 , k)) * d[k];
            k++;
            num1 /= 10;
            num2 /= 10;
            num3 /= 10;
        }
        return ans;
    }
}