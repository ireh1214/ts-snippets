//https://school.programmers.co.kr/learn/courses/30/lessons/120841
//점의 위치 구하기

export default function solution(dot: number[]) {
	const x = dot[0];
	const y = dot[1];

	let location = 1; //초기값

	if (x < 0 && y > 0) {
		location = 2;
	} else if (x < 0 && y < 0) {
		location = 3;
	} else if (x > 0 && y < 0) {
		location = 4;
	}

	return location;
}
