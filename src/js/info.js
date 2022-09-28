export const htmlQuizInfo = {
    title: "HTML Quiz",
    questions: [
        "What does HTML Stand for?",
        "How is document type initialized in HTML5?",
        "Which of the following HTML Elements is used for making any text bold?",
        "Which of the following HTML element is used for creating an unordered list?",
        "Which of the following characters indicate closing of a tag?",
        "What is the font-size of the h1 heading tag?",
        "How many heading tags are there in HTML5?",
        "How many attributes are there in HTML5?",
        "Which of the following attributes is used to add link to any element?",
        "Which of the following is the correct way of creating an hyperlink in HTML?"
    ],
    options: {
        q1: [
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Hightext machine language"
        ],
        q2: [
            "< /DOCTYPE HTML >",
            "< /DOCTYPE >",
            "< !DOCTYPE HTML >",
            "< /DOCTYPE html >"
        ],
        q3: [
            "< b >",
            "< p >",
            "< li >",
            "< i >"
        ],
        q4: [
            "< ui >",
            "< i >",
            "< em >",
            "< ul >"
        ],
        q5: [
            ".",
            "/",
            "//",
            "!"
        ],
        q6: [
            "3.5em",
            "2.17em",
            "2em",
            "1.5em"
        ],
        q7: [
            "2",
            "3",
            "5",
            "6"
        ],
        q8: [
            "2",
            "4",
            "1",
            "5"
        ],
        q9: [
            "link",
            "ref",
            "href",
            "newref"
        ],
        q10: [
            "< a >www.google.com < Google /a >",
            "< a href=“www.google.com” Google /a >",
            "< a href= “www.google.com” > Google < /a >",
            "< a link=“www.google.com” Google > < /a >"
        ],
    },
    answer: [
        "Hyper Text Markup Language",
        "< !DOCTYPE HTML >",
        "< b >",
        "< ul >",
        "/",
        "2em",
        "6",
        "2",
        "href",
        "< a href= “www.google.com” > Google < /a >"
    ]
}

export const cssQuizInfo = {
    title: "CSS Quiz",
    questions: [
        "Which of the below is the abbreviation of CSS?",
        "Which of the following is the correct syntax to add the external stylesheet in CSS?",
        "Which of the below CSS properties is used to change the background color of CSS?",
        "Which of the below CSS class is used to change the text color of CSS?",
        "Which of the below is the correct syntax to put a line over text in CSS?",
        "Which below property of CSS is used to set the indentation of the first line in a block of text?",
        "Which of the below CSS properties represent the order of flex items in the grid container?",
        "How do we set the default width of the font in CSS?",
        "Which element is used to represent the transparency of an element in CSS?",
        "Which of the below CSS property is used to add a stroke in the text?"
    ],
    options: {
        q1: [
            "Color and style sheets",
            "Cascading style sheets",
            "Cascade sheets style",
            "Coded Style Sheet"
        ],
        q2: [
            "< style src = quiz.css >",
            "< style src = \"quiz.css\" >",
            "< stylesheet > quiz.css < /stylesheet >",
            "< link rel=\"stylesheet\" type=\"quiz/css\" href=\"quiz.css\" >"
        ],
        q3: [
            "bg color",
            "color-background",
            "background-color",
            "color"
        ],
        q4: [
            "color-background",
            "color",
            "text-color",
            "None of the above"
        ],
        q5: [
            "text-decoration: line",
            "text-decoration: none",
            "text-decoration: overline",
            "text-decoration: underline"
        ],
        q6: [
            "text-indent property",
            "text-underlne-property",
            "text-decoration none",
            "text-overflow property"
        ],
        q7: [
            "order",
            "float",
            "overflow",
            "All of the above"
        ],
        q8: [
            "font-stretch",
            "font-weight",
            "text-transform",
            "font-variant"
        ],
        q9: [
            "Hover",
            "Opacity",
            "Transparent",
            "Overlay"
        ],
        q10: [
            "text-stroke",
            "text-transform",
            "text-decoration",
            "None of the above"
        ],
    },
    answer: [
        "Cascading style sheets",
        "< link rel=\"stylesheet\" type=\"quiz/css\" href=\"quiz.css\" >",
        "background-color",
        "color",
        "text-decoration: overline",
        "text-indent property",
        "order",
        "font-stretch",
        "Opacity",
        "text-stroke"
    ]
}
export const jsQuizInfo = {
    title: "JavaScript Quiz",
    questions: [
        "Inside which HTML element do we put the JavaScript?",
        "Where is the correct place to insert a JavaScript?",
        "Is it necessary for the external script file to contain a < script > tag?",
        "What is the correct syntax for referring to an external script called 'gfg.js'?",
        "How many ways are there with which we can declare a variable in javascript?",
        "Is a variable named 'apple' same as 'Apple' in javascript?",
        "Which of the following variable names are correct according to javascript?",
        "What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))",
        "Which of the following represent falsy values in javascript",
        "What is the type of variable data declare below const data=[]"
    ],
    options: {
        q1: [
            "< javascript >",
            "< js >",
            "< src >",
            "< script >"
        ],
        q2: [
            "Both the head section and the body section are correct",
            "The head section",
            "The body section",
            "None of the above"
        ],
        q3: [
            "Yes",
            "No",
            "Depends on the type of include",
            "None of the above"
        ],
        q4: [
            "< script name=\"gfg.js\" >",
            "< script href=\"gfg.js\" >",
            "< script src=\"gfg.js\" >",
            "None of these"
        ],
        q5: [
            "Only one",
            "Three",
            "Infinitely many",
            "None of the above"
        ],
        q6: [
            "yes",
            "No",
            "Only when we use 'strict'",
            "None of the above"
        ],
        q7: [
            "let 1name;",
            "let #name;",
            "let =name;",
            "let _name;"
        ],
        q8: [
            "o",
            "f",
            "k",
            "s"
        ],
        q9: [
            "false",
            "''",
            "undefined",
            "All of the above"
        ],
        q10: [
            "Array",
            "object",
            "string",
            "None of the above"
        ],
    },
    answer: [
        "< script >",
        "Both the head section and the body section are correct",
        "No",
        "< script src=\"gfg.js\" >",
        "Three",
        "No",
        "let _name;",
        "s",
        "All of the above",
        "Array"
    ]
}
export const internetQuizInfo = {
    title: "Internet Quiz",
    questions: [
        "What does WWW stand for?",
        "Which of the following languages is the most requested on the WWW?",
        "What was the name of the first network that implemented the protocol suite TCP/IP?",
        "Who was the developer of ARPANET?",
        "What was the name of the first packet-switched network service available to general public?",
        "Which one of the following is the most popular search engine?",
        "Which continent has the larger amount of internet users?",
        "70 percent of the world's internet traffic passes through:",
        "Who were the two inventors of packet switching?",
        "How many people were using internet in 2015?"
    ],
    options: {
        q1: [
            "World Wide Web",
            "World White Web",
            "World Web Webbed",
            "None of the above"
        ],
        q2: [
            "Spanish",
            "English",
            "Chinese",
            "None of the above"
        ],
        q3: [
            "ARPANET",
            "TELENET",
            "INTERNET",
            "None of the above"
        ],
        q4: [
            "KGB",
            "CIA",
            "United States Department of Defense",
            "None of the above"
        ],
        q5: [
            "WWW",
            "Internet",
            "Telenet",
            "None of the above"
        ],
        q6: [
            "Bing",
            "Google",
            "Yahoo",
            "None of the above"
        ],
        q7: [
            "America",
            "Asia",
            "Europe",
            "None of the above"
        ],
        q8: [
            "Ashburn, Virgina",
            "Miami, Florida",
            "Atlanta, Georgia",
            "None of the above"
        ],
        q9: [
            "Marc Baran and Donald Gonzalez",
            "Paul Baran and Donald Davies",
            "Bill Gates and Steve Jobs",
            "None of the above"
        ],
        q10: [
            "2.7 billion",
            "5.1 billion",
            "3.2 billion",
            "None of the above"
        ],
    },
    answer: [
        "World Wide Web",
        "English",
        "ARPANET",
        "United States Department of Defense",
        "Telenet",
        "Google",
        "Asia",
        "Ashburn, Virgina",
        "Paul Baran and Donald Davies",
        "3.2 billion"
    ]
}
