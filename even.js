function even(n) {
  if (n % 2 == 0) 
  {

    if (n > 0) 
    {
      console.log(" number is positive and even also");
    } 
    else {
      console.log(" number is negative and even also");
    }
  } else {
    if (n < 0) {
      console.log("negative and odd");
    }
    else{
        console.log("positive but odd");
    }
  }
}
even(-10);
