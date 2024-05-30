//https://school.programmers.co.kr/learn/courses/30/lessons/120833
//배열 자르기

function test01(numbers: number[], num1: number, num2: number) {
	return numbers.slice(num1, num2 + 1);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181848
//문자열을 정수로 변환하기
function test02(n_str: string) {
	return Number.parseInt(n_str);
}
