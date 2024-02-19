//Memorise line below //
//Exercise 1//

//ReactDOM.render(<h1>hello mofusand cat</h1>, document.getElementById("root"))

/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
//Exercise 2//
/*
ReactDOM.render(
    <ul>things good for when you are sick  
        <li>honey lemon tea</li>
        <li>codral</li>
        <li>water</li>
        </ul>, 
    document.getElementById("root"))
*/

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)
//Exercise 3// 
/*
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)
*/


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
//Exercise 4// 
//ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))


/* Below is the imperative way to write the same thing 
const h1 = document.createElement("h1") //createing a new h1 element w vanilla JS 
h1.textContent = "This is an imperative way to program" //giving it some text content 
h1.className = "header" //giving it a class name of header
document.getElementById("root").append(h1) //append it as a child of teh div root 
*/


//Exercise 5 
// const h1 = document.createElement("h1") //i think its creating h1 
// h1.textContent = "Hello world" //assigning content 
// h1.className = "header" //assigning class, in this case called classname 
// console.log(h1) //print output of h1 

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

//below is jsx 
//ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))

//Exercise 6 
//you cant put more than 1 parent element inside a ReactDOM.render, but you can chuck 2 insie a <div>
// ReactDOM.render(
// <div>
// <h1 className="header">This is JSX</h1>
// <p>paragraph</p>
// </div>,
// document.getElementById("root")
// )

//Above h1 could be saved as a variable - the whole div can also be saved as a variable 

//I guess CONST is creating a variable and page is variable name 
// const page = (
// <div>
//     <h1 className="header">This is JSX</h1>
//     <p>paragraph</p>
// </div>
// )
// console.log(page)

// ///NOTE IT MUST BE ReactDOM, when you get the case wrong it doesnt work
// ReactDOM.render(
//     page, 
//     document.getElementById("root")
//     )

// Exercise challenge 6  
// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now
// */

// const navbar = 
// (
// <nav>
//     <h1>BRAND NAME</h1>
//     <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
// </nav>
// )

//ReactDOM.render(navbar,document.getElementById("root"))
//navbar is what you want to render, second part is WHERE you want to render it --> root 

//instructor says to type it 10-15 times if you stuggled. and STRUGGLE YOU DID

//REACT VERSION 17 method to render react
//ReactDOM.render(navbar,document.getElementByID("root")) //--> this WONT work bc 'ID' is caps 
//ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.render(navbar, document.getElementById("root")) ---> this worked, spaces ok 
//ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.render(navbar,document.getElementById("root"))

//REACT VERSION 18 method to render - 
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)


//practice typing below 

//ReactDOM.createRoot(document.getElementById("root")).render(navbar) 
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)

//another way to do the same thing - 2 lines below 
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)



/**   EXERCISE 7
Challenge: find out what happens if we try to append JSX 
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser
 */

// const page = 
// (
//     <div>
//         <h1>
//             How many mofusand cats do you have 
//         </h1>
//         <ol>
//             <li>black and white mao</li>
//             <li>yellow orange mao</li>
//             <li>flopped mao</li>
//             <li>big white skye</li>
//             <li>grey grey stormi </li>
//             <li>sticker sticker</li>
//             <li>OCTOPUS</li>
//         </ol>
//     </div>
// )
///didnt work
//ReactDOM.createRoot(document.getElementById("root")).render(page) 

//ReactDOM.createRoot(document.getElementById("root"))

//document.getElementById("root").append(page) //RETURNS OBJECT OBJECT 

//document.getElementById("root").append(JSON.stringify(page)) //RETURNS OBJECT OBJECT 


/**  EXERCISE 8 
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(page,document.getElementById("root"))

//document.getElementById("root").append(JSON.stringify(page))

//************PROJECT 1 - FIRST PROJECT - BUILD A STATIC WEBPAGE ABOUT REACT 
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// const page = 
// (
//     <div>
//         <img src="./react-logo.png" alt="react logo" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordal Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page,document.getElementById("root"))
///above worked but the image didnt come up 


//*****Scrimba Quiz  */
// 1. Why do we need to `import React from "react"` in our files?
//because we are not relying on CDNs, we need to import it to use ReactDOM
//the JSX syntax is defined in react - react is what defines JSX 

// 2. If I were to console.log(page) in index.js, what would show up?
//page is just a bunch of JSX which just returns a javascript object 
//- it would return a javascript object - React elements that describe what React should
//eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
//you cannot have 2 sibling elements like that - only 1 parent element allwoed 

// 4. What does it mean for something to be "declarative" instead of "imperative"?
//you tell the computer how to do something on high level --> delcarative
//you give computer exact instructions --> imperative

// 5. What does it mean for something to be "composable"?
//little bits and pieces you put together to make a full code 


//******* Functions  */
/**
Challenge: 
Part 1: Create a page of your own using a custom Page component
It should return an ordered list with the reasons why you're excited to be learning React :)
Render your list to the page

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

// function Page() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="./react-logo.png" alt="ReactLogo" width="150px"/>
//                 </nav>
//             </header>
//             <h1>Reasons to be excited about react</h1>
//             <ol>
//                 <li>I will have a new skill</li>
//                 <li>I can build cool shit</li>
//                 <li>Always wanted to know how to code</li>
//             </ol>
//             <footer><small>© 2024 SZ development. All rights reserved.</small></footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))
///above was a good success, it looks good 

/**
Mini Challenge:
Move the `header` element from Page into its own component called "Header"

Challenge: 
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
//BASICALLY, you can write functions separately and call on previous return functions 

/**
Challenge: 
- Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it

  Challenge: move the Footer and MainContent components into their own files.
*/
// import Header from "./Header"

// import ReactDOM from 'react-dom';
import Header from "./Header.js"; 
// import MainContent from "./MainContent"
// import Footer from "./Footer"

// function Header () {
//     return (
//         <header>
//         <nav className="nav">
//             <img className="logo" src="./react-logo.png" />
//             <ul className="nav-items">
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//         </header>
//     )
// }

function MainContent () {
    return (
        <div>
        <h1>Reasons to be excited about react</h1>
        <ol className="MC">
            <li>I will have a new skill!!!</li>
            <li>React is declarative</li>
            <li>It offers a huge library</li>
        </ol>
        </div>
    )
}

function Footer () {
    return (
        <footer className="footer"><small>© 2024 SZ development. All rights reserved.</small></footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))

//FOR SOME REASON, unable to make it work when splitting react components into separate files
// might just skip this for now 
