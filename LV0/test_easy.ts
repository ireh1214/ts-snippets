//https://school.programmers.co.kr/learn/courses/30/lessons/181849
//문자열 정수의 합

function test1(num_str: string) {
	return num_str
		.split("")
		.map(Number)
		.reduce((acc, num) => acc + num, 0);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181845
//문자열로 변환
function test2(n: number) {
	return String(n);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181835
//조건에 맞게 수열 변환하기 3
function test3(arr: number[], k: number) {
	return arr.map((e) => (k % 2 ? e + k : e * k));
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181852
//뒤에서 5등 위로
function test4(num_list: number[]) {
	num_list.sort((a, b) => a - b);
	return num_list.splice(5);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181854
//배열의 길이에 따라 다른 연산하기
function test5(arr: number[], n: number) {
	return arr.map((e, i) =>
		arr.length % 2 !== 0 ? (i % 2 === 0 ? e + n : e) : i % 2 !== 0 ? e + n : e,
	);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181864
//문자열 바꿔서 찾기
function test6(myString: string, pat: string) {
	return [...myString]
		.map((v) => (v === "A" ? "B" : "A"))
		.join("")
		.includes(pat)
		? 1
		: 0;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181853
//뒤에서 5등까지

function test7(num_list: number[]) {
	num_list.sort((a, b) => a - b);

	return num_list.splice(0, 5);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181834
//I로 만들기
function test8(myString: string) {
	return myString.replaceAll(/[a-k]/g, "l");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181867
//x사이의 새수
function test9(myString: string) {
	return myString.split("x").map((e) => e.length);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120822
//문자열 뒤집기
function test10(my_string: string) {
	return my_string.split("").reverse().join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120824
//짝수 홀수 개수
function test11(num_list: number[]) {
	let x = 0;
	let y = 0;

	for (const i of num_list) {
		if (i % 2 === 0) {
			x++;
		} else {
			y++;
		}
	}
	return [x, y];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120826
//특정 문자 제거하기
function test12(my_string: string, letter: string) {
	return [...my_string].filter((e) => e !== letter).join("");
}
