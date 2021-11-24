//Array containing quotes that will be displayed 
const quotes = 
['"The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.” ― G.K. Chesterton', 
'“Appear weak when you are strong, and strong when you are weak.”― Sun Tzu, The Art of War', 
'“Older men declare war. But it is youth that must fight and die.”― Herbert Hoover', 
'“What difference does it make to the dead, the orphans and the homeless, whether the mad destruction is wrought under the name of totalitarianism or in the holy name of liberty or democracy?”― Mahatma Gandhi',
'“Imagination is the only weapon in the war against reality.”― Lewis Carroll']

//Generates random index number 
const randomNo = Math.floor(Math.random() * 5 );

//function that generates quote
let genWarQuote= () => {
 console.log(quotes[randomNo]);   
}
genWarQuote();
