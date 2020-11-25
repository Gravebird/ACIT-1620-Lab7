
function createCourseArray() {
  var courseList = new Array();
  var courseElements = document.getElementsByClassName("course_link");
  var courseTerms = document.getElementsByClassName("course_term");
  var courseSections = document.getElementsByClassName("course");
  var i;
  for (i = 0; i < courseElements.length; i++) {
    courseList.push({code: courseElements[i].text, date: courseTerms[i].value, element: courseSections[i]});
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
   var user_input = getInput();

   var i;
   var match = false;

   for (i = 0; i < courseList.length; i++) {
     if (courseList[i].code.indexOf(user_input) > -1) {
       match = true;
       courseList[i].element.style.backgroundColor = "green";
       break;
     }
   }
   if (!match) {
     addCourseToPage({code: user_input, date: "Fall 2020"});
   }
 }

function addCourseToPage(course) {
  var line = document.createElement("hr");
  var new_link = document.createElement("a");
  new_link.innerHTML = "<a class = 'course_link' href='#top'>" + course.code + "</a>";
  var new_desc = document.createElement("p");
  new_desc.innerHTML = "<p class='course_desc'>N/A</p>";
  var new_term = document.createElement("p");
  new_term.innerHTML = "<p class='course_term'>" + course.date + "</p>";
  var new_div = document.createElement("div");
  new_div.classList.add("course");
  new_div.append(new_link);
  new_div.append(new_desc);
  new_div.append(new_term);
  var the_section = document.getElementsByTagName("section");
  the_section[0].append(line);
  the_section[0].append(new_div);
}

function main() {
  var courseList = createCourseArray();
  findCourse(courseList);
}