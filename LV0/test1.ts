//https://school.programmers.co.kr/learn/courses/30/lessons/120889
//삼각형의 완성조건(1)

export default function solution([a, b, c]: [number, number, number]) {
	// sides.sort((a, b) => b - a);
	// const x = sides[0];
	// const y = sides[1] + sides[2];
	// return x < y ? 1 : 2;

	//답을 이렇게 찾았지만 아직 확실히 이해가 안 되어서 공부해봐야 할것 같습니다!!
	[a, b, c] = [a, b + c];
	return a < b ? 1 : 2;
}
