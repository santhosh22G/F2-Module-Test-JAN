let img1 = document.querySelector("#column1");
let img2 = document.querySelector("#column2");
let img3 = document.querySelector("#column3");
let img4 = document.querySelector("#column4");
let selected = document.querySelector(".selected");
let form = document.querySelector(".form");
let subDiv = document.querySelector(".subDiv");
let para3 = document.querySelector(".firstinst");
let prime = document.querySelector(".primary");
let para1 = document.querySelector(".dicedet1");
let para2 = document.querySelector(".dicedet2");
let para4 = document.querySelector(".secondinst");
let para5 = document.querySelector(".current");
let para6 = document.querySelector(".total");
let para7 = document.querySelector(".final");
let para8 = document.querySelector(".token");
let dice = document.querySelector(".dice");
let congratsimg = document.querySelector(".success");
selected.addEventListener(
    "click",
    () => {
        show(selected);
    },
    { once: true }
);
let name;
let email;
let user;
let flag = true;
let randomIndex;
let random;
let count = 0;
let min = 0;
let valid_name = document.querySelector("#name");
let valid_email = document.querySelector("#email");
let valid_user = document.querySelector("#username");
form.addEventListener("submit", validation);

function show(e) {
    prime.classList.add("hide");
    img1.classList.remove("selected");
    form.classList.remove("hide");
    subDiv.classList.remove("hide");
}

function validation(e) {
    e.preventDefault();
    name = valid_name.value;
    email = valid_email.value;
    user = valid_user.value;
    para3.classList.remove("hide");
    para3.innerText = "Click on second image.";
    obj["one"] = true;
    if (obj["one"] == true) {
        function2();
    }
}

let arr = [1, 2, 3, 4, 5, 6];
let obj = {
    one: false,
    two: false,
    three: false,
    four: false,
};
function function2() {
    img2.addEventListener("click", details, { once: true });
    function details() {
        form.classList.add("hide");
        para1.innerText = `Name    :  ${name}`;
        para2.innerText = `Username    :  ${user}`;
        para3.classList.add("hide");
        para1.classList.remove("hide");
        para2.classList.remove("hide");
        para1.classList.add("par");
        para2.classList.add("par");
        para4.classList.remove("hide");
        para4.innerText = " Click on third image !";
        obj["two"] = true;
        if (obj["one"] == true && obj["two"] == true) {
            function3();
        }
    }
}

function function3() {
    count++;
    let sum = 0;

    img3.addEventListener("click", play, { once: true });
    function play() {
        if (count > 2) {
            img3.removeEventListener("click", play);
            return;
        } else {
            para7.classList.add("hide");

            min = 0;
            para4.classList.add("hide");
            para1.classList.add("hide");
            para2.classList.add("hide");
            dice.classList.remove("hide");
            prime.classList.remove("hide");
            prime.innerText = "Click on the dice image to roll.";
            para5.classList.remove("hide");
            para5.innerText = `Current value : 0`;
            para6.classList.remove("hide");
            para6.innerText = `Total sum : 0`;
            dice.addEventListener("click", roll);
            function roll() {
                min++;
                randomIndex = Math.floor(Math.random() * 6);
                random = arr[randomIndex];
                sum += random;
                para5.innerText = `Current value : ${random}`;
                para6.innerText = `Total sum : ${sum}`;
                if (min == 3) {
                    prime.classList.add("hide");
                    dice.removeEventListener("click", roll);
                    if (sum <= 10 && flag == true) {
                        flag = false;
                        function3();
                        para7.classList.remove("hide");
                        para7.innerText = "Try Again by clicking on third image.";
                    } else if (sum <= 10 && flag == false) {
                        para7.classList.remove("hide");
                        para7.innerText = "Bad Luck Try Again !";
                        return;
                    } else if (sum > 10) {
                        para7.classList.remove("hide");
                        para7.innerText =
                            "Congrats ! Click on fourth image to get your coupon.";
                        obj["three"] = true;
                        if (
                            obj["one"] == true &&
                            obj["two"] == true &&
                            obj["three"] == true
                        ) {
                            function4();
                        }
                    }
                }
            }
        }
    }
}

function function4() {
    img4.addEventListener("click", results);
    function results() {
        dice.classList.add("hide");
        para5.classList.add("hide");
        para6.classList.add("hide");
        para7.classList.add("hide");
        para8.classList.remove("hide");
        congratsimg.classList.remove("hide");
        let x = generateCouponCode();
        para8.innerText = `Coupon Code : ${x}`;
    }
}

function generateCouponCode() {
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let small = 'abcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let sc = '~@#$%^&*'
    let char = capital + small + num + sc
    let token = ""
    for (let i = 1; i <= 12; i++) {
        let ran = Math.floor(Math.random() * char.length)
        token += char[ran]
    }
    return token
}
