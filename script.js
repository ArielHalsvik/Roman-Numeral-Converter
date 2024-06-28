function romanNumeralConverter() {
  const number = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (!number) {
    output.innerHTML = "Please enter a valid number";
    return;
  } else if (number < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  } else if (number >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }

  let firstNumber;
  let secondNumber;
  let thirdNumber;
  let fourthNumber;

  switch (number.length) {
    case 1:
      firstNumber = parseInt(number[0]);
      break;
    case 2:
      firstNumber = parseInt(number[1]);
      secondNumber = parseInt((number[0] += 0));
      break;
    case 3:
      firstNumber = parseInt(number[2]);
      secondNumber = parseInt((number[1] += "0"));
      thirdNumber = parseInt((number[0] += "00"));
      break;
    case 4:
      firstNumber = parseInt(number[3]);
      secondNumber = parseInt((number[2] += "0"));
      thirdNumber = parseInt((number[1] += "00"));
      fourthNumber = parseInt((number[0] += "000"));
      break;
  }

  romanCalculator(firstNumber, secondNumber, thirdNumber, fourthNumber);

  return;
}

function romanCalculator(number1, number2, number3, number4) {
  let finalRomanNumber = [];
  let romanNumber1;
  let romanNumber2;
  let romanNumber3;
  let romanNumber4;

  if (!(number1 === 0) && !(number1 === undefined)) {
    switch (number1) {
      case 1:
        romanNumber1 = "I";
        break;
      case 2:
        romanNumber1 = "II";
        break;
      case 3:
        romanNumber1 = "III";
        break;
      case 4:
        romanNumber1 = "IV";
        break;
      case 5:
        romanNumber1 = "V";
        break;
      case 6:
        romanNumber1 = "VI";
        break;
      case 7:
        romanNumber1 = "VII";
        break;
      case 8:
        romanNumber1 = "VIII";
        break;
      case 9:
        romanNumber1 = "IX";
        break;
      default:
        break;
    }

    finalRomanNumber.push(romanNumber1);
  }

  if (!(number2 === 0) && !(number2 === undefined)) {
    switch (number2) {
      case 10:
        romanNumber2 = "X";
        break;
      case 20:
        romanNumber2 = "XX";
        break;
      case 30:
        romanNumber2 = "XXX";
        break;
      case 40:
        romanNumber2 = "XL";
        break;
      case 50:
        romanNumber2 = "L";
        break;
      case 60:
        romanNumber2 = "LX";
        break;
      case 70:
        romanNumber2 = "LXX";
        break;
      case 80:
        romanNumber2 = "LXXX";
        break;
      case 90:
        romanNumber2 = "XC";
        break;
      default:
        break;
    }

    finalRomanNumber.push(romanNumber2);
  }

  if (!(number3 === 0) && !(number3 === undefined)) {
    switch (number3) {
      case 100:
        romanNumber3 = "C";
        break;
      case 200:
        romanNumber3 = "CC";
        break;
      case 300:
        romanNumber3 = "CCC";
        break;
      case 400:
        romanNumber3 = "CD";
        break;
      case 500:
        romanNumber3 = "D";
        break;
      case 600:
        romanNumber3 = "DC";
        break;
      case 700:
        romanNumber3 = "DCC";
        break;
      case 800:
        romanNumber3 = "DCCC";
        break;
      case 900:
        romanNumber3 = "CM";
        break;
      default:
        break;
    }

    finalRomanNumber.push(romanNumber3);
  }

  if (!(number4 === 0) && !(number4 === undefined)) {
    switch (number4) {
      case 1000:
        romanNumber4 = "M";
        break;
      case 2000:
        romanNumber4 = "MM";
        break;
      case 3000:
        romanNumber4 = "MMM";
        break;
      default:
        break;
    }

    finalRomanNumber.push(romanNumber4);
  }

  const convertedNumber = finalRomanNumber.reverse().join("");

  output.innerHTML = convertedNumber;
}
