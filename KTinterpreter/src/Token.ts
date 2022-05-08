export enum Token_type {
  경태머리 = 0, // null 값
  identifier, // 식별자
  variable, // 변수
  replace, // =

  number, // 숫자
  string, // 문자열

  print, //출력문

  깜, // +
  찍, // -
  한, // *
  경, // /
  태, // %

  헤, // {
  응, // }

  quote, //쌍따옴표

  comma,
  Semicolon, //, ;
}
