<script>
        // Massive Bot Knowledge Base
        const botDB = {
            // Greetings
            "hi": "Hello! Welcome to Care & Care. How can I assist you today?",
            "hello": "Hi there! I'm your Care & Care assistant. What would you like to know?",
            "hey": "Hello! How can we help you and your family?",
            
            // Services General
            "services": "We offer Early Childhood Early Intervention (ECEI), Support Coordination, and Plan Management. Which one would you like to know about?",
            "what do you do": "We are a registered NDIS provider helping families with ECEI, Support Coordination, and Plan Management.",
            
            // ECEI Specific
            "ecei": "ECEI stands for Early Childhood Early Intervention. It's designed for children aged 0-6 years with developmental delays to help them achieve their milestones.",
            "early childhood": "Our Early Childhood program supports children under 7 with personalized, play-based therapies.",
            "child": "We specialize in early childhood support (ECEI) to give your child the best start in life.",
            
            // Support Coordination Specific
            "support coordination": "Our Support Coordinators help you understand your NDIS plan, connect with local therapists, and maximize your funding.",
            "coordinator": "We have expert Support Coordinators to guide you through your NDIS journey step-by-step.",
            
            // Plan Management Specific
            "plan management": "Plan Management means we act as your NDIS accountants. We pay your provider invoices and handle portal claims so you don't have to worry.",
            "manage plan": "We can manage your NDIS plan funding, ensuring providers are paid on time while you track it all transparently.",
            "invoice": "If you are with our Plan Management team, we handle all your invoices directly with the NDIS.",

            // Cost & Pricing
            "cost": "Our fees strictly follow the NDIS Pricing Arrangements. There are no out-of-pocket expenses for you if funded by NDIS.",
            "price": "We charge according to standard NDIS guidelines, meaning your NDIS plan covers our service costs.",
            "free": "Initial consultations are completely free! Service costs are covered by your NDIS plan.",
            "fee": "All our fees are regulated by the NDIS pricing guidelines.",

            // Location & Contact
            "location": "We are located at Greenwood Business Park, 301 Burwood Hwy, Burwood VIC 3125.",
            "address": "Our office is at 301 Burwood Hwy, Building 1, Burwood VIC 3125.",
            "where": "We are based in Burwood, VIC, but offer services across the region.",
            "contact": "You can call us directly at 0491 649 145 or email Info@careandcare.com.au.",
            "phone": "Our contact number is 0491 649 145. Feel free to call us!",
            "number": "Please call our team at 0491 649 145.",
            "email": "You can reach us anytime at Info@careandcare.com.au.",
            
            // Hours
            "hours": "We are open Monday to Friday, from 9 AM to 5 PM AEST.",
            "time": "Our operating hours are 9 AM - 5 PM, Monday through Friday.",
            "open": "We are open weekdays from 9am to 5pm.",
            "weekend": "We are closed on Saturdays and Sundays, but you can leave us a message!",

            // Referrals
            "refer": "To make a referral, please visit the Contact section on our website and fill out the form.",
            "apply": "You can start by booking a free consultation through our website or calling our team.",
            "book": "You can book an appointment by filling out the Contact form or calling 0491 649 145.",

            // NAYA PROFESSIONAL DEFAULT MESSAGE
            "default": "At Care & Care, we are a premium NDIS provider specializing in Early Childhood Early Intervention (ECEI), Support Coordination, and Plan Management. We are dedicated to nurturing potential and empowering lives. If you have a specific query, you can also reach our experts at 0491 649 145!"
        };

        function sendMsg() {
            let input = document.getElementById("chatInput");
            let text = input.value.trim();
            if(!text) return;
            
            let chatBody = document.getElementById("chatBody");
            
            // Add User Message
            chatBody.innerHTML += `<div class="msg msg-user">${text}</div>`;
            input.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;
            
            // Add Bot Response
            setTimeout(() => {
                let reply = botDB["default"];
                let textLower = text.toLowerCase();
                
                // Match keywords
                for(let key in botDB) {
                    if(textLower.includes(key) && key !== "default") { 
                        reply = botDB[key]; 
                        break; 
                    }
                }

                chatBody.innerHTML += `<div class="msg msg-bot">${reply}</div>`;
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 700);
        }
    </script>
