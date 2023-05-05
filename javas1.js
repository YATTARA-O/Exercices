var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Hi everyone Im <strong>Yattara Ousmane</strong>!')
        .pauseFor(2500)
        .deleteAll()
        .typeString(' <strong>CHAP-I AFFICHAGE ET VARIABLES</strong>')
        .pauseFor(2500)
        .deleteAll()
        .typeString('"Pour relier un fichier javascript au document HTML, il faut inserer une balise script juste avant la fermeture du body de la page!"')
        .pauseFor(2500)
        .deleteAll()
        .typeString(' <strong>1-2 AFFICHAGE SUR LE DOCUMENT COURANT</strong>')
        .pauseFor(2500)
        .deleteAll()
        .typeString(' <strong>1-3 LA CONSOLE:</strong> c\'est un outil de debogage intégré au navigateur il est accessible depuis l\'inspecteur en cliquant sur l\'onglet console. Elle permet de verifier le bon fonctionnement de votre code et sa liaison avec le fichier HTML.')
        .pauseFor(2500)
        .deleteAll()
        .typeString(' <strong>1-3 UNE VARIABLES:</strong> c\'est une boite permettant de stocker des données, elle peut également être imaginée comme une boite qui contient de la data à noter que ce stockage est temporaire et dur le temps de l\'exécution du script.')
        .pauseFor(2500)
        .deleteAll()
        .typeString('<strong> Rôle d\'une boite de dialogue : </strong>La boite de dialogue ou popup permet de communiquer avec le visiteur du site')
        .pauseFor(2500)
        .start();

