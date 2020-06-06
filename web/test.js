
let small = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
let big = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "quatre", "quatre-vingt-un", "quatre-vingt-onze"]
let result = [];
let string = "";

var enter = parseInt(prompt("Entrez un numero"), 10);

if (!isNaN(enter)) {
    number2string(enter);
}
else {
    enter = "is not a number";
}

alert(result.join('-'));


function number2string(enter) {
    let tmp = [];
    if (enter != 0) {

        if (enter >= 100) {
            result.push(parseInt(enter / 100, 10));
            enter %= 100;
        }
        if (enter >= 10) {
            result.push(parseInt(enter / 10, 10));
            enter %= 10;
        }
        if (enter > 1) {
            result.push(parseInt(enter / 1, 10));
        }
    }

    result = result.reverse();

    for (let i = 0; i < result.length; i++) {
        switch (i) {
            case 0:
                if (result[0] < 7 && result.length >= 1) {
                    if (result[i + 1] == 1) {
                        let a = (result[1] * 10) + result[i];
                        tmp.push(small[a]);
                        i++;
                    }
                    else if (result[i + 1] == 0) {
                        tmp.push(small[result[i]]);
                        i++;
                    } else {
                        tmp.push(small[result[i]]);
                    }
                }
                break;
            case 1:
                tmp.push(big[result[i]]);

                break;
            case 2:
                if (result[i] == 1) {
                    tmp.push("cents");
                }
                else {
                    tmp.push(small[result[i]] + "-cents");
                }
                break;

            default:
                break;
        }
    }
    result=tmp.reverse();
}