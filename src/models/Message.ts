
export default interface Message {
    timestamp: Date,
    text: string,
    sender: string,
    recipients: string[],
}