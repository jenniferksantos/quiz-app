
export const quizQuestions_1 = {
  questions: [
    {
      question: 'What is a React component?',
      choices: [
        'A function that returns JSX',
        'A variable storing HTML code',
        'A statement that logs to the console',
        'A class with a render method',
      ],
      correctAnswer: 'A function that returns JSX',
    },
    {
      question: 'What is the purpose of props in React?',
      choices: [
        'To style React components',
        'To pass data from a parent component to a child component',
        'To define the state of a component',
        'To handle component lifecycle events',
      ],
      correctAnswer: 'To pass data from a parent component to a child component',
    },
    {
      question: 'How do you pass props to a React component?',
      choices: [
        '<MyComponent props={...} />',
        '<MyComponent {...props} />',
        '<MyComponent>props</MyComponent>',
        '<MyComponent props={props} />',
      ],
      correctAnswer: '<MyComponent {...props} />',
    },
    {
      question: 'In a functional component, how do you access props?',
      choices: [
        'this.props',
        'props',
        'component.props',
        'state.props',
      ],
      correctAnswer: 'props',
    },
    {
      question: 'What is the purpose of the `key` prop in React?',
      choices: [
        'To set a unique identifier for a component in an array',
        'To define the initial state of a component',
        'To specify the component’s style',
        'To enable conditional rendering',
      ],
      correctAnswer: 'To set a unique identifier for a component in an array',
    },
    {
      question: 'Can you modify the value of props directly within a component?',
      choices: [
        'Yes, using the setState method',
        'Yes, using the this.props method',
        'No, props are immutable',
        'No, props can only be modified in the parent component',
      ],
      correctAnswer: 'No, props are immutable',
    },
    {
      question: 'How do you define default values for props in a functional component?',
      choices: [
        'By using the defaultProps property',
        'By using the setDefaultProps method',
        'By assigning values directly in the component',
        'Default values for props are not supported in functional components',
      ],
      correctAnswer: 'Default values for props are not supported in functional components',
    },
    {
      question: 'Which of the following is an example of a prop type check in React?',
      choices: [
        'prop-types.check()',
        'PropTypes.validate()',
        'React.propTypes.check()',
        'PropTypes.func.isRequired',
      ],
      correctAnswer: 'PropTypes.func.isRequired',
    },
    {
      question: 'What is the purpose of destructuring props in a function component?',
      choices: [
        'To simplify the syntax',
        'To access nested prop values',
        'To modify props directly',
        'Destructuring is not supported in function components',
      ],
      correctAnswer: 'To simplify the syntax and to access nested prop values',
    },
    {
      question: 'In a functional component, how do you access props?',
      choices: [
        'this.props',
        'props',
        'component.props',
        'state.props',
      ],
      correctAnswer: 'props',
    },
  ],
}