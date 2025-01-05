import java.util.Arrays;
public class PROB_3392_Count_Subarrays_of_Length_Three_With_a_Condition {
    public int countSubarrays(int[] nums) {
        boolean is_size_ok = true;
        int i = 0 , count = 0;
        while(is_size_ok){
            if(i+3 <= nums.length){
                int[] sub_arr =  Arrays.copyOfRange(nums , i , i+3);
                if(sub_arr[0] + sub_arr[2] == sub_arr[1] / 2.0){
                    count++;
                }
            }else{
                is_size_ok = false;
            }
            i++;
        }
        return count;
    }
}