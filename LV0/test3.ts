//https://school.programmers.co.kr/learn/courses/30/lessons/181927
//마지막 두 원소

export default function solution(num_list: number[]): number[] {

	const x: number = num_list.at(-1);
	const y: number = num_list.at(-2);

	if (x > y) {
		num_list.push(x - y);
	} else {
		num_list.push(x * 2);
	}

	return [...num_list];
}
