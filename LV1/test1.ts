//https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 2016년

export default function solution(a: number, b: number) {
	const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	return week[new Date(`2016-${a}-${b}`).getDay()];
}
