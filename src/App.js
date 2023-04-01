import {   ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
const App = ()=> {
    return (
        <ChatEngine 
        height="100vh"
        projectID="4fbda6d6-650f-40b1-bfec-daf32ca17742"
        userName="**************"
        userSecret="***********"
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;