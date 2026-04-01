// Accessibility: Text Zoom
let currentZoom = 100;
function changeTextSize(action) {
    if (action === 0) currentZoom = 100;
    else currentZoom += action * 10;
    if (currentZoom >= 90 && currentZoom <= 140) document.body.style.zoom = currentZoom + "%";
}

// AI Chatbot Knowledge Base
const botAnswers = {
    "ndis": "NDIS provides funding to eligible people with disability. We are a registered provider helping you utilize your plan effectively.",
    "ecei": "Our ECEI program supports children aged 0-6 years with developmental delays.",
    "services": "We offer ECEI, Support Coordination, and Daily Personal Activities.",
    "referral": "You can easily make a referral by clicking 'Make a Referral' in the menu.",
    "contact": "Chat with us on WhatsApp or email info@careandcare.com.au.",
    "hello": "Hello! Welcome to Care & Care. How can I help you?",
    "hi": "Hi there! Looking for disability support?",
    "default": "I didn't quite catch that. Try asking about NDIS, ECEI, or click the WhatsApp button to chat with our team!"
};

// Chatbot Functions
function toggleChat() { 
    let box = document.getElementById("aiChat"); 
    box.style.display = box.style.display === "flex" ? "none" : "flex"; 
}

function sendMsg() {
    let input = document.getElementById("chatVal");
    let text = input.value.trim();
    if(!text) return;
    
    let msgs = document.getElementById("chatMsgs");
    msgs.innerHTML += `<div style="text-align: right; margin-bottom: 10px;"><div class="msg-user">${text}</div></div>`;
    input.value = "";
    msgs.scrollTop = msgs.scrollHeight;
    
    setTimeout(() => {
        let textLower = text.toLowerCase();
        let reply = botAnswers["default"];
        for(let key in botAnswers) {
            if(textLower.includes(key)) { reply = botAnswers[key]; break; }
        }
        msgs.innerHTML += `<div><div class="msg-bot">${reply}</div></div>`;
        msgs.scrollTop = msgs.scrollHeight;
    }, 600);
}
