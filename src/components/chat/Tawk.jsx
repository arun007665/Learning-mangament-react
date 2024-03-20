import React, { useEffect } from 'react';

const Tawk = () => {
    useEffect(() => {
        const simulateDummyQuestions = () => {
            const Tawk_API = window.Tawk_API;

            if (Tawk_API) {
                Tawk_API.onLoad = function() {
                    Tawk_API.sendMessage('Hello! How can I help you today?', false, 'Visitor');
                    // Add more dummy questions as needed
                };
            }
        };

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/65fb0bf01ec1082f04d9694e/1hpead8t6';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        script.onload = simulateDummyQuestions;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return 
    <>
    h1llo
    
    </>
};

export default Tawk;