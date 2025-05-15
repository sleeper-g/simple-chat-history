import { Message } from "./Message";
import { Response } from "./Response";
import { Typing } from "./Typing";
import type { MessageHistoryData } from "./type";


export const MessageHistory = (message: MessageHistoryData) => {
    switch(message.type) {
        case 'message':
            return (
                <Message key={message.id} {...message}/>
            );
        case 'response':
            return (
                <Response key={message.id} {...message}/>
            );
        case 'typing':
            return (
                <Typing key={message.id} {...message}/>
            );

    }
}

