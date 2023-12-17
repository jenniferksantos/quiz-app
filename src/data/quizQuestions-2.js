
export const quizQuestions_2 = {
  questions: [
    {
      question: 'What is React state?',
      choices: ['Immutable data that can be changed', 'Mutable data that cannot be changed', 'Mutable data that can be changed', 'Immutable data that cannot be changed'],
      correctAnswer: 'Mutable data that can be changed',
    },
    {
      question: 'Which function is used to update the state in a React class component?',
      choices: ['setState()', 'updateState()', 'modifyState()', 'changeState()'],
      correctAnswer: 'setState()',
    },
    {
      question: 'In a functional component, how do you declare a state variable?',
      choices: ['const state = useState()', 'const [state, setState] = useState()', 'const state = React.useState()', 'const [state, setState] = React.useState()'],
      correctAnswer: 'const [state, setState] = useState()',
    },
    {
      question: 'What is the purpose of the useEffect hook in state management?',
      choices: ['To create a new state', 'To fetch data from an API', 'To perform side effects in a functional component', 'To render JSX elements'],
      correctAnswer: 'To perform side effects in a functional component',
    },
    {
      question: 'Which method is used for conditional rendering based on the state value?',
      choices: ['renderIf()', 'displayIf()', 'showIf()', 'Conditional rendering is done directly in JSX'],
      correctAnswer: 'Conditional rendering is done directly in JSX',
    },
    {
      question: 'In React, what is the role of the state in the component lifecycle?',
      choices: ['It persists data between component renders', 'It triggers the component to re-render', 'It stores data that remains constant', 'It handles component unmounting'],
      correctAnswer: 'It triggers the component to re-render',
    },
    {
      question: 'Which of the following methods is used to initialize state in a class component?',
      choices: ['initState()', 'initializeState()', 'setupState()', 'constructor()'],
      correctAnswer: 'constructor()',
    },
    {
      question: 'What happens when you modify the state directly without using the setState method?',
      choices: ['It triggers a warning but still works', 'It results in an error', 'It works fine without any issues', 'It automatically converts the state to immutable'],
      correctAnswer: 'It results in an error',
    },
    {
      question: 'Which hook is used for managing state in a functional component with the ability to handle complex state logic?',
      choices: ['useState()', 'useEffect()', 'useContext()', 'useReducer()'],
      correctAnswer: 'useReducer()',
    },
    {
      question: 'What is the purpose of the React DevTools extension in state management?',
      choices: ['It allows you to modify state directly', 'It provides a visual representation of the component tree and state', 'It helps in hiding the state from the developer tools', 'It is used for profiling performance'],
      correctAnswer: 'It provides a visual representation of the component tree and state',
    },
  ],
}