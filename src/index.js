var nOne = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var nTen = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
    if ((number = number.toString()).length > 9) return 'refull';
    n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    
    if (!n) return; var str = '';
    str += (n[0] == 0) ? (nOne[Number(n[0])] + 'zero') + '' : '';
    str += (n[1] != 0) ? (nOne[Number(n[1])] + ' ' || nTen[n[1][0]] + ' ' + nOne[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (nOne[Number(n[2])] + ' ' || nTen[n[2][0]] + ' ' + nOne[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (nOne[Number(n[3])] + ' ' || nTen[n[3][0]] + ' ' + nOne[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (nOne[Number(n[4])] + ' ' || nTen[n[4][0]] + ' ' + nOne[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? (nOne[Number(n[5])] || nTen[n[5][0]] + ' ' + nOne[n[5][1]]) + '' : '';

    return str.trim();
}
