interface Message {
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        id: string;
        name: string;
        avatar: string;
    };
}