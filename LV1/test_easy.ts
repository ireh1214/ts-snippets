//https://school.programmers.co.kr/learn/courses/30/lessons/12925
//문자열을 정수로 바꾸기

function test1(s: string) {
	return Number.parseInt(s);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12931
//자릿수 더하기
function test2(n: number) {
	return String(n)
		.split("")
		.map(Number)
		.reduce((acc, v) => acc + v, 0);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12932
//자연수 뒤집어 배열로 만들기
function test3(n: number) {
	return String(n).split("").map(Number).reverse();
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12933
//정수 내림차순으로 배치하기
function test4(n: number) {
	return +String(n)
		.split("")
		.sort((a, b) => Number(b) - Number(a))
		.join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12934
//정수 제곱근 판별
function test5(n: number) {
	const x = Math.sqrt(n);
	return Number.isInteger(x) ? (x + 1) * (x + 1) : -1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12937
//짝수와 홀수
function test6(num: number) {
	return num % 2 === 0 ? "Even" : "Odd";

	//다른 분 답을 찾아보다가 0은 false라는 사실을 이용한 것을 보아 좋은 예시 같아서 밑에 첨부합니다
	//	return num % 2 ? "Odd" : "Even";
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12944
//평균 구하기
function test7(arr: number[]) {
	return arr.reduce((acc, v) => acc + v, 0) / arr.length;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/87389
//나머지가 1이되는 수 찾기
function test8(n: number) {
	for (let i = 0; i < n; i++) {
		if (n % i === 1) {
			return i;
		}
	}
}
