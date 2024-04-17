//https://school.programmers.co.kr/learn/courses/30/lessons/181928
//이어 붙인 수

export default function solution(num_list: []) {
	let answer = 0;
	let oddSum = "";
	let evenSum = "";
	//초기엔 string으로 받아올 것이니 빈 배열로 준비합니다

	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] % 2 !== 0) {
			oddSum += num_list[i];
		} else {
			evenSum += num_list[i];
		}
	}
	answer = Number(oddSum) + Number(evenSum);
	return answer;
}
