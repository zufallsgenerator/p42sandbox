function tokenize(input) {
  const parts = input.split(" ");
  const tokens = [];
  for(let i=0;i<parts.length;i++) {
    const token =parts[i].replace(/[^a-zA-Z]/, "");
    tokens.push(token);
  }
  return tokens;
}

console.log(tokenize("Hello, world! Here are words!"));