document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
    const divs = {
      'Popolari': 'primoDiv',
      'Sul litorale': 'secondoDiv',
      'Destinazioni storiche': 'terzoDiv',
      'Isole': 'quartoDiv',
      'Montagne': 'quintoDiv',
      'Categorie': 'sestoDiv'
    };
  
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const linkText = event.target.textContent.trim();
        
        Object.keys(divs).forEach(key => {
          
          const divId = divs[key];
          
          const divElement = document.getElementById(divId);
          
          if (divElement) {
            divElement.style.display = (key === linkText) ? 'flex' : 'none';
          }
        });
      });
    });
  });

  /*
  1. document.addEventListener("DOMContentLoaded", function;

Questo codice assicura che la funzione interna venga eseguita solo dopo che tutto il contenuto della pagina (DOM) è stato completamente caricato.

2. const links = document.querySelectorAll('.nav-link');

Seleziona tutti gli elementi della pagina con la classe nav-link e li memorizza nella variabile links. Questi sono i link di navigazione presenti nel footer.


3.const divs;

Crea un oggetto divs che mappa il testo dei link ai rispettivi ID dei div che devono essere mostrati. Ad esempio, il link con testo "Sul litorale" è associato al div con ID secondoDiv.

4.links.forEach(link;

Per ogni link di navigazione, aggiunge un ascoltatore di eventi click.
link.addEventListener('click', function (event) {...});

Quando un link viene cliccato, esegue la funzione interna.

5.event.preventDefault;

Impedisce il comportamento predefinito del link (che normalmente sarebbe quello di seguire l'URL nel tag href).

6.const linkText = event.target.textContent.trim;

Ottiene il testo del link cliccato e rimuove eventuali spazi bianchi all'inizio e alla fine.
Object.keys(divs).forEach(key => {...});

Itera attraverso tutte le chiavi dell'oggetto divs.


7.const divId = divs[key];

Ottiene l'ID del div associato alla chiave corrente.
const divElement = document.getElementById(divId);

Seleziona l'elemento div corrispondente usando il suo ID.


8.if (divElement)

Controlla se l'elemento div esiste.

9,divElement.style.display = (key === linkText) ? 'block' : 'none';

Se il testo del link corrisponde alla chiave, imposta il display del div su 'block' (mostra il div). Altrimenti, lo nasconde impostando il display su 'none'.*/

