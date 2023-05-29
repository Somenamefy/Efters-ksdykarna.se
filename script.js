document.querySelector('#hund').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med hund";
  contentText.innerText = "Vi har hundförare vars hundar tränats för eftersök på människor. Dessa hundar är väldigt effektiva vid de tillfällen då objektet skulle vara avlidet.";
});
document.querySelector('#drönare').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med drönare";
  contentText.innerText = "Vi har tillgång till luft- och Undervattens-drönare. Detta skapar bra förutsättningar för en lyckad insats då vi kan genomsöka området både från luft och under ytan.";
});
document.querySelector('#båt').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med båt";
  contentText.innerText = "Vi har tillgång till båtar som kan användas vid insatser när objektet inte skulle kunna hittas från land. Vi kan även scanna botten för att kunna hitta sökområden innan vi tillsätter mer resurser.";
});
document.querySelector('#dyk').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Eftersök med dykare";
  contentText.innerText = "Vi har proffsiga dykare, med mycket erfarenhet. Att använda dykare vid insatser är en grundförutsättning för en lyckad insats då objektet misstänks befinna sig under ytan.";
});
document.querySelector('#logga').addEventListener('click', () => {
  let contentHeader = document.querySelector('#contentHeader');
  let contentText = document.querySelector('#contentText');
  contentHeader.innerText = "Vi är Eftersöksdykarna";
  contentText.innerText = "Eftersöksdykarna är en idell organisation som strävar efter spetskunskap inom sök i vattendrag, Vi strävar efter samarbete mellan myndigheter och privatpersoner för att kunna hjälpa till att hitta nära och kära som är försvunna.";
});
