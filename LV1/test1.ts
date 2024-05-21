//https://school.programmers.co.kr/learn/courses/30/lessons/76501
//음양 더하기
import _ from "lodash";

function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
	return arr1.map((v, i) => [v, arr2[i]]);
}

export default function solution(absolutes: number[], signs: boolean[]) {
	const x: [number, boolean][] = zip(absolutes, signs);
	return _.sum(_.map(x, ([absolute, sign]) => (sign ? absolute : -absolute)));
}
