import { useState, useRef, useEffect } from 'react';
import './LegalAssistant.css';

const LegalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'أهلاً بك في مَحكم. أنا مساعدك القانوني الذكي المتخصص في أنظمة وقوانين المملكة العربية السعودية. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      
      if (!apiKey || apiKey === 'undefined') {
        throw new Error('API_KEY_MISSING');
      }
      
      const systemPrompt = {
        role: "system",
        content: `أنت مساعد قانوني ذكي واحترافي يعمل لصالح "شركة محكم للمحاماة والاستشارات القانونية".
مهمتك الأساسية هي الإجابة عن الأسئلة وتقديم الاستشارات في مجال القانون والمحاماة وفقاً لأنظمة وقوانين المملكة العربية السعودية فقط.
شروط الاستجابة:
1. إذا كان السؤال خارج نطاق القانون والمحاماة، أو يخص قوانين دول أخرى غير السعودية، اعتذر بلباقة وأخبر المستخدم أن تخصصك محصور في القانون السعودي.
2. كن مهنياً، دقيقاً، وواضحاً في إجاباتك.
3. استخدم لغة عربية فصحى احترافية.
4. اذكر دائماً أن هذه المعلومات هي إرشادية ولا تغني عن الاستشارة القانونية المباشرة مع محامي الشركة.`
      };

      const apiMessages = [
        systemPrompt,
        ...messages.map(m => ({ role: m.role, content: m.content })),
        userMessage
      ];

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: apiMessages,
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("OpenRouter Error:", errText);
        throw new Error(`API_ERROR: ${response.status} - ${errText}`);
      }

      const data = await response.json();
      const botMessage = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { role: 'assistant', content: botMessage }]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      if (error.message === 'API_KEY_MISSING') {
        setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، يبدو أن مفتاح API غير متوفر في إعدادات المنصة. يرجى التأكد من إضافة المتغير في Railway وإعادة بناء المشروع (Redeploy).' }]);
      } else if (error.message && error.message.includes('API_ERROR')) {
        setMessages(prev => [...prev, { role: 'assistant', content: `تفاصيل الخطأ من الخادم: ${error.message}. تأكد من صحة مفتاح الـ API (بدون مسافات أو علامات تنصيص).` }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: `حدث خطأ في الشبكة: ${error.message}. إذا كنت تستخدم متصفح Brave أو إضافة حجب الإعلانات، يرجى إيقافها للموقع.` }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="legal-assistant-container">
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'chat-open' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <span className="chat-icon">⚖️</span>
            المساعد القانوني الذكي
          </div>
          <button className="chat-close" onClick={toggleChat}>✕</button>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.role === 'user' ? 'message-user' : 'message-bot'}`}>
              <div className="message-bubble">{msg.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message message-bot">
              <div className="message-bubble typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chat-input-area" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب سؤالك القانوني هنا..." 
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            إرسال
          </button>
        </form>
      </div>

      {/* Floating Action Button */}
      <button className="chat-fab" onClick={toggleChat}>
        {isOpen ? '✕' : '🤖'}
      </button>
    </div>
  );
};

export default LegalAssistant;
