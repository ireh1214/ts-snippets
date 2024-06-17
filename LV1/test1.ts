//https://school.programmers.co.kr/learn/courses/30/lessons/134240
//푸드 파이트 대회

export default function solution(food: number[]) {
	//1차 통과
	// let answer = "";
	// let set = 0;
	// let newFood = food.map(String);

	//     for (const i of newFood){
	//         const x = (i % 2 !== 0) ? i - 1 : i

	//         if(i === 1){
	//             set++
	//         }else {
	//             answer += (String(set).repeat(x / 2))
	//             set++
	//         }

	//     }

	// return answer + "0" + [...answer].reverse().join("");

	//2차 (리팩토링)
	let answer = "";

	for (let set = 1; set < food.length; set++) {
		answer += String(set).repeat(Math.floor(food[set] / 2));
	}

	// biome-ignore lint/style/useTemplate: <explanation>
	return answer + "0" + [...answer].reverse().join("");
}
