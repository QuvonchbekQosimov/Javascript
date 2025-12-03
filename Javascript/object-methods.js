const talaba = {
    ismi: 'Quvonchbek',
    familiyasi: 'Qosimov',
    yoshi: 19,
    manzil: {
        viloyat: 'Surxondaryo',
        tuman: 'Qumqo`rg`on',
        mahalla: 'Istiqlol'
    },
    salomlashish: function () {
        console.log('Salom! Men ' + this.ismi);
    }
}
talaba.salomlashish();
console.log(Object.keys(talaba));
console.log(Object.values(talaba));
console.log(Object.entries(talaba));




