import Message from "../models/Message";

export default interface APP_STATE{
    loggedIn: boolean,
    userId: string | null,
    messages: Array<Message>,

}