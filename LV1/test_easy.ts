//https://school.programmers.co.kr/learn/courses/30/lessons/12948
//핸드폰 번호 가리기

function test1(x: string) {
	return "*".repeat(x.length - 4) + x.slice(-4);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12922
//수박수박수박수박수박수?
function test2(n: number) {
	let result = "";
	for (let i = 0; i < n; i++) {
		result += i % 2 === 0 ? "수" : "박";
	}
	return result;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/70128
//내적
function test3(a: number[], b: number[]) {
	let answer = 0;
	for (const [i, x] of a.entries()) {
		answer += x * b[i];
	}

	return answer;
	//저는 위처럼 풀었는데 reduce 메서드의 좋은 예시가 있어서 함께 첨부합니다
	// return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12917
//문자열 내림차순으로 배치하기
function test4(s: string) {
	return s.split("").sort().reverse().join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12918
//문자열 다루기 기본
function test5(s: string) {
	return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
}
