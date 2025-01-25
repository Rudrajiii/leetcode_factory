class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        int n = matrix[0].length;
        int m = matrix.length;
        int[][] fx = new int[n][m];
        int[][] rx = new int[m][n];
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < m; k++) {
                fx[j][k] = matrix[k][j];
            }
        }
        for (int i = 0; i < fx.length; i++) {
            int max = Integer.MIN_VALUE;
            for (int value : fx[i]) {
                if (value != -1) {
                    max = Math.max(max, value);
                }
            }
            for (int v = 0; v < fx[i].length; v++) {
                if (fx[i][v] == -1) {
                    fx[i][v] = max;
                }
            }
        }
        for (int i = 0; i < fx[0].length; i++) {
            for (int j = 0; j < fx.length; j++) {
                rx[i][j] = fx[j][i];
            }
        }
        return rx;
    }
}
