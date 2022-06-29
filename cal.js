function test1() {
    let x = document.getElementById("num1").value;
    console.log(x);
    let y = document.getElementById("num2").value;
    console.log(y);
    let r = document.getElementById("result");
    x = parseInt(x);
    y = parseInt(y);
    let s = document.getElementById("sum");
    s = x + y;
    s = parseInt(s);
    r.value = s;
    r.innerHTML = r.value;
}
function test2() {
    let xx = document.getElementById("num1").value;
    let yy = document.getElementById("num2").value;
    let rr = document.getElementById("result");
    xx = parseInt(xx);
    yy = parseInt(yy);
    console.log(xx);
    console.log(yy);
    let b = document.getElementById("sub");
    b = xx - yy;
    b = parseInt(b);
    rr.value = b;
    rr.innerHTML = rr.value;
}
function test3() {
    let xxx = document.getElementById("num1").value;
    let yyy = document.getElementById("num2").value;
    let rrr = document.getElementById("result");
    xxx = parseInt(xxx);
    yyy = parseInt(yyy);
    console.log(xxx);
    console.log(yyy);
    let m = document.getElementById("mul");
    m = xxx * yyy;
    m = parseInt(m);
    rrr.value = m;
    rrr.innerHTML = rrr.value;
}
function test4() {
    let xxxx = document.getElementById("num1").value;
    let yyyy = document.getElementById("num2").value;
    let rrrr = document.getElementById("result");
    xxxx = parseInt(xxxx);
    yyyy = parseInt(yyyy);
    console.log(xxxx);
    console.log(yyyy);
    let d = document.getElementById("div");
    d = xxxx / yyyy;
    d = parseInt(d);
    rrrr.value = d
    rrrr.innerHTML = rrrr.value;
}