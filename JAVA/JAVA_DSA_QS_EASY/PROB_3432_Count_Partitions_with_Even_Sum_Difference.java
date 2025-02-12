public class PROB_3432_Count_Partitions_with_Even_Sum_Difference {
        public int countPartitions(int[] nums) {
            int c = 0;
            int numsSize = nums.length;
            int left_sum = 0;
            int total = 0;
            for(int i = 0 ; i < numsSize ; i++){
                total += nums[i];
            }
            for(int j = 0 ; j < numsSize-1 ; j++){
                left_sum += nums[j];
                int right_sum = total - left_sum;
                if((left_sum - right_sum) % 2 == 0){
                    c++;
                }
            }
            return c;
        }
}
