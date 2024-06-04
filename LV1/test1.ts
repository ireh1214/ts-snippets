//https://school.programmers.co.kr/learn/courses/30/lessons/81301
//숫자 문자열과 영단어

export default function solution(s: string) {
	const num = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};

	for (const [i, x] of Object.entries(num)) {
		s = s.replace(new RegExp(i, "g"), x);
	}

	return Number(s);
}
