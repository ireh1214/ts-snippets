//https://school.programmers.co.kr/learn/courses/30/lessons/76501
//음양 더하기

function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
	return arr1.map((v, i) => [v, arr2[i]]);
}

function solution(absolutes: number[], signs: boolean[]) {
	const x: [number, boolean][] = zip(absolutes, signs);
	let sum = 0;

	x.forEach(([absolute, sign]) => {
		sum += sign ? absolute : -absolute;
	});

	return sum;
}
