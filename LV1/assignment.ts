//https://school.programmers.co.kr/learn/courses/30/lessons/131705
//삼총사 재귀함수 풀이

function findTrios(num, cur, s) {
	let count = 0;

	if (cur.length === 3) {
		if (cur.reduce((a, b) => a + b, 0) === 0) {
			count++;
		}
		return count;
	}

	for (let i = s; i < num.length; i++) {
		cur.push(num[i]);
		count += findTrios(num, cur, i + 1);
		cur.pop();
	}
	return count;
}

export default function solution(number) {
	return findTrios(number, [], 0);
}
