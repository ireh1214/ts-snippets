//https://school.programmers.co.kr/learn/courses/30/lessons/12910
//나누어 떨어지는 숫자 배열

export default function solution(arr: number[], divisor: number) {
	const answer = arr.filter((x) => x % divisor === 0);
	return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
