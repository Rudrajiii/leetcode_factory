public class PROB_3423_Maximum_Difference_Between_Adjacent_Elements_in_a_Circular_Array {
        public int maxAdjacentDistance(int[] nums) {
            int maxi = -999;
            int numsSize = nums.length;
            for(int i=0 ; i < numsSize ; i++){
                int idx1 = i % numsSize;
                int idx2 = (i+1) % numsSize;
                int max_diff = nums[idx1] - nums[idx2];
                if(Math.abs(max_diff) > maxi){
                    maxi = Math.abs(max_diff);
                }
            }
            return maxi;
        }
}
