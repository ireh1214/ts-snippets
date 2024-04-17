//https://school.programmers.co.kr/learn/courses/30/lessons/181927
//마지막 두 원소

export default function solution(num_list: number[]): number[] {
	const lastElement: number = num_list[num_list.length - 1];
	const lastBeforeElement: number = num_list[num_list.length - 2];

	if (lastElement > lastBeforeElement) {
		num_list.push(lastElement - lastBeforeElement);
	} else {
		num_list.push(lastElement * 2);
	}

	const answer: number[] = [...num_list];
	return answer;
}
