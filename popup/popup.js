var knownQuotes = [];
var knownSources = [];
var lastQuoteIndex;

var colorCodes = ["#39A2AE", "#71C4C2", "#F7F7F7", "#E8D8D2", "#E3BCB5", "#CDEEE7"];

function addQuote(quote, source) {
    knownQuotes.push(quote);
    knownSources.push(source);
}

function removeQuote(quote, source) {
    var index = -1;
    for(var i = 0; i < knownQuotes.length; i++)
    {
        if(knownQuotes[i] == quote)
        {
            index = i;
            return;
        }
    }
    knownQuotes.remove(i);
    knownSources.remove(i);
}

function changeWindow() {
    //Change the quote and source
    var quoteIndex = Math.floor((Math.random() * knownQuotes.length));
    
    while(lastQuoteIndex == quoteIndex) {
        quoteIndex = Math.floor((Math.random() * knownQuotes.length));
    }
    
    var quoteEl = document.getElementById("quote");
    var sourceEl = document.getElementById("source");

    quoteEl.innerHTML = knownQuotes[quoteIndex];
    sourceEl.innerHTML = knownSources[quoteIndex];
    lastQuoteIndex = knownQuotes[quoteIndex];
    
    //Change the background color
    var colorIndex = Math.floor((Math.random() * colorCodes.length));
    document.body.style.backgroundColor = colorCodes[colorIndex];

}

document.getElementById("reload-icon").onclick = function reloadPage() {
    location.reload();
}


addQuote("Well, dreams, they feel real while we're in them right? Its only when we wake up then we realize that something was actually strange.","Inception");
addQuote("Once an idea has taken hold of the brain, it's almost impossible to eradicate.", "Inception");
addQuote("True inspiration is impossible to fake.", "Inception");
addQuote("Do you want to take a leap of faith, or become an old man filled with regret waiting to die alone?", "Inception");
addQuote("What is the most resilient parasite? A bacteria? A virus? An intestinal worm? An idea.", "Inception");
addQuote("The dream is collapsing.", "Inception");
addQuote("Dream within a dream, ha? I’m impressed. But in my dream you play by my rules--Ah yes. But you, see Mr. Saito, it’s not your dream.", "Inception");
addQuote("If you can steal an idea from someone’s mind, why can’t you plant one there instead?", "Inception");
addQuote("Do you want to take a leap of faith, or become an old man filled with regret waiting to die alone?", "Inception");
addQuote("They say we only use a fraction of our brain’s true potential. Now, that’s when we’re awake. When we’re asleep, our mind can build almost anything.", "Inception");
addQuote("Now in a dream, we create and perceive our world simultaneously and our mind does this so well that we don’t even know it’s happening.", "Inception");
addQuote("Listen, if you’re going to perform inception you need imagination.", "Inception");
addQuote("You need the simplest version of the idea in order for it to grow naturally in the subject’s mind.", "Inception");
addQuote("In a dream you can cheat architecture into impossible shapes.", "Inception");
addQuote("They come to be woken up. The dream has become their reality. Who are you to say otherwise?", "Inception");
addQuote("Whatever I do I can’t change this moment. I’m about to call out to them, they run away.", "Inception");
addQuote("You’re waiting for a train, a train that will take you far away. You know where you hope this train will take you, but you don’t know for sure.", "Inception");


addQuote("Mankind was born on Earth. It was never meant to die here.", "Interstellar");
addQuote("This world’s a treasure, but it’s been telling us to leave for a while now.", "Interstellar");
addQuote("We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt.", "Interstellar");
addQuote("These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known. We count these moments as our proudest achievements.", "Interstellar");
addQuote("Do not go gentle into that good night; Old age should burn and rave at close of day. Rage, rage against the dying of the light.", "Interstellar");
addQuote("We’re not meant to save the world, we’re meant to leave it.", "Interstellar");
addQuote("I’m not afraid of death. I’m an old physicist. I’m afraid of time.", "Interstellar");
addQuote("Once you’re a parent, you’re the ghost of your children’s future.", "Interstellar");
addQuote("Love is not something we invented. It’s observable, powerful. It has to mean something. Love is the one thing that transcends time and space.", "Interstellar");
addQuote("I can promise you that, that yearning to be with other people is powerful. That emotion is the foundation, of what makes us human.", "Interstellar");
addQuote("A machine doesn’t improvise well, because you can’t program the fear of death.", "Interstellar");


addQuote("You either die a hero or live long enough to see yourself become the villain.", "The Dark Knight");
addQuote("Sometimes the truth isn't good enough, sometimes people deserve more.", "The Dark Knight");
addQuote("A hero can be anyone.", "The Dark Knight");
addQuote("I fear dying in here, while my city burns, and there's no one there to save it.", "The Dark Knight");
addQuote("He's the hero Gotham deserves, but not the one it needs right now.", "The Dark Knight");
addQuote("He's not our hero. He's a silent guardian, a watchful protector. A dark knight.", "The Dark Knight")
addQuote("You see, madness, as you know, is like gravity. All it takes is a little push!", "The Dark Knight");
addQuote("Some men aren't looking for anything logical, like money. They can't be bought, bullied, reasoned, or negotiated with. Some men just want to watch the world burn.", "The Dark Knight");
addQuote("If you're good at something, never do it for free.", "The Dark Knight");
addQuote("Nobody panics when things go according to plan. Even if the plan is horrifying.", "The Dark Knight");
addQuote("The night is darkest just before the dawn. And I promise you, the dawn is coming.", "The Dark Knight");
addQuote("The night is darkest just before the dawn. And I promise you, the dawn is coming.", "The Dark Knight");





changeWindow();

console.log(knownQuotes.length + " total quotes.");
console.log(knownSources.length + " total sources.");