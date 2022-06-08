// Complete the following exercises using functions

/* 1
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

/* 2
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function find_longest_word(str)
{
  let array1 = str.split(' ');
  let highestLength = 0
  let highestIndex 
  array1.forEach((element, i) => {
    if (element.length > highestLength) {
      highestIndex = i
      highestLength = element.length
    }
  });

  return array1[highestIndex];
}
console.log(find_longest_word('Web Development Tutorial'));

/* 3
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(6));