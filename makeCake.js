const { rejects } = require("assert");
const { resolve } = require("path");
const readline = require("readline");

function wait(second) {
    let waitPromise = new Promise((resolver, rejector) => {
        setTimeout(() => {
            resolver();
        }, second * 1000);
    });
    return waitPromise;
}

async function findName() {
    const rlName = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve, reject) => {
        rlName.question('Tên chủ nhân chiếc bánh là gì: ', (input) => {
            resolve(input);
            rlName.close();
        });
    });
}

async function findAge() {
    const rlAge = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve, reject) => {
        rlAge.question('Tuổi bao nhiêu: ', (input) => {
            resolve(input);
            rlAge.close();
        });
    });
}

async function sizeCake() {
    const rlSize = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve, reject) => {
        rlSize.question('Size bánh bao nhiêu: ', (input) => {
            resolve(input);
            rlSize.close();
        });
    });
}

function giaSizeBanh(size) {
    if (size == "S") {
        return parseInt(169000);
    } else if (size == "M") {
        return parseInt(233000);
    } else if (size == "L") {
        return parseInt(510000);
    }else{
        console.log("Lỗi!!!!!");
    }
}

async function xinTien(moneyExpect) {
    let layTien;
    const rlAskForMoney = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(async (resolve, rejects) => {
        console.log("Mẹ cho con xin tiền");
        await new Promise((resolve, rejects) => {
            rlAskForMoney.on("line", (input) => {
                layTien = parseInt(input);
                resolve();
                rlAskForMoney.close();
            });
        });
        if (layTien >= moneyExpect) {
            resolve(["Ok đủ tiền rồi", layTien]);
        } else {
            rejects("Mẹ không cho đủ tiền");
        }
    });
}

async function diCho() {
    console.log("Bắt đầu đi chợ, mua nguyên liệu");
    await wait(5);
    console.log("đi về");
    await wait(3);
    console.log("Đã về đến nhà");
    await wait(1);
}

async function lamBanh() {
    async function soChe() {
        return new Promise(async (resolve, rejects) => {
            console.log("1. Tách trứng");
            console.log("2. Ray bột");
            console.log("3. Chuẩn bị gia vị");
            await wait(5);
            console.log("Sơ chế hoàn tất");
            resolve();
        });
    }

    async function buoc1LamBot() {
        return new Promise(async (resolve, rejects) => {
            console.log("Làm bột bánh");
            await wait(5);
            console.log("Làm bột hoàn tất");
            resolve();
            await wait(1);
        });
    }

    async function buoc2LamBot() {
        return new Promise(async (resolve, rejects) => {
            console.log("Đánh kem");
            await wait(2);
            console.log("Đánh kem hoàn tất");
            await wait(1);
            resolve();
        });
    }

    async function buoc3LamBot() {
        return new Promise(async (resolve, rejects) => {
            console.log("Ủ bột bánh");
            await wait(7);
            console.log("Ủ bánh xong");
            await wait(1);
            resolve();
        });
    }

    async function buoc4LamBot() {
        return new Promise(async (resolve, rejects) => {
            console.log("Đổ khuôn");
            await wait(2);
            console.log("Đổ khuôn xong");
            await wait(1);
            resolve();
        });
    }

    async function nuongBanh() {
        return new Promise(async (resolve, rejects) => {
            console.log("Nướng bánh");
            await wait(3);
            console.log("Bánh đã chín");
            await wait(1);
            resolve();
        });
    }

    async function quetKem() {
        return new Promise(async (resolve, rejects) => {
            console.log("Quết kem");
            await wait(1);
            console.log("Quết kem xong");
            await wait(1);
            resolve();
        });
    }

    async function trangTri() {
        return new Promise(async (resolve, rejects) => {
            console.log("Trang trí");
            await wait(3);
            console.log("Hoàn thành trang trí");
            await wait(1);
            resolve();
        });
    }

    async function vietTen() {
        return new Promise(async (resolve, rejects) => {
            console.log("Viết tên lên bánh");
            await wait(2);
            console.log("Tên trên bánh xong");
            await wait(1);
            resolve();
        });
    }
    await soChe();
    await Promise.all([buoc1LamBot(), buoc2LamBot()]);
    await buoc3LamBot();
    await buoc4LamBot();
    await nuongBanh();
    await quetKem();
    await Promise.all([trangTri(), vietTen()]);
}

async function anBanh() {
    console.log("Quất !!!!!!");
}

let main = async function () {
    await findName();
    await findAge();
    let size = await sizeCake();
    let moneyExpect = giaSizeBanh(size);
    await xinTien(moneyExpect)
        .then(async (value) => {
            let soTienMeDua = parseInt(value[1]);
            console.log(value);
            await diCho();
            await lamBanh();
            await anBanh();
            let tienDuMuaBanh = soTienMeDua - parseInt(moneyExpect);
        console.log(`còn dư ${tienDuMuaBanh}, trả lại cho mẹ`);
        })
        .catch((value) => {
            console.log(value);
            console.log("Sủiiiiiii");
        });
}

main();
