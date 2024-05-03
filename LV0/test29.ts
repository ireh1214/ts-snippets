//https://school.programmers.co.kr/learn/courses/30/lessons/181840
//정수 찾기

export default function solution(num_list: number[], n: number) {
	return num_list.filter((num) => num === n).length > 0 ? 1 : 0;
}
