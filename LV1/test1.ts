//https://school.programmers.co.kr/learn/courses/30/lessons/17681
//2018 KAKAO BLIND RECRUITMENT [1차] 비밀지도

export default function solution(n: number, arr1: number[], arr2: number[]) {
	const [x, y] = [arr1, arr2].map((arr) =>
		arr.map((v) => v.toString(2).padStart(n, "0")),
	);
	const result = [];

	for (const [i, val] of x.entries()) {
		let hint = "";
		for (let j = 0; j < n; j++) {
			if (val[j] === "1" || y[i][j] === "1") {
				hint += "#";
			} else {
				hint += " ";
			}
		}
		result.push(hint);
	}

	return result;
}
