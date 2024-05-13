//https://school.programmers.co.kr/learn/courses/30/lessons/12982
//예산

export default function solution(d: number[], budget: number) {
	d.sort((a, b) => a - b);
	let result = 0;

	//biome에서 매개변수 재할당을 허용하지 않아서 바꿨습니다
	let x = budget;

	for (const i of d) {
		x -= i;
		result++;
		if (x < 0) {
			break;
		}
	}

	return result;
}
