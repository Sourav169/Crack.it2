import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "Crack.it",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to Know?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "ContactNo",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "How can i contact with you?",
            answer:
              "7076575718 is our no you can mail us to crack.it@gmail.com.",
            id: 1,
          },
          {
            question: "What course do we offer?",
            answer:
              "we offer BANK , IITJEE ,CAT AND SSC COURSE NOW",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;