//https://school.programmers.co.kr/learn/courses/30/lessons/120911
//문자열 정렬하기(2)

export default function solution(my_string: string) {
	return [...my_string.toLowerCase()].sort().join("");
}
