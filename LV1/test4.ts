//https://school.programmers.co.kr/learn/courses/30/lessons/12935
//제일 작은 수 제거하기

export default function solution(arr: number[]) {
	const answer = arr.filter((n) => n !== Math.min(...arr));
	return answer.length > 0 ? answer : [-1];
}
