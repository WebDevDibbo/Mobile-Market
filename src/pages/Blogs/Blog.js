import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="pl-8 py-8 rounded-lg mb-2 shodow-2xl border border-gray-300">
        <h2 className="text-2xl">
          1. What are the different ways to manage a state in a React
          application?
        </h2>
        <p className=" py-2">
          There are four main types of state you need to properly manage in your
          React apps: <br />
        </p>
        <ol>
          <li>1.Local State</li>
          <li>2.Global State</li>
          <li>3.Server State</li>
          <li>4.URL State</li>
        </ol>

        <div className=" py-4">
          <p>
            <strong> Local (UI) state </strong>- Local state is data we manage
            in one or another component.
          </p>

          <p>
            {" "}
            Local state is most often managed in React using the useState hook.
          </p>

          <p>
            {" "}
            For example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form's
            inputs.
          </p>
        </div>
        <div className="pb-4">
          <p>
            {" "}
            <strong>Global (UI) state</strong> - Global state is data we manage
            across multiple components.
          </p>
          <p>
            Global state is necessary when we want to get and update data
            anywhere in our app, or in multiple components at least.
          </p>
          <p>
            A common example of global state is authenticated user state. If a
            user is logged into our app, it is necessary to get and change their
            data throughout our application.
          </p>
          <p>Sometimes state we think should be local might become global.</p>
        </div>
        <div className="pb-4">
          <p>
            {" "}
            <strong>Server state</strong> - Data that comes from an external
            server that must be integrated with our UI state.
          </p>
          <p>
            Server state is a simple concept, but can be hard to manage
            alongside all of our local and global UI state.
          </p>
          <p>
            There are several pieces of state that must be managed every time
            you fetch or update data from an external server, including loading
            and error state.
          </p>
          <p>
            Fortunately there are tools such as SWR and React Query that make
            managing server state much easier.
          </p>
        </div>
        <p>
          <strong>URL state</strong> - Data that exists on our URLs, including
          the pathname and query parameters.
        </p>
        <p>
          URL state is often missing as a category of state, but it is an
          important one. <br />
          In many cases, a lot of major parts of our application rely upon
          accessing URL state. Try to imagine building a blog without being able
          to fetch a post based off of its slug or id that is located in the
          URL!
        </p>
        <p>
          There are undoubtedly more pieces of state that we could identify, but
          these are the major categories worth focusing on for most applications
          you build.
        </p>
      </div>
      <div className="pl-8 pb-8 rounded-lg mb-2 shodow-2xl border border-gray-300">
        <h2 className="text-2xl py-2">
          2.  How does prototypical inheritance work?
        </h2>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects.
        </p>
        <p>
          It is a method by which an object can inherit the properties and
          methods of another object
        </p>
        <p>
          
          Traditionally, in order to get and set the Prototype of an object,
          we use Object.
        </p>
        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
      </div>
      <div className="pl-8 pb-8 rounded-lg mb-2 shodow-2xl border border-gray-300">
        <h2 className="text-2xl py-2">
          3. What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          Unit testing is a type of software testing where individual units or
          software components are tested.
        </p>
        <p>
          Its purpose is to validate that each unit of code performs as expected
        </p>
        <p>
          {" "}
          A unit can be anything you want it to be — a line of code, a method,
          or a class.{" "}
        </p>
        <p>There are two types of unit testing:</p>
        <p className="my-4">
          <strong>1.Manual: </strong>
          As the name implies, unit tests are run manually to verify the
          correctness of your code. This is done before writing automated tests.
          Its drawback is that you have to manually test your functions/classes
          whenever you make changes to them
        </p>
        <p>
          <strong>2.Automated: </strong>
          This is the preferred unit testing method as it can be carried out by
          simply running a script. Automated tests also make it easier to run
          tests when your application scales.
        </p>
        <p>
          To justify any effort in business, there must be a positive impact on
          the bottom line. Here are a few benefits to writing unit tests:
        </p>
        <ul>
          <li>
            Unit tests save time and money. Usually, we tend to test the happy
            path more than the unhappy path. If you release such an app without
            thorough testing, you would have to keep fixing issues raised by
            your potential users. The time to fix these issues could’ve been
            used to build new features or optimize the existing system. Bear in
            mind that fixing bugs without running tests could also introduce new
            bugs into the system.
          </li>
          <li>
            Well-written unit tests act as documentation for your code. Any
            developer can quickly look at your tests and know the purpose of
            your functions.
          </li>
          <li>It simplifies the debugging process.</li>
          <li>
            Unit testing is an integral part of extreme programming. Extreme
            programming is basically a “test-everything-that-can-possibly-break”
            programming strategy.
          </li>
          <li>
            Unit tests make code reuse easier. If you want to reuse existing
            code in a new project, you can simply migrate both the code and
            tests to your new project, then run your tests to make sure you have
            the desired results.
          </li>
          <li>
            Unit testing improves code coverage. A debatable topic is to have
            100% code coverage across your application.
          </li>
          <li>
            In the testing pyramid, unit tests are faster than integration and
            end-to-end. They are more assertive and return quick feedback
          </li>
        </ul>
      </div>
      <div className="pl-8 pb-8 rounded-lg shodow-2xl border border-gray-300">
        <h2 className="text-2xl py-4">4.React vs. Angular vs. Vue?</h2>
        <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr className="text-white">
        <th className="bg-blue-500"></th>
        <th className="bg-blue-500"></th>
        <th className="bg-blue-500">React</th>
        <th className="bg-blue-500">Angular</th>
        <th className="bg-blue-500">Vue</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Framwork Size</td>
        <td>97.5k</td>
        <td>143k</td>
        <td>58.8k</td>
      </tr>
      
      <tr className="active">
        <th>2</th>
        <td>Programming Language</td>
        <td>Javascript</td>
        <td>Typescript</td>
        <td>Javascript</td>
      </tr>
      
      <tr>
        <th>3</th>
        <td>Architecture</td>
        <td>Component base</td>
        <td>Component base</td>
        <td>Component base</td>
     
      </tr>
      <tr className="active">
        <th>4</th>
        <td>Syntax</td>
        <td>Virtual DOM</td>
        <td>Real DOM</td>
        <td>Virtual DOM</td>
     
      </tr>
      <tr>
        <th>5</th>
        <td>Learning Curve</td>
        <td>moderate</td>
        <td>Sleep</td>
        <td>moderate</td>
     
      </tr>
      <tr className="active">
        <th>6</th>
        <td>Scalability</td>
        <td>Component based approach</td>
        <td>modular development structure</td>
        <td>template based syntax</td>
     
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Blog;
