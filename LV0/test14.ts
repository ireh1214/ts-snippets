//https://school.programmers.co.kr/learn/courses/30/lessons/181886
// 5명씩

export default function solution(names: string[]) {
	return names.filter((v, i) => i % 5 === 0);
}
