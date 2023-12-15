
export const quizQuestions_1 = {
  questions: [
    {
      question: 'What is the main purpose of functional components in React?',
      choices: ['Manage UI logic', 'Handle events', 'Manage state', 'All of the above'],
      correctAnswer: 'Manage UI logic',
    },
    {
      question: 'In React, how do you pass data from a parent component to a child component?',
      choices: ['Using refs', 'Using context', 'Using state', 'Using props'],
      correctAnswer: 'Using props',
    },
    {
      question: 'Which of the following is a correct way to define a functional component in React?',
      choices: ['function MyComponent() { }', 'const MyComponent = function() { }', 'const MyComponent = () => { }', 'class MyComponent extends Component { }'],
      correctAnswer: 'const MyComponent = () => { }',
    },
    {
      question: 'How do you access the value of a prop inside a functional component?',
      choices: ['this.props.value', 'props.value', 'this.value', 'value'],
      correctAnswer: 'props.value',
    },
    {
      question: 'What is the purpose of the `useState` hook in functional components?',
      choices: ['To update the component state', 'To handle side effects', 'To declare a functional component', 'To declare a state variable'],
      correctAnswer: 'To declare a state variable',
    },
    {
      question: 'Which of the following is a correct way to use the `map` function to render a list of items in React?',
      choices: ['{items.map(item => <li key={item.id}>{item.name}</li>)}', '<map>{items.map(item => <li key={item.id}>{item.name}</li>)}</map>', '{map(items, item => <li key={item.id}>{item.name}</li>)}', '{items.map(item => <li key={item.id}>{item.name}</li>)map}'],
      correctAnswer: '{items.map(item => <li key={item.id}>{item.name}</li>)}',
    },
    {
      question: 'In React, can you directly modify the value of props inside a component?',
      choices: ['Yes', 'No', 'Only in functional components', 'Only in class components'],
      correctAnswer: 'No',
    },
    {
      question: 'What is the purpose of the `key` attribute when rendering a list of elements in React?',
      choices: ['To set the initial value of the element', 'To specify the element type', 'To define a unique identifier for each element', 'To style the element'],
      correctAnswer: 'To define a unique identifier for each element',
    },
    {
      question: 'What is the significance of the `children` prop in React?',
      choices: ['It is used to pass data from parent to child', 'It represents the content between the opening and closing tags of a component', 'It contains the child components', 'It is used to style child components'],
      correctAnswer: 'It represents the content between the opening and closing tags of a component',
    },
    {
      question: 'Which hook is used for handling side effects in functional components?',
      choices: ['useEffect', 'useEffectState', 'useState', 'useSideEffect'],
      correctAnswer: 'useEffect',
    }
  ],
}