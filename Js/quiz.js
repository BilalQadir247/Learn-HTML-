// ===== Quiz Data =====
const quizData = [
{
question: "What does HTML stand for?",
options: [
"Hyper Trainer Marking Language",
"Hyper Text Markup Language",
"Hyper Text Marketing Language",
"Hyper Tool Multi Language"
],
correct: 1
},
{
question: "Which tag defines the root of an HTML document?",
options: [
"<body>",
"<html>",
"<head>",
"<root>"
],
correct: 1
},
{
question: "Which tag is used to define a paragraph?",
options: [
"<para>",
"<p>",
"<text>",
"<pg>"
],
correct: 1
},
{
question: "Which tag creates the largest heading?",
options: [
"<h6>",
"<h3>",
"<h1>",
"<heading>"
],
correct: 2
},
{
question: "Which tag is used to create a hyperlink?",
options: [
"<a>",
"<link>",
"<href>",
"<url>"
],
correct: 0
},
{
question: "Which attribute specifies the URL of a link?",
options: [
"src",
"href",
"url",
"link"
],
correct: 1
},
{
question: "Which tag is used to insert an image?",
options: [
"<image>",
"<img>",
"<src>",
"<picture>"
],
correct: 1
},
{
question: "Which attribute defines image source?",
options: [
"href",
"src",
"link",
"path"
],
correct: 1
},
{
question: "Which attribute provides alternative text for an image?",
options: [
"title",
"alt",
"text",
"name"
],
correct: 1
},
{
question: "Which tag defines a line break?",
options: [
"<break>",
"<br>",
"<lb>",
"<line>"
],
correct: 1
},
{
question: "Which HTML element defines the document body?",
options: [
"<body>",
"<main>",
"<section>",
"<content>"
],
correct: 0
},
{
question: "Where should <!DOCTYPE html> appear?",
options: [
"Bottom of page",
"Inside body",
"Top of document",
"Inside head"
],
correct: 2
},
{
question: "HTML tags are enclosed in:",
options: [
"{}",
"[]",
"<>",
"()"
],
correct: 2
},
{
question: "Which heading is the smallest?",
options: [
"<h1>",
"<h6>",
"<h5>",
"<h4>"
],
correct: 1
},
{
question: "Which tag defines a table?",
options: [
"<table>",
"<tbl>",
"<tab>",
"<grid>"
],
correct: 0
},
{
question: "Which tag defines a table row?",
options: [
"<tr>",
"<td>",
"<th>",
"<row>"
],
correct: 0
},
{
question: "Which tag defines a table cell?",
options: [
"<tr>",
"<td>",
"<cell>",
"<tc>"
],
correct: 1
},
{
question: "Which tag defines a table header cell?",
options: [
"<head>",
"<th>",
"<td>",
"<tr>"
],
correct: 1
},
{
question: "Which tag creates an unordered list?",
options: [
"<ol>",
"<ul>",
"<li>",
"<dl>"
],
correct: 1
},
{
question: "Which tag defines a list item?",
options: [
"<li>",
"<item>",
"<listitem>",
"<it>"
],
correct: 0
},

{
question: "Which tag creates an ordered list?",
options: [
"<ol>",
"<ul>",
"<li>",
"<dl>"
],
correct: 0
},
{
question: "Which syntax is used for HTML comments?",
options: [
"// comment",
"<!-- comment -->",
"/* comment */",
"# comment"
],
correct: 1
},
{
question: "Which attribute defines inline CSS?",
options: [
"css",
"style",
"design",
"font"
],
correct: 1
},
{
question: "Which attribute defines tooltip text?",
options: [
"title",
"tooltip",
"text",
"alt"
],
correct: 0
},
{
question: "Which tag defines metadata?",
options: [
"<meta>",
"<data>",
"<info>",
"<head>"
],
correct: 0
},
{
question: "Which section contains metadata?",
options: [
"<body>",
"<head>",
"<section>",
"<main>"
],
correct: 1
},
{
question: "Which tag is used for bold text?",
options: [
"<bold>",
"<b>",
"<strong>",
"Both B and C"
],
correct: 3
},
{
question: "Which tag makes text italic?",
options: [
"<italic>",
"<i>",
"<it>",
"<em>"
],
correct: 1
},
{
question: "Which tag underlines text?",
options: [
"<underline>",
"<u>",
"<line>",
"<ul>"
],
correct: 1
},
{
question: "Which tag defines emphasized text?",
options: [
"<i>",
"<em>",
"<italic>",
"<b>"
],
correct: 1
},

{
question: "Which tag defines important text?",
options: [
"<b>",
"<strong>",
"<important>",
"<imp>"
],
correct: 1
},
{
question: "Which tag creates horizontal line?",
options: [
"<line>",
"<hr>",
"<br>",
"<hl>"
],
correct: 1
},
{
question: "Which attribute defines language of document?",
options: [
"lang",
"language",
"lng",
"code"
],
correct: 0
},
{
question: "HTML tags are:",
options: [
"Case sensitive",
"Not case sensitive",
"Sometimes sensitive",
"Always uppercase"
],
correct: 1
},
{
question: "Which tag defines an HTML form?",
options: [
"<form>",
"<input>",
"<submit>",
"<button>"
],
correct: 0
},
{
question: "Which tag creates an input field?",
options: [
"<input>",
"<field>",
"<textbox>",
"<type>"
],
correct: 0
},
{
question: "Which attribute defines input type?",
options: [
"kind",
"type",
"style",
"form"
],
correct: 1
},
{
question: "Which tag creates a button?",
options: [
"<btn>",
"<button>",
"<click>",
"<press>"
],
correct: 1
},
{
question: "Which tag defines a label for input?",
options: [
"<label>",
"<tag>",
"<text>",
"<name>"
],
correct: 0
},

{
question: "What is the file extension of an HTML file?",
options: [
".ht",
".html",
".web",
".doc"
],
correct: 1
},
{
question: "Which attribute specifies image width?",
options: [
"size",
"length",
"width",
"scale"
],
correct: 2
},
{
question: "Which attribute specifies image height?",
options: [
"height",
"size",
"scale",
"length"
],
correct: 0
},
{
question: "Which attribute specifies where to open a link?",
options: [
"link",
"open",
"target",
"href"
],
correct: 2
},
{
question: "Which value opens link in new tab?",
options: [
"_top",
"_blank",
"_self",
"_new"
],
correct: 1
},

{
question: "Which tag divides sections?",
options: [
"<div>",
"<section>",
"<block>",
"<container>"
],
correct: 0
},
{
question: "Which tag is inline container?",
options: [
"<div>",
"<span>",
"<inline>",
"<text>"
],
correct: 1
},
{
question: "Which HTML5 tag plays video?",
options: [
"<movie>",
"<media>",
"<video>",
"<play>"
],
correct: 2
},
{
question: "Which HTML5 tag plays audio?",
options: [
"<sound>",
"<music>",
"<audio>",
"<mp3>"
],
correct: 2
},

{
question: "Which tag draws graphics using JavaScript?",
options: [
"<svg>",
"<canvas>",
"<draw>",
"<graphic>"
],
correct: 1
},

{
question: "Which HTML5 tag defines navigation links?",
options: [
"<menu>",
"<nav>",
"<navigate>",
"<link>"
],
correct: 1
},

{
question: "Which tag defines footer?",
options: [
"<bottom>",
"<footer>",
"<end>",
"<foot>"
],
correct: 1
},

{
question: "Which tag defines header?",
options: [
"<top>",
"<header>",
"<heading>",
"<head>"
],
correct: 1
},

{
question: "Which tag defines article content?",
options: [
"<article>",
"<content>",
"<post>",
"<text>"
],
correct: 0
},

{
question: "Which tag defines section?",
options: [
"<area>",
"<section>",
"<part>",
"<block>"
],
correct: 1
},

{
question: "Which tag represents sidebar content?",
options: [
"<aside>",
"<side>",
"<extra>",
"<secondary>"
],
correct: 0
},

{
question: "Which tag represents main content?",
options: [
"<main>",
"<primary>",
"<body>",
"<content>"
],
correct: 0
},

{
question: "Which tag defines webpage title?",
options: [
"<title>",
"<head>",
"<meta>",
"<caption>"
],
correct: 0
},

{
question: "HTML is a:",
options: [
"Programming language",
"Markup language",
"Database language",
"Server language"
],
correct: 1
},

{
question: "HTML is mainly used for:",
options: [
"Styling",
"Structure of web pages",
"Database",
"Animation"
],
correct: 1
},

{
question: "Which language styles webpages?",
options: [
"HTML",
"JavaScript",
"CSS",
"Python"
],
correct: 2
},

{
question: "Which language adds interactivity?",
options: [
"HTML",
"CSS",
"JavaScript",
"SQL"
],
correct: 2
},

{
question: "HTML tags are written inside:",
options: [
"{}",
"[]",
"<>",
"()"
],
correct: 2
},

{
question: "When was HTML5 released?",
options: [
"2008",
"2010",
"2014",
"2016"
],
correct: 2
},

{
question: "Does HTML support multimedia?",
options: [
"No",
"Yes",
"Only images",
"Only video"
],
correct: 1
},

{
question: "An HTML element consists of:",
options: [
"Start tag",
"Content",
"End tag",
"All of the above"
],
correct: 3
},

{
question: "Can HTML elements be nested?",
options: [
"No",
"Yes",
"Sometimes",
"Only HTML5"
],
correct: 1
},

{
question: "Which is an empty HTML element?",
options: [
"<p>",
"<h1>",
"<br>",
"<div>"
],
correct: 2
},

{
question: "HTML tags are:",
options: [
"Case sensitive",
"Not case sensitive",
"Only uppercase",
"Only lowercase"
],
correct: 1
},

{
question: "Recommended practice for writing HTML tags?",
options: [
"Uppercase",
"Lowercase",
"Mixed",
"Capitalized"
],
correct: 1
},

{
question: "HTML attributes are written in:",
options: [
"End tag",
"Start tag",
"Body",
"Footer"
],
correct: 1
},

{
question: "HTML document starts with:",
options: [
"<html>",
"<body>",
"<!DOCTYPE html>",
"<head>"
],
correct: 2
},

{
question: "HTML paragraphs are defined with:",
options: [
"<text>",
"<p>",
"<para>",
"<pg>"
],
correct: 1
},

{
question: "HTML headings range from:",
options: [
"<h1> to <h5>",
"<h1> to <h6>",
"<h2> to <h6>",
"<h1> to <h4>"
],
correct: 1
}

];

// ===== Elements Select =====
const questionText = document.querySelector("#question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const nextBtn  = document.querySelector(".nextbtn");
const reset  = document.querySelector(".reset");
const result  = document.querySelector(".result");

const options = [option1, option2, option3, option4];

// ===== Variables =====
let currentQuestion = 0;
let score = 0;
let answered = false;

// ===== Load Question =====
function loadQuestion() {
  answered = false;

  options.forEach(btn => {
    btn.style.color = "";
    btn.disabled = false;
  });

  const current = quizData[currentQuestion];
  questionText.innerText = current.question;

  option1.innerText = current.options[0];
  option2.innerText = current.options[1];
  option3.innerText = current.options[2];
  option4.innerText = current.options[3];
}

// ===== Check Answer =====
options.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (answered) return;
    answered = true;

    const correctIndex = quizData[currentQuestion].correct;

    if (index === correctIndex) {
      button.style.color = "green";
      score++;
    } else {
      button.style.color = "red";
      options[correctIndex].style.color = "green";
    }

    options.forEach(btn => btn.disabled = true);
  });
});

   let num = 2;
   let value = document.getElementById("value");

// ===== Next Button =====
nextBtn.addEventListener("click", () => {

    
   value.innerText = "Question #" + num++;


  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// ===== Show Result =====
function showResult() {
  questionText.innerText = `Quiz Complete 🎉  
Score: ${score} / ${quizData.length}`;

  options.forEach(btn => {
    btn.style.display = "none";
  });

  nextBtn.style.display = "none";
  result.style.display = "none";
};


loadQuestion();

reset.addEventListener("click", () => {
  window.location.href = "quiz.html"
});
result.addEventListener("click", () => {
  showResult();
})

