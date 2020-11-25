
function createCourseArray() {
  var courseList = new Array();
  var courseElements = document.getElementsByClassName("course_link");
  var courseTerms = document.getElementsByClassName("course_term");
  var i;
  for (i = 0; i < courseElements.length; i++) {
    courseList.push({code: courseElements[i].value, date: courseTerms[i].value});
  }
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

 function findCourse(courseList) {
   var user_input = get_input();
 }

function doesCourseCodeExist(the_code, courseList) {
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
