//https://school.programmers.co.kr/learn/courses/30/lessons/120849
//모음 제거
function test1(my_string: string) {
	const remove = "aeiou";
	let new_string = "";

	//공백도 반환
	for (const i of my_string) {
		if (!remove.includes(i)) {
			new_string += i;
		}
	}
	return new_string;
	// 풀고 난 후 확인한 정규 표현식 사용법
	// return my_string.replace(/[aeiou]/g, '');
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120845
//주사위의 개수

function test2(
	box: [width: number, length: number, height: number],
	n: number,
) {
	//인자를 안 받아와서 아래 픽스에러가 있는것 같습니다
	return (
		Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
	);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120893
//대문자와 소문자

function test3(my_string: string) {
	let answer = "";
	for (const i of my_string) {
		answer += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
	}
	return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120898
//편지

function test4(message: string) {
	return message.length * 2;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120899
//가장 큰 수 찾기

function test5(array: number[]) {
	const answer = [];
	for (const [i, x] of array.entries()) {
		if (x === Math.max(...array)) {
			answer.push(x, i);
		}
	}
	return answer;

	// 아래 방법도 있다는 것을 배웠습니다
	//  let max = Math.max(...array);
	//  return [max, array.indexOf(max)];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120908
//문자열 안에 문자열
function test6(str1: string, str2: string) {
	return str1.includes(str2) ? 1 : 2;

	//위 코드는 제가 푼 것이고 밑 코드는 indexOf 사용이 신기해서 달아둡니다!!
	// function solution(str1, str2) {
	// 	return str1.indexOf(str2) === -1 ? 2 : 1;
	// }
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120909
//제곱수 판별하기
function test7(n: number) {
	const x = Math.sqrt(n);
	return Number.isInteger(x) ? 1 : 2;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120910
//세균 증식
function test8(n: number, t: number) {
	return n * 2 ** t;
	// 아래는 다른 풀이를 찾아보다가 배울 점 같아서 가져왔습니다
	//  return n << t;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181850
//정수 부분
function test9(flo: number) {
	return Math.floor(flo);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/181863
//rny_string

function test10(rny_string: string) {
	return rny_string.replace(/m/g, "rn");
}
