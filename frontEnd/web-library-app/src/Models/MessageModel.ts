class MessageModel{

    constructor(title: string, question: string) {
        this.title = title;
        this.question = question;
    }

    title: string;
    question: string;
    id?: number;
    userEmail?: string;
    adminEmail?:string;
    response?:string;
    closed?:boolean;

}

export default MessageModel;