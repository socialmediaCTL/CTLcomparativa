import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, Minimize2, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";
import voltAvatar from "@/assets/volt_avatar_chat.png"; // IMAGEN ORIGINAL

interface Message {
  role: "user" | "model";
  text: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chat_history");
    return saved ? JSON.parse(saved) : [{ role: "model", text: "¡Hola! Soy Volt ⚡. Estoy aquí para ayudarte a ahorrar en tu factura. ¿Cómo te puedo ayudar hoy?" }];
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const clearChat = () => {
    localStorage.removeItem("chat_history");
    setMessages([{ role: "model", text: "Chat reiniciado 🗑️. ¿En qué puedo ayudarte hoy?" }]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const res = await apiRequest("POST", "/api/chat", { 
        message: userMessage, 
        history: messages.slice(-10), 
        location: window.location.href 
      });
      return res.json();
    },
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "model", text: data.message }]);
    },
    onError: () => {
      setMessages((prev) => [...prev, { role: "model", text: "Ups, algo falló. Inténtalo de nuevo." }]);
    }
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMsg = { role: "user" as const, text: inputValue };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    chatMutation.mutate(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] sm:w-[380px] shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5"
          >
            <Card className="border-0 shadow-none h-full flex flex-col">
              <CardHeader className="bg-brand-gradient text-white p-4 flex flex-row justify-between items-center space-y-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <div className="flex items-center gap-3 z-10">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-yellow)] overflow-hidden bg-white/10 p-0.5 shadow-lg">
                      <img src={voltAvatar} alt="Volt" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#002782] rounded-full"></div>
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold font-heading tracking-wide">Asistente Volt</CardTitle>
                    <p className="text-[11px] text-blue-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[var(--color-brand-yellow)] rounded-full animate-pulse"></span>
                      Responde al instante
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 z-10">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-[var(--color-brand-yellow)] hover:bg-white/10 rounded-full transition-colors" onClick={clearChat} title="Borrar historial">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-[var(--color-brand-yellow)] hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsOpen(false)}>
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0 bg-gray-50 flex-1 relative">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <ScrollArea className="h-[350px] p-4">
                  <div className="flex flex-col gap-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={cn("flex w-full items-end", msg.role === "user" ? "justify-end" : "justify-start")}>
                        {msg.role === "model" && (
                          <div className="mr-2 flex-shrink-0 mb-1">
                             <motion.img 
                               src={voltAvatar} 
                               alt="Volt" 
                               className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                               animate={{
                                 scale: [1, 1.1, 1],
                                 y: [0, -3, 0],
                                 transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                               }}
                             />
                          </div>
                        )}
                        <div className={cn("flex flex-col gap-1 rounded-2xl px-4 py-2.5 text-sm shadow-sm max-w-[80%] break-words whitespace-pre-wrap",
                            msg.role === "user"
                              ? "bg-[#002782] text-white rounded-br-none"
                              : "bg-white text-gray-800 border border-gray-100 rounded-bl-none text-left")}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {chatMutation.isPending && (
                       <div className="flex w-full justify-start items-end">
                          <div className="mr-2 flex-shrink-0 mb-1">
                            <img src={voltAvatar} alt="Volt" className="w-8 h-8 rounded-full border border-gray-200 opacity-70" />
                          </div>
                          <div className="flex flex-col gap-2 rounded-2xl px-4 py-3 text-sm bg-white border border-gray-100 rounded-bl-none shadow-sm">
                            <span className="flex gap-1">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                            </span>
                          </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-3 bg-white border-t border-gray-100">
                <div className="flex w-full items-center gap-2">
                  <Input placeholder="Escribe tu duda..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} className="focus-visible:ring-[#002782] border-gray-200 bg-gray-50 rounded-full px-4" disabled={chatMutation.isPending} />
                  <Button size="icon" onClick={handleSendMessage} disabled={chatMutation.isPending || !inputValue.trim()} className="bg-[var(--color-brand-yellow)] text-[#002782] hover:bg-yellow-400 rounded-full w-10 h-10 shadow-sm shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn("h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-4 p-0 overflow-hidden", isOpen ? "bg-gray-200 border-gray-100 text-gray-600" : "bg-[#002782] border-[var(--color-brand-yellow)] text-white hover:shadow-[0_0_30px_rgba(255,195,0,0.4)]")}
      >
        {isOpen ? <X className="h-7 w-7" /> : <img src={voltAvatar} alt="Chat" className="h-full w-full object-cover" />}
      </motion.button>
    </div>
  );
}