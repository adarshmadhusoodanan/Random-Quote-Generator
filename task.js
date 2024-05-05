const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "There are no shortcuts to any place worth going. – Beverly Sills",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "The only person you should try to be better than is the person you were yesterday. – Anonymous",
    "It does not matter how slowly you go, as long as you do not stop. – Confucius",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt"
];

const quoteDisplay = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});
