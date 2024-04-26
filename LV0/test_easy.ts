//https://school.programmers.co.kr/learn/courses/30/lessons/120813
//짝수는 싫어요
function test1(n: number) {
	const answer = [];
	for (let i = 0; i <= n; i++) {
		if (i % 2 === 1) {
			answer.push(i);
		}
	}
	return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120814
//피자 나눠 먹기 (1)

function test2(n: number) {
	return Math.ceil(n / 7);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120816
//피자 나눠 먹기 (3)
function test3(slice: number, n: number) {
	return Math.ceil(n / slice);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120819
//아이스 아메리카노
function test4(money: number) {
	const changes = money % 5500;
	const americano = Math.floor(money / 5500);
	return [americano, changes];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120821
//배열 뒤집기
function test5(num_list: []) {
	const newNumList: [] = [];

	//at은 인덱스를 지정못해서 설정할수 없는가 보다...
	for (let i = num_list.length - 1; i >= 0; i--) {
		newNumList.push(num_list[i]);
	}
	return newNumList;
}
