//https://school.programmers.co.kr/learn/courses/30/lessons/131705
//삼총사 재귀함수 풀이
import _ from "lodash";

function findTrios(xs: number[], cur: number[], s: number) {
	if (cur.length === 3) {
		return _.sum(cur) === 0 ? 1 : 0;
	}

	let count = 0;

	for (const [s, x] of xs.entries()) {
		count += findTrios(xs, [...cur, x], s + 1);
	}
	return count;
}

export default function solution(xs: number[]) {
	return findTrios(xs, [], 0);
	//const ys = combinations(xs, 3)
	// [3,-1,4]
}

function combinations(xs: number[], pick: number): number[][] {
	return [];
}
