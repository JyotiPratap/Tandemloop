function findOd(n) {
    let temp = [];
    let i, j;
    for (i = 1; i <= 2 * n; i++) {
        if (i % 2 == 0)
            continue;
        else
            temp.push(i);
    }
    return temp.join();
}

console.log(findOd(5));
