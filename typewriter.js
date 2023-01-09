const sentence = "hello there from lighthouse labs";
let count = 1000;


for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count);
  count = count + 100;
}

setTimeout(() => console.log("\n"), 5000);
