var quotes = [
    "Winning isn\'t everything, it\'s the only thing.",
    "The key is not the will to win... everybody has that. It is the will to prepare to win that is important.",
    "I\'ve missed more than 9,000 shots in my career. I\'ve lost almost 300 games. 26 times, I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.",
    "Show me a gracious loser and I\'ll show you a failure",
    "I hated every minute of training, but I said, \'Don\'t quit. Suffer now and live the rest of your life as a champion.\'",
    "When you win, say nothing. When you lose, say less.",
    "A champion is afraid of losing. Everyone else is afraid of winning.",
    "Winning isn\'t everything, but it beats anything that comes second.",
    "Losing feels worse than winning feels good.",
    "Winning is the most important thing in my life, after breathing. Breathing first, winning next.",
    "Nobody cares how much you know, until they know how much you care."
    ]
    
var author = [
       "- Vince Lombardi",
       "- Bobby Knight",
       "- Michael Jordan",
       "- Wilma Rudolph",
       "- Muhammad Ali",
       "- Paul Brown",
       "- Billie Jean King",
       "- Paul Bryant",
       "- Vin Scully",
       "- George Stenbrenner",
       "- Mark Dantonio"
    ]

function getQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    var randomAuthor = Math.floor(Math.random() * (author.length));
    
    document.getElementById('quote').innerHTML = quotes[randomNum];
    document.getElementById('author').innerHTML = author[randomNum];
 };

function tweetQuote() {
	var generatedQuote = document.getElementById('quote').innerHTML;
	var generatedAuthor = document.getElementById('author').innerHTML;
	var tweetUrl = ' https://twitter.com/intent/tweet?text=' + "'" + encodeURIComponent(generatedQuote) + " " + encodeURIComponent(generatedAuthor) + "'" + " ...check out my CodePen at https://codepen.io/gillenha/pen/wjJzqE";
	window.open(tweetUrl);
}