let str = "123";



function solution(n) {
    let answer = 0;
    
    for(let i=0; i<n.length; i++) {
        answer += parseInt(n[i]);
    }
    
    return answer;
}


console.log(solution(str));