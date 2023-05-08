# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: I would say that JSX is an extension of the JavaScript syntax, it's similar to HTML, I do not record of any difference 
by head at the moment.

Researched answer: JSX is a JavaScript render function that helps you insert your HTML right into your JavaScript code, or JSX is 
JavaScript flavored markdown that behaves very similarly to HTML. JSX uses the syntax 'className' rather than HTML's 'class' to modify the
look and behavior of a JSX element, this happens because class is already a protected word in JavaScript. JSX is a building block of React
components and what allows React to create user interfaces.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package that installs a React app on the folder you want to work in.

Researched answer: Yarn is a package manager that manage node modules and create a React App.  A React app needs node modules (code snippet depedencies) organized correctly.

3. What is a React component?

Your answer: Components are reusable and independant bits of code.

Researched answer: In React components are independent and reusable bits of code. They serve the same purpose as a JavaScript functions,
but work in isolation and return HTML. Components have 2 types: Class components and Function components.

4. What is the difference between state values and props in React?

Your answer: The difference between them is that 'state' is local and 'props' isn't just local.

Researched answer: The difference between 'state' and 'props' is that state is internal and controlled by the component itselt while props are external and controlled by whatever renders the component.

5. What is the DOM?

Your answer: Document object Model is a programming interface.

Researched answer: The DOM or Document Object Model is a programming interface for web documents, that represents the page so that programs can change the document structure, style and content. The DOM represents the document as nodes and objects, that way, programming languages can interact with the page. The DOM is not part of the JavaScript languages, but is instead a Web API used to build websites, it was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: I do not know.

Researched answer: In HTML, 'div' and 'span' tags are elements used to define parts of a document, so they are identifiable when a unique classification is necessary. Where other HTML elements such as 'p(paragraph)' 'em(emphasis)' accurately represent the semantics of the content, the additional use of 'span' and 'div' tagas leads to better accessibility for readers and easier maintanability for authors. Where no existing HTML element is applicable, 'span' and 'div' can valuably represent parts of a document so that HTML atributes as 'class','id','lang' or 'div' can be applied. 
'Span' represents an inline portion of a document, for example words with a sentence.
'Div' represents a block-level portion of a document such as few paragraphs, or an image with its caption, 'div' stands for division.
So resuming, the most notable difference of 'div' and 'span' is how the elements are displayed.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: 

Research 1 -> OOP is a computer programming model that organizes software design around data, or objects, rather than functions and logic.

Research 2 -> Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects. There are many object-oriented programming languages, including JavaScript, C++, Java, and Python.

Advantages  of OOP for software engineering - > 

1-OOP models complex things as reproducible, simple structures
2-Reusable, OOP objects can be used across programs
3-Polymorphism allows for class-specific behavior
4-Easier to debug, classes often contain all applicable information to them
5-Securely protects sensitive information through encapsulation

2. Ruby:

Research 1 -> Ruby is a general-purpose Object-Oriented Programming(OOP) language that programmers use in many subfields of computer science.

Research 2 -> Take a true object-oriented language, such as Smalltalk. Drop the unfamiliar syntax and move to more conventional, file-based source code. Now add in a good measure of the flexibility and convenience of languages such as Python and Perl.You end up with Ruby.

Advantages of Ruby Programming Language:

1-Open source and community support. One of the major advantages of Ruby on Rails is the community and support that comes with it. 
2-Flexibility. 
3-Suitable for beginners. 
4-Web development and Desktop Applications. 
5-Command line programs. 
6-Speed. 
7-Smaller community.

3. Implicit return in JavaScript and Ruby:

Research 1 -> An implicit return in JavaScript is a way of returning a value from a function without explicitly using the return keyword. This can be done by using arrow functions, which have a shorthand syntax that allows you to omit the return keyword when the function only has one expression.

Example: 
function double(x) { return x*2 } << Without implicit return.
const double = x => x*2; << With implicit return.

It's important to note that implicit return only works when the function has a single expression, if you want to return an object, you will need to wrap it in parenthesis, like this:
const myFunction = () => ({ key: 'value' });

Research 2 -> If a JavaScript arrow function immediately returns a value, writing return is optional (if we also remove the curly brackets). The return is then implied, making it an “implicit return”.

Research 3 -> Ruby has implicit returns. This means that if a return is the last expression in a path of execution, there's no need for the return keyword. Worth noting is that return 's default argument is nil , which is a falsey value.


Advantages of Implicit return: 

1-Reduce the code noise/lines.
2-It saves you a few keystrokes (typing “return”).

Disadvantages: 

1- Sometimes makes your code harder to be understood.

4. Ruby blocks: 

Blocks are Ruby’s version of closures and can be used to make code more reusable and less verbose. But keywords such as 'yield' can be hard to grok at first and make this functionality a bit intimidating to work with. Blocks don’t have to contain complicated logic in order for us to make use of them. They are typically used to abstract away shared logic that can be applied to a multitude of contexts. If written thoughtfully, code can be made more DRY and readable through harnessing their functionality.

Advantages of Ruby blocks: 

1- Make code more reusable.
2- Code has less verbose.

5. Ruby hashes:

A hash is an efficient data structure that lets you store data in UNIQUE key-value pairs. It's like a kind of dictionary that you can build & use to quickly search for something. The “word” in this dictionary is the key, and the “definitions” are the values stored under each key.


Advantages of Ruby hashes: 
1- Simple.
2- Flexible way to store structured values together.