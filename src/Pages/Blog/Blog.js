import React from "react";

const Blog = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-10">
      <div className="border-2 rounded-lg p-4 border-primary">
        <h1 className="text-primary text-2xl mb-3">
          1. How will you improve the performance of a React Application?
        </h1>
        <p className="w-3/4">
          Optimizing performance in a React application.make sure that
          components receive only necessary props. It will let you control the
          CPU consumption and avoid over-rendering unnecessary features. The
          solution is to create a functional component that will collect all
          props and redistribute them to other component.
        </p>
      </div>
      <div className="border-2 rounded-lg p-4 border-primary">
        <h1 className="text-primary text-2xl mb-3">
          2. What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="w-3/4">
          5 Methods to Persisting State Between Page Reloads in React. Learn
          different ways of persisting React state between page reloads. Using
          LocalStorage — Class Components. ... Using LocalStorage — Functional
          Components. ... Using LocalStorage with Redux Store. ... Using Redux
          Persist. ... Using URL Params.
        </p>
      </div>
      <div className="border-2 rounded-lg p-4 border-primary">
        <h1 className="text-primary text-2xl mb-3">
          3. How does prototypical inheritance work?
        </h1>
        <p className="w-3/4">
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="border-2 rounded-lg p-4 border-primary">
        <h1 className="text-primary text-2xl mb-3">
          4. Why you do not set the state directly in React.
        </h1>
        <p className="w-3/4">
        On this page we’ve learned about one of the Hooks provided by React, called useState. We’re also sometimes going to refer to it as the “State Hook”. It lets us add local state to React function components — which we did for the first time ever!
        </p>
      </div>
      <div className="border-2 rounded-lg p-4 border-primary">
        <h1 className="text-primary text-2xl mb-3">
          5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
        </h1>
        <p className="w-3/4">
        A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.
        </p>
      </div>
      <div className="border-2 rounded-lg p-4 border-primary">
        <h1 className="text-primary text-2xl mb-3">
          6. What is a unit test? Why should write unit tests?
        </h1>
        <p className="w-3/4">
        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Blog;
