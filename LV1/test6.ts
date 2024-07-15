//https://school.programmers.co.kr/learn/courses/30/lessons/1845
//폰켓몬

export default function solution(nums: number[]) {
	const x = nums.length / 2;
	const y = [...new Set(nums)].length;

	return y > x ? x : y;
}
