import java.util.HashMap;

public class PROB_2395_find_subarray_of_equal_sum {
        public boolean findSubarrays(int[] nums) {
            HashMap<Integer, Integer> map = new HashMap<>();
            for(int i=0 ; i < nums.length - 1 ; i++){
                if(map.containsValue(nums[i] + nums[i+1])){
                    return true;
                }else{
                    map.put(nums[i] , nums[i] + nums[i+1]);
                }
            }
            return false;
        }
}
