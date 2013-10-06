/*jshint unused: false */
var njEvents = [
  {
    id: '2013_10_10',
    title: 'Cloud Pattern',
    date: new Date(2013, 9, 10),//month begin at 0
    time: '19',
    register: 'https://guestlistapp.com/events/190722',
    place: 'epsi',
    subjects: [
      {
        title: 'Tour de l\'actualité',
        length: '20 min',
        type: 'quickie',
        intro: 'présenté par Sébastien Prunier qui lance par la même occasion les quickies.',
        speakers: ['sebastien_prunier']
      },
      {
        title: 'Les "Cloud Patterns"',
        length: '1 h 30',
        type: 'talk',
        intro: 'par Nicolas Deloof, en avant-première avant Devoxx.be, dont nous avons gardé la description originale.',
        abstract: '<p>Le sujet lui sera bien en français - mais le speaker est trop flemmard - enfin c\'est lui qui le dit :p.</p>' +
            '<p>Cloud "Platform as a Service" promise to host your application without a change, but things are not so simple and you can\'t deploy your legacy EJB 1.0 application to the Cloud without some refactoring.</p>' +
            '<p>During this session, I will explain some architecture patterns to apply to your new developments, and the possible refactoring or platform services that can help to get your existing application migrated without major changes, so that your transition to the cloud is as smooth as possible. To avoid a pure theoretical talk, I\'ll share experience about migrating devoxx application from traditional hosting to cloud.</p>',
        speakers: ['nicolas_deloof']
      }
    ]
  },
  {
    id: '2013_06_13',
    title: 'SEO - Scalabilité',
    date: new Date(2013, 5, 13),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Nouveaux impacts du développement web sur le référencement naturel (SEO)',
        length: '1 h',
        type: 'talk',
        intro: null,
        abstract: '<p>Vous réalisez des développements web (sites, applicatifs ...) et vous cherchez à optimiser leur visibilité dans les moteurs de recherches ? Alors cette conférence s\'adresse à vous !</p>' +
            '<p>Durant 1h, nous allons dresser les grandes recommandations SEO à prendre en compte lorsque l\'on développe pour le web, les standards mais surtout les pratiques émergentes : balisage sémantique, performances, analyse des erreurs, crawl des robots ... illustrés au travers de cas pratiques. L\'objectif : vous donner les bons réflexes pour intégrer les pré-requis du SEO dès la phase de conception du projet afin de gagner en temps et donc en rentabilité.</p>',
        speakers: ['guillaume_degre']
      },
      {
        title: 'How to Scale?',
        length: '1 h',
        type: 'talk',
        intro: null,
        abstract: '<p>Quentin presentera en s\'appuyant sur l\'experience de Clever Cloud les defis que vous allez rencontrés pour "scaler" une application.</p>' +
            '<p>Cette sessions s\'appuiera sur des retour d\'experience sur différentes applications et framework.</p>',
        speakers: ['quentin_adam']
      }
    ]
  },
  {
    id: '2013_05_01',
    title: 'Soirée NoSQL : Base de Données Graph avec Neo4J',
    date: new Date(2013, 4, 1),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Soirée NoSQL : Base de Données Graph avec Neo4J',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Prendre un tableau et un papier pour modéliser ses données, c\'est ce que nous faisons régulièrement. Cependant à chaque fois nous devons traduire notre modèle en MCD pour l\'insérer dans un SGBD. La promesse des bases de données orientées  graphe c\'est d\'être veleda ready ! Plus besoin de convertir notre modèle.</p>' +
            '<p>Lors de cette présentation nous vous parlerons de Neo4j, une base données NoSQL orientée graph écrite en java, ainsi que des concepts qui gravitent autour.</p>' +
            '<p>On vous montrera comment réaliser un système de recommandation simple et efficace basé sur les données de github.</p>',
        speakers: ['benoit_simard']
      }
    ]
  },
  {
    id: '2013_04_01',
    title: 'JavaScript pour le développeur Java',
    date: new Date(2013, 3, 1),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'JavaScript pour le développeur Java',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Dans sa présentation Christophe va nous expliquer pourquoi et comment l’ancien détracteur de JavaScript est devenu un fan du langage et, en orientant sa présentation vers des développeurs Java comme lui, essayer de nous faire regarder JavaScript sous un autre angle, à apprécier ses forces, à mieux comprendre ses faiblesses et à nous donner envie de s’y essayer.</p>' +
            '<p>La présentation sera structurée en deux parties :</p>' +
            '<p><b>JavaScript pour le développeur Java</b></p>' +
            '<p>Au cours de cette présentation nous balayerons les caractéristiques de JavaScript du point de vue du développeur Java en appuyant notamment sur les différences entre les deux langages et ce qui peut se transformer en piège pour le développeur qui aurait juger inutile d’apprendre JavaScript.</p>' +
            '<p><b>La caisse d’outils du développeur JavaScript</b></p>' +
            '<p>Au secours, votre chef a vu dans DSI-01-MAG-INFORMATIQUE que l’avenir est au application Web et il veut maintenant que tous vos projets soient en JavaScript. Vous paniquez parce que la dernière fois que vous avez fait du JavaScript, c’était à la faculté dans un éditeur de texte et vous débugguiez en affichant des boites de dialogue.</p>' +
            '<p>Au cours de cette présentation, nous verrons que l’écosystème JavaScript a évolué et que vous disposez maintenant de frameworks complets gérant vos couches de présentation, vos test, vos dépendances et même le backend de vos applications. Nous verrons aussi que l’outillage a progressé et que nous pouvons maintenant faire du débuggage comme dans nos application Java, de l’intégration continue et même de l’audit de qualité !</p>',
        speakers: ['christophe_jollivet']
      }
    ]
  },
  {
    id: '2013_03_01',
    title: 'Traçabilité d\'une architecture distribuée avec NodeJS et MongoDB & Retour sur Code Story 2013',
    date: new Date(2013, 2, 1),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Code Story 2013',
        length: '30 min',
        type: 'quickie',
        intro: null,
        abstract: '<p>Les architectures distribuées soulèvent un certains nombre de problématiques en terme de traçabilité : détection des anomalies, suivi des utilisateurs, mesure des performances des différents services ...</p>' +
            '<p>Durant cette session, nous vous montrerons - démonstration à l\'appui - comment nous avons apporté une solution simple à ces problématiques, en mettant en place un système de consolidation de logs avec Node.js et MongoDb.</p>',
        speakers: ['sebastien_prunier', 'jerome_creignou']
      },
      {
        title: 'Traçabilité d\'une architecture distribuée avec NodeJS et MongoDB & Retour sur Code Story 2013',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Une des bonnes nouvelles du début d’année a été le concours Code Story pour l’édition 2013 de Devoxx France. Une superbe occasion de développer et de tester de nouvelles technos, tout en s\'amusant !</p>' +
            '<p>Nous débuterons la session par un retour sur notre participation à la première phase de ce concours, en vous présentant et en comparant nos choix technologiques.</p>',
        speakers: ['sebastien_prunier', 'jerome_creignou']
      }
    ]
  },
  {
    id: '2013_02_01',
    title: 'Soirée NoSQL - Couchbase & MongoDB',
    date: new Date(2013, 1, 1),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Introduction au NoSQL',
        length: '20 min',
        type: 'intro',
        intro: null,
        abstract: '<p>Cette présentation commencera par une rapide introduction au NoSQL expliquant les raisons pour lesquelles de plus en plus de projets utilisent ce type de solutions. Tugdual fera également le tour des différentes approches (Clé Valeur, Document, Colonnes, Graph) et solutions du marché.</p>' +
            '<p>Manuel présentera MongoDB et Tugdual présentera Couchbase, deux solutions open source de base de données orientées document. Ces présentations s\'appuieront sur de nombreuses démonstrations qui mettront en avant :' +
            '<ul>' +
            '<li>L’utilisation de JSON pour le stockage et les bénéfices et défis associés à l’approche "Schemaless"</li>' +
            '<li>Le développement d’applications</li>' +
            '<li>Le déploiement et l’administration de cluster</li>' +
            '</ul></p>' +
            '',
        speakers: ['tugdual_grall', 'manuel_boillod']
      },
      {
        title: 'MongoDB',
        length: '45 min',
        type: 'talk',
        intro: null,
        abstract: '<p>Présentation de MongoDB</p>',
        speakers: ['manuel_boillod']
      },
      {
        title: 'Couchbase',
        length: '45 min',
        type: 'talk',
        intro: null,
        abstract: '<p>Présentation de Couchbase</p>',
        speakers: ['tugdual_grall']
      }
    ]
  },
  {
    id: '2013_01_01',
    title: 'Soirée Langage et Framework: Dart & Clojure',
    date: new Date(2013, 0, 1),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Clojure',
        length: '1 h',
        type: 'talk',
        intro: null,
        abstract: '<p>Le paradigme fonctionnel revient à la mode décennie après décennie. Pourquoi l\'est-il aujourd\'hui ? Au travers de Clojure, un langage de cette nouvelle vague, nous explorerons les idées anciennes et nouvelles qu\'elle pousse et que nous retrouverons (ou pas) demain dans notre Java quotidien. (Préférerez vous au final l\'original ou la copie :-) ?)</p>',
        speakers: ['cedric_pineau']
      },
      {
        title: 'Dart',
        length: '1 h',
        type: 'talk',
        intro: null,
        abstract: '<p>Dart est un nouveau langage de programmation pour développer des applications web. Créé par Google et ouvert au grand public en octobre 2011, c’est un langage orienté-objet avec une syntaxe familière que l’on soit développeur Java ou développeur JavaScript. Ses deux objectifs ? Performance et facilité d’utilisation.</p>' +
            '<p>Dans cette présentation, nous verrons quels sont les objectifs de Google en introduisant ce nouveau langage. Nous irons au coeur de celui-ci en présentant les différentes spécificités, typage optionnel, les Isolates comme modèle de concurrence, les différents mode d’exécution, la gestion du DOM... Enfin, nous discuterons des échéances à venir pour savoir si Dart saura s’imposer ou non en tant que langage d’avenir pour le web.</p>',
        speakers: ['julien_vey']
      }
    ]
  }/*,
  {
    id: '2013_05_01',
    title: '',
    date: new Date(2013, 0, 0),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: '',
        length: '20 min',
        type: 'quickie',
        intro: null,
        abstract: '<p></p>' +
					'<p></p>' + 
					'<p></p>',
        speakers: []
      },
      {
        title: '',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p></p>' +
					'<p></p>' + 
					'<p></p>',
        speakers: []
      }
    ]
  }*/
];
