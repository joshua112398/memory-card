# What I Learned

When using useEffect() that has a certain dependency and that also edits this dependency when called, make sure it is inside a conditional block so that it doesn't run useEffect() infinitely over and over.

You can pass state from parent to child as a prop, and that state is updated whenever the parent's state is changed.

JSX blocks can be placed anywhere, not just inside the return() function in functional components.

Changing an array's values does NOT change its reference, and thus if you have an array as state, it will still be the same array reference once you change its values. Thus, React does not see a change in state and does not call for a rerender. I had to fix this by first using the spread operator to create a new array from the old one.

React has a "closure trap" when trying to access a state's value. It will always log the initial value of the state even
after updating state with setState. This is called a stale closure. To get around this, put the logic inside a functional setState, or use refs.