//https://school.programmers.co.kr/learn/courses/30/lessons/86051
//없는 숫자 더하기
import _ from "lodash";
export default function solution(numbers: number[]) {
	//1부터 9까지의 배열을 range로 생성합니다
	return _.sum(_.range(10).filter((n: number) => !numbers.includes(n)));
}
