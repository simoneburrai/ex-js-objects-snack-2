**CODE QUESTION 1**

1. In console viene stampato lo stesso nome, sia per il primo che per il secondo console.log.
2. E' stato creato solo un oggetto in memoria, ma due variabili di riferimento.

**CODE QUESTION 2**

1. La stampa del console.log non dovrebbe cambiare, perchè comunque si sta agendo su una proprietà array, e anche qui si ha un reference type.

2. Nell'esecuzione di questo codice sono stato creati tre oggetti. Uno nella prima definizione, il secondo con lo spread operator.

**CODE QUESTION 3**

1. Nell'esecuzione del terzo codice sono stati creati 9 oggetti. Usando structured clone si crea una deep copy dell'oggetto.

**CODE QUESTION 4**

1. Il metodo migliore per clonare Chef è utilizzare lo spread operator, perchè crea copie di funzione.

2. Per il secondo oggetto (Restaurant) è giusto clonarlo utilizzando structured Clone, perchè permette di copiare classi come Date(), contenenti tutti i propri metodi.

**CODE QUESTION 5**

1. Nel primo console log viene stampato chef "Hyur".
Nel secondo console log viene stampato sempre chef "Hyur". Nel terzo e nel quarto console log viene stampato Hyur 2, perchè maker secondBurger non è stato definito in questo modo : {...hamburger, maker: ...hamburger.maker}.
2. Vengono comunque creati 5 oggetti, perchè sono presenti due spread operator.


**CODE QUESTION 6**

1. Con lo structuredcopy non potremmo copiarlo decentemente, perchè ci sono delle funzioni all'interno del nostro oggetto. Per funzionare bisognerebbe usare lo spread operator, esempio:
chef2 = {...chef, restaurant: {...chef.restaurant}, address: {...chef.restaurant.address}}. Così dovremmo avere una copia con tutti i metodi.

**Snack 7**
Vedi index.js