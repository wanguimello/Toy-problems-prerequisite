function getGrade(){
    //Prompt the user to enter the students mark
    let mark = prompt("Enter your mark (0 - 100):");

    //convert the input to a number
    mark = Number(mark);

    //Ensuring the input is valid
    if (isNaN(mark) || mark < 0 || mark > 100) {
      console.log("Please enter a valid mark between 0 and 100.");
      return;
    } 

    //Checking the grade
    let grade; 
    if (mark > 79) {
      grade = "A"
      return "A";
    } else if (mark >= 60) {
      grade = "B"
      return "B";
    } else if (mark >= 49) {
      grade = "C"
      return "C";
    } else if (mark >= 40) {
      grade = "D"
      return "D";
    } else {
      grade = "E"
      return "E";
    }
}
    console.log(`Your grade is:${grade}`);



//call the function to run
getGrade();

    