# React Design Patterns

https://www.linkedin.com/learning/react-design-patterns/

Contains good examples for best practice design, including...

- Layout Components
- Container Components
- Controlled and Uncontrolled Components
- Higher-Order Components
- Custom Hooks Patterns
- Functional Programming and React

In the tutorial he often started afresh with a clean project. For posterity's sake, and so I could come back and review all examples, I kept most everything in the App.js, with `<h1>`s and `<p>`s giving some context. In many cases, he would edit a file such as `UserInfo.js` but to maintain it's implementation in earlier examples, I made iterations such as `UserInfoResourced.js` or `UserInfoHooked.js` to delineate and so to have a larger breadth of examples.

To run, `git clone` and then...
```
npm install
npm start
```
And then in another terminal located in root directory...
```
node server.js
```
So that we can serve hard coded data to the examples. Server will run on `PORT: 9090`