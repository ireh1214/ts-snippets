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
		if (i === i.toUpperCase()) {
			answer += i.toLowerCase();
		} else {
			answer += i.toUpperCase();
		}
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
