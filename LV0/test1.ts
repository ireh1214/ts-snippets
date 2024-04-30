//https://school.programmers.co.kr/learn/courses/30/lessons/120889
//삼각형의 완성조건(1)

export default function solution([a, b, c]: [number, number, number]) {
	//가장 큰 숫자를 찾기
	// const max = Math.max(a, b, c);
	// return max < a + b + c - max ? 1 : 2;

	//구조분해 할당을 이용하기
	[a, b] = [a, b + c];
	return a < b ? 1 : 2;
}
