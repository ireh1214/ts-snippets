//https://school.programmers.co.kr/learn/courses/30/lessons/82612
//부족한 금액 계산하기

export default function solution(price: number, money: number, count: number) {
	let x = 0;

	for (let i = 1; i <= count; i++) {
		x += price * i;
	}

	return money - x > 0 ? 0 : Math.abs(money - x);
}
