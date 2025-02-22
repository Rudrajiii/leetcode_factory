public class PROB_2697_Lexicographically_Smallest_Palindrome {
    public String makeSmallestPalindrome(String s) {
        char[] sArray = s.toCharArray();
        int i = 0, j = sArray.length - 1;
        while (i < j) {
            if (sArray[i] < sArray[j]) {
                sArray[j] = sArray[i];
            } else if (sArray[j] < sArray[i]) {
                sArray[i] = sArray[j];
            } else {
                i++;
                j--;
            }
        }
        return new String(sArray);
    }    
}
