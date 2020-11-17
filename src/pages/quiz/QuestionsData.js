var QuestionsData = [
  {
      question: "How large do you want your plant to be?",
      answers: [
          {
              type: "small",
              content: "Small (less than 6 inches tall)"
          },
          {
              type: "medium",
              content: "Medium (6-10 inches tall)"
          },
          {
              type: "large",
              content: "Large (more than 10 inches tall)"
          }
      ]
  },
  {
      question: "What's the lighting condition of the place for your future plant?",
      answers: [
          {
              type: "no",
              content: "No light"
          },
          {
              type: "dim",
              content: "Dim light"
          },
          {
              type: "partial",
              content: "Partial sun"
          },
          {
              type: "full",
              content: "Full sum"
          }
      ]
  },
  {
      question: "What's the humidity at the place for your future plant?",
      answers: [
          {
              type: "dry",
              content: "Dry"
          },
          {
              type: "slightly",
              content: "Slightly humid"
          },
          {
              type: "humid",
              content: "humid"
          }
      ]
  },
  {
      question: "Are there children or pets where you live?",
      answers: [
          {
              type: "nontoxic",
              content: "Yes"
          },
          {
              type: "notrequired",
              content: "No"
          }
      ]
  },
  {
      question: "Do you want plant that purifies the air?",
      answers: [
          {
              type: "airpurify",
              content: "Yes"
          },
          {
              type: "notrequired",
              content: "No"
          }
      ]
  }
];

export default QuestionsData;