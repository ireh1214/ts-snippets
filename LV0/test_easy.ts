//https://school.programmers.co.kr/learn/courses/30/lessons/181898
//가까운 1 찾기

function test1(arr: number[], idx: number) {
	for (let i = idx; i < arr.length; i++) {
		if (arr[i] === 1) {
			return i;
		}
	}

	return -1;
}
