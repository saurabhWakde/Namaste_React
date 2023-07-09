{/* 
Default Export/Import:

Export: export default MyComponent;
Import: import MyComponent from './MyComponent';
With default export, you can export a single component as the default export from a module. When importing, you can assign any name you prefer to the imported component.

Named Export/Import:

Export: export { MyComponent1, MyComponent2 };
Import: import { MyComponent1, MyComponent2 } from './MyComponent';
With named exports, you can export multiple components from a module. When importing, you need to specify the exact names of the components you want to import within curly braces {}.

Here's an example of exporting and importing components using these methods:

jsx
Copy code
// MyComponent.js
import React from 'react';

const MyComponent1 = () => {
  // Component 1 logic and JSX
};

const MyComponent2 = () => {
  // Component 2 logic and JSX
};

export { MyComponent1, MyComponent2 };
jsx
Copy code
// OtherComponent.js
import React from 'react';
import { MyComponent1, MyComponent2 } from './MyComponent';

const OtherComponent = () => {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
    </div>
  );
};

export default OtherComponent;
In the above example, MyComponent1 and MyComponent2 are exported as named exports from the MyComponent.js module. In the OtherComponent.js module, they are imported and used within the OtherComponent component. The OtherComponent component is then exported as the default export.

These are the common patterns used for importing and exporting components in JavaScript frameworks like React. However, keep in mind that the specific import/export syntax and conventions may vary depending on the build system and module bundler used in your project.


#React Hooks - They are normal javascript function.
-useState()-Superpowerful state variable in react.Whenever state variable updates react re-render our components.
-useEffect()-

*/}