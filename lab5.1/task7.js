function printDigit(count, digit, n) {
	var string = '';
	if (digit == 'D' && n >= 900) return 'CD';
	if (digit == 'L' && n >= 90) return 'XC';
	if (digit == 'X' && n >= 40) return 'XL';
	if (digit == 'V' && n == 9) return 'IX';
	if (digit == 'I' && n == 4) return 'IV';
	while(count) {
		string += digit;
		count--;
	}
	return string;
}

function convertToRoman(n) {
	var number = '';

	number += printDigit(Math.floor(n / 1000), 'M', n);
	n = n % 1000;

	number += printDigit(Math.floor(n / 500), 'D', n);
	n = n >= 900 ? n - 900 : n % 500;

	number += printDigit(Math.floor(n / 100), 'C', n);
	n = n % 100;

	number += printDigit( Math.floor(n / 50), 'L', n);
	n = n >= 90 ? n - 90 : n % 50;

	number += printDigit(Math.floor(n / 10), 'X', n);
	n = n >= 40 ? n - 40 : n % 10;

	number += printDigit( Math.floor(n / 5), 'V', n);
	n = n >= 9 ? n - 9 : n % 5;

	number += printDigit(n, 'I', n);

	return number;
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask7() {
	assert(convertToRoman(1) == "I", "Case '#0'");
	assert(convertToRoman(5) == "V", "Case '#1'");
	assert(convertToRoman(10) == "X", "Case '#2'");
	assert(convertToRoman(15) == "XV", "Case '#3'");
	assert(convertToRoman(20) == "XX", "Case '#4'");
	assert(convertToRoman(40) == "XL", "Case '#5'");
	assert(convertToRoman(90) == "XC", "Case '#6'");
	assert(convertToRoman(101) == "CI", "Case '#7'");
	assert(convertToRoman(35) == "XXXV", "Case '#8'");
	assert(convertToRoman(132) == "CXXXII", "Case '#9'");
	assert(convertToRoman(281) == "CCLXXXI", "Case '#10'");
	assert(convertToRoman(276) == "CCLXXVI", "Case '#11'");
	assert(convertToRoman(299) == "CCXCIX", "Case '#12'");
	assert(convertToRoman(281) == "CCLXXXI", "Case '#13'");
	assert(convertToRoman(293) == "CCXCIII", "Case '#14'");
	assert(convertToRoman(101) == "CI", "Case '#15'");
	assert(convertToRoman(154) == "CLIV", "Case '#16'");
	assert(convertToRoman(216) == "CCXVI", "Case '#17'");
	assert(convertToRoman(71) == "LXXI", "Case '#18'");
	assert(convertToRoman(70) == "LXX", "Case '#19'");
	assert(convertToRoman(1077) == "MLXXVII", "Case '#20'");
	assert(convertToRoman(554) == "DLIV", "Case '#21'");
	assert(convertToRoman(1566) == "MDLXVI", "Case '#22'");
	assert(convertToRoman(1883) == "MDCCCLXXXIII", "Case '#23'");
	assert(convertToRoman(2294) == "MMCCXCIV", "Case '#24'");
	assert(convertToRoman(1802) == "MDCCCII", "Case '#25'");
	assert(convertToRoman(2762) == "MMDCCLXII", "Case '#26'");
	assert(convertToRoman(2306) == "MMCCCVI", "Case '#27'");
	assert(convertToRoman(1211) == "MCCXI", "Case '#28'");
	assert(convertToRoman(2754) == "MMDCCLIV", "Case '#29'");

	console.log("Done!");
}
runTask7();