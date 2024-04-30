//https://school.programmers.co.kr/learn/courses/30/lessons/181879
//길이에 따른 연산

export default function solution(num_list: number[]) {
	const x = num_list.reduce((acc, num) => acc + num);
	const y = num_list.reduce((acc, num) => acc * num);

	return num_list.length > 10 ? x : y;
}
