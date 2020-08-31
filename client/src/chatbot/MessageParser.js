import React from 'react';
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hi")) {
        this.actionProvider.greet();
      }
     
      if (lowercase.includes("contactno") || lowercase.includes("contact")) {
        this.actionProvider.handleJavascriptQuiz();
      }if (lowercase.includes("course") || lowercase.includes("which course do you offer?")) {
        this.actionProvider.handlecourse();
      }
    }
  }
  
  export default MessageParser;
  