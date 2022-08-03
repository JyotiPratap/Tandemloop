function OddNu(n) {
    let i;
    let temp = [];
    if (n <= 2) {
        return 1
    }
    for (i = 1; i <= (n + 2); i++) {

        if (i % 2 == 0) { continue }
        else { temp.push(i) }
    }
    return temp.join();
}

console.log(OddNu(6));
