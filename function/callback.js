//callback function
//fungsi yang di jadikan arguemn fungsi lain,
//kemudiam dipanggil dari dalam fungsi itu

function fungsi1(callback1, callback2) {
    console.log("hay");
    callback2();
    callback1();
}

function fungsi2() {
    console.log("Hello");
}

function fungsi3() {
    console.log("assalamualaikum");
}
fungsi1(fungsi2, fungsi3);