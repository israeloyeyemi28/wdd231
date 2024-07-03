const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const today = new Date();
const currentYear = today.getFullYear();
year.textContent = currentYear;
const LastModifiedDate = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = LastModifiedDate.toLocaleDateString(undefined, options);
lastModified.textContent = `Last Updated : ${formattedDate}`;
lastModified.style.color = "white";
const hamButton = document.getElementById("menu");
const nav = document.querySelector("#animateme");
hamButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

displayCards(courses);
function displayCards(filteredCourses) {
  const courseList = document.querySelector(".course-list");
  courseList.innerHTML = "";
  filteredCourses.forEach((course) => {
    const card = document.createElement("div");
    if (course.completed == true) {
      card.innerHTML = `<h2>${course.subject} ${course.number} ${course.title}
          </h2>
          <p>Credits: ${course.credits}</p>
          <span>Completed: ${course.completed}</span>
          `;
      card.setAttribute(
        "class",
        course.completed ? "course-card-completed" : "course-card"
      );
    } else {
      card.setAttribute(
        "class",
        course.completed ? "course-card-completed" : "course-card"
      );
      card.innerHTML = `<h2>${course.subject} ${course.number} ${course.title}
          </h2>
          <p>Credits: ${course.credits}</p>
          <span>Completed: ${course.completed}</span>`;
        }
      courseList.appendChild(card);
      card.addEventListener("click", () => {
        displayModal(course);
      });

  });
}

function filterCourses(subject) {
  let courseBox = document.querySelectorAll(".course");
  courseBox.forEach((course) => {
    if (subject === "all") {
      course.style.display = "block";
    } else {
      if (course.classList.contains(subject)) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    }
  });
}

calcCredits();
// calculate the total credits
function calcCredits() {
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
  document.getElementById("total-credits-value").innerText = totalCredits;
}

const courseDetails = document.getElementById("course-details");
function displayModal(course) {
  courseDetails.innerHTML = "";
  courseDetails.innerHTML = `
  <button id="closeModal">X</button>
  <h2>${course.subject}  ${course.number}</h2>
  </div>
  <h3>${course.title}</h3>
  <p><strong>Credits</strong>: ${course.credits}</p>
  <p><strong>Certificate</strong>: ${course.certificate}</p>
  <p>${course.description}</p>
  <p><strong>Technology</strong>: ${course.technology.join(", ")}</p>
  `;
  courseDetails.showModal();
  document.querySelector("#closeModal").addEventListener("click", () => {
    courseDetails.close();
  });
}
