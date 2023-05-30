// https://school.programmers.co.kr/learn/courses/30/lessons/60058

// 괄호의 개수는 맞지만 짝이 맞지 않음 올바른 괄호 문자열로 만들어야함
// 균형잡힌 괄호 문자열 : "(()))(" 개수는 맞지만 짝이 맞지 않음
// 올바른 괄호 문자열 : "(())()" 개수도 맞고 짝이 맞음
// 빈문자열일 경우 빈 문자열을 반환

// u와 v로 나누어 올바른 괄호 문자열인지 확인하고 아닐 경우 괄호를 뒤집는다

// 분할정복 DFS 사용

function solution(p) {
  if (p === "") {
    return "";
  }

  let [u, v] = divideString(p);

  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    let answer = "(" + solution(v) + ")";
    u = u.slice(1, u.length - 1);
    u = reverseParentheses(u);
    return answer + u;
  }
}

// 문자열을 균형잡힌 괄호 문자열로 분리하는 함수
function divideString(str) {
  let openCount = 0;
  let closeCount = 0;
  let index = 0;

  do {
    if (str[index] === "(") {
      openCount++;
    } else if (str[index] === ")") {
      closeCount++;
    }

    index++;
  } while (openCount !== closeCount);

  return [str.slice(0, index), str.slice(index)];
}

// 올바른 괄호 문자열인지 확인하는 함수
function isCorrect(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// 괄호 방향을 뒤집는 함수
function reverseParentheses(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      result += ")";
    } else if (str[i] === ")") {
      result += "(";
    }
  }

  return result;
}

console.log(solution(")(")); // ()
