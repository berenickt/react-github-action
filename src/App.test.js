import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로 접근)
  const counterElement = screen.getByTestId('counter');
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

// **** - 버튼 생성
test('minus button has correct text', () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId('minus-button');
  expect(minusButtonElement).toHaveTextContent('-');
});

// **** + 버튼 생성
test('plus button has correct text', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toHaveTextContent('+');
});

// **** FireEvent API
// 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야 하는 경우 사용

// **** +버튼을누르면 counter + 1
test('When the + button is pressed, the counter changes to 1', () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로 접근)
  const buttonElement = screen.getByTestId('plus-button');
  // click plus button
  fireEvent.click(buttonElement);
  // 카운터가 0에서 +1 돼서 1이 됩니다.
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

// **** -버튼을누르면 counter - 1
test('When the - button is pressed, the counter changes to -1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});

// **** on/off 버튼을 만드는데 이 버튼은 파란색
test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');
  // on/off 버튼 색깔을 파란색으로...
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

// **** on/off 버튼을 클릭할 때 -,+ 버튼을 못누르게 막기
test('Prevent the -,+ button from being pressed when the on/off button is cliecked', () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId('on/off-button');
  // click onoffButtonElement button
  fireEvent.click(onOffButtonElement);
  // screen object를 이용해서 원하는 엘리먼트에 접근(접근할 떄 ID로 접근)
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
});
