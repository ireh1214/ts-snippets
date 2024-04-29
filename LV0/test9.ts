//https://school.programmers.co.kr/learn/courses/30/lessons/181868
//공백으로 구분하기

export default function solution(my_string: string) {
	return my_string.split(" ").filter(Boolean);
}
