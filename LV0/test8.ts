//https://school.programmers.co.kr/learn/courses/30/lessons/181923
//수열과 구간 쿼리2

//정렬하고 첫번째 값을 구하는 것 보다는 좀더 자유롭게 운용하는데 map이 더 괜찮을 것으로 보였습니다
export default function solution(arr: [], queries: [number[]]) {
 return queries.map(([s, e, k]) => {
        let result = -1

		//초기는 start, 마지막은 end
        for (let i = s; i <= e; i += 1) {
            const v = arr[i];
            if (v <= k) continue;
          
			//k보다 크면서 가장 작은 arr[i]찾기(Math.min 사용)
			result = result === -1 ? v : Math.min(result, v);
        }
        return result
    })
}
