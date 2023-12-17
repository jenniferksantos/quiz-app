
export const quizQuestions_7 = {
  questions: [
    {
      question: 'What is a Higher-Order Component (HOC) in React?',
      choices: [
        'A component that renders other components',
        'A function that returns a new component',
        'A component that is placed higher in the component tree',
        'A component that uses hooks extensively',
      ],
      correctAnswer: 'A function that returns a new component',
    },
    {
      question: 'What is the primary purpose of using HOCs in React?',
      choices: [
        'To create reusable UI components',
        'To manage application state',
        'To manipulate the component lifecycle',
        'To reuse component logic and behavior',
      ],
      correctAnswer: 'To reuse component logic and behavior',
    },
    {
      question: 'How do you create a Higher-Order Component (HOC) in React?',
      choices: [
        'By using the `extend` keyword',
        'By extending the `React.Component` class',
        'By creating a function that returns a component',
        'By using the `withComponent` keyword',
      ],
      correctAnswer: 'By creating a function that returns a component',
    },
    {
      question: 'What is one common pattern for naming HOCs?',
      choices: [
        'Prefixing the HOC name with "HigherOrder"',
        'Suffixing the HOC name with "Wrapper"',
        'Prefixing the HOC name with "with"',
        'Suffixing the HOC name with "HOC"',
      ],
      correctAnswer: 'Prefixing the HOC name with "with"',
    },
    {
      question: 'In React, can you apply multiple HOCs to a single component?',
      choices: [
        'No, React only supports a single HOC per component',
        'Yes, but it is not recommended',
        'Yes, React supports applying multiple HOCs',
        'Yes, but only in class components',
      ],
      correctAnswer: 'Yes, React supports applying multiple HOCs',
    },
    {
      question: 'What is the purpose of the `{...props}` spread operator commonly used in HOCs?',
      choices: [
        'To merge the HOC props with the component props',
        'To spread the HOC props to the component children',
        'To spread the component props to the HOC',
        'To clone the entire component hierarchy',
      ],
      correctAnswer: 'To merge the HOC props with the component props',
    },
    {
      question: 'What can be a potential drawback of using HOCs?',
      choices: [
        'They make components harder to understand',
        'They lead to performance issues',
        'They are not supported in functional components',
        'They can introduce naming conflicts',
      ],
      correctAnswer: 'They make components harder to understand',
    },
    {
      question: 'What is the alternative to HOCs for code reuse in functional components?',
      choices: [
        'Render props',
        'Redux',
        'Component inheritance',
        'HOCs are the only option',
      ],
      correctAnswer: 'Render props',
    },
    {
      question: 'Which lifecycle method in a class component is commonly used in HOCs?',
      choices: [
        'componentDidMount',
        'componentWillUpdate',
        'render',
        'componentWillUnmount',
      ],
      correctAnswer: 'componentDidMount',
    },
    {
      question: 'Can HOCs access the state of the component they are wrapping?',
      choices: [
        'Yes, directly using `this.state`',
        'No, HOCs cannot access component state',
        'Yes, using a special `getState` function',
        'Only if the state is passed explicitly as a prop',
      ],
      correctAnswer: 'No, HOCs cannot access component state',
    },
  ],
}