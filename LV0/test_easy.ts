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
