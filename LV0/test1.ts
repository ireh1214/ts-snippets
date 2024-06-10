//https://school.programmers.co.kr/learn/courses/30/lessons/181844
//배열의 원소 삭제하기

export default function solution(arr: number[], delete_list: number[]) {
	return arr.filter((n) => !delete_list.includes(n));
}

