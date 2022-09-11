# What I Learned

When using useEffect() that has a certain dependency and that also edits this dependency when called, make sure it is inside a conditional block so that it doesn't run useEffect() infinitely over and over.

You can pass state from parent to child as a prop, and that state is updated whenever the parent's state is changed.

JSX blocks can be placed anywhere, not just inside the return() function in functional components.