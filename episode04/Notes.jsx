/*
#Props--props is just a normal argument to a function.

In React, "props" is an abbreviation for "properties," and it refers to the mechanism by which data is passed from a parent component to its child components. Props are a way to make components reusable and to enable the flow of data and functionality throughout a React application.

When a parent component renders a child component, it can pass data to that child component through props. Props are essentially inputs for a component, and they can be any type of data, such as strings, numbers, objects, or even functions.

To pass props to a child component in React, you include them as attributes in the JSX (JavaScript XML) code when rendering the child component. For example:


# ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const name = 'John Doe';
  const age = 25;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
};

export default ParentComponent;
In the example above, the ParentComponent renders the ChildComponent and passes two props: name and age. The child component can then access and use these props by receiving them as parameters in its function declaration or as properties of the props object. Here's an example of how the child component can use the props:



# ChildComponent.jsx
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

export default ChildComponent;
In the ChildComponent, the values of name and age can be accessed using props.name and props.age, respectively. By using props, data can be passed from parent components down to their child components, enabling dynamic rendering and customization of components based on the data received.

*/