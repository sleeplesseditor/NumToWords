function NumbersInWords (num) {
    //Seperate units into different arrays
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const large = ['', 'thousand', 'million', 'billion', 'trillion'];
    //Create let variable for output result
    let words = '';


    for (let i = 0; i < large.length; i++) {
      let tempNumber = num%(100 * Math.pow(1000, i));
      if (Math.floor(tempNumber/Math.pow(1000, i)) !== 0) {
        //Select which array to take words from
        if (Math.floor(tempNumber/Math.pow(1000, i)) < 20) {
          words = first[Math.floor(tempNumber/Math.pow(1000, i))] + large[i] + ' ' + words;
        } else {
          words = tens[Math.floor(tempNumber/(10 * Math.pow(1000, i)))] + '-' + first[Math.floor(tempNumber/Math.pow(1000, i))%10] + large[i] + ' ' + words;
        }
      }
  
      tempNumber = num%(Math.pow(1000, i + 1));
      if (Math.floor(tempNumber/(100 * Math.pow(1000, i))) !== 0) words = first[Math.floor(tempNumber/(100 * Math.pow(1000, i)))] + 'hundred ' + words;
    }
      return words;
  }

//First Test – expected output of 'one thousand two hundred forty-eight'
console.log(NumbersInWords(1248));

//Second Test – expected output of 'one '
console.log(NumbersInWords(1));

//Third Test – expected output of 'twenty-one '
console.log(NumbersInWords(21));

//Fourth Test – expected output of 'one hundred five'
console.log(NumbersInWords(105));

//Fifth Test – expected output of 'fifty-six million nine hundred forty-five thousand seven hundred eighty-one'
console.log(NumbersInWords(56945781));

//Final Test – expected output of 'nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine'
console.log(NumbersInWords(999999999));