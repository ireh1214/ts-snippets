//https://school.programmers.co.kr/learn/courses/30/lessons/181842
//부분 문자열
function test0(str1: string, str2: string) {
	return str2.includes(str1) ? 1 : 0;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181843
//부분 문자열인지 확인하기
function test1(my_string: string, target: string) {
	return my_string.includes(target) ? 1 : 0;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181847
//0떼기
function test2(n_str: string) {
	return String(Number(n_str));
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181870
//ad 제거하기
function test3(strArr: string[]) {
	return strArr.filter((i) => !i.includes("ad"));
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120847
//최댓값 만들기(1)
function test4(numbers: number[]) {
	numbers.sort((a, b) => b - a);
	return numbers[0] * numbers[1];
}
