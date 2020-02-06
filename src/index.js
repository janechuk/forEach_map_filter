import "./styles.css";
document.getElementById("app").innerHTML = `
`;
//forEach

// doubleValues
function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  console.log(newArr);
}
doubleValues([1, 2, 3]);

// onlyEvenValues
function onlyEvenValues(arr) {
  let onlyEvenArr = [];
  arr.forEach(function(val, i, arr) {
    if (val % 2 === 0) {
      onlyEvenArr.push(val);
    }
  });
  console.log(onlyEvenArr);
}
onlyEvenValues([5, 1, 2, 3, 10]);

// showFirstAndLast
function showFirstAndLast(arr) {
  let firstAndLast = [];
  arr.forEach(function(val, i) {
    firstAndLast.push(val[0] + val[val.length - 1]);
  });
  console.log(firstAndLast);
}
showFirstAndLast(["colt", "matt", "tim", "test"]);

// addKeyAndValue
function addKeyAndValue(arr, key, value) {
  let keyAndValue = [];
  arr.forEach(function(obj) {
    obj[key] = value;
  });
  console.log(arr);
}
addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

// vowelCount
function vowelCount(str) {
  let splitArr = str.split("");
  let vowelObj = {};
  let vowel = "aeiou";

  splitArr.forEach(function(val) {
    let lowerCase = val.toLowerCase();
    if (vowel.indexOf(lowerCase) !== -1) {
      if (vowelObj[lowerCase]) {
        vowelObj[lowerCase]++;
      } else {
        vowelObj[lowerCase] = 1;
      }
    }
  });
  console.log(vowelObj);
}

vowelCount("Elie");

//map

//doubleValuesWithMap

function doubleValuesWithMap(arr) {
  let mappedArr = arr.map(function(val) {
    return val * 2;
  });
  console.log(mappedArr);
}
doubleValuesWithMap([1, 2, 3]);

//valTimesIndex
function valTimesIndex(arr) {
  let valTimesIndexArr = arr.map(function(val, i) {
    return val * i;
  });
  console.log(valTimesIndexArr);
}
valTimesIndex([1, 2, 3]);

//extractKey
function extractKey(arr, key) {
  let extractKeyArr = arr.map(function(val, i, array) {
    return val[key];
  });
  console.log(extractKeyArr);
}

extractKey(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "name"
);

//extractFullName
function extractFullName(arr) {
  let extractNameArr = arr.map(function(val, i, array) {
    return val.first + " " + val.last;
  });
  console.log(extractNameArr);
}

extractFullName([
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele" }
]);

//filter

//filterByValue

function filterByValue(arr, key) {
  let filterByValArr = arr.filter(function(val, i, array) {
    return val[key] !== undefined;
  });
  console.log(filterByValArr);
}

filterByValue(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true }
  ],
  "isCatOwner"
);

//find

function find(arr, val) {
  let findArr = arr.filter(function(num, i, array) {
    return arr[i] === val;
  })[0];
  console.log(findArr);
}

find([1, 2, 3, 4, 5], 3);
find([1, 2, 3, 4, 5], 10);

//findInObj

function findInObj(arr, key, val) {
  let findInObjArr = arr.filter(function(item, ind, array) {
    return item[key] === val;
  })[0];
  console.log(findInObjArr);
}

findInObj(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "att", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true }
  ],
  "isCatOwner",
  true
);

//removeVowels

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

removeVowels("Elie");
removeVowels("TIM");

//doubleOddNumbers

function doubleOddNumbers(arr) {
  let doubleOddNumbersArr = arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
  console.log(doubleOddNumbersArr);
}
doubleOddNumbers([1, 2, 3, 4, 5]);
