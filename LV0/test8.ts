//https://school.programmers.co.kr/learn/courses/30/lessons/181923
//수열과 구간 쿼리2

function solution(arr:number[], queries:[s:number, e:number, k:number][]) {
    const answer = [];

    for (const q of queries) {
        const [s, e, k] = q;
        //시작지점을 s, 끝지점을 e로 설정합니다
        const r = arr.slice(s, e + 1); 
        const sum = r.filter(num => num > k); 
        
        if (sum.length) {
            answer.push(Math.min(...sum)); 
        } else {
            answer.push(-1); 
        }
    }

    return answer;
}