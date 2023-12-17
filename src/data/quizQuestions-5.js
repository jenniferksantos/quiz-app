
export const quizQuestions_5 = {
  questions: [
    {
      question: 'Which lifecycle method is called after a component is rendered for the first time?',
      choices: ['componentWillMount()', 'componentDidMount()', 'componentWillUpdate()', 'componentDidUpdate()'],
      correctAnswer: 'componentDidMount()',
    },
    {
      question: 'In the React class component lifecycle, what method is called just before a component renders for the first time?',
      choices: ['componentWillMount()', 'componentDidMount()', 'componentWillRender()', 'componentDidRender()'],
      correctAnswer: 'componentWillMount()',
    },
    {
      question: 'Which lifecycle method is used to perform actions before a component updates?',
      choices: ['componentWillUpdate()', 'componentDidUpdate()', 'componentWillReceiveProps()', 'componentShouldUpdate()'],
      correctAnswer: 'componentWillUpdate()',
    },
    {
      question: 'What is the purpose of the `componentWillUnmount` lifecycle method?',
      choices: ['To update the component state', 'To perform cleanup before the component is removed', 'To render the component', 'To handle errors during rendering'],
      correctAnswer: 'To perform cleanup before the component is removed',
    },
    {
      question: 'In the React class component lifecycle, what method is called just after a component updates?',
      choices: ['componentWillUpdate()', 'componentDidUpdate()', 'componentWillReceiveProps()', 'componentShouldUpdate()'],
      correctAnswer: 'componentDidUpdate()',
    },
    {
      question: 'Which lifecycle method is called when a component receives new props?',
      choices: ['componentWillReceiveProps()', 'componentDidUpdate()', 'componentWillUpdate()', 'componentShouldUpdate()'],
      correctAnswer: 'componentWillReceiveProps()',
    },
    {
      question: 'What is the purpose of the `componentShouldUpdate` lifecycle method?',
      choices: ['To update the component state', 'To determine if a component should re-render', 'To handle errors during rendering', 'To perform cleanup before the component is removed'],
      correctAnswer: 'To determine if a component should re-render',
    },
    {
      question: 'In the React class component lifecycle, what method is used to capture errors that occur in any component descendant?',
      choices: ['componentDidCatch()', 'componentDidUpdate()', 'componentWillCatchError()', 'componentShouldUpdate()'],
      correctAnswer: 'componentDidCatch()',
    },
    {
      question: 'What is the purpose of the `getDerivedStateFromProps` lifecycle method?',
      choices: ['To update the component state', 'To perform cleanup before the component is removed', 'To derive the state based on props', 'To determine if a component should re-render'],
      correctAnswer: 'To derive the state based on props',
    },
    {
      question: 'Which lifecycle method is used to capture errors that occur in any component descendant in a class component?',
      choices: ['componentDidCatch()', 'componentWillUnmount()', 'componentWillCatchError()', 'componentShouldUpdate()'],
      correctAnswer: 'componentDidCatch()',
    },
  ],
}