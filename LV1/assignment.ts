//https://school.programmers.co.kr/learn/courses/30/lessons/131705
//삼총사 재귀함수 풀이
import _ from "lodash";

function findTrios(n: number[], cur: number[], s: number) {
	let count = 0;

	if (cur.length === 3) {
		if (_.sum(cur) === 0) {
			count++;
		}
		return count;
	}

	for (let i = s; i < n.length; i++) {
		cur.push(n[i]);
		count += findTrios(n, cur, i + 1);
		cur.pop();
	}
	return count;
}

export default function solution(n: number[]) {
	return findTrios(n, [], 0);
}



