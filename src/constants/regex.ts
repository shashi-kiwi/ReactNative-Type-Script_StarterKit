export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/;
export const LOWER_CASE_REGEX = /[a-z]/;
export const USERNAME_REGEX = /^[a-zA-Z0-9_()@#$%!&^\.]+$/;
export const UPPER_CASE_REGEX = /[A-Z]/;
export const NUMERIC_REGEX = /\d/;
export const BIRTH_DATE =
  /^(0[1-9]|1[012])[- /.](0[1-9]|[12]\d|3[01])[- /.](19\d{2}|20([0-1]\d|2[012]))$/;
export const NUMBER_WITH_DIGITS = /(-?\d+(\.\d+)*)/g;
export const SCALE_REGEX = /scale\((\d+[\.\d+]*)\)/;
export const ROTATION_REGEX = /rotate((-?\d+[\.\d+]*)?)/;
export const ROTATION_INITIAL_MATCHER_REGEX = /rotate\([\s\S]+\)/g;
export const DOB_FORMAT =
  /^(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/;
  export const NUMBER_REGEX = /\D/g;
  export const EMOJI_REGEX =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
