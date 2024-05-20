//https://school.programmers.co.kr/learn/courses/30/lessons/12906
//같은 숫자는 싫어

export default function solution(arr: number[]) {
	return arr.filter((x, i) => x !== arr[i - 1]);
}
