//https://school.programmers.co.kr/learn/courses/30/lessons/120836
//순서쌍의 개수

export default function solution(n: number) {
	const answer = [];

	for (let i = 1; i <= n; i++) {
		if (n % i === 0) answer.push(i);
	}

	return answer.length;
}
