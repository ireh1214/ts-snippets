//https://school.programmers.co.kr/learn/courses/30/lessons/12948
//핸드폰 번호 가리기

export default function solution(x: string) {
	return "*".repeat(x.length - 4) + x.slice(-4);
}
