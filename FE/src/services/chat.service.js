const BASE_URL = "http://localhost:8000";

const ChatboxService = {
  getQuestions: async () => {
    const response = await fetch(`${BASE_URL}/questions`);
    return response;
  },

  getAnswers: async () => {
    const response = await fetch(`${BASE_URL}/answers`, {
      method: "GET",
      body: JSON.stringify({ question: "Who is my Manager?" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },

  askQuestion: async (question) => {
    const response = await fetch(`${BASE_URL}/ask-question`, {
      method: "POST",
      body: JSON.stringify({ question }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export default ChatboxService;
