class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello How can i help you?.");
      this.addMessageToState(message);
    };
   
  
    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
        " you can contact us on 7076575718");
         this.addMessageToState(message)
      
      };
      handlecourse=()=>{
        const message = this.createChatBotMessage(
          "we offer BANK , IITJEE ,CAT AND SSC COURSE NOW");
           this.addMessageToState(message)
        
      }
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;