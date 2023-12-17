
export const quizQuestions_6 = {
  questions: [
    {
      question: 'What is the purpose of the Context API in React?',
      choices: ['To manage application state', 'To handle asynchronous operations', 'To create reusable components', 'To manage component lifecycle'],
      correctAnswer: 'To manage application state',
    },
    {
      question: 'Which component is used to create a new context in the Context API?',
      choices: ['<Context.Provider>', '<Context.Consumer>', '<Context.Creator>', '<Context.New>'],
      correctAnswer: '<Context.Provider>',
    },
    {
      question: 'In the Context API, what is the role of the `createContext` function?',
      choices: ['To create a new context', 'To create a new component', 'To create a new state', 'To create a new hook'],
      correctAnswer: 'To create a new context',
    },
    {
      question: 'How can you consume values from a context in a functional component?',
      choices: ['Using the `this.context` syntax', 'Using the `useContext` hook', 'Using the `contextValue` prop', 'Using the `context.consume` method'],
      correctAnswer: 'Using the `useContext` hook',
    },
    {
      question: 'What is the purpose of the `Context.Consumer` component in the Context API?',
      choices: ['To provide context values', 'To consume context values', 'To create a new context', 'To handle asynchronous operations'],
      correctAnswer: 'To consume context values',
    },
    {
      question: 'In the Context API, what is the purpose of the `value` prop in the `<Context.Provider>` component?',
      choices: ['To set the initial context value', 'To define the context type', 'To trigger a context update', 'To handle context events'],
      correctAnswer: 'To set the initial context value',
    },
    {
      question: 'What happens if there is no matching `<Context.Provider>` when consuming a context?',
      choices: ['An error is thrown', 'It falls back to the default context value', 'It creates a new context automatically', 'It does not render anything'],
      correctAnswer: 'It falls back to the default context value',
    },
    {
      question: 'How can you provide default values to a context in the Context API?',
      choices: ['Using the `defaultValue` prop in `<Context.Provider>`', 'Using the `default` prop in `<Context.Consumer>`', 'Using the `provide` method in `<Context>`', 'Using the `default` attribute in `<Context.Provider>`'],
      correctAnswer: 'Using the `defaultValue` prop in `<Context.Provider>`',
    },
    {
      question: 'Can you use multiple contexts in a single React application?',
      choices: ['No, React only supports a single context', 'Yes, but it is not recommended', 'Yes, React supports multiple contexts', 'Yes, but only in class components'],
      correctAnswer: 'Yes, React supports multiple contexts',
    },
    {
      question: 'What is the primary benefit of using the Context API for state management in React?',
      choices: ['It simplifies component structure', 'It improves performance', 'It enhances code readability', 'It avoids prop drilling'],
      correctAnswer: 'It avoids prop drilling',
    },
  ],
}