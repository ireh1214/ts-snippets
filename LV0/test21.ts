//https://school.programmers.co.kr/learn/courses/30/lessons/181896
//첫번째로 나오는 음수

// findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환함
// 해당 인덱스가 존재하지 않는다면 -1를 자동 반환함
export default function solution(num_list: number[]) {
	return num_list.findIndex((x) => x < 0);
}
