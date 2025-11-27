const passedHtml = true;
const passedCss = true;
let message = ''
if (passedHtml && passedCss){
    message = 'Siz kursni boshlashingiz mumkin !'
}
else if (passedHtml || passedCss) {
    message = 'Iltimos bootstrap ni boshlashingizdan oldin ikkinchi kursni tugating !'
}
else {
    message = 'Iltimos bootstrap ni boshlashdan oldin ikkita kursni tugating !'
}


