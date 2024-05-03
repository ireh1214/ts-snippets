//https://school.programmers.co.kr/learn/courses/30/lessons/120905
//n의 배수 고르기

export default function solution(n: number, numlist: number[]) {
	// const answer = [];

	// for (const [i, x] of numlist.entries()) {
	// 	if (x % n === 0) {
	// 		answer.push(x);
	// 	}
	// }

	// return answer;

	//위는 제가 처음 푼 방식이고 밑은 좀 더 개선된 코드를 찾다가 발견했습니다
	return numlist.filter((num) => num % n === 0);
}
