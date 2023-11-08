/*     Original by wexxov     */
/*    Ported by wattlefoxv    */

var earnings;
var pay;
var tax;
var tax_payments;
var timer_count;
var tax_time;

var timer = false;

var tb_earnings = document.getElementById("tb_earnings");
var tb_payrate = document.getElementById("tb_payrate");
var tb_tax = document.getElementById("tb_tax");
var btn_tax = document.getElementById("btn_tax");
var btn_level0 = document.getElementById("btn_level0");
var btn_level1 = document.getElementById("btn_level1");
var btn_level2 = document.getElementById("btn_level2");
var btn_level3 = document.getElementById("btn_level3");
var btn_level4 = document.getElementById("btn_level4");
var label3 = document.getElementById("label3");

function main_load() {
    tax_payments = 0;
    earnings = 0.0;
    pay = 9.5;
    tax = 400;

    tb_earnings.value = earnings;
    tb_payrate.value = pay;
    tb_tax.value = "Tax Due : "+tax;
    
    label3.innerText = "";
    
    tax_time = false;
    timer = false;

    btn_tax.classList.remove("bg_red");
    btn_level0.classList.remove("bg_red");
    btn_level1.classList.remove("bg_red");
    btn_level2.classList.remove("bg_red");
    btn_level3.classList.remove("bg_red");
    btn_level4.classList.remove("bg_red");

    clearTimeout(myTimeout);
}

function btn_work_click() {
    if (!tax_time) {
        earnings += pay;
        tb_earnings.value = earnings;
        start_timer();
    }
}

function btn_level0_click() {
    if (tax_payments >= 2 && tax_payments < 5) {
        pay = 12.78;
        tb_payrate.value = pay;
    }
}

function btn_level1_click() {
    if (tax_payments >= 5 && tax_payments < 9) {
        pay = 15.29;
        tb_payrate.value = pay;
    }
}

function btn_level2_click() {
    if (tax_payments >= 9 && tax_payments < 15) {
        pay = 22.17;
        tb_payrate.value = pay;
    }
}

function btn_level3_click() {
    if (tax_payments >= 15 && tax_payments < 22) {
        pay = 29.27;
        tb_payrate.value = pay;
    }
}

function btn_level4_click() {
    if (tax_payments >= 22) {
        pay = 31.74;
        tb_payrate.value = pay;
    }
}

function btn_tax_click() {
    if (tax_time) {
        if (earnings >= tax) {
            timer = false;

            tax_payments++;

            earnings -= tax;
            tb_earnings.value = earnings;

            if (tax_payments < 2) {
                tax += 60;
            } if (tax_payments >= 2 && tax_payments < 5) {
                btn_level0.classList.add("bg_red");
                tax += 68;
            } if (tax_payments >= 5 && tax_payments < 9) {
                btn_level0.classList.remove("bg_red");
                btn_level1.classList.add("bg_red");
                tax += 74;
            } if (tax_payments >= 9 && tax_payments < 15) {
                btn_level1.classList.remove("bg_red");
                btn_level2.classList.add("bg_red");
                tax += 81;
            } if (tax_payments >= 15 && tax_payments < 22) {
                btn_level2.classList.remove("bg_red");
                btn_level3.classList.add("bg_red");
                tax += 90;
            } if (tax_payments >= 22) {
                btn_level3.classList.remove("bg_red");
                btn_level4.classList.add("bg_red");
                tax += 112;
            }

            tb_tax.value = "Tax Due : " + tax;
            tax_time = false;
            btn_tax.classList.remove("bg_red");
        } else {
            label3.innerText = "You are broke";
        }
    }
}

function btn_prestige_click() {
    if (tax_payments >= 50) {
        earnings = 0.0;
        tb_earnings.value = earnings;
        pay = 9.5;
        tb_payrate.value = pay;
        tax_payments = 0;
    }
}

function start_timer() {
    if (!timer) {
        timer = true;
        setTimeout(function () {
            tax_time = true;
            btn_tax.classList.add("bg_red");
        }, 6000);
    }
}

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

main_load();
