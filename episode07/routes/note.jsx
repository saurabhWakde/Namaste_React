
const notes ={
    /*
    #UseEffect-when there is no dependencies array useEffect will called on every render.
   -if no dependency array=> render on every call
   -if dependency array is empty [] => useEffect called on intial render(just once).
   -if dependency array is [name] => it will call after every name changes.

   #useState 
   -Never use useState variable outside components.
   -Never use UseState variable inside if-else,for-loop,functions,.
   -Try to keep on top this is good practise.

   #Link you can goto another page without getting reloaded.

   Importing Dependencies:

React and ReactDOM: These are the core libraries for building React applications.
react-router-dom: This package provides routing capabilities for React applications.
Defining Routes:

You define the routes using the createBrowserRouter function from react-router-dom. It takes an array of route objects, where each object represents a specific route.
Each route object consists of a path and an element. The path specifies the URL path for the route, and the element represents the React component to render when that path is matched.
Creating Root and Router:

ReactDOM.createRoot: This function creates a root for the React application. It takes the DOM element where the root will be mounted.
createBrowserRouter: This function creates the router instance using the defined routes. It returns an object representing the router.
Rendering Router Provider:

The RouterProvider component from react-router-dom is used to wrap your application components and provide the router context to them. It takes the router object as a prop.
The router object contains the defined routes and handles the routing logic for your application.
Mounting the Application:

The root.render function is used to render your application. It takes the root component (wrapped with RouterProvider) as its argument.
By setting up the router and wrapping your application with RouterProvider, you enable navigation between different routes in your application. Each route is associated with a specific URL path and renders the corresponding React component when the path is matched.

Note: Make sure you have the necessary dependencies (react-router-dom) installed in your project for this code to work properly.

Feel free to use this explanation as a reference for making notes about creating a web router and router provider in your application using React Router.
    */
}