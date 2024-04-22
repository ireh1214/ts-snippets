//https://school.programmers.co.kr/learn/courses/30/lessons/181927
//마지막 두 원소

export default function solution(num_list: number[]): number[] {
	//length가 아닌 at을 사용하면 좀더 짧은 코드로 간편하게 접근 가능
	//잘 보니까 현재 요소가 있는지 없는지도 같이 봐주는 것 같기도...

	const lastElement: number = num_list.at(-1);
	const lastBeforeElement: number = num_list.at(-2);

	if (lastElement > lastBeforeElement) {
		num_list.push(lastElement - lastBeforeElement);
	} else {
		num_list.push(lastElement * 2);
	}
	return [...num_list];
}
