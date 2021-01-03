var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// startHex//需要转换的进制
//          endHex//转换后的进制
//          convertNum//需要转换的数字
function hexConvert(startHex, endHex, convertNum) {
  if (convertNum == "") {
    return false;
  }
  //console.log(111)
  if (startHex == 10) {
    //只能是数字和小数点，且小数点最多一个
    var t = convertNum.replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    return tenToOhter(endHex, t);
  } else {
    var pattern;
    if (startHex <= 9) {
      pattern = "[^0-" + (startHex - 1) + ".]";
    }
    if (startHex > 10 && startHex <= 36) {
      pattern = "[^0-9a-" + DIGITS[startHex - 1] + "A-" + DIGITS[parseInt(startHex) + 25] + ".]";
    }
    if (startHex > 36 && startHex <= 62) {
      pattern = "[^0-9a-zA-" + DIGITS[parseInt(startHex - 1)] + ".]";
    }
    //只能是数字和小数点,数字只能是0或1，小数点最多一个/[^0-1.]/g
    var t = convertNum.replace(new RegExp(pattern, "g"), "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    return twoToOhter(startHex, endHex, t);


  }
}
//十进制转换为其他进制，循环取余法
function tenToOhter(endHex, convertNum) {
  convertNum = parseFloat(convertNum)
  if (endHex <= 36) {
    return convertNum.toString(endHex);
  } else { //循环取余
    var re = "";
    var dict = convertNum; //除数
    while (true) {
      re += DIGITS[dict % endHex];
      var dict = parseInt(dict / endHex);

      if (dict == 0) {
        break;
      }
    }
    return reverse(re);
  }

}
//二进制转换为其他进制
function twoToOhter(startHex, endHex, convertNum) {
  //先将2进制转换为10进制
  var t = reverse(convertNum);
  var re = 0;
  if (startHex <= 9) {
    for (var i = 0; i < t.length; i++) {
      re += t[i] * Math.pow(startHex, i);
    }
  }
  if (startHex > 10 && startHex <= 36) {
    for (var i = 0; i < t.length; i++) {

      //获取索引下标
      var index = DIGITS.map(item => item).indexOf(t[i].toLowerCase())
      re += index * Math.pow(startHex, i);
    }
  }
  if (startHex > 36 && startHex <= 62) {
    for (var i = 0; i < t.length; i++) {
      //获取索引下标
      var index = DIGITS.map(item => item).indexOf(t[i])
      re += index * Math.pow(startHex, i);
    }
  }
  //将十进制转换为其他进制
  return tenToOhter(endHex, re.toString());

}
//倒序字符串
function reverse(str) {
  var stack = []; //生成一个栈
  for (var len = str.length, i = len - 1; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join('');
}
function string10to62(number) {
  var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split('');
  var radix = chars.length;
  var qutient = +number;
  var arr = [];
  do {
    mod = qutient % radix;
    qutient = (qutient - mod) / radix;
    arr.unshift(chars[mod]);
  }
  while (qutient);
  return arr.join('');
}
function output62(num) {
  var a = hexConvert(16, 10, num)
  var b = string10to62(a)
  var c = b.substring(b.length - 6)
  return c.toUpperCase()
}

module.exports = {
  hexConvert: hexConvert,
  output62: output62,
  string10to62: string10to62,
  reverse: reverse,
  twoToOhter: twoToOhter,
  tenToOhter: tenToOhter,

}