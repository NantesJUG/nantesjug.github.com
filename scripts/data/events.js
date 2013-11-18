/*jshint unused: false */
var njEvents = [
  {
    id: '2013_12_04',
    title: 'Java 8 : Lambdas, Streams et Collectors',
    date: new Date(2013, 11, 4),//month begin at 0
    time: '19',
    register: null, //'https://guestlistapp.com/events/190722',
    place: 'epitech',
    subjects: [
      {
        title: 'Sujet à confirmer',
        length: '20 min',
        type: 'quickie'
//        intro: 'présenté par Sébastien Prunier qui lance par la même occasion les quickies.',
//        speakers: ['sebastien_prunier'],
//        abstract: '<p>L\'actualité informatique est riche est nécessite d\'être suivi continuellement.</p>' +
//            '<p> Sébastien le fera pour vous en présentant les dernières nouveautés technologiques.</p>'
      },
      {
        title: 'Java 8 : Lambdas, Streams et Collectors',
        length: '1 h 30',
        type: 'talk',
        intro: 'le nouveau visage de l\'API Collection',
        abstract: '<p>L\'API la plus utilisée du JDK est sans aucun doute l\'API Collection. Brillamment conçue il y a un peu plus de 15 ans, elle est encore aujourd\'hui au coeur de toutes les applications Java. En 2004, elle a subi son premier lifting, avec l\'introduction des génériques. Cette mise à jour, bien qu\'importante, n\'a cependant pas modifié ses patterns d\'utilisation. Avec l\'introduction des lambdas en Java 8, l\'API Collection est à nouveau réécrite, mais cette fois la situation est différente : ses patterns d\'utilisation sont complètement changés. </p><p>La première partie de cette conférence introduit les lambda expressions, comment les écrire, et ce qu\'elle nous apportent en tant que développeurs. La deuxième partir présente en détail les nouveaux patterns introduits par les API Stream et Collector. Ces nouvelles API vont changer la façon dont nous allons pouvoir traiter les collections de grande taille, y compris en parallèle, avec un modèle de programmation très simple, et des patterns très puissants. Cette puissance sera montrée dans des exemples réels, qui monteront comment Java 8 va pouvoir nous aider à écrire simplement du code efficace et performant.</p>',
        speakers: ['jose_paumard']
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
        abstract:  'Au cours de cette session "live coding", Tugdual et David reprendront une application full SQL "à papa" pour la réécrire en NoSQL en 60 minutes.<br/>'
			+'En s\'appuyant sur CouchBase et Elasticsearch, ils mettront en avant les bénéfices de cette nouvelle architecture :<br/>'
			+'<ul><li>la facilité de mise en place (productivité)</li>'
			+'<li>l\'élasticité (scalabilité)</li></ul>'
			+'Les thèmes abordés seront :'
			+'<ul><li>Approche document</li>'
			+'<li>JSon</li>'
			+'<li>REST</li>'
			+'<li>Cache / Memcached</li>'
			+'<li>Filtres et Facettes</li></ul>'
			+'Notre plan diabolique est de vous convertir au NoSQL à tel point que vous ne puissiez faire autrement que de le mettre chez vous (et chez vos amis) !<br><br>'
			+'Devoxx preview ;) ',
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
        speakers: ['benoit_simard']
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
