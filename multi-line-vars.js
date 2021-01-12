function tokenize(input) {
  let parts = input.split(" "), tokens = [], i, token;
  for(i=0;i<parts.length;i++) {
    token =parts[i].replace(/[^a-zA-Z]/, "");
    tokens.push(token);
  }
  return tokens;
}

console.log(tokenize("Hello, world! Here are words!"));