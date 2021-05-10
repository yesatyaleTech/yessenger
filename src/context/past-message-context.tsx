import React from 'react';

interface PastMessage {
        title: string,
        time: string,
        contactGroup: string,
        message: string,
};

interface ShowPastMessage {
    message: PastMessage,
    toggleMessage: Function
}

const PastMessageContext = React.createContext<ShowPastMessage>({
    message: {
        title: '',
        time: '',
        contactGroup: '',
        message: '',
    },
    toggleMessage: () => {},
});

export default PastMessageContext;