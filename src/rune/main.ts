export enum token_type {
  // utility tokens
  end,
  error,
  empty,
  // paired delimiters
  /** Lexeme: `(` */
  left_paren,
  /** Lexeme: `)` */
  right_paren,
  /** Lexeme: `{` */
  left_brace,
  /** Lexeme: `}` */
  right_brace,
  /** Lexeme: `[` */
  left_bracket,
  /** Lexeme: `]` */
  right_bracket,
  // unary delimiters
  semicolon,
  colon,
  dot,
  comma,
  // algebraic operators
  plus,
  minus,
  star,
  slash,
  caret,
  percent,
  bang,
  // relational operators 
  vbar,
  tilde,
  equal,
  less,
  greater,
  less_equal,
  greater_equal,
  bang_equal,
  equal_equal,
  // tickers
  plus_plus,
  minus_minus,
  star_star,
  // list operators
  ampersand,
  // vector operators
  dot_add,
  dot_star,
  dot_minus,
  dot_caret,
  at,
  // matrix operators
  pound_plus,
  pound_minus,
  pound_star,
  // literals
  integer,
  float,
  fraction,
  scientific,
  big_integer,
  symbol,
  string,
  boolean,
  nan,
  inf,
  nil,
  numeric_constant,
  // keywords
  and,
  or,
  not,
  nand,
  xor,
  xnor,
  nor,
  if,
  else,
  fn,
  let,
  var,
  return,
  while,
  for,
  class,
  print,
  super,
  this,
  rem,
  mod,
  div,
  native,
  // algebraic strings
  algebra_string,
  // structures
  list,
}
