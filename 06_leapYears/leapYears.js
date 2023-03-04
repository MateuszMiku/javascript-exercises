const leapYears = function(year) {
    if ( year % 4 === 0
      && year % 100 !== 0
      || year % 400 === 0 ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;



//leap = divisible by 4 
//normal = divisible by 100 unless they are by 400