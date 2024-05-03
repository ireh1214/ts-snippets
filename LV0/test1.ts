//https://school.programmers.co.kr/learn/courses/30/lessons/120889
//삼각형의 완성조건(1)

export default function solution([a, b, c]: [number, number, number]) {
	//가장 큰 숫자를 찾기
	// const max = Math.max(a, b, c);
	// return max < a + b + c - max ? 1 : 2;

	//구조분해 할당을 이용하기
	const sortX = [a, b, c].sort((x, y) => x - y);

	const [max, x, y] = sortX;
	const sumXY = x + y;

	return max < sumXY ? 1 : 2;
}
