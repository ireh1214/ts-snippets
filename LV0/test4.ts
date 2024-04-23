//https://school.programmers.co.kr/learn/courses/30/lessons/120839
//가위 바위 보

export default function solution(rsp:string) {
    
    //첫 번째 방법 (가장 익숙함)
//            let answer = "";
    
//     for (const e of rsp){
//   if (e === '2'){
//            answer += "0"
//          } else if ( e === '0'){
//             answer += "5"
//         }else if ( e === '5'){
//             answer += "2"
//         }  
//     }
    
//     return answer;

    //두 번째 방법 (map 함수 연습)
//   const answer = [...rsp].map((e)=>{
//         if (e === '2'){
//             return "0"
//         } else if ( e === '0'){
//            return "5"
//         }else if ( e === '5'){
//            return "2"
//         }
//     }).join('');
  
//     return answer;
    
//서치로 찾아본 좋은 예시 중 하나 (타입에 대한 코드 해석이 필요함)
 const win_map: Record<string, string> = {'0': '5', '2': '0', '5':'2'};

 //각각 대응되는 게 있다면 객체를 사용하는게 좋은 것 같음
    return rsp.split('').reduce((acc,c)=> 
        acc + win_map[c], ''
    )   
}