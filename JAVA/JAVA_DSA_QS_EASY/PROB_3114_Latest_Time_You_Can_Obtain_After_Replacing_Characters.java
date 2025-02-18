public class PROB_3114_Latest_Time_You_Can_Obtain_After_Replacing_Characters {
    public String findLatestTime(String s) {
        char H1 = s.charAt(0), H2 = s.charAt(1);
        char M1 = s.charAt(3), M2 = s.charAt(4);
        if (H1 == '?' && H2 == '?') {
            H1 = '1';
            H2 = '1';
        }
        if (H2 == '?') {
            if (H1 == '1') {
                H2 = '1';
            } else {
                H2 = '9';
            }
        }
        if (H1 == '?') {
            if (H2 <= '1') {
                H1 = '1';
            } else {
                H1 = '0';
            }
        }
        if (M1 == '?') {
            M1 = '5';
        }
        if (M2 == '?') {
            M2 = '9';
        }
        return String.valueOf(H1) + String.valueOf(H2) + ":" + String.valueOf(M1) + String.valueOf(M2);
    }
}
