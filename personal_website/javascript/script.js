
function createCourseArray() {
  var courseList = new Array();
  courseList[0] = {code: "ACIT 1620 - Web Fundamental Technologies", date: "Fall 2020"};
  courseList[1] = {code: "ACIT 1515 - Scripting for IT", date: "Fall 2020"};
  courseList[2] = {code: "ACIT 1630 - Database Systems", date: "Fall 2020"};
  return courseList;
}

function getInput() {
  var code = "invalid";
  while (!isInt(code)) {
    code = window.prompt("Enter a 4 digit course code");
    if (!isInt(code)) {
       console.log(code + " is not a valid input.");
    }
  }
  return code;
}

function isInt(value) {
    return !isNaN(value) &&
          parseInt(Number(value)) == value &&
          !isNaN(parseInt(value, 10)) &&
          value.toString().length == 4;
 }

function doesCourseCodeExist(the_code) {
  var i;
  var match = false;
  for (i = 0; i < courseList.length; i++) {
    if (courseList[i].code.indexOf(the_code) > -1) {
      console.log("Yes I am taking the course: " + courseList[i].name);
      match = true;
      break;
    }
  }
  if (!match) {
    courseList.push({code: the_code, name: null});
    console.log("New course code added: " + the_code);
  }
}

function askUserForCourseCode() {
  var courseCode = getInput();
  doesCourseCodeExist(courseCode);
}
