export type MessageHistoryData = {
    id: string;
    from: { name: string };
    type: 'message' | 'response' | 'typing';
    time: string;
    text?: string;
}
