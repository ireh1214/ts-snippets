//https://school.programmers.co.kr/learn/courses/30/lessons/181861
//배열의 원소만큼 추가하기

export default function solution(arr: number[], a: number) {
	//멘토님 여기 X는 타입 관련해서 문제 메세지를 보여주는데 이대로 둬도 괜찮을까요? ?
	const X = [];

	arr.map((a) => {
		for (let i = 1; i <= a; i++) {
			X.push(a);
		}
	});

	return X;
}
