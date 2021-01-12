function tokenize(input) {
  var parts = input.split(" ");
  var tokens = [];
  var i;
  var token;
  for(i=0;i<parts.length;i++) {
    token =parts[i].replace(/[^a-zA-Z]/, "");
    tokens.push(token);
  }
  return tokens;
}

console.log(tokenize("Hello, world! Here are words!"));