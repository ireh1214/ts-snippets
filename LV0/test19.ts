//https://school.programmers.co.kr/learn/courses/30/lessons/181891
// 순서 바꾸기

export default function solution(num_list: number[], n: number) {
	const x = num_list.slice(n);
	const y = num_list.slice(0, n);

	return x.concat(y);

	// (...num_list)를 사용할 때 배열의 요소들이 개별 매개변수로 전달됨
	// num_list.push(...num_list.splice(0, n));
	// return num_list;
}
