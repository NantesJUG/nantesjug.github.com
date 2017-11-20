/*jshint unused: false */
var njEvents = [
  {
    id: '2017_10_26',
    title: "Event Sourcing avec Apache Kafka // L'IoT dans la vraie vie",
    date: new Date(2017, 9, 26), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/preview/Nantes-Java-User-Group/events/243675823',
    place: 'eartsup',
    subjects: [
      {
        title: "L'IoT dans la vraie vie",
        length: '30min',
        time: '19h00',
        type: 'quickie',
        intro: null,
        abstract: "<p>L'internet des objets, décrit par certains comme une nouvelle révolution de l'Internet, est un sujet au coeur d'une multitude d'actualités et de controverses, si bien qu'on a souvent du mal à faire le point sur son réel potentiel.</p>"
        + "<p>Oui mais les faits sont là : investissement des grands du numérique, accélération de startup, bassins d'emplois en France autour de l'IoT, réseau d'objets connectés, l'évolution est en marche, pour de vrai ! Alors, innovation surestimée ou réelle révolution ? </p>"
        + "<p>Ce Quickie a pour but de faire un bilan, sans compromis et en apportant une vision globale sur ce nouvel usage d'Internet, complété par un retour d'expérience à la Cité de l'objet connecté et illustré par l'exemple de la SNCF.</p>",
        speakers: ['benjamin_demonet']
      },
      {
        title: 'Event Sourcing avec Apache Kafka',
        length: '1h',
        time: '19h30',
        type: 'talk',
        intro: null,
        abstract: "<p>Quand j'ai découvert Apache Kafka, j'ai rapidement été séduit par son élégance et sa simplicité. J'aimerais partager cette expérience avec vous.</p>"
        + "<p>Malgré son apparence initiale de bus de message, Kafka est un système de stockage de données extrêmement versatile. C'est un log persisté. Naturellement, j'ai fait le lien avec l'Event Sourcing, qui consiste à utiliser un log comme source de vérité d'une application, et ainsi ne jamais perdre une seule goutte de données. Alors je me suis dit : jusqu'où peut-on aller dans le développement d'une application de gestion avec Kafka pour seule base de données ? Qu'est-ce que ça donne ? Quels sont les défis à relever ? Est-ce vraiment différent d'une application centrée autour d'une base SQL ?"
        + "<p>Pour explorer ce terrain j'ai choisi d'implémenter une application très simple, le fameux TodoMVC, celui-là même qui sert de terrain de jeux aux frameworks front. Mon talk sera donc un retour sur cette expérience.</p>"
        + "<p>La présentation inclue une introduction à Kafka et au concept d'Event Sourcing, il n'y a donc aucun pré-requis.</p>",
        speakers: ['hugo_wood']
      }
    ],
    docs: [
    ]
  }, {
    id: '2017_09_18',
    title: "WebRTC // Et java 8 devient plus fonctionnel avec VAVR",
    date: new Date(2017, 8, 18), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/preview/Nantes-Java-User-Group/events/242950915',
    place: 'lucca',
    subjects: [
      {
        title: 'WebRTC : de la visioconférence dans les navigateurs sans plugins',
        length: '20min',
        time: '19h00',
        type: 'quickie',
        intro: null,
        abstract: null,
        speakers: ['abdellatif_el_maknati']
      },
      {
        title: 'Et java 8 devient plus fonctionnel avec VAVR',
        length: '1h',
        time: '19h20',
        type: 'talk',
        intro: null,
        abstract: "<p>Vavr est une librairie complètement dédiée au paradigme de programmation fonctionnelle. Elle a la particularité d'aller un peu plus loin que les notions de lambdas, pipelines ou composition de fonctions offertes par Java 8.</p>"
        // "<p>Durant cette session nous découvrirons les structures proposées par Vavr, comme les collections immuables, les values types tels que les Option, les Try, les Either…</p>"
        + "<p>Nous verrons comment cette librairie gère des aspects plus fonctionnels, à savoir la composition de fonction, le lifting, la memoization ou le currying.</p>"
        + "<p>Enfin nous terminerons avec la présentation de la syntaxe offerte pour le pattern Matching et le property checking.</p>",
        speakers: ['guillaume_lours']
      }
    ],
    docs: [
    ]
  }, {
    id: '2017_08_29',
    title: "Concours de l'été !!!",
    date: new Date(2017, 7, 29), //month begin at 0
    time: '19',
    register: '',
    place: '',
    subjects: [
      {
        title: 'Concours de l\'été !!!',
        length: 'Tout l\'été',
        time: '',
        type: '',
        intro: null,
        abstract: '<p>Pour cet été on organise un concours sur twitter.</p>' +
          '<p>Comment participer ? C\'est simple. Tweetez à @nantesjug une photo de vos vacances avec votre t-shirt Nantes JUG. <a href="https://twitter.com/nantesjug/status/877198919335383042">Petit exemple de notre part.</a></p>' +
          '<p>Pour ceux qui n\'ont pas de compte twitter, vous pouvez nous envoyer un mail à l\'adresse team@nantesjug.org.</p>' +
          '<p>Lots à gagner : </p><ul><li>3 licences Intellij IDEA</li><li>3 places pour le Devfest Nantes</li></ul>',
        speakers: []
      }
    ],
    docs: [
    ]
  },{
    id: '2017_06_19',
    title: "Akka, java 8 // serverless, et le doux parfum des vacances !",
    date: new Date(2017, 5, 19), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/240136198/',
    place: 'insula',
    subjects: [
      {
        title: 'Akka avec java 8 finalement c\'est cool !',
        length: '45min',
        time: '19h00',
        type: 'talk',
        intro: null,
        abstract: '<p>Akka est une super boite à outils pour créer des applications ultra performantes et gérer facilement la concurrence.</p>'
        + '<p>Même si akka a toujours été présenté comme un framework pour les développeurs à la fois java et scala, il faut avouer que l\'api java était plutôt rebutante. L\'arrivée de java 8 a clairement changé la donne et il est enfin possible pour les développeurs java d\'utiliser akka tout en écrivant du jolie code.</p>'
        + '<p>Dans cette session, après une présentation du framework akka nous développerons une application akka 100% java. Au programme il y aura des acteurs, du rest et des streams !</p>',
        speakers: ['alexandre_delègue']
      }, {
        title: 'Serverless: just a buzzword?',
        length: '1h',
        time: '20h00',
        type: 'talk',
        intro: null,
        abstract: '<p>Les conteneurs se généralisent depuis maintenant quelques temps. Et un nouveau concept est déjà en train de pointer le bout de son nez : le serverless. Qu’est-ce que c’est ? Est-ce un buzz ou une réelle évolution ? Est-ce que l’on doit déjà mettre à la poubelle les conteneurs ?</p>'
        + '<p>Au cours de cette présentation, nous présenterons les principes du serverless et nous ferons une mise en application avec AWS Lambda, Google Cloud Functions et le framework serverless. Nous essaierons d’apporter un éclairage sur l’intérêt de cette technologie à travers des exemples d’utilisation.</p>',
        speakers: ['julien_landure']
      }, {
        title: 'Cocktail 🍾 🍕 🍹',
        time: '21h00',
        type: 'cocktail',
        intro: null,
        abstract: '<p>Quoi de mieux qu\'un petit cocktail pour fêter cette fin de saison.</p>'
        + '<p>Rendez-vous dans le patio, et au programme, boissons, petits fours et discussions tech (ou pas). On refait le monde !</p>'
        }
    ],
    docs: [
    ]
  }, {
    id: '2017_05_15',
    title: "Anki Overdrive // CI, CD, pipelines, conteneurs",
    date: new Date(2017, 4, 15), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/239670797/',
    place: 'eartsup',
    subjects: [
      {
        title: 'CI, CD, pipelines, conteneurs : la cohabitation est elle possible ?',
        length: '1h - 1h30',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['guillaume_membre'],
        abstract: '<p>Si vous croyez que Docker et les Pipelines ne servent qu\'aux chargements et transport de conteneurs, Jenkins, votre fidèle serviteur, vous montrera comment en tirer le meilleur parti.</p>'
      }, {
        title: 'Anki Overdrive : controllez vos voitures "circuit 24" à partir de votre code',
        length: '20min',
        time: '20h30',
        type: 'quickie',
        intro: null,
        speakers: ['tugdual_grall'],
        abstract: '<p>Nous nous rappelons tous de notre premier circuit électrique, de notre premiers tours de piste dans un jeu vidéo, je vous propose dans cette présentation de passer à l\'étape suivante:  mélanger un jeux vidéo et un circuit de voiture, avec Anki Overdrive ( https://anki.com/en-us/overdrive )</p>'
    	  + '<p>Vous découvrirez en quelques minutes la mise en place d\'un circuit, le contrôle des voitures à partir de votre téléphone mobile, et l\'utilisation d\'intelligence artificielle pour plonger dans un nouveau style de jeux.</p>'
    	  + '<p>Puis vous découvrirez comment "hacker" les voitures pour capturer les données en temps réel, et même controller ces voitures à partir de votre code, donc à partir de n\'importe quel device connecté. (Mio, Leap, ...)</p>'
        }
    ],
    docs: [
    ]
  }, {
    id: '2017_04_12',
    title: "Netflix // Devops",
    date: new Date(2017, 3, 12), //month begin at 0
    time: '19h00',
    register: 'https://www.meetup.com/Nantes-Java-User-Group/events/238418834/',
    place: 'eartsup',
    subjects: [
      {
        title: 'Netflix OSS ou comment  Homer est devenu un super héros',
        length: '45min',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['vickrame_ujoodha'],
        abstract: '<p>La stack Netflix OSS ou comment Homer Simpsons est devenu un super héros.</p>' +
          '<p>Homer Simpson éternelle looser dans la série, doit faire face une fois encore à l\' homme le plus cruel de SpringField, Mrs Burns.</p>' +
          '<p>Dans ce nouvel épisode, nous verrons comment Homer, confronté à des multiples questions auxquels il ne sais pas quoi répondre, a pu devenir un super héros,en utilisant la stack Netflix OSS, aux yeux de cet homme impitoyable. </p>' +
          '<p>Alors abonnez-vous pour voir cet épisode.</p>'
    }, {
        title: 'Au secours, mon chef m\'a demandé de passer au DevOps',
        length: '45min',
        time: '19h45',
        type: 'talk',
        intro: null,
        speakers: ['antony_guilloteau'],
        abstract: '<p>"Continuous Delivery" et "DevOps" font partis des buzz word du moment dans l\'IT.</p>' +
          '<p>Si vous n\'êtes pas encore entrés dans ces démarches, ce n\'est qu\'une question de temps ! Préparez-vous à voir bientôt débarquer votre chef sur le bench avec le bouquin ""Découvrir DevOps"" sous le bras.</p>' +
          '<p>Mais pour les développeurs, ça change quoi le DevOps ? A travers cette conférence, je vais vous faire part des mes différents retours d\'expérience sur ces changements autour des pratiques, organisations et outillages.</p>'
      }
    ],
    docs: [
    ]
  }, {
    id: '2017_03_01',
    title: "Gestion de conf // Angular 2",
    date: new Date(2017, 2, 1), //month begin at 0
    time: '19h00',
    register: 'https://www.meetup.com/Nantes-Java-User-Group/events/237897768/',
    place: 'hub_creatic',
    subjects: [{
        title: "Gestion de configuration avec Hespérides",
        length: '45min',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['emeric_martineau'],
        abstract: "<p>Le système d'information de Voyages-Sncf.com ce sont des centaines d'applications.<br>" +
            "Elles sont en Java, en PHP, en Python, en Ruby, en NodeJS... Autant de technologies qui ont leurs préférences au niveau du format de configuration (XML, YAML, INI...).<br>" +
            "Dans ce contexte, il faut un outil qui permet de gérer n'importe quel format de fichiers (excepté binaire) en étant totalement décorrélé de la technologie, le tout le plus simplement possible tout en proposant de gérer des environnements différents.<br>" +
            "Cet outil doit être accessible à tous pour faciliter la vie de tous les collaborateurs : des développeurs, aux testeurs en passant par le support, sans oublier la production.<br>" +
            "En plus il est OpenSource !</p>",
        docs: [
        ]
      }, {
        title: "Et si on refaisait le site du NantesJug en Angular 2 ?",
        length: '45min',
        time: '19h45',
        type: 'talk',
        intro: null,
        speakers: ['anthonny_querouil'],
        abstract: "<p>Le site du JUG de Nantes, <a href=\"http://http://www.nantesjug.org\">http://www.nantesjug.org</a> est une application Angular 1.0.8 qui date un peu, et comme tout bon jugger, j’aime mon JUG local et je me dis qu’une refonte serait la bienvenue.</p>" +
        		"<p>Au cours de ce live-coding, nous partirons d’une application initiée avec angular-cli et nous créerons notre nouvelle version en utilisant TypeScript, un language typé de Microsoft, et la fameuse plateforme de développement on ne peut plus hype, Angular 2.</p>",
        docs: [
          {name: 'sources', url: 'https://github.com/anthonny/nantesjug-2017', type:'github'}
        ]
      }
    ],
    docs: [
    ]
  }, {
    id: '2017_02_21',
    title: "Soirée Kodo Kojo",
    date: new Date(2017, 1, 21), //month begin at 0
    time: '19h30',
    register: 'https://www.meetup.com/Nantes-Java-User-Group/events/237810951/',
    place: 'dojo',
    subjects: [{
        title: "Du Docker dans mon workflow de dev",
        length: '45min',
        time: '19h30',
        type: 'talk',
        intro: null,
        speakers: ['jean_pascal_thiery', 'antoine_le_taxin'],
        abstract: "<p>Kodo Kojo est une solution Open source qui permet de fournir une usine logicielle en 3 clics qui inclut : la gestion de la sécurité, la configuration, le monitoring et la gestion des utilisateurs sur chacune des briques de l'usine.</p>" +
        		"<p>Kodo Kojo s'appuie sur Mesos/Marathon/Docker pour lancer ses services ainsi que les briques qui constituent chaque usine logicielle. Nous proposons de vous présenter les solutions que nous avons mises en place pour tester et construire notre projet qui se compose d'une stack technique assez conséquente. Nous répondrons notamment aux questions suivantes :" +
            "<ul><li>Comment tester mon service de pilotage par API de Gitlab/Jenkins/Nexus ?</li>" +
            "<li>Comment tester l'UI sans avoir à installer Java, Maven, Meso, Marathon, Node, Npm,  HaProxy, ...</li>" +
            "<li>Comment automatiser tous ces tests ?</li>" +
            "<li>Comment partager nos livrables simplement ?</li></ul>" +
            "</p>",
        docs: [
        ]
      }
    ],
    docs: [
      {name: 'slides', url: 'http://www.slideshare.net/KodoKojo/du-docker-dans-notre-workflow-de-dev-72453736', type:'slideshare'},
    ]
  }, {
    id: '2017_02_01',
    title: "Soirée RxJava, Spring 5, Ratpack // Couchbase",
    date: new Date(2017, 1, 01), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/Nantes-Java-User-Group/events/237022612/',
    place: 'eartsup',
    subjects: [{
	title: "A practical RxJava example with Ratpack and Couchbase",
        length: '50min',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['laurent_doguin'],
        abstract: "<p>RxJava seems to be this awesome thing that every cool kids start using. But when you read about it, half of the time it’s hard to make anything out of it. Sure the isolated examples look nice but it’s always hard to put this in perspective with a real app.</p>" +
        		"<p>In this talk I’ll go through an application made to store, index and search files. We’ll see the benefit brought by using RxJava , Ratpack and Couchbase together. Nothing too complicated or advanced, just something pragmatic.</p>" +
        		"<p>This talk is for you if you want to discover RxJava through a pragmatic example. It’s a beginner talk.</p>",
        docs: [
        ]
      }, {
        title: "Applications web reactives avec Spring 5 et Reactor 3",
        length: '40min',
        time: '20h00',
        type: 'talk',
        intro: null,
        speakers: ['simon_basle'],
        abstract: "<p>Dans cette présentation nous découvrirons Reactor 3, une librairie réactive alternative à RxJava mais proche de celle-ci. " +
        		"Nous verrons comment Spring 5 va mettre l\'accent sur la programmation réactive avec Reactor comme base. Nous comparerons ensuite " +
        		"Reactor avec RxJava 1 et RxJava 2, ce qui sera l\'occasion de se focaliser (comme la librairie) sur un contexte Java 8, la spécification " +
        		"Reactive Streams et le concept de backpressure.</p>",
        docs: [
        ]
      }

    ],
    docs: [
      {name: 'Affiche de la soirée', url: 'https://drive.google.com/open?id=0BzLO1XLmywLJS1A5cm1kOFBhakk', type:'pdf'}
    ]
  },{
    id: '2017_01_18',
    title: "I'm a CTO Bitch // Kanban from the startup warfare",
    date: new Date(2017, 0, 18), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/Nantes-Java-User-Group/events/236606281/',
    place: 'hub_creatic',
    subjects: [
      {
        title: "I'm a CTO Bitch"  ,
        length: '0h40',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['youen_chene'],
        abstract: "<p>CTO, je suis un CTO, enfin! … Entre la course technologique, le juridique, la levée de fonds, le recrutement, le management, la gestion de la roadmap, les comités d’administration, les avant ventes et les 30 mn de code hebdomadaire, ce talk aidera les développeurs à mieux comprendre les CTOs et aux futurs CTOs à mieux appréhender ce nouveau role. </p>"
        ,
        docs: [
        ]
      },
      {
        title: "Kanban from the startup warfare"  ,
        length: '0h30',
        time: '19h40',
        type: 'talk',
        intro: null,
        speakers: ['youen_chene'],
        abstract: "<p>Nous verrons comment l'équipe produit de Saagie s'est organisé autour de l'approche Kanban pour répondre à ce système fortement contraint. Nous partagerons aussi les erreurs et les leçons apprises.</p>"
                 +"<p>La présentation sera agrémentée d'un parallélisme avec un empire qui a eu une croissance de startup : l'empire mongol.</p>"
        ,
        docs: [
        ]
      }
    ],
    docs: [
      {name: 'slides', url: 'https://drive.google.com/open?id=0B4KTOFlyLP1xd1NtZzdTd0pDUTg', type:'pdf'},
    ]
  },
  {
    id: '2016_10_14',
    title: "Soirée Quickies",
    date: new Date(2016, 11, 14), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/235607836/',
    place: 'insula',
    subjects: [ {
        title: "Retour sur Devoxx Belgique 2016",
        length: '0h15',
        time: '19h00',
        type: 'quickie',
        intro: null,
        speakers: ['yann_danthu'],
        abstract: "<p>"
          + "Devoxx.be c'est sur 5 jours dont 2 jours University et 3 jours de conférences.<br>"
          + "Je vous propose un petit retour sur mes 3 jours de conférence de Devoxx.be 2016, histoire de vous donnez envie d'aller y faire un tour ;)"
          + "</p>"
        ,
        docs: [
        ]
    }, {
        title: "Google Design Sprint : à quoi ça sert et pourquoi il faut essayer",
        length: '0h15',
        time: '19h15',
        type: 'quickie',
        intro: null,
        speakers: ['matthieu_gioani'],
        abstract: "<p>"
          + "Le Google Design Sprint est une approche de prototypage d'un service ou d'un business en 5 jours qui permet d'avancer rapidement et de lever des hypothèses sur une idée.<br>"
          + "Venez découvrir ce qui fait le succès des Google Design Sprints !"
          + "</p>"
        ,
        docs: [
        ]
    }, {
        title: "DropWizard for the rest of us",
        length: '0h15',
        time: '19h30',
        type: 'quickie',
        intro: null,
        speakers: ['adrien_pessu'],
        abstract: "<p>"
          + "Avec l'essor de l’architecture Microservice, DropWizard est un framework idéal pour développer des services REST.<br>"
          + "Je vous présenterai la simplicité de mise en place d'un microservice REST, ainsi que les possibilités du framework léger et robuste qu'est DropWizard."
          + "</p>"
        ,
        docs: [
		{name: 'slides', url: 'https://adrienpessu.github.io/prez/prez-DropWizard-quickie', type:'html'},
		{name: 'projet', url: 'https://github.com/adrienpessu/dropwizard-demos-quickies', type:'github'}
        ]
    }, {
        title: "2017: Java 9 et autres outils!",
        length: '0h15',
        time: '19h45',
        type: 'quickie',
        intro: null,
        speakers: ['eric_bernardeau'],
        abstract: "<p>"
          + "En 2017, nous devrions avoir Java 9 qui va entraîner pas mal de changement dans nos outils.<br>"
          + "Ce quickie est l'occasion de présenter les modifications / roadmap de ces outils qui sortiront en 2017, comme par exemple spring 5."
          + "</p>"
        ,
        docs: [
        ]
    }, {
        title: "Webcomponents the state of the art",
        length: '0h15',
        time: '20h00',
        type: 'quickie',
        intro: null,
        speakers: ['yvonnick_frin'],
        abstract: "<p>"
          + "Quoi les webcomponents !? Ce truc-là, on en entend parler depuis des années et chacun en a sa propre interprétation.<br>"
          + "Et puis, c’est pas vraiment réutilisable car il faut se traîner le framework associé à chaque fois !</p>"
          + "<p>La spécification W3C est passée en working draft, Chrome et Opéra la supporte déjà entièrement.<br>"
          + "Profitons-en pour faire un état de l’art sur ce concept de composant standard pour le Web ! "
          + "</p>"
        ,
        docs: [
        ]
    }, {
        title: "Keycloak, une solution simple pour sécuriser vos applications",
        length: '0h20',
        time: '20h15',
        type: 'quickie',
        intro: null,
        speakers: ['cyril_vrillaud'],
        abstract: "<p>"
          + "Un quicky de 20mins sur Keycloak (http://www.keycloak.org) une solution de sécurisation des applications (front, API, fédération d’utilisateurs…), qui prendrait la forme d’une démo d'un POC illustrant un use case de Voyages-sncf.com."
          + "</p>"
        ,
        docs: [
        ]
    }],
    docs: [
          //{name: 'Affiche de la soirée', url: '', type:'pdf'}
    ]
  },{
    id: '2016_11_30',
    title: "Démystifier ElasticSearch",
    date: new Date(2016, 10, 30), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/235607237',
    place: 'eartsup',
    subjects: [ {
        title: 'Démystifier ElasticSearch',
        length: '1h30',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['maxime_odye'],
        abstract: "<p>ElasticSearch est une solution de moteur de recherche utilisée par beaucoup, comprise par peu. Surcouche de l'inévitable Apache Lucene, ElasticSearch en efface la complexité pour y ajouter des interfaces \"user-friendly\". ElasticSearch est une solution Out-of-the-box étonnante, s'adaptant à l'applicatif et aux besoins sans action de l'utilisateur. Force ou faiblesse ? "
          + "<br>Comprendre ce qu'il se passe sous le capot est essentiel pour réaliser des applications performantes et pertinentes. Analyse de texte, types de recherche et clusterisation. Autant d'outils qui méritent d'être appréhendés et compris. ElasticSearch est une brique importante de la stack ELK (ElasticSearch, Logstash, Kibana). Comprendre ce que l'on indexe dans notre moteur et comment nous l'interrogeons est nécessaire pour une restitution pertinente dans Kibana."
          + "</p>"
        ,
        docs: [
        ]
    }],
    docs: [
          {name: 'Affiche de la soirée', url: ' https://drive.google.com/uc?export=download&id=0B9mpGdJWcahkclNrMG5nRUxob0k', type:'pdf'}
    ]
  },{
  id: '2016_10_19',
  title: "Dev' Party 16",
  date: new Date(2016, 9, 19), //month begin at 0
  time: '19',
  register: 'http://www.meetup.com/fr-FR/GDG-Nantes/events/233996882/',
  place: 'epitech',
  subjects: [ {
      title: 'Dev\' Party',
      length: '4h',
      time: '19h00',
      type: 'fun',
      intro: null,
      speakers: null,
      abstract: '<p>Sous forme d\'un tournoi "Clash of Code" fourni par Codingame, vous coderez sur différentes épreuves : puzzle, rapidité, moins de ligne de code...'
        + '<br>Co-organisé avec le NantesJUG, cette soirée sera aggrémentée avec pizza, boissons et bien sûr des lots à gagner.'
        + ' <p>N\'oubliez pas votre laptop pour participer !</p>'
        + ' <p>INSCRIPTION sur le meetup du GDG > <a href="http://www.meetup.com/fr-FR/GDG-Nantes/events/233996882/" target="_blank">ICI</a></p>'
      ,
      docs: [
      ]
  }],
  docs: [
//        {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B1KMBvIq23BMb1haZFFjSHdFOXc/view', type:'pdf'}
  ]
},{
    id: '2016_09_28',
    title: "Soirée Sonar",
    date: new Date(2016, 8, 28), //month begin at 0
    time: '19',
    register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/233885243/',
    place: 'eartsup',
    subjects: [ {
        title: 'SonarLint et SonarQube pour détecter les bugs, code smells et vulnérabilités',
        length: '2h',
        time: '19h00',
        type: 'talk',
        intro: null,
        speakers: ['freddy_mallet'],
        abstract: '<p>Durant cette présentation, Freddy montrera comment totalement intégrer SonarLint et SonarQube dans une chaine de développement'
        	+ ' pour détecter en continue les problèmes de fiabilité, maintenabilité et sécurité.'
        	+ ' La présentation s\'appuiera sur des exemples de code source Java, JavaScript, C# et C. </p>'
        ,
        docs: [
        ]
    }],
    docs: [
//        {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B1KMBvIq23BMb1haZFFjSHdFOXc/view', type:'pdf'}
    ]
  },{
    id: '2016_06_23',
    title: "Meet & Greet",
    date: new Date(2016, 5, 23), //month begin at 0
    time: '19',
    register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/231793731/',
    place: 'insula',
    subjects: [ {
        title: 'Cocktail, petits fours et bla bla bla :-)',
        length: '4h',
        time: '19h00',
        type: 'cocktail',
        intro: 'Petite soirée pour discuter, échanger et vous souhaitez de bonnes vacances avant la rentrée. ' +
        'Ce sera l\'occasion de parler technique, cuisine, vacances ou foot autour d\'un (ou plusieurs) verre et petits fours.',
        speakers: [],
        abstract:
        '<p>Petite soirée pour discuter, échanger et vous souhaitez de bonnes vacances avant la rentrée.</p>' +
        '<p>Ce sera l\'occasion de parler technique, cuisine, vacances ou foot autour d\'un (ou plusieurs) verre et petits fours.<br>' +
        'Merci à nos sponsors qui ont permis l\'organisation de cette soirée gratuite.</p>'
        ,
        docs: [
        ]
    }],
    docs: [
        {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B1KMBvIq23BMb1haZFFjSHdFOXc/view', type:'pdf'}
    ]
  },{
    id: '2016_06_14',
    title: "GraphQL, HTTP2 et Kill mutants !",
    date: new Date(2016, 5, 14), //month begin at 0
    time: '19',
    register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/231323461/',
    place: 'eartsup',
    subjects: [ {
        title: 'Fetch your data with GraphQL',
        length: '15min',
        time: '19h00',
        type: 'quickie',
        intro: null,
        speakers: ['antoine_cellier'],
        abstract: '<p>GraphQL est une spécification proposée par Facebook permettant d’accéder à un schéma de données issue de sources tel que des bases de données ou des services tiers, de mettre en place un typage fort et de structurer des données. Au cours de ce talk, nous allons voir comment interroger et modifier des données grâce à l\'implémentation Javascript de GraphQL.</p>',
        docs: [
//	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube'},
//	            {name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf'}
        ]
    }, {
        title: 'HTTP2 : ce qui va changer !',
        length: '20min',
        time: '19h30',
        type: 'quickie',
        intro: null,
        speakers: ['julien_landure'],
        abstract: '<p>HTTP1 est omniprésent en 2016 et HTTP2 est pourtant ""sorti"" le 15 mai 2015. Qu\'est-ce qu\'on y gagne, nous développeurs ? Les principes d\'optimisation Web seront-ils toujours d\'actualités ? Venez découvrir HTTP2, le futur protocole du Web !</p>',
        docs: [
//	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube'},
//	            {name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf'}
        ]
    }, {
        title: 'Kill mutants, save your code!',
        length: '30min',
        time: '20h00',
        type: 'quickie',
        intro: null,
        speakers: ['eric_briand'],
        abstract: '<p>Les mutants attaquent et ils en veulent à votre code ! Ils exploitent chaque faille de votre couverture de code et l’expose au grand jour ! Mais grâce à PIT, vous allez pouvoir y remedier très vite et contrecarrer cette invasion ! Vos tests unitaires seront challengés et évoluerons pour devenir plus pertinents. Les mutants n’auront qu’à bien se tenir !</p>'
            + '<p>Lors de cette session, nous parlerons des principes du mutation testing et montrerons son application directe avec PIT, framework de mutation testing Java. Nous utiliserons des tests unitaires plus ou moins pertinents pour etudier la manière dont les mutations mettent en évidence et ciblent les carences des tests.</p>',
        docs: [
//	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube'},
//	            {name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf'}
        ]
    }],
    docs: [
//	    {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B9mpGdJWcahkcEFocG02MTQ4UFU/view?usp=sharing', type: 'pdf'}
    ]
  },{
    id: '2016_05_10',
	  title: "DDD, P&A, ES, CQRS, ETC",
	  date: new Date(2016, 4, 10), //month begin at 0
	  time: '19',
	  register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/230696969/',
	  place: 'eartsup',
	  subjects: [
	      {
          title: 'DDD, P&A, ES, CQRS, ETC',
	        length: '1h30',
	        time: '19h00',
	        type: 'talk',
	        intro: null,
	        speakers: ['arnaud_bailly', 'cedric_pineau'],
          abstract: '<p>Parce que nous sommes tous des « fashion victims », parce que vous savez déjà que vous ne saurez pas résister aux sirènes des micro-services, parce vous peinez déjà à justifier l\'approche « full reactive » dont vous rêvez pour ce projet qui doit démarrer, nous vous proposons de prendre un peu de recul et de discuter, pour une fois, d\'architecture logicielle (et de moissonner au passage quelques nouvelles munitions pour votre prochaine « buzzword battle »).</p>' +
            '<p>Le « Domain-Driven Design » est un cadre conceptuel pour le développement de logiciels qui met l\'accent sur l\'expression directe des concepts du métier  sous forme de code, dans le but de diminuer la friction entre experts métiers et informaticiens.</p>' +
            '<p>L\'architecture « Ports And Adapters » est une démarche de structuration du code qui vise à isoler la logique métier des détails techniques de son implémentation.</p>' +
            '<p>« Event Sourcing » désigne un principe d\'architecture, décrit par Martin Fowler, qui met au centre du monde les événements transformant l\'état d\'un système. L\'état n\'est alors rien d\'autre que la suite des événements l\'ayant produit à partir d\'un état initial connu et précisément défini.</p>' +
            '<p>Le principe de « Command Query Responsibility Separation » ou CQRS est un prolongement naturel de l\'Event Sourcing où l\'on introduit une séparation complète des schémas de données en écriture et en lecture.</p>' +
            '<p>Cette présentation est un retour sur nos expériences dans la mise en œuvre de systèmes logiciels basés sur ces démarches de conception et d\'architecture. Nous voulons montrer quels sont les principes de ces architectures, quels en sont les avantages tant techniques que métiers dans des cas d\'utilisation concrets et comment les mettre en œuvre quels que soient les environnements techniques. </p>',
	        docs: [
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube'},
	            {name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf'}
	        ]
	      }
	  ],
	  docs: [
	    {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B9mpGdJWcahkcEFocG02MTQ4UFU/view?usp=sharing', type: 'pdf'}
	  ]
  }, {
    id: '2016_04_12',
	  title: "Code in the cloud with Eclipse Che & Kill the REST with the Falcor",
	  date: new Date(2016, 3, 12), //month begin at 0
	  time: '19',
	  register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/229939263/',
	  place: 'hub_creatic',
	  subjects: [
	      {
          title: 'Code in the cloud with Eclipse Che: the Next-Gen Eclipse IDE',
	        length: '45min',
	        time: '19h00',
	        type: 'talk',
	        intro: null,
	        speakers: ['stevan_le_meur', 'florent_benoit'],
          abstract: "<p>Cette session présentera les nouveautés du projet Eclipse Che et la façon dont les workspaces ont été redéfinis afin d'être portables et facilement mis à la disposition des développeurs.</p>" +
            "<p>La première démo, montrera comment créer un workspace basé sur un ensemble de machines Docker, comment l’utiliser pour développer des applications Java ainsi que quelques fonctionnalités de l’IDE (debugger, refactoring, ...).</p>" +
            "<p>Nous vous montrerons également comment nous utilisons Che pour développer Che et vous ferons notre retour d\'expérience lorsqu\'il est intégré à des outils tels que JIRA, Jenkins et GitHub.</p>",
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }, {
	        title: 'Kill all the REST with the Falcor',
	        length: '45min',
	        time: '19h45',
	        type: 'talk',
	        intro: null,
	        speakers: ['hugo_wood'],
	        abstract: "<p>Tout comme Facebook, Netflix a présenté sa propre technologie qui pourrait sonner le glas des API REST, Falcor.<br>" +
            "Elle déclare avoir réduit la taille de son code serveur de 90% grâce à un unique end-point qui sert toutes les données. Deux entreprises de cette envergure qui implémentent ainsi des concepts très proches, cela mérite que l'on s'y intéresse.</p>" +
            "<p>Après vous avoir expliqué le pourquoi et le comment, je vous propose que l'on explore ce que l'on peut construire avec Falcor.<br>" +
            "Et si on développait une API pour développer des API ? (Leonardo Dicaprio ne fera pas d'apparition lors de cette conférence.)</p>",
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B9mpGdJWcahkWkhfdi1oYkJrTWs/view?usp=sharing', type: 'pdf'}
	  ]
  }, {
    id: '2016_03_17',
	  title: "Soirée Sécurité des applications Java",
	  date: new Date(2016, 2, 17), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/409116',
	  place: 'eartsup',
	  subjects: [
	      {
	        title: 'REX: Audit de sécurité d\'applications Java',
	        length: '20min',
	        time: '19h00',
	        type: 'talk',
	        intro: null,
	        speakers: ['marc_lebrun'],
	        abstract: '<p>Retour d\'expérience, du point du vue du consultant, sur les audits de sécurité portant sur des applications Java:</p>' +
	        	'<ul>' +
	        	'<li>Types d\'applications rencontrées,</li>' +
	        	'<li>Méthodologie,</li>' +
	        	'<li>Exemples de failles.</li>' +
	        	'</ul>',
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }, {
	        title: 'Secure Coding Live !',
	        length: '1h',
	        time: '19h30',
	        type: 'talk',
	        intro: null,
	        speakers: ['sebastien_gioria'],
	        abstract: '<p>Lors de cette session nous prendrons une application de type shopping Card et appliquerons les bonnes pratiques de secure Coding Java dessus pour la rendre plus resistante aux différentes attaques Web. </p>',
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    {name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=grqesqXEAFo', type: 'youtube'}
	  ]
  },{
    id: '2016_03_02',
	  title: "Vert.X",
	  date: new Date(2016, 2, 2), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/404760',
	  place: 'eartsup',
	  subjects: [
	      {
	        title: "Vert.x - Sprechen vous reactive fanta'stico ?",
          length: '1h30 min',
	        time: '19h',
	        type: 'talk',
	        intro: null,
	        speakers: ['clement_escoffier'],
	        abstract:
            "<p>Vous devez bâtir une application qui passe à l’échelle, à base de micro-services ou plus classique, tolérante aux pannes, mais vous ne savez pas par ou commencer ? La seule chose dont vous avez besoin est un fichier jar et d’une machine virtuelle java.</p>" +
            "<p>Vert.x 3 est une librairie pour créer des systèmes réactifs s’exécutant sur une machine virtuelle Java. Vert.x 3 offre une nouvelle manière d’implémenter des applications concurrentes,scalables et tolérantes aux fautes. Avec vert.x 3 vous pouvez développer des applications « micro-services » distribuées en Java, mais aussi en JavaScript, Groovy, Ruby et Ceylon.  Vert.x 3 permet également d’intégrer des applications \"non-vert.x\" tel que node.js, .NET ou C.</p>" +
            "<p>Cette présentation introduit les concepts clés de Vert.x and comment vous pouvez utiliser Vert.x dans votre prochain projet. Cette session explique les systèmes réactifs, la programmation réactive (attention c’est pas la meme chose), comment le modèle de programmation asynchrone proposé par Vert.x vous permet de construire facilement des applications concurrentes et pourquoi c’est fait ainsi. Nous verrons également le passage a l’échelle, la tolérance aux pannes, les perfs, le monitoring et les composants clés de l’éco-système Vert.x…</p>",
	        docs: [
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=KeZAf0fIOGA', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
	  ]
  },{
    id: '2016_02_25',
	  title: "Infrastructure automation & React",
	  date: new Date(2016, 1, 25), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/404751',
	  place: 'hub_creatic',
	  subjects: [
	      {
	        title: "Why do you need to automate your infrastructure?",
          length: '40 min',
	        time: '19h',
	        type: 'quickie',
	        intro: null,
	        speakers: ['guillaume_blondeau'],
	        abstract: '<p>Dans cette présentation je ferai un retour d\'expérience sur la gestion d\'infrastructure.</p>' +
          '<p>Nous verrons comment nous sommes passés d\'une application hébergée sur Amazon Web Services (AWS) et gérée "à la main" à une solution complétement automatisée, du provisionnement au déploiement.</p>' +
          '<p>Ce sera l\'occasion de parler des problématiques, des solutions et de présenter <a href="http://www.ansible.com/" target="_blank">Ansible</a>, l\'outil d\'automatisation que nous avons utilisé.</p>',
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }, {
	        title: "Let's React",
	        length: '1h20',
	        time: '19h40',
	        type: 'talk',
	        intro: null,
	        speakers: ['mathieu_ancelin'],
	        abstract:
            '<p>React est une librairie JavaScript développée par Facebook pour créer facilement des interfaces graphiques. La particularité de React vient de son modèle de programmation orienté composant et de sa façon de décrire les vues de ces composants. Contrairement à d\'autres librairies, ici pas de templates et de pseudo code, React permet d\'utiliser la pleine expressivité de JavaScript et de bénéficier de tout l\'écosystème Javascript et de toutes les features du langage, notamment tous les goodies apportés par ES2015.</p>' +
            '<p>Durant cette session orientée live coding, nous verrons comment utiliser React pour créer des composants graphiques dans le cadre d\'applications web et d\'applications mobiles natives grâce à React Native.</p>',
	        docs: [
	            //{name: 'Vidéo de la présentation', url: '', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    {name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=QZOtyKtp5Vg', type: 'youtube'}
	  ]
  },{
	  id: '2016_01_19',
	  title: "Orchestrating a Continuous Delivery Pipeline with Jenkins and Docker",
	  date: new Date(2016, 0, 19), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/401376',
	  place: 'hub_creatic',
	  subjects: [
	      {
	        title: "What\'s new in Java 9",
            length: '30 min',
	        time: '19h',
	        type: 'quickie',
	        intro: null,
	        speakers: ['laurent_maillet'],
	        abstract: "Java 8 est sorti depuis près de deux ans. "+
	 				  "Alors qu\'Oracle avait avancé un rythme de release de version majeurs tous les deux ans, qu\'en est-il réellement ? "+
					  "Java 9 s\'annonce-t-il aussi riche que l\'a pu être son prédécesseur ? Je vous propose un tour d'horizon de l\'avancée de Java 9 et de ces nouveautés.",
	        docs: [
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=XX2OLBdyJ1s', type: 'youtube'}
	        ]
	      }, {
	        title: "Orchestrating a Continuous Delivery Pipeline with Jenkins and Docker",
	        length: '1h',
	        time: '19h30',
	        type: 'talk',
	        intro: null,
	        speakers: ['nicolas_deloof'],
	        abstract:
            "<p>le \"Continuous Delivery\" est un sacré buzz word, et \"Docker\" encore plus, mais les blog que j'ai pu lire sur sujet ne proposent qu'un pipeline naif et minimaliste : compile, test, push docker image, et voilà.</p>" +
            "<p>En 2015 Jenkins adresse clairement plus que de l'Integration Continue, et avec le support récent du workflow plugin nous pouvons orchestrer avec un DSL des pipelines de grande complexité. L'integration avec Docker lui donne encore plus de puissance.</p>" +
            "<p>Pendant cette session, je vais construire un pipeline de CD from scratch pour montrer l'utilisation du workflow et sa flexibilité, ainsi que le support de Docker.</p>",
	        docs: [
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=o26DbcN11Hw', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
	  ]
  },{
	  id: '2015_12_15',
	  title: "Livrer chaque jour ce qui est prêt & Continuous Merge avec Git",
	  date: new Date(2015, 11, 15), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/398028',
	  place: 'eartsup',
	  subjects: [
	      {
	        title: "Livrer chaque jour ce qui est prêt",
	        length: '1h',
	        time: '19h',
	        type: 'talk',
	        intro: null,
	        speakers: ['dimitri_baeli', 'geoffrey_berard'],
	        abstract:
	        	"<p>C\'est une aventure très enrichissante de passer d\'une organisation de type \"éditeur logiciel\" (Cycle Plan/Dev/Recette/Prod) " +
	        	"avec une release par mois à une organisation non moins solide de type \"Continuous Delivery\" avec une mise en production par jour de " +
	        	"\"ce qui est prêt\". C\'est pourquoi nous vous proposons de découvrir les moyens techniques et organisationnels en pratique chez LesFurets.com " +
	        	"pour garantir la qualité tout en diminuant le \"Time To Market\" : déploiement par les devs, travail en feature branches avec un merge continu, " +
	        	"itérations avec le business, monitoring de prod pour tous, ...</p>" +
	        	"<p>Organisation du travail, principes directeurs et pistes à suivre.</p>",
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }, {
	        title: "Continuous Merge avec Git",
	        length: '1h',
	        time: '20h',
	        type: 'talk',
	        intro: null,
	        speakers: ['dimitri_baeli', 'geoffrey_berard'],
	        abstract:
	        	"<p>Partage du fonctionnement de l\'outillage Git chez LesFurets.com. Le \"merge continu\" étend notre intégration continue pour nous permettre" +
	        	" de gérer au quotidien plus d’une cinquantaine de branches de développement. Détection des conflits, intégration, qualité... " +
	        	"Venez découvrir comment nous livrons 5 à 20 branches de code en production chaque jour !</p>" +
	        	"<p>Présentation beaucoup plus détaillée de notre organisation du code en GIT (feature branching & merge continu)</p>",
	        docs: [
	            //{name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=5LnL1HYmLwY', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    {name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=V37UJ7_V22s', type: 'youtube'},
	  ]
  },{
	  id: '2015_11_23',
	  title: "REX docker puis Monoliths et Microservices",
	  date: new Date(2015, 10, 23), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/350382',
	  place: 'eartsup',
	  subjects: [
	      {
	        title: "REX docker sur la mise d'une forge logicielle et ALM",
	        length: '20 min',
	        time: '19h',
	        type: 'quickie',
	        intro: null,
	        speakers: ['guillaume_membre'],
	        abstract:
	        	"<p>Un petit REX sur la mise en place de Docker pour construire une plateforme de forge logicielle et ALM.</p>"
				+ "<p>L'idée n'est pas de re-présenter Docker mais plutot ce qui a bien "
				+ "marché et moins bien sur le déploiement d'une forge logicielle que "
				+ "j'ai mis en place pour un de mes clients, les difficultés à créér des "
				+ "images, la facilité à customiser les existantes, le temps passé par "
				+ "rapport à l'installation directe sur la machine hote...</p>",
	        docs: [
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube'}
	        ]
	      }, {
	        title: "Monoliths et Microservices",
	        length: '1h30 min',
	        time: '19h30',
	        type: 'talk',
	        intro: null,
	        speakers: ['steve_sfartz'],
	        abstract:
	        	"<p>Monoliths et Microservices : buzz words 2015, il est temps de vous faire un avis sur le sujet.</p>"
	        	+ "<p>Venez découvrir les microservices, et les outils disponibles pour démarrer. "
	        	+" Illustrations avec la stack Netflix, quelques retours d'expérience, et une démo de la Gateway Programmatique Kong.</p>",
	        docs: [
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=5LnL1HYmLwY', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
	  ]
  }, {
	  id: '2015_10_13',
	  title: "Soirée Reconnaissance d'écriture et GitHub",
	  date: new Date(2015, 9, 13), //month begin at 0
	  time: '19',
	  register: 'http://guestli.st/346224',
	  place: 'eartsup',
	  subjects: [
	      {
	        title: "Ajoutez de la reconnaissance d'écriture à votre webapp grâce à Polymer",
	        length: '30 min',
	        time: '19h',
	        type: 'quickie',
	        intro: null,
	        speakers: ['pierre_alban_dewitte'],
	        abstract:
	        	"<p>MyScript construit une technologie de reconnaissance d'écriture depuis plus de 15 ans. Nous avons récemment ajouté à notre portfolio un composant Polymer permettant d'intégrer très facilement de la reconnaissance d'écriture dans votre webapp.</p>"
	        	+ "<p>Ce quickie sera d'abord l’occasion de comprendre comment fonctionne la reconnaissance d'écriture grâce au machine learning avec une illustration au travers de plusieurs démonstrations.</p>"
	        	+ "<p>Ensuite nous expliquerons l'anatomie du composant Polymer de reconnaissance puis lors d'une séance de codage en direct nous intégrerons de la reconnaissance d'expression mathématique dans une webapp.<br><br></p>"
	        	+ "<p>Venez avec votre téléphone, tablette ou ordinateur portable pour observer Polymer en action.</p>",
	        docs: [
	            //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=gUfYJ5CgCA4', type: 'youtube'}
	        ]
	      }, {
	        title: "Stratégies de collaboration avec Git & GitHub",
	        length: '1h30',
	        time: '19h30',
	        type: 'talk',
	        intro: null,
	        speakers: ['alain_helaili'],
	        abstract:
	        	"<p>De nombreuses équipes se contentent de remplacer leur gestionnaire de code source par Git sans vraiment revoir leur mode de collaboration ni exploiter ses possibilités.</p>"
	        	+ "<p>Il n'y a pas mieux pour se récupérer les contraintes du changement et aucun de ses bénéfices. L'objectif de cette présentation est de passer en revue différents workflows basés sur Git et GitHub, en y incluant des stratégies de code review et des exemples d'outils tiers.</p>"
	        	+ "<p>Enfin, on verra comment le workflow humain peut se prolonger par un déploiement automatisé bien que pas forcément continu.</p>",
	        docs: [
	            //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=CUsZYzvrKog', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
	  ]
  }, {
	  id: '2015_09_24',
	  title: "Restitution du Hackathon des communautés nantaises de développeurs",
	  date: new Date(2015, 8, 24), //month begin at 0
	  time: '19',
	  register: 'https://guestlistapp.com/events/341355',
	  place: 'eartsup',
	  subjects: [
	      {
	        title: "Restitution du Hackathon des communautés nantaises de développeurs",
	        length: '2h',
	        time: '19h',
	        type: 'talk',
	        intro: null,
	        speakers: [],
	        abstract:
	        "<p>Le NantesJUG organise un événement dans le cadre de la Digital Week 2015, le <a href=\"http://www.nantesdigitalweek.com/evenement-2015/hackathon-des-communautes-nantaises-de-developpeurs/\">\"Hackathon des communautés nantaises de développeurs\".</a></p>" +
	        "<p>Ce hackathon a pour objectif de réunir les différentes communautés de développeurs nantais autour d'un sujet à base d'Open Data de la ville de Nantes. Chaque communauté doit créer une équipe afin de participer.</p>" +
	        "<p>Le sujet sera communiqué à chaque équipe au début de la Digital Week, le 17/09. Elles auront alors une semaine pour relever le défi.</p>" +
	        "<p>Lors de la soirée, un jury, composé de membres des différentes communautés, désignera l'équipe gagnante.</p>",
	        docs: [
	            //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
	        ]
	      }
	  ],
	  docs: [
	    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
	  ]
  },{
	  id: '2015_06_22',
	  title: "Soirée sur l'importance de l'UX & sur Meteor.js",
	  date: new Date(2015, 5, 22), //month begin at 0
	  time: '19',
	  register: 'https://guestlistapp.com/events/333678',
	  place: 'hub_creatic',
	  subjects: [
	      {
	        title: "L'expérience utilisateur est importante pour nous",
	        length: '45 min',
	        time: '19h',
	        type: 'talk',
	        intro: null,
	        speakers: ['florence_herrou'],
	        abstract:
	        "<p>L'expérience utilisateur est une discipline peu connue et encore très négligée en France, en particulier lors de la conception d'applications métier. " +
	        "Pourtant, une bonne ergonomie améliore la productivité et facilite l'adoption par les usagers. Dans beaucoup de projets, en particulier en mode agile, " +
	        "le développeur participe à la définition de l'interface et des fonctionnalités.</p>" +
	        "<p>Cette conférence le sensibilisera à l'importance de l'expérience utilisateur et lui donnera quelques clés pour savoir comment l'améliorer.</p>",
	        docs: [
	            //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
	        ]
	      }, {
	        title: "Full Stack Reactivity avec Meteor.js",
	        length: '45 min',
	        time: '19h45',
	        type: 'talk',
	        intro: null,
	        speakers: ['anthonny_querouil'],
	        abstract:
	        "<p>Vous souhaitez créer des applications réactives et virer vos spinners ? Vous cherchez un environnement de développement javascript efficace ?</p>" +
	        "<p>Meteor.js est fait pour vous !</p>" +
	        "<p>Je vous présenterai cet outil et ce qui gravite autour.</p>",
	        docs: [
	            {
		        name: 'Les slides',
		        url: 'http://anthonny.github.io/decks/full-stack-reactivity-avec-meteorjs/',
		        type: 'html'
		    },{
		        name: 'Les sources de Tweetiments',
		        url: 'https://github.com/anthonny/tweetiments',
		        type: 'github'
		    }
	        ]
	      }
	  ],
	  docs: [
	    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
	  ]
  },{
    id: '2015_05_11',
    title: 'Soirée Quickies',
    date: new Date(2015, 4, 11), //month begin at 0
    time: '19',
    register: 'https://guestlistapp.com/events/324039',
    place: 'eartsup',
    subjects: [
      {
        title: "Java 8 en pratique",
        length: '30 min',
        time: '19h',
        type: 'quickie',
        intro: null,
        speakers: ['gabriel_landais'],
        abstract:
        "<p>Quelques exemples de réécriture de code legacy avec les nouvelles API Java 8.</p>",
        docs: [
          //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
        ]
      },
      {
        title: 'Gitflow In Action',
        length: '30 min',
        time: '19h30',
        type: 'quickie',
        intro: null,
        speakers: ['cecilia_bossard'],
        abstract: "<p>Vous cherchez un modèle de gestion des branches pour Git facile et pratique à utiliser ? Vous souhaitez avoir un workflow simple et agile pour gérer vos versions ?</p>" +
        "<p>Venez jeter un oeil à GitFlow !</p>" +
        "<p>Je vous présenterai ce workflow qui nous a permis de mieux organiser nos versions et de remplacer SVN par Git sans regret.</p>",
        docs: [
          {name: 'Slides', url: 'http://www.slideshare.net/cecilia_bossard/git-flow-in-action', type: 'slideshare'}
        ]
      },
      {
        title: 'Tips and tricks for clean relational db schemas',
        length: '45 min',
        time: '20h',
        type: 'quickie',
        intro: null,
        speakers: ['clement_delafargue'],
        abstract: "<p>It can be usual for software developers to let the ORM take care of the database schema. In many cases it's a bad idea as it makes the data stored in your database brittle and hard to use confidently. I'll show a few tricks which will help you cleanly store and query data by using your database engine to its full power.</p>" +
          "<p>In some cases, using an ORM brings more problems than solutions. I'll explore these cases (they are more common than you think) and how to use the freedom given by having complete control over your schema and your queries:" +
          "<ul>" +
            "<li>indexes</li>" +
            "<li>semantic data types</li>" +
            "<li>query composition</li>" +
            "<li>window functions</li>" +
          "</ul>" +
          "<p>I'll show how to still be efficient and concise when going this path (with Jooq / Slick / Anorm)</p>",
        docs: [
          //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
        ]
      }
    ],
    docs: [
      {name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=i4NcsrtZWOA', type: 'youtube'},
    ]
  },{
  id: '2015_04_16',
  title: 'Soirée Invoke Dynamite / BDD',
  date: new Date(2015, 3, 16), //month begin at 0
  time: '19',
  register: 'https://guestlistapp.com/events/317631',
  place: 'netapsys',
  subjects: [
      {
        title: "BDD & Cucumber: Feature first",
        length: '30 min',
        time: '19h',
        type: 'quickie',
        intro: null,
        speakers: ['renan_michaud'],
        abstract:
        "<p>Imaginez un projet d’envergure mené en SCRUM avec un backlog constitué d’une multitude d’US plus ou moins organisées. Pensez-vous que ce Backlog ayant l’emprunte forte de la vie courante du BUILD puisse constituer votre référentiel fonctionnel ?" +
        " Non. L'approche BDD permet d'établir ce référentiel et d'en automatiser la vérification." +
        " Avec Cucumber, je vous propose de voir comment effectuer cette automatisation autant sur les web services que sur les IHM du poste de développement à la production !.</p>",
        docs: [
            //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
        ]
      },
    {
      title: 'Let\'s invoke dynamite',
      length: '1h30',
      time: '19h30',
      type: 'talk',
      intro: null,
      speakers: ['antoine_sabot_durand'],
      abstract: "<p>Si l'arrivée d'InvokeDynamic dans Java 7 a marqué un tournant pour la création de langages basés sur la JVM, cette fonctionnalité est restée confidentielle dans l'univers des développeurs de frameworks Java et de Java EE.</p>" +
      "<p>Dans cette présentation nous reviendrons sur les particularités d'InvokeDynamic et sur sa mise en oeuvre en Java.</p>" +
      "<p>Ensuite nous verrons comment remplacer le mécanisme de Proxy utilisé dans CDI par des appels InvokeDynamic.</p>" +
      "<p>Enfin nous expliquerons comment la généralisation d'invokeDynamic pourrait marquer la mort des conteneurs et la fin de Java EE tel que nous le connaissons.</p>",
      docs: [
        //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
      ]
    }
  ],
  docs: [
    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
  ]
},{
  id: '2015_03_11',
  title: 'Soirée Cassandra / GAE',
  date: new Date(2015, 2, 11),//month begin at 0
  time: '19',
  register: 'https://guestlistapp.com/events/312915',
  place: 'eartsup',
  subjects: [
      {
        title: "Google App Engine, déployer plus vite que son ombre !",
        length: '30 min',
        time: '19h',
        type: 'quickie',
        intro: null,
        speakers: ['remi_picard'],
        abstract: "<p>\"Cloud\" par çi, \"Solutions PaaS\" par là. Mais quel est donc le sens de ces termes si présents ces dernières années ? Pourquoi tant de succès ? Et le développeur dans tout ça ?</p>" +
          "<p>Si vous vous posez toutes ces questions, venez assister à une présentation de la solution Google App Engine. Celle-ci sera illustrée par une démonstration du déploiement sur le Cloud d'un site Java JEE.</p>",
        docs: [
            //{name: 'Vidéo de la soirée', url: '', type: 'youtube'}
        ]
      },
      {
          title: 'Introduction to Cassandra',
          length: '1h00',
          time: '19h30',
          type: 'talk',
          intro: null,
          speakers: ['duyhai_doan'],
          abstract: "<p>In this session, we’ll introduce Apache Cassandra, highlight its architecture, consistency and replication model to explain how the database can provide linear scalability, high availability and consistent performance.</p>" +
                  "<p>There will be a quick overview of the Cassandra data model, query language and tooling for developers.</p>" +
                  "<p>Sujet en français</p>",
          docs: [
              {name: 'Les slides', url: 'http://www.slideshare.net/doanduyhai/cassandra-introduction-nantesjug', type: 'slideshare'}
          ]
      },
      {
          title: 'Cassandra nice use-cases and worst anti-patterns seen in production',
          length: '30 min',
          time: '20h30',
          type: 'talk',
          intro: null,
          speakers: ['duyhai_doan'],
          abstract: "<p>For this session, we'll show some best practices, dig into some nice use-cases seen in production but also the worst anti-patterns to avoid. There will be an interactive demo.</p>" +
                    "<p>Sujet en français</p>",
          docs: [
              {name: 'Les slides sur Killrchat', url: 'http://fr.slideshare.net/doanduyhai/killrchat-presentation', type: 'slideshare'}
          ]
      }
  ],
  docs: [
    //{name: 'Vidéo de la soirée', url: '', type: 'youtube'},
    {name: 'Slides d\'intro', url: 'https://docs.google.com/presentation/d/1bOwzcFsAskoVdozoo-ClgLSxK4IDJhlUpPz_hSTl2_Y/edit?usp=sharing', type: 'drive'},
    {name: 'Restlet', url: 'https://docs.google.com/presentation/d/1PGf2fQMqm4G8ozkW8uLtaZToUM216nK7k0aC6_8_fYw/edit?usp=sharing', type: 'drive'},
    {name: 'Zenika', url: 'https://docs.google.com/presentation/d/1ndb-d18uvE6Z5I_OrwzTcXCSTUrPTIC9sqNMuEPrSsM/edit?usp=sharing', type: 'drive'}
  ]
},{
  id: '2015_02_16',
  title: 'Soirée Search Lucene/Solr - Rex Chef',
  date: new Date(2015, 1, 16),//month begin at 0
  time: '19',
  register: 'https://guestlistapp.com/events/310620',
  place: 'eartsup',
  subjects: [
  {
    title: "Chef, oui Chef !",
    length: '30 min',
    time: '19h',
    type: 'quickie',
    intro: null,
    speakers: ['francois_kha'],
    abstract: "Nous allons vous faire un petit retour d'expérience sur la mise en place de Chef à CBP pour livrer plus fréquemment nos applications Java/JEE. Qu'est-ce que Chef ? Pourquoi l'utiliser ? Comment ? Pour quels usages ?<br/> Deux développeurs, un adminsys pour vous répondre."
          +   "<p>par François Kha <a href='http://twitter.com/fanchok'>@fanchok</a> - Sébastien Errien <a href='http://twitter.com/SebErrien'>@SebErrien</a> - Bastien Jové <a href='http://twitter.com/Tensibai'>@Tensibai</a></p>",
    docs: [
            {name: 'Les slides', url: 'http://fr.slideshare.net/francoiskha/20150216-quickie-chef-au-jug-nantes', type: 'slideshare'}
    ]
  },
    {
      title: 'Soirée Search Lucene/Solr',
      length: '1h30',
      time: '19h30',
      type: 'talk',
      intro: null,
      speakers: ['olivier_tavard'],
      abstract: "<p>Découvrez les outils open source de Search qui ont déjà convaincu de nombreuses entreprises, et qui est proposé par la fondation Apache: Lucene / Solr.</p>"+
"<p>Dans la première partie de soirée, histoire de savoir de quoi on parle, Olivier vous présentera les projets Lucene et Solr, leurs composants, leur architecture, leurs features, et on saupoudrera tout ça de scalabilité avec SolrCloud (avec démo).</p>"+
"<p>En deuxième partie de soirée, Olivier vous présentera l’écosystème (ou du moins une partie) qui gravite autour de Lucene /Solr: ManifoldCF qui permet de gérer les connexions aux sources de données (avec démo d’indexation de contenu et recherche en live grâce à Datafari) et Hadoop, car il faut bien parler de Big Data, et parce que Solr devient un des outils de référence pour faire du search sur Hadoop.</p>"+
"Avec tout ça vous aurez dans vos bagages de quoi gérer des Big projets avec du Big search dedans.</p>",
      docs: [
      	{
      	  name: 'Les slides',
      	  url: 'http://fr.slideshare.net/francelabs/presentation-lucene-solr-datafari-nantes-jug',
      	  type: 'slideshare'
      	}
      ]
    }
  ],
    docs: [
      {name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=RpAGb8fO97k', type: 'youtube'}
    ]
},
  {
    id: '2015_01_27',
    title: 'JavaFX.forReal() - MongoDB Pub/Sub',
    date: new Date(2015, 0, 27),//month begin at 0
    time: '19',
    register: 'http://guestli.st/306156',
    place: 'netapsys',
    subjects: [
        {
          title: 'Pub/Sub avec MongoDB',
          length: '30 min',
          time: '19h',
          type: 'quickie',
          intro: null,
          speakers: ['tugdual_grall'],
          abstract: "Venez découvrir comment créer un système pub/sub de messages/notifications avec MongoDB.<br/>Durant ce quickie nous utiliserons : des capped collections, tailable cursors, Java, Node, WebSocket/Socket.io, .... pour créer une application de notification en temps réel.",
          docs: [{
            name: 'La vidéo de la soirée',
            url: 'http://youtu.be/ezZkiQLb7BE',
            type: 'youtube'
	  }]
        },
      {
        title: 'JavaFX.forReal()',
        length: '1h30',
        time: '19h30',
        type: 'talk',
        intro: null,
        speakers: ['thierry_wasylcszenko'],
        abstract: '<p><b>En reve:</b><br/>JavaFX (8) ... le buzz word d\'Oracle, en terme de développement de clients lourds, qui le présente comme le successeur de Swing. Tout est faisable facilement en JavaFX.</p><p><b>Dans la vraie vie:</b><br/>Mais “Swing c\'est mort”, “quelqu\'un fait-il encore du desktop?”, "y a-t-il sérieusement des gens qui utilisent JavaFX?”, “l\'avenir c\'est du web 2.0 (et au-delà) avec du *JS”, “moi je ne fais que du web”.<br/>Ces remarques vous semblent-elles familières? Cette session est faite pour vous car JavaFX répondra sans doute à toutes ces interrogations mais aussi à vos besoins.<br/>Cessons de (trop) rêver, soyons pragmatiques et revenons à la réalité. Est-il possible de réaliser des applications JavaFX complexes, pas uniquement un Bonjour Monde, et pourquoi ne pas coupler cela à du Vertx, asciidoctor, LeapMotion, JavaScript, OSGi & friends?<br/>JavaFX peut-il concurrencer le web de demain voire en être complémentaire? JavaFX peut-il répondre à vos besoins?<br/>Découvrons-le ensemble lors de cette session orientée REX. Ce n\'est pas toujours aussi simple que l\'on pourrait se l\'imaginer bien que ce soit la réalité.</p>',
        docs: [{
          name: 'Les slides',
          url: 'http://fr.slideshare.net/twasyl/javafxforreal',
          type: 'slideshare'
        }, {
          name: 'La vidéo de la soirée',
          url: 'http://youtu.be/c011LBQRWbs',
          type: 'youtube'
        }]
      }
    ]
  }, {
    id: '2014_12_15',
    title: 'Le BigData NoBullShit: Cas d’utilisation chez Dictanova et Cityzen Data',
    date: new Date(2014, 11, 15),//month begin at 0
    time: '19',
    register: 'http://guestli.st/301611',
    place: 'eartsup',
    subjects: [
      {
        title: 'Le BigData NoBullShit: Cas d’utilisation chez Dictanova et Cityzen Data',
        length: '2 h',
        time: '19h',
        type: 'talk',
        intro: null,
        speakers: ['damien_raude_morvan', 'david_morin'],
        abstract: "<p>Il y a 2 ans, la mode était de faire du Big Data, désormais il faut faire du Smart Data... Mais concrètement, à quoi est-ce que cela peut bien servir ?</p>"
        		+ "<p>A travers les expériences de deux entreprises, Dictanova (Damien Raude-Morvan) et de Cityzen Data (David Morin), nous essayerons de vous présenter des exemples concrets d’utilisations du Big Data et répondre par exemple aux questions suivantes :</p>"
        		+ "<ul><li>Quelle infrastructure mettre en place pour gérer de gros volumes de données ? Quels sont les écueils à éviter ? Les offres de type XaaS sont-elles pertinentes ?</li>"
        		+ "<li>Comment passer du simple &quot;hello world&quot; en Map/Reduce à un véritable traitement métier ? Comme modéliser un enchaînement de jobs avec Oozie ? Comme obtenir des primitives de plus haut niveau que Map/Reduce ? Cascading, Spark, Tez ?</li>"
				+ "<li>Une fois les données stockées, comment effectuer de l’analyse sur ces dernières ? Comment utiliser des langages de requêtage comme Pig ?</li>"
				+ "<li>Comment gérer le changement dans son modèle de données ? Modèle de données avec Avro ? Avec Parquet ou encore Thrift ?</li>"
				+ "<li>Comment assurer la supervision de jobs en production sur un cluster Hadoop ?</li></ul>",
        docs: [
//               {name: '', url: '', type: ''}
        ]
      }
    ]
  },{
    id: '2014_11_17',
    title: 'Stresser vos applications web avec Gatling',
    date: new Date(2014, 10, 17),//month begin at 0
    time: '19',
    register: 'http://guestli.st/296148',
    place: 'epsi',
    subjects: [
      {
        title: 'Les backstages de Devfest 2014',
        length: '30 min',
        time: '19h',
        type: 'quickie',
        intro: null,
        speakers: ['jean-francois-garreau'],
        abstract: null,
        docs: [
//               {name: '', url: '', type: ''}
        ]
      },
      {
        title: 'Stresser vos applications web avec Gatling',
        length: '1 h 30',
        time: '19h30',
        type: 'talk',
        intro: null,
        abstract: "<p>Vous vous posez les questions :<ul><li>Mon application web (quelque soit la technologie) tient-elle la charge ?</li><li>Jusqu'à combien d'utilisateurs mon application a des temps de réponse acceptable ?</li></ul></p>" +
            "<p><a href='http://gatling.io/'>Gatling</a> va vous aider à y répondre.<ul><li>La philosophie de l'outil, en quoi il se distingue de ses concurrents</li><li>Une démonstration de son utilisation avec une application concrète</li></ul></p>",
        speakers: ['rossi_oddet'],
        docs: [{
		name: 'Les slides',
		url: 'http://fr.slideshare.net/RossiOddet/jug-nantes-novembre-2014',
		type: 'slideshare'
	}]
      }
    ]
  },
  {
    id: '2014_10_27',
    title: 'Java Embarqué / Internet des Objects avec IS2T  --  Une fille dans mon équipe',
    date: new Date(2014, 9, 27),//month begin at 0
    time: '19',
    register: 'http://guestli.st/293664',
    place: 'cantine',
    subjects: [
      {
        title: 'Une fille dans mon équipe',
        length: '30 min',
        time: '19h',
        type: 'quickie',
        intro: null,
        speakers: ['cecilia_bossard', 'jean_palies'],
        abstract: '<p>Actuellement, 20% des postes dans le domaine de l\'IT sont occupés par des femmes, et la tendance ne va pas en s\'arrangeant. Pourquoi ce désintérêt ?</p>' +
        	'<p>Le groupe Women In Technology vous propose de revenir sur ce sujet et de présenter son approche pour essayer d’inverser la tendance.</p>',
        docs: [
//               {name: '', url: '', type: ''}
        ]
      },
      {
        title: 'Java Embarqué / Internet des Objects avec IS2T',
        length: '1 h 30',
        time: '19h30',
        type: 'talk',
        intro: null,
        abstract: '<p>A travers une présentation de la plateforme d\'exécution embarquée MicroEJ, la société IS2T parlera du Java dans le monde des objets intelligents ou comment l\'usage de Java permet d\'accélérer la conception d\'un logiciel dans l\'embarqué contraint et d\'en réduire les coûts.  </p>' +
            '<p></p>',
        speakers: ['fred_rivard'],
        docs: [
//          {name: '', url: '', type: ''}
        ]
      }
    ]
  }, {
    id: '2014_09_29',
    title: 'Metrics & Docker  ',
    date: new Date(2014, 8, 29),//month begin at 0
    time: '19',
    register: 'http://guestli.st/286752',
    place: 'eartsup',
    subjects: [
      {
        title: 'Codehale Metrics',
        length: '30 min',
        time: '19h',
        type: 'quickie',
        intro: null,
        speakers: ['damien_raude_morvan'],
        abstract: '<p>En 2014, un développeur Java est plutôt habitué à évaluer la "qualité" de son code - avec SonarQube ou des processus de peer review.</p>' +
            '<p>Mais lorsqu\'on lui parle de la "production", il est souvent désarmé : les métriques qu\'on lui propose ne correspondent à rien de connu et il n\'a pas assez d\'informations pour guider ses améliorations.</p>' +
            '<p>Dans ce quicky, j’essaierais de vous présenter la solution que j\'utilise : le framework Codehale Metrics.</p>' +
            '<p>Ce dernier vise à permettre au développeur de créer des indicateurs techniques ou fonctionnels. Il propose de nombreux choix d\'intégration avec vos frameworks préférés et permet un export des métriques dans de nombreux formats.</p>',
        docs: [
          {name: 'Support de présentation', url: 'http://www.drazzib.com/projects/docs/metrics/#/', type: 'html'}
        ]
      },
      {
        title: 'Lucy in the sky with docker',
        length: '1 h 30',
        time: '19h30',
        type: 'talk',
        intro: null,
        abstract: '<p>On parle beaucoup de Docker en ce moment. Je vais tenter de vous expliquer comment fonctionne Docker comme j’aurais aimé qu’on me l’explique.</p>' +
            '<p>Nous allons apprendre à prendre en main Docker pour construire une application web Java 8 et la déployer sur la Google Cloud Platform.</p>',
        speakers: ['david_gageot'],
        docs: [
//          {name: '', url: '', type: ''}
        ]
      }
    ]
  },  {
    id: '2014_06_30',
    title: 'Flyway & Patterns de cache  ',
    date: new Date(2014, 5, 30),//month begin at 0
    time: '20',
    old_time: '19',
    register: 'http://guestli.st/265998',
    place: 'eartsup',
    subjects: [
      {
        title: 'France - Nigéria',
        length: '90 min',
        type: 'foot',
        time: '18h',
        intro: null,
        speakers: ['didier_deschamps'],
        abstract: '<p>Huitième de finale de la coupe du monde.</p> '
      },
      {
        title: 'Comment planner avec Flyway',
        length: '30 min',
        time: '20h',
        type: 'quickie',
        intro: null,
        speakers: ['ludovic_praud'],
        abstract: '<p>Pour avoir l\'esprit tranquille avec vos migrations SQL en DEV ou en PROD, voici un petit retour d\'expérience de 2 ans d\'utilisation quotidienne de Flyway.</p> ',
        docs: [
          {name: 'Support de présentation', url: 'https://drive.google.com/file/d/0B41V8oJXwyYhb1pTeHpsQzNsRmhYd3ZPMEhsVHduTm9tSXBr/edit?usp=sharing', type: 'drive'}
        ]
      },
      {
        title: 'Les Patterns de Cache',
        length: '1 h 30',
        time: '20h30',
        type: 'talk',
        intro: null,
        abstract: '<p>Comment diminuer le temps de traitement d’un batch ? Le temps d’exécution d\'une requête ? Le cache est un des outils du développeur pour résoudre ses problématiques quotidiennes et les concepts qui gravitent autour sont nombreux.</p>' +
            '<p>Si les mots Cache Aside, Write-Behind, Read-Through ne vous sont pas familiers, cela fait pourtant parti des architectures qu’il est facile à mettre en place et qui dans certains contextes peuvent diminuer de manière drastique la durée d’un batch ou d’une requête.</p>' +
            '<p>Nous aborderons également les différents moyens de scaler horizontalement et verticalement le cache (réplication, miroir, partitionnement) en nous appuyant sur différentes librairies existantes (GemFire, Coherence, Terracotta, Ehcache, Infinispan, Hazelcast) mais également NoSQL et plus généralement les In Memory Data Grid (IMDG)</p>',
        speakers: ['mathilde_lemee'],
        docs: [
//          {name: '', url: '', type: ''}
        ]
      }
    ]
  },{
    id: '2014_05_20',
    title: 'Devoxx Fr & Gradle',
    date: new Date(2014, 4, 20),//month begin at 0
    time: '19',
    register: 'http://guestli.st/254883',
    place: 'epsi',
    subjects: [
      {
        title: 'Devoxx France 2014',
        length: '30 min',
        type: 'quickie',
        intro: null,
        speakers: ['thibaud_raison', 'pierre_cosson'],
        abstract: '<p>Compte-rendu et tour d\'horizon de l\'édition 2014 de Devoxx France.</p> ',
        docs: [{
          name: 'Support de présentation',
          url: 'https://drive.google.com/file/d/0BzLO1XLmywLJS1Q4alIxeFRxTTA/edit?usp=sharing',
          type: 'drive'
        },{
          name: 'Listing ressources Devoxx 2014',
          url: 'https://drive.google.com/file/d/0BzLO1XLmywLJbWczVU55RGFFMEE/edit?usp=sharing',
          type: 'drive'
        }]
      },
      {
        title: 'Gradle ne fait pas que remplacer Maven',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Il faut que vous le sachiez, Gradle ne fait pas que remplacer Maven. Il répond à d\'autres problématiques : conventions d\'entreprise, intégration continue, DevOps, parallélisme, gestion avancée des dépendances, ' +
          'variantes de build déclarative, compilation incrémentale, projets polyglottes, artéfacts multiples...</p>' +
            '<p>Dans cette session, vous apprendrez pourquoi on ne peut pas réduire Gradle à un Maven sans XML ou un Ant sous stéroïdes. Vous verrez qu\'écrire une build sera plus jamais une punition. Pire, ça pourrait devenir un plaisir !',
        speakers: ['cedric_champeau'],
        docs: [
//          {name: '', url: '', type: ''}
        ]
      }
    ]
  },
  {
    id: '2014_04_14',
    title: 'Soirée Tools : Developper Efficacement',
    date: new Date(2014, 3, 14),//month begin at 0
    time: '19',
    register: 'http://guestli.st/245676',
    place: 'eartsup',
    subjects: [
      {
        title: 'Write Java Apps Faster Using SaaS Developer Environments',
        length: '45 min',
        type: 'talk',
        intro: null,
        speakers: ['tyler_jewell', 'stevan_le_meur'],
        abstract: '<p>The Java community is filled with terrific solutions for enabling development of apps. Every Java developer has their choice of tools and the openness of the platform makes it accessible to anyone and extensible by everyone.</p>' +
          '<p>But why then, is 99% of all development still done locally? While sales, marketing, customer service, support, finance, and infrastructure has steadily moved to the cloud over the past decade, Java development remains rooted on the desktop. Will it always be this way? </p>' +
          '<p>In this session, we will discuss the evolution of remote development of Java applications and the emergence of SaaS Developer Environments. Often times called a cloud IDE, a SaaS environment can eliminate configuration, increase collaboration, and alleviate management concerns around consistency, compliance, and velocity. In essence, SaaS developer environments can make agile, more agile.</p>' +
          '<p>We will present a beta of the Codenvy Cloud, a sister system to codenvy.com that has been in development since 2011.</p>' ,
        docs: [
//          {name: '', url: '', type: ''}
        ]
      },
      {
        title: 'Faites un « départ lancé » sur les technos Angular JS, Spring MVC, JPA, REST/HATEOAS',
        length: '1 h 00',
        type: 'talk',
        intro: null,
        abstract: '<p>Présentation du principe de « Development Accelerator » avec un générateur de code simple et pragmatique.</p>'+
            '<p>Démos :  génération de deux types d’applications immédiatement utilisables :'+
          '<ul>'+
          '  <li>services RESTful avec Spring Data Rest / HATEOAS</li>'+
          '  <li>application AngularJS, REST/SpringMVC/JPA ou Spring Data</li>'+
          '<ul></p>',
        speakers: ['laurent_guerin', 'benoit_wilcox', 'ludovic_chaboud' ],
        docs: [
//          {name: '', url: '', type: ''}
        ]
      }
    ]
  },
  {
    id: '2014_03_17',
    title: 'Du Legacy Au Cloud en Moins d\'Une Heure',
    date: new Date(2014, 2, 17),//month begin at 0
    time: '19',
    register: 'http://guestlistapp.com/events/234840',
    place: 'eartsup',
    subjects: [
      {
        title: 'Dart, c\'est aussi Angular',
        length: '45 min',
        type: 'talk',
        intro: null,
        speakers: ['pierre_reliquet'],
        abstract: '<p>AngularJS n\'est plus seul! Il possède désormais un concurrent de premier choix car soutenu par ... Google!</p>' +
                  '<p>Il vous est donc désormais possible de rassurer vos DSI en argumentant que vous n\'allez pas coder votre front en JS, que vous allez utiliser un langage "réellement" typé [ressemblant à java] et qu\'en plus vous aurez les fonctionnalités d\'Angular (2-way binding, filtres...)! Ce concurrent c\'est AngularDart qui est, en réalité, plus qu\'un simple portage d\'AngularJS pour Dart.</p>' +
                  '<p>Ce quickie a pour but de vous présenter rapidement comment, lorsque Dart rencontre Angular, les choses peuvent devenir rapidement plaisantes et puissantes.</p>',
        docs: [{
          name: 'Les sources du projet Angular Dart',
          url: 'https://github.com/PierreReliquet/angulardart_nantesjug',
          type: 'github'
        }]
      },
      {
        title: 'Du Legacy Au Cloud en Moins d\'Une Heure',
        length: '1 h 00',
        type: 'talk',
        intro: null,
        abstract: '<p>Il est de plus en plus simple de développer des applications web de zéro, pour les héberger sur le cloud. Mais est-ce aussi simple quand on part de code existant ? Les techniques adaptées à un projet tout neuf sont-elles utilisables de la même façon ?</p>' +
            '<p>Nous verrons qu’il est possible de partir d’une application legacy, de lui ajouter des fonctionnalités et de la déployer en continu sur le cloud en moins d’une heure.</p>' +
            '<p>Cette session de live coding sera l’occasion de découvrir des techniques de refactoring, de développement piloté par les tests, de test et d’inspection continue. Et ce, en tentant à chaque étape de faire les choses les plus simples possibles.</p>',
        speakers: ['david_gageot'],
        docs: [
//          {name: '', url: '', type: ''}
        ]
      }
    ]
  },
  {
    id: '2014_02_17',
    title: 'Gros projet en JAVA & AngularJS / Travail collaboratif en temps réél',
    date: new Date(2014, 1, 17),//month begin at 0
    time: '19',
    register: 'https://guestlistapp.com/events/230988',
    place: 'epsi',
    subjects: [
      {
        title: 'Vécu - Gros projet en JAVA & AngularJS' ,
        length: '45 min',
        type: 'talk',
        intro: null,
        speakers: ['sebastien_roul','medy_belmokhtar'],
        abstract: '<p>Comment une équipe Java attaque un projet avec de l\'Angular : Cette sale bête qui fait des miracles :o)</p>' +
            '<p>Retour sur d\'experience sur un gros projet :' +
            '<ul>' +
            '<li>Comment organiser l\'équipes</li>' +
            '<li>Les pièges dans lesquels nous sommes tombés</li>' +
            '<li>Le choc de deux cultures... ou pas !</li>' +
            '<li>Les clés de succès que nous avons trouvé</li>' +
            '</ul>' +
            '</p>' +
            '<p>Focus sur le vécu d\'une équipe qui est passée en 6 mois à un projet multi-langages. </li>' +
            '</ul>' +
            '</p>',
        docs: [{
          name: 'La vidéo de la soirée',
          url: 'http://youtu.be/Rgbcjb_rVIM',
          type: 'youtube'
        }]
      },
      {
        title: 'Travail collaboratif en temps-réel : quand WebSocket rencontre Asciidoctor...',
        length: '1 h 00',
        type: 'talk',
        intro: null,
        abstract: '<p>Ecrire de la documentation technique est primordial à la réussite d\'un projet. Afin d\'être efficace et d\'en finir avec les pertes de temps dues à l\'utilisation des Word, Open Office et consort, le projet Asciidoctor a vu le jour en 2012. Il est de plus en plus utilisé du fait de sa simplicité, sa rapidité et ses possibilités.</p>' +
            '<p>Parallèlement, mi 2013 la nouvelle spécification Java EE  était officiellement annoncée avec 4 nouvelles JSR dont la JSR 356 : Java API for WebSocket 1.0. Ce nouveau standard (couplé à JSON-P et JAX-RS) permet aux applications Java EE 7 de s\'interfacer très facilement avec les applications HTML5.</p>' +
            '<p>Dans cette conférence vous verrez comment il devient enfin intéressant d\'écrire de la documentation technique en équipe grâce à la mise en oeuvre des technologies Java EE 7 / HTML 5 et Asciidoctor (+ du AngularJS). Cet ensemble de technologie sera utilisé pour créer un éditeur de travail collaboratif en temps réel. En tant que spectateur actif, vous pourrez participer à la démonstration avec d\'autres membres de l\'assemblée.</p>',
        speakers: ['maxime_greau'],
        docs: [{
          name: 'La vidéo de la soirée',
          url: 'http://youtu.be/2XJo3UmT80U',
          type: 'youtube'
        }]
      }
    ]
  },{
    id: '2014_01_20',
    title: 'Soyons RESTful avec RESTX',
    date: new Date(2014, 0, 20),//month begin at 0
    time: '19',
    register: 'https://guestlistapp.com/events/218334',
    place: 'eartsup',
    subjects: [
      {
        title: 'JParsec',
        length: '20 min',
        type: 'quickie',
        intro: null,
        speakers: ['arnaud_bailly'],
        abstract: '<p><a href="http://jparsec.codehaus.org/" target="_blank">jparsec</a> est une simple bibliothèque, inspirée d\'Haskell, qui permet d\'écrire des grammaires directement en Java au moyen de combinateurs fonctionnels. Une telle grammaire devient testable, incrémentale, composable ce qui permet de développer plus vite et de manière plus fiable des mini-langages.Cette présentation est une introduction pratique à l\'écriture d\'interpréteurs de langages avec <a href="http://jparsec.codehaus.org/" target="_blank">jparsec</a>.</p>',
        docs: [{
          name: 'Les slides (sources)',
          url: 'https://github.com/abailly/jparsec/tree/master/parsing-made-easy',
          type: 'github'
        }]
      },
      {
        title: 'Soyons RESTful avec RESTX',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Le monde du web est en pleine ébullition, on voit de plus en plus de JS sur le frontend avec des frameworks comme Angular ou Backbone qui finissent même pas séduire les développeurs Java que nous sommes.</p>' +
            '<p>Mais pour le serveur, le monde Java garde quand même l\'avantage avec son typage, sa maintenabilité et ses performances. Et pour faire communiquer les deux, rien de mieux que des services REST !<br/>Dans cette session, je vous propose donc quelques révisions sur les principes des services REST, pour voir ensuite au travers de nombreuses démos comment RESTX, un outil open source, innovant et made in France peut vous aider à construire, documenter et tester l\'API REST idéale pour vos applications web de demain.</p>' +
            '<p>Pour plus d\'infos sur RESTX, jetez un oeil à <a href="http://restx.io/" target="_blank">restx.io</a></p>',
        speakers: ['xavier_hanin'],
        docs: [{
          name: 'Les slides',
          url: 'http://slid.es/xavierhanin/restx',
          type: 'slides'
        }]
      }
    ]
  }, {
    id: '2013_12_04',
    title: 'Java 8 : Lambdas, Streams et Collectors',
    date: new Date(2013, 11, 4),//month begin at 0
    time: '19',
    register: 'http://guestli.st/212961',
    place: 'eartsup',
    subjects: [
      {
        title: 'Grails dans les tranchées',
        length: '20 min',
        type: 'quickie',
        intro: null,
        speakers: ['dominique_jocal'],
        abstract: '<p>Après 2 ans et demi de développements et déploiements d’applications backoffice et front-office B2B bâties sur technologie Grails, nous présentons les patterns, configs et libs retenues, et nous débattrons de l’impact de ces nouveaux stack pour les devs critiques en entreprise.</p>'
      },
      {
        title: 'Java 8 : Lambdas, Streams et Collectors',
        length: '1 h 30',
        type: 'talk',
        intro: 'le nouveau visage de l\'API Collection',
        abstract: '<p>L\'API la plus utilisée du JDK est sans aucun doute l\'API Collection. Brillamment conçue il y a un peu plus de 15 ans, elle est encore aujourd\'hui au coeur de toutes les applications Java. En 2004, elle a subi son premier lifting, avec l\'introduction des génériques. Cette mise à jour, bien qu\'importante, n\'a cependant pas modifié ses patterns d\'utilisation. Avec l\'introduction des lambdas en Java 8, l\'API Collection est à nouveau réécrite, mais cette fois la situation est différente : ses patterns d\'utilisation sont complètement changés. </p><p>La première partie de cette conférence introduit les lambda expressions, comment les écrire, et ce qu\'elle nous apportent en tant que développeurs. La deuxième partir présente en détail les nouveaux patterns introduits par les API Stream et Collector. Ces nouvelles API vont changer la façon dont nous allons pouvoir traiter les collections de grande taille, y compris en parallèle, avec un modèle de programmation très simple, et des patterns très puissants. Cette puissance sera montrée dans des exemples réels, qui monteront comment Java 8 va pouvoir nous aider à écrire simplement du code efficace et performant.</p>',
        speakers: ['jose_paumard'],
        docs: [{
          name: 'Les slides',
          url: 'http://fr.slideshare.net/jpaumard/jdk-8-lambdas-streams-collectos-bretagne-tour',
          type: 'slideshare'
        }]
      }
    ]
  },  {
    id: '2013_11_04',
    title: 'Du SQL au NoSQL en moins d\'une heure',
    date: new Date(2013, 10, 4),//month begin at 0
    time: '19',
    register: 'http://guestli.st/206877',
    place: 'epsi',
    subjects: [
      {
        title: 'Amélioration de la qualité du code par restriction du langage',
        length: '20 min',
        type: 'quickie',
        intro: null,
        speakers: ['hugo_wood'],
        abstract: '<p>Lorsque que beaucoup de possibilités s\'offrent à nous, il est difficile de prendre une décision sans expérience.</p>' +
            '<p>Au vu de la piètre qualité générale du code dans l\'industrie, ne serait-il pas intéressant pas de restreindre la flexibilité des langages de programmation afin de "guider" les développeurs n\'ayant pas encore acquis cette expérience ? Je vais présenter quelques fonctionnalités des langages orientés classe dont la difficulté d\'utilisation, la dangerosité, ou l\'inutilité ne sont selon moi pas assez abordées dans la formation du programmeur.</p>'
      },
      {
        title: 'Elastifiez votre application : du SQL au NoSQL en moins d\'une heure',
        length: '1 h 30',
        type: 'talk',
        intro: '',
        abstract:  'Au cours de cette session "live coding", Tugdual et David reprendront une application full SQL "à papa" pour la réécrire en NoSQL en 60 minutes.<br/>' +
          'En s\'appuyant sur CouchBase et Elasticsearch, ils mettront en avant les bénéfices de cette nouvelle architecture :<br/>' +
          '<ul><li>la facilité de mise en place (productivité)</li>' +
          '<li>l\'élasticité (scalabilité)</li></ul>' +
          'Les thèmes abordés seront :' +
          '<ul><li>Approche document</li>' +
          '<li>JSon</li>' +
          '<li>REST</li>' +
          '<li>Cache / Memcached</li>' +
          '<li>Filtres et Facettes</li></ul>' +
          'Notre plan diabolique est de vous convertir au NoSQL à tel point que vous ne puissiez faire autrement que de le mettre chez vous (et chez vos amis) !<br><br>' +
           'Devoxx preview ;) ',
        speakers: ['david_pilato', 'tugdual_grall']
      }
    ]
  },  {
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
        speakers: ['sebastien_prunier'],
        abstract: '<p>L\'actualité informatique est riche est nécessite d\'être suivi continuellement.</p>' +
            '<p> Sébastien le fera pour vous en présentant les dernières nouveautés technologiques.</p>'
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
    id: '2013_06_18',
    title: 'SEO - Scalabilité',
    date: new Date(2013, 5, 18),//month begin at 0
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
        speakers: ['guillaume_degre'],
        docs: [{
          name: 'Support de présentation',
          url: 'https://drive.google.com/file/d/0BzLO1XLmywLJUFUyTmtEbEpVNm8/edit?usp=sharing',
          type: 'drive'
        }]
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
    id: '2013_05_14',
    title: 'Neo4J & SoapUI',
    date: new Date(2013, 4, 14),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Découverte de \'SoapUI\'',
        length: '30 min',
        type: 'quickie',
        intro: 'par Antony Guilloteau',
        abstract: '<p>Autour d\'une petite application train tweet, une session de live coding pour démontrer l\'utilité de SoapUI dans les développements de type SOA : shoot, mock & test..</p>',
        speakers: ['antony_guilloteau']
      },
      {
        title: 'Soirée NoSQL : Base de Données Graph avec Neo4J',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Prendre un tableau et un papier pour modéliser ses données, c\'est ce que nous faisons régulièrement. Cependant à chaque fois nous devons traduire notre modèle en MCD pour l\'insérer dans un SGBD. La promesse des bases de données orientées  graphe c\'est d\'être veleda ready ! Plus besoin de convertir notre modèle.</p>' +
            '<p>Lors de cette présentation nous vous parlerons de Neo4j, une base données NoSQL orientée graph écrite en java, ainsi que des concepts qui gravitent autour.</p>' +
            '<p>On vous montrera comment réaliser un système de recommandation simple et efficace basé sur les données de github.</p>',
        speakers: ['benoit_simard', 'damien_raude_morvan', 'cedric_fauvet'],
        docs: [{
          name: 'Support de présentation (HTML)',
          url: 'http://hype.logisima.com/prez/view/5561322/Neo4j%20-%20JUG%20Nantes',
          type: 'slid-es'
        }]
      }
    ]
  },
  {
    id: '2013_04_15',
    title: 'JavaScript pour le développeur Java',
    date: new Date(2013, 3, 15),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'JavaScript pour le développeur Java',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Dans sa présentation Christophe va nous expliquer pourquoi et comment l\'ancien détracteur de JavaScript est devenu un fan du langage et, en orientant sa présentation vers des développeurs Java comme lui, essayer de nous faire regarder JavaScript sous un autre angle, à apprécier ses forces, à mieux comprendre ses faiblesses et à nous donner envie de s\'y essayer.</p>' +
            '<p>La présentation sera structurée en deux parties :</p>' +
            '<p><b>JavaScript pour le développeur Java</b></p>' +
            '<p>Au cours de cette présentation nous balayerons les caractéristiques de JavaScript du point de vue du développeur Java en appuyant notamment sur les différences entre les deux langages et ce qui peut se transformer en piège pour le développeur qui aurait juger inutile d\'apprendre JavaScript.</p>' +
            '<p><b>La caisse d\'outils du développeur JavaScript</b></p>' +
            '<p>Au secours, votre chef a vu dans DSI-01-MAG-INFORMATIQUE que l\'avenir est au application Web et il veut maintenant que tous vos projets soient en JavaScript. Vous paniquez parce que la dernière fois que vous avez fait du JavaScript, c\'était à la faculté dans un éditeur de texte et vous débugguiez en affichant des boites de dialogue.</p>' +
            '<p>Au cours de cette présentation, nous verrons que l\'écosystème JavaScript a évolué et que vous disposez maintenant de frameworks complets gérant vos couches de présentation, vos test, vos dépendances et même le backend de vos applications. Nous verrons aussi que l\'outillage a progressé et que nous pouvons maintenant faire du débuggage comme dans nos application Java, de l\'intégration continue et même de l\'audit de qualité !</p>',
        speakers: ['christophe_jollivet']
      }
    ]
  },
  {
    id: '2013_03_18',
    title: 'Traçabilité d\'une architecture distribuée & Code Story 2013',
    date: new Date(2013, 2, 18),//month begin at 0
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
        title: 'Traçabilité d\'une architecture distribuée avec NodeJS et MongoDB',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Une des bonnes nouvelles du début d\'année a été le concours Code Story pour l\'édition 2013 de Devoxx France. Une superbe occasion de développer et de tester de nouvelles technos, tout en s\'amusant !</p>' +
            '<p>Nous débuterons la session par un retour sur notre participation à la première phase de ce concours, en vous présentant et en comparant nos choix technologiques.</p>',
        speakers: ['sebastien_prunier', 'jerome_creignou']
      }
    ]
  },
  {
    id: '2013_02_11',
    title: 'Soirée NoSQL - Couchbase & MongoDB',
    date: new Date(2013, 1, 11),//month begin at 0
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
            '<li>L\'utilisation de JSON pour le stockage et les bénéfices et défis associés à l\'approche "Schemaless"</li>' +
            '<li>Le développement d\'applications</li>' +
            '<li>Le déploiement et l\'administration de cluster</li>' +
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
    id: '2013_01_16',
    title: 'Soirée Langage et Framework : Dart & Clojure',
    date: new Date(2013, 0, 16),//month begin at 0
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
        abstract: '<p>Dart est un nouveau langage de programmation pour développer des applications web. Créé par Google et ouvert au grand public en octobre 2011, c\'est un langage orienté-objet avec une syntaxe familière que l\'on soit développeur Java ou développeur JavaScript. Ses deux objectifs ? Performance et facilité d\'utilisation.</p>' +
            '<p>Dans cette présentation, nous verrons quels sont les objectifs de Google en introduisant ce nouveau langage. Nous irons au coeur de celui-ci en présentant les différentes spécificités, typage optionnel, les Isolates comme modèle de concurrence, les différents mode d\'exécution, la gestion du DOM... Enfin, nous discuterons des échéances à venir pour savoir si Dart saura s\'imposer ou non en tant que langage d\'avenir pour le web.</p>',
        speakers: ['julien_vey']
      }
    ]
  },
  {
    id: '2012_12_06',
    title: 'Elastic Search',
    date: new Date(2012, 11, 6),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Elastic Search',
        length: '2 h',
        type: 'talk',
        intro: null,
        abstract: '<p>Ce soirée est faite pour vous si :' +
            '<ul>' +
            '<li>Vous utilisez encore des requêtes SQL pour faire des recherches</li>' +
            '<li>Vos utilisateurs vous reprochent de ne pas pouvoir chercher sur toutes les rubriques</li>' +
            '<li>Votre temps de réponse moyen est supérieur à la demi-seconde avec seulement quelques millions de documents</li>' +
            '<li>Il vous faut 3 jours pour produire des statistiques sur vos données</li>' +
            '<li>Vous rêvez d\'offrir une recherche “à la google” sur les données de votre SI</li>' +
            '</ul></p>' +
            '<p>David présentera au cours de la soirée pourquoi et comment il est passé de la recherche SQL à Elasticsearch en détaillant les apports de ce moteur par rapport à une solution pure Lucene</p>' +
            '<p>Pourquoi Elasticsearch ?' +
            '<ul>' +
            '<li>L\'indexation</li>' +
            '<li>La recherche</li>' +
            '<li>La collecte de données (rivers)</li>' +
            '<li>Les facettes et le principe de navigation par facettes</li>' +
            '<li>La scalabilité horizontale</li>' +
            '<li>La communauté</li>' +
            '</ul></p>' +
            '<p></p>',
        speakers: ['david_pilato']
      }
    ]
  },
  {
    id: '2012_11_07',
    title: 'OpenShift',
    date: new Date(2012, 10, 7),//month begin at 0
    time: '19',
    register: '',
    place: 'sup_info',
    subjects: [
      {
        title: 'OpenShift: Enjoy the benefits of cloud computing as a developer',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>In this session, Marek will give a quick introduction to Platform as a Service (aka awesome-sauce for developers) with OpenShift as an example. After a few slides and your questions we will spend the rest of the time working with you to get your Web code (see the languages available on our website, but Java in our case) up and running in less than 5 minutes.</p>' +
            '<p>We will also demonstrate how to connect your code to a back-end data store such as MongoDB and MySQL. The goal of this session is to have you excited in running your code in the cloud for free! http://openshift.redhat.com</p>',
        speakers: ['marek_jelen']
      }
    ]
  },
  {
    id: '2012_10_23',
    title: 'Build Living Web Applications with WebSockets',
    date: new Date(2012, 9, 23),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Build Living Web Applications with WebSockets',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Take your desktop and mobile Web apps to the next level with true, real-time connectivity. Learn how to build real-time, multi-user interaction and collaboration into your Web apps using HTML5 and WebSockets.</p>' +
            '<p>Whether you want your app to be a real-time retail experience or a fast-paced MMO, you\'ll learn hands-on skills to turn your mobile apps into live apps, by building peer-to-peer mobile apps, mobile-desktop interaction, and even turning your smartphone into a Nintendo Wii-style remote control.</p>',
        speakers: ['peter_moskovits']
      }
    ]
  },
  {
    id: '2012_10_10',
    title: 'Copyright et Licence & WebMotion',
    date: new Date(2012, 9, 10),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Copyright et Licence',
        length: '1 h',
        type: 'talk',
        intro: null,
        abstract: '<p>Le but est de présenter les notions de copyright et de licence et de sensibilisé les personnes aux problématiques qu\'elles induisent dans un développement logiciel.</p>' +
            '<p><ul>' +
            '<li>Copyright et licence (différence, but)</li>' +
            '<li>Les grandes familles de licences</li>' +
            '<li>Leur compatibilité ou incompatibilité (un casse tête pour les développeurs et les décideurs)</li>' +
            '<li>Les outils pour aider à leur mise en place et leur gestion</li>' +
            '</ul></p>',
        speakers: ['benjamin_poussin']
      }, {
        title: 'WebMotion',
        length: '1 h',
        type: 'talk',
        intro: null,
        abstract: '<p>WebMotion est un projet libre pour le développement d\'application web en Java orienté REST. Il s\'appuie sur le standard JEE 6 avec les Servlet 3. Il fonctionne avec les principaux serveurs d\'application Tomcat, Jetty et Glassfish.</p>' +
            '<p>Le projet a été développé pour respecter une approche outils. Ainsi il s\'occupe principalement des interactions entre le serveur et le client. Il vous laisse libre de choisir vos framework de persistance, d\'injection de dépendance, ... pour créer votre architecture adaptée à vos besoin. Vous pouvez l\'utiliser avec vos IDE et outils de build habituels. Il se base sur un fichier de routes pour décrire la relation entre les URLs et les actions Java. Il propose aussi un ensemble d\'extra pour vous permettre de développer rapidement et simplement des sites web.</p>' +
            '<p>Le site web (http://www.webmotion-framework) est un exemple d\'utilisation, vous y trouverez une documentation détaillée et de nombreux exemples.</p>' +
            '<p>La présentation vous permettra de découvrir l\'origine du framework, sa philosophie ainsi que quelques points fonctionnels, suivants :' +
            '<ul>' +
            '<li>Le fichier de route</li>' +
            '<li>Les actions en Java</li>' +
            '<li>Les extras</li>' +
            '</ul></p>',
        speakers: ['julien_ruchaud']
      }
    ]
  },
  {
    id: '2012_06_06',
    title: 'Introduction au langage Ceylon',
    date: new Date(2012, 5, 6),//month begin at 0
    time: '19',
    register: '',
    place: 'netapsys',
    subjects: [
      {
        title: 'Introduction au langage Ceylon',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Ceylon est un nouveau langage de programmation pour la machine virtuelle Java. Nous sommes fans de Java et de son écosysteme, cependant nous pensons que le langage Java et ses libraires conçus il y a 15 ans sont désuets face aux challenges actuels. Ceylon a été conçu avec plusieurs objectifs</p>' +
            '<p>Facile à apprendre pour les développeurs Java et C# Améliorer le typage fort de Java Fournir une syntaxe déclarative pour exprimer des concepts hierarchiques (interface utilisateurs, configuration systeme, etc...) Promouvoir l\'approche fonctionelle par des objects immuables et des fonction d\'ordre supérieur Support de la méta programmation Modulaire</p>' +
            '<p>Cette introduction à Ceylon vous montrera les fonctionnalités de Ceylon ainsi que les derniers progrès faits sur le compilateur, l\'IDE et la communauté autour de Ceylon.</p>',
        speakers: ['stephane_epardaud']
      }
    ]
  },
  {
    id: '2012_06_04',
    title: 'Hibernate OGM: JPA pour NoSQL',
    date: new Date(2012, 5, 4),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Hibernate OGM: JPA pour NoSQL',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>PaaS (Plate-forme as a Service), Cloud, élasticité. Ces mots font le buzz ces temps-ci.</p>' +
            '<p>Mais le vrai challenge c\'est comment et où stocker vos données. Dans un data grid pour bénéficier de la scalabilité ? Via une API propriétaire ? Pourrait on utiliser une API familière ?</p>' +
            '<p>L\'objectif d\'Hibernate OGM est d\'explorer comment réutiliser Java Persistence et son API familière pour persister les entités dans une base de données non relationnelle.</p>' +
            '<p>Hibernate Object/Grid Mapper (OGM) offre une implementation JPA (manipulation d\'objets et requêtes JP-QL) tout en stockant et requêtant les données d\'une grille clé/valeur (et d\'autres approches NoSQL dans un second temps). Autrement dit, il offre une API familière tout en permettant de bénéficier des possibilités de scalabilité des data grids. Cela inclut notamment de supporter des applications JPA existantes.</p>' +
            '<p>Dans cette présentation, nous allons:' +
            '<ul>' +
            '<li>Faire un survol du monde NoSQL et voir l\'intérêt d\'une API comme JPA</li>' +
            '<li>Voir comment Hibernate OGM stocke les entités et les associations dans la base clé/valeur et explorer les compromis faits.</li>' +
            '<li>Voir comment les requêtes JP-QL sont implémentées au dessus d\'une technologie qui ne supporte pas la notion de requête (clé/valeur) et quel niveau de couverture peut-être obtenu faire une démonstration d\'Hibernate OGM</li>' +
            '</ul></p>',
        speakers: ['emmanuel_bernard']
      }
    ]
  },
  {
    id: '2012_03_14',
    title: 'Introduction à Wicket',
    date: new Date(2012, 2, 14),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Introduction à Wicket',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Wicket est un Framework de présentation Java orienté composant, comme JSF ou GWT, qui propose une séparation très claire entre la vue et les données. Les vues sont écrites en XHTML tandis que la partie dynamique et les données sont codées en Java.</p>' +
            '<p>Lors de cette présentation 100% démo, Manuel présentera les bases du framework en développant une application de gestion de contacts.</p>',
        speakers: ['manuel_boillod']
      }
    ]
  },
  {
    id: '2012_02_09',
    title: 'Application versioning et rolling upgrade',
    date: new Date(2012, 1, 9),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Application versioning et rolling upgrade en haute disponibilité, avec Glassfish',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Une fois qu\'une application est en production, réaliser une montée de version sans perte de service est délicat et peut rapidement vous donner la migraine. Il faut en général le faire manuellement en montant un cluster, en répliquant l\'application et ses sessions, et en jonglant avec le répartiteur de charge et les instances de serveur à chaque montée en version.</p>' +
            '<p>La fonctionnalité de versioning présente dans GlassFish, combinée avec le rolling upgrade (en early preview) permet de réaliser cette montée en version sans perte de service sur une instance stand-alone de GlassFish.</p>' +
            '<p>Dans cette session, Marian présente ces fonctionnalités et comment les utiliser pour réaliser une montée en version d\'application en production sans perte de service, en utilisant exclusivement les services offerts par GlassFish.</p>',
        speakers: ['marian_muller']
      }
    ]
  },
  {
    id: '2012_01_12',
    title: 'Introduction aux DSL en Groovy',
    date: new Date(2012, 0, 12),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Introduction aux DSL (Domain Specific Languages) en Groovy',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Durant cette présentation, Cedric nous expliquera ce que sont les DSL (Domain Specific Languages), leurs champs d\'application et les techniques courantes pour en implémenter. Cédric presentera quelques exemples de DSL écrits avec le langage Groovy, dans l\'objectif de montrer ce que ce langage permet d\'obtenir.</p>',
        speakers: ['cedric_champeau']
      }
    ]
  },
  {
    id: '2011_12_14',
    title: 'Hibernate vs Cloud computing',
    date: new Date(2011, 11, 14),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Hibernate vs Cloud computing',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Au cours de cette presentation, Julien Dubois d\'Ippon Technologies abordera les sujets suivant :</p>' +
            '<p>Les bases de données relationnelles classiques ont du mal à monter en charge de manière “élastique”: elles sont de manière générale peu adaptées aux nouvelles solutions de cloud computing, de type Amazon EC2 ou VMWare.</p>' +
            '<p>Nous verrons dans cette session :</p>' +
            '<p><ul>' +
            '<li>Les problèmes couramment rencontrés et leurs solutions proposées par les grand éditeurs (type Oracle RAC), ainsi que leurs limitations</li>' +
            '<li>Comment ces problèmes se traduisent dans le monde Java, en particulier avec Hibernate</li>' +
            '<li>Quelles solutions peuvent être utilisées avec Hibernate, en particulier avec son système de cache: nous verrons les solutions de clustering, dont Terracotta et Coherence</li>' +
            '<li>Ce que proposent les nouvelles solutions dites “NoSQL”, en prenant l\'exemple de Cassandra: leurs avantages, leurs inconvénients, leurs limitations</li>' +
            '</ul></p>',
        speakers: ['julien_dubois']
      }
    ]
  },
  {
    id: '2011_11_03',
    title: 'Java 7 : Introduction',
    date: new Date(2011, 10, 3),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Java 7 : Introduction',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Pour cette soirée, Sebastien va nous presenter les points suivants:' +
            '<ul>' +
            '<li>Rapide historique des versions de Java</li>' +
            '<li>Quoi de nouveau dans Java 7 (invokedynamic, fork/join, nio2, javadoc ...) ?</li>' +
            '<li>Zoom sur les nouveautés dans la syntaxe (Projet Coin), avec exemples de code “avant/après” (Strings in switch, Try-with-ressource, Binary literals, Inférence de type avec l\'opérateur diamond, catch multiple, etc ...)</li>' +
            '<li>Un petit exemple de l\'API NIO2 qui simplifie la vie : la copie de fichier (en une ligne !)</li>' +
            '</ul></p>' +
            '<p>Pour conclure, les perspectives avec Java 8 (Closures, Collection litterals, Projet Jigsaw).</p>',
        speakers: ['sebastien_prunier']
      }
    ]
  },
  {
    id: '2011_10_12',
    title: 'Statefull is Beautiful',
    date: new Date(2011, 9, 12),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'Statefull is Beautiful',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p>Pour cette presentation, Antoine d\'Ippon Technologies va nous permettre de revenir aux sources de Java EE, en abordant les sujets suivants :' +
            '<ul>' +
            '<li>Des différentes stratégies de stockage des états dans une application Java EE.</li>' +
            '<li>Du scope Session de l\'Api Servlet</li>' +
            '<li>De CDI</li>' +
            '<li>Des EJB 3.X</li>' +
            '<li>De sérialisation, passivation et résilience</li>' +
            '<li>De scalabilité</li>' +
            '<li>Des design patterns que ces concepts et technos permettent de mettre en oeuvre</li>' +
            '</ul></p>',
        speakers: ['antoine_sabot_durand']
      }
    ]
  },
  {
    id: '2011_06_23',
    title: 'A la découverte de Gradle',
    date: new Date(2012, 6, 0),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
      {
        title: 'A la découverte de Gradle',
        length: '1 h 30',
        type: 'talk',
        intro: 'par Grégory Boissinot de Zenika',
        abstract: '<p>La construction d\'un logiciel est l\'étape essentielle dans un processus d\'intégration continue. Il n\'est pas rare que cette étape de build soit complexe tant par sa mise en œuvre que par son adéquation aux besoins changeant du projet. Il est alors nécessaire d\'outiller cette construction par un langage épousant les spécificités du projet.</p>' +
            '<p>Je présenterai le système de build Gradle qui répond à cette problématique.</p>' +
            '<p>Gradle est un outil extrêmement flexible permettant de construire les différents types d\'applications Java/JEE. Sous le capot, Gradle s\'appuie sur un certain nombre de standards pour orchestrer ses composants :</p>' +
            '<p>Les conventions du système de build Maven Le gestionnaire de dépendance Ivy Une totale intégration avec les taches Ant existantes Le langage de script Groovy</p>' +
            '<p>La présentation détaillera les concepts principaux de Gradle et sa mise en oeuvre pour le build d\'une application JEE. Nous verrons également comment Gradle est capable de s\'insérer dans une infrastructure d\'entreprise Ant/Maven existante afin de donner toute la puissance nécessaire aux projets existants.</p>',
        speakers: ['gregory_boissinot']
      }
    ]
  }/*,
  {
    id: '2011_05_01',
    title: '',
    date: new Date(2011, 0, 0),//month begin at 0
    time: '19',
    register: '',
    place: 'cantine',
    subjects: [
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
