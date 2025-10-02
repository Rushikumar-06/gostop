import { MessageSquare } from 'lucide-react';

const ChatButton = () => {
    return (
        <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-yellow-400 p-3 sm:p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-50">
            <MessageSquare size={24} className="sm:size-[28px] text-black" />
        </button>
    );
};

export default ChatButton;