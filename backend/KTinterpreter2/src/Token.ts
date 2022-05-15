export enum Token {
  경태머리 = 0, // null 값
  identifier, // 식별자
  variable, // 변수
  assign, // =

  number, // 숫자
  string, // 문자열

  print, //출력문

  sum, // +
  sub, // -
  mul, // *
  div, // /
  left, // %

  start_curl, // {
  finish_curl, // }

  quote, //쌍따옴표

  comma,
  semicolon, //, ;
  excess, // 초과
  moreThan, // 이상
  below, // 이하
  under, // 미만
  equl, // 대입
  if,
  condition,
}
