export enum Token_type {
  경태머리 = 0, // null 값
  identifier, // 식별자

  variable, //리터럴
  print, //출력문

  깜, // +
  찍, // -
  한, // *
  경, // /
  태, // %

  헤, // {
  응, // }

  quote, //쌍따옴표
  는, // =

  comma,
  Semicolon, //, ;
}
