const questionsArray = [
  {
      id: 1,
      question: "What is the result of the equation <span class='latex'>\$a = \\sqrt{b^2 + c^2}\$</span>?",
      lesson: {
        type: "iframe",
        content: "https://view.genial.ly/650dec4db85e1100112b81c9",  
      },
      exhibit: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      choices: [
        {
          id: 1,
          label: "Paris",
          isCorrect: true,
          explanation: "Paris is the capital of France. Paris is the capital of France. Paris is the capital of France. Paris is the capital of France. Paris is the capital of France.",
        },
        {
          id: 2,
          label: "Rome",
          isCorrect: false,
          explanation: "Rome is the capital of Italy.",
        },
        {
          id: 3,
          label: "Berlin",
          isCorrect: false,
          explanation: "Berlin is the capital of Germany.",
        },
        {
          id: 4,
          label: "Madrid",
          isCorrect: false,
          explanation: "Madrid is the capital of Spain.",
        },
      ],
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      lesson: {
        type: "iframe",
        content: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOqjxp6nVqKnjnlamXMqdXq%2FSAT-Digital_Math%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DnMdpmkvDDNmE86Nz-1",  
      },
      exhibit: "France is a country in Europe.",
      choices: [
        {
          id: 1,
          label: "Mars",
          isCorrect: false,
          explanation: "Mars is the fourth planet from the Sun.",
        },
        {
          id: 2,
          label: "Saturn",
          isCorrect: false,
          explanation: "Saturn is the sixth planet from the Sun.",
        },
        {
          id: 3,
          label: "Jupiter",
          isCorrect: true,
          explanation:
            "Jupiter is the largest planet in our solar system.",
        },
        {
          id: 4,
          label: "Venus",
          isCorrect: false,
          explanation: "Venus is the second planet from the Sun.",
        },
      ],
    },
    {
      id: 3,
  lesson: {
    type: "iframe",
    content: "/test.html",
  },
      question: "What is the largest mammal in the world?",
      exhibit: "France is a country in Europe.",
      choices: [
        {
          id: 1,
          label: "African Elephant",
          isCorrect: false,
          explanation:
            "African Elephants are the largest land animals.",
        },
        {
          id: 2,
          label: "Blue Whale",
          isCorrect: true,
          explanation:
            "Blue Whales are the largest mammals in the world.",
        },
        {
          id: 3,
          label: "Giraffe",
          isCorrect: false,
          explanation:
            "Giraffes are tall, but not the largest mammals.",
        },
        {
          id: 4,
          label: "Hippopotamus",
          isCorrect: false,
          explanation:
            "Hippos are large but not the largest mammals.",
        },
      ],
    },
    // Add more questions here
  ];
export default questionsArray;