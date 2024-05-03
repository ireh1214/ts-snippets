//https://school.programmers.co.kr/learn/courses/30/lessons/181856
//배열 비교하기

//여기서 변수처리가 얼마나 중요한지 알았습니다...
export default function solution(arr1: number[], arr2: number[]) {
	const x = arr1.length;
	const y = arr2.length;
	const sumX = arr1.reduce((acc, num) => acc + num, 0);
	const sumY = arr2.reduce((acc, num) => acc + num, 0);

	return x < y ? -1 : x === y ? (sumX === sumY ? 0 : sumX < sumY ? -1 : 1) : 1;
}
