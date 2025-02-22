package main

func countKConstraintSubstrings(s string, k int) int {
    cz , co , r , l , a := 0 , 0 , 0 , 0 , 0
    for r < len(s) {
        if(s[r] == '0'){
            cz++
        }else{
            co++
        }
        for co > k && cz > k {
            if(s[l] == '0'){
                cz--
            }else{
                co--
            }
            l++
        }
        a += (r - l) + 1
        r++
    }
    return a
}