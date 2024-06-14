//https://school.programmers.co.kr/learn/courses/30/lessons/120844
//배열 회전시키기

function solution1(numbers: number[], direction: string) {
	if (direction === "right") {
		// biome-ignore lint: lint/style/noNonNullAssertion
		numbers.unshift(numbers.pop()!);
	} else {
		// biome-ignore lint: lint/style/noNonNullAssertion
		numbers.push(numbers.shift()!);
	}

	return numbers;
}
