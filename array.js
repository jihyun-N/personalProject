// const fruits = ["apple", "banana", "cherry"];
// 또는
// const fruits = new Array("apple", "banana", "cherry");

// **원본 배열을 수정하는 메서드**

// - **`push()`**: 배열의 끝에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다.
// - **`pop()`**: 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.
// - **`shift()`**: 배열의 첫 번째 요소를 제거하고, 그 요소를 반환합니다.
// - **`unshift()`**: 배열의 시작 부분에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다.
// - **`splice()`**: 배열의 기존 요소를 삭제하거나, 새 요소를 추가하여 배열의 내용을 변경합니다.

// ---

// **새 배열을 반환하는 메서드**

// - **`map()`**: 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새 배열을 반환합니다. 매핑(mapping)해주는 함수.
//     - *여기서 말하는 매핑(mapping)은 한 데이터 집합의 요소들을 특정 규칙이나 함수를 사용하여 다른 형태의 요소로 변환하는 과정을 의미합니다. 이 때 각 요소는 새로운 요소로 "매핑"됩니다.
// - **`filter()`**: 주어진 함수의 테스트를 통과하는 모든 요소로 이루어진 새 배열을 반환합니다.
// - **`slice()`**: 배열의 일부분을 얕은 복사하여 새 배열 객체로 반환합니다.
// - **`concat()`**: 기존 배열에 다른 배열이나 값들을 합쳐서 새 배열을 만듭니다.

// ---

// **결과값을 반환하는 메서드**

// - **`reduce()`**: 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 단일 결과값을 반환합니다.
//     - *여기서 말하는 리듀서(reducer)는 배열의 모든 요소를 하나의 값으로 축소하는 함수입니다. 배열에서 전체 요소들을 하나의 값으로 *줄이는* 역할을 함으로써 리듀서라 하는 것이죠.
// - **`find()`**: 주어진 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 만족하는 요소가 없으면 **`undefined`**를 반환합니다.
// - **`some()`**: 배열의 어떤 요소라도 주어진 테스트 함수를 만족하면 **`true`**를, 모두 만족하지 않으면 **`false`**를 반환합니다.
// - **`every()`**: 모든 요소가 주어진 테스트 함수를 만족하면 **`true`**를, 하나라도 만족하지 않으면 **`false`**를 반환합니다.
// - **`includes()`**: 배열이 특정 요소를 포함하고 있는지 여부를 **`true`** 또는 **`false`**로 반환합니다.
// - **`indexOf()`**: 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환합니다. 없으면 -1을 반환합니다.
// - **`lastIndexOf()`**: **`indexOf()`**와 유사하지만, 배열을 끝에서부터 검색합니다.
// - `forEach()`: 배열의 각 요소에 대해 주어진 함수를 실행합니다. 이 메서드는 배열을 순회하면서 각 요소에 대해 지정된 콜백 함수를 한 번씩 호출합니다. `map()`과 달리 항상 `undefined`를 반환합니다.
