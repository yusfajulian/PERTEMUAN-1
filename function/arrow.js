function fungsi1(callback1, callback2) {
    console.log("hay");
    callback1();
    callback2();
}

// Anonymous arrow function
fungsi1(() => console.log("assalamualaikum 1"),
    () => console.log("assalamualaikum 2"));