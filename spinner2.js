let array = ['\r/   ', '\r-   ','\r/   ','\r-   ','\r\\   ', '\r\|   ', '\r/   ', '\r-   ','\r\\   ','\r\|   ' ]
let counter = 100
for  (let values of array) {
  setTimeout(() => {
    process.stdout.write(values);
  }, counter);
  counter +=200;
}