//https://school.programmers.co.kr/learn/courses/30/lessons/120892
//암호 해독
export default function solution(cipher: string, code: number) {
	let answer = "";
	const arr = cipher.split("");

	for (const [i, x] of arr.entries()) {
		if ((i + 1) % code === 0) {
			answer += arr[i];
		}
	}

	return answer;
}
