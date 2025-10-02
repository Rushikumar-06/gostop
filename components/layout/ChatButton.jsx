import { MessageSquare } from 'lucide-react';

const ChatButton = () => {
    return (
        <button className="fixed bottom-8 right-8 bg-yellow-400 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-50">
            <MessageSquare size={28} className="text-black" />
        </button>
    );
};

export default ChatButton;