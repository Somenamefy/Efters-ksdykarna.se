document.querySelector('#hund').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med hund";
  contentText.innerText = "I sökandet efter försvunna personer är hundens nos en ovärderlig resurs både på vatten och land. I Eftersöksdykarna har vi tillgång till ett antal duktiga och erfarna hundekipage som är tränade för sin uppgift.";
});
document.querySelector('#drönare').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med drönare";
  contentText.innerText = "Vi har tillgång till luft- och undervattensdrönare. Detta skapar förutsättningar för en lyckad insats då vi kan genomsöka området både från luften och under ytan.";
});
document.querySelector('#båt').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med båt";
  contentText.innerText = "Vi har tillgång till båtar som används vid insatser där objektet inte kan hittas från land. Med dem kan vi även skanna botten för att lättare lokalisera objektet innan vi tillsätter mer resurser.";
});
document.querySelector('#dyk').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med dykare";
  contentText.innerText = "Våra dykare besitter den erfarenheten som krävs vid eftersöksdyk. Att kunna använda dykare vid insatser är en grundförutsättning för en lyckad insats där objektet misstänks befinna sig under vattenytan.";
});
document.querySelector('#logga').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Vi är Eftersöksdykarna";
  contentText.innerText = "Eftersöksdykarna är en ideell organisation som innehar spetskunskap om sök i vattendrag. Vi verkar med insatser där polisens och räddningstjänstens resurser inte räcker till. Det vill säga då det inte rör sig om misstanke om brott eller där det inte handlar om räddningsinsatser. Vi finns för att familjer och närstående inte ska behöva leva i ovisshet utan komma till ett möjligt avslut.";
});
