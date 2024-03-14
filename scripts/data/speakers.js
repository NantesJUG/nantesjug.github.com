//
// Google form for speaker: https://nantesjug.org/#/speaker-form
//
// Structure:
// {
//   id:
//   name:
//   bio:
//   gravatar:
//   photo:
//   twitter:
//   gplus:
//   github:
//   website:
// }

/*jshint unused: false */
var njSpeakers = [
  {
    id: 'aymeric_laleau',
    name: 'Aymeric Laleau',
    photo: "jpg",
    bio: "<p>Je suis un développeur passionné depuis près de huit ans, axé principalement sur les technos JS, et une expérience significative dans le domaine du retail.</p>" +
         "<p>Ma démarche professionnelle repose sur une approche technologique pointue et le partage constant de connaissances, car la connaissance n'a de valeur que si elle est partagée</p>",
    github: 'alaleau'
  }, {
    id: 'romain_manni-bucau',
    name: 'Romain Manni-Bucau',
    photo: "jpg",
    bio: "<p>En commençant à travailler sur (Java)EE j'ai très vite rejoins l'Apache Software Foundation (ASF).</p>" +
        "<p>D'abords via le projet Apache TomEE puis les couches basses de sa stack (OpenWebBeans, OpenJPA, XBean, CXF, ...), j'ai continué en travaillant sur des aspects de performances et d'observabilité.</p>" +
        "<p>Fort de cet apprentissage, j'ai pu abordé le Big Data et le Cloud (Kubernetes) tout en continuant les expertises sur les API mais aussi les ESB (Apache Camel par ex).</p>" +
        "<p>Curieux, j'aborde régulièrement d'autres languages (React.JS et Go pour les plus courants) même si je reste très \"Java\", que se soit avec une JVM ou sans (GraalVM native-image).</p>" +
        "<p>Mon travail actuel consiste à construire une solution robuste et efficace autour des API (gateway), de la sécurité (serveur OAuth2) et d'une solution low code (webservices, kafka handlers etc...).</p>" +
        "<p>Je reste convaincu que même si nos intéractions changent, l'OSS reste une base solide de nos futures applications et en tant que tel, je continue de contribuer à Apache mais aussi à Yupiik OSS (https://www.yupiik.io/projects.html) pour que coder reste un moyen et ne soit pas un frein que se soit en local ou dans le cloud.</p>",
    twitter: 'rmannibucau',
    github: 'rmannibucau',
    website: 'https://rmannibucau.metawerx.net/'
  }, {
    id: 'julien_boeuf',
    name: 'Julien Boeuf',
    photo: "jpg",
    bio: "J'effectue des talks depuis trois ans en interne comme en externe. J'ai eu le plaisir de donner des talks à l'Agile Tour Lille, Rennes et Nantes. Mes sujets sont tous issus d'expérience terrain. On y parle concret !"
}, {
    id: 'ronald_dehuysser',
    name: 'Ronald Dehuysser',
    photo: "jpg",
    bio: "<p>Meet Ronald Dehuysser, a software architect from Belgium and creator of JobRunr. Seamlessly integrating with Spring Boot, Micronaut, and Quarkus, JobRunr is Ronald's solution for efficient distributed background job processing.</p>" +
         "<p>When he's not working on open-source software, he is probably either rock climbing or sipping a fine Belgian Duvel beer.</p>",
    twitter: 'rdehuyss',
    github: 'rdehuyss',
    website: 'https://www.jobrunr.io'
}, {
    id: 'francois-xavier_verryser',
    name: 'François-Xavier Verryser',
    photo: "jpg",
    bio: "<p>Over my 17-year at Decathlon, my professional journey began as a developer, gradually evolving into roles such as application manager and ultimately product owner of diverse retail applications.</p>" +
         "<p>The advent of RFID technology at Decathlon marked a pivotal moment in my career. My primary goal was to elevate stock reliability within our stores by implementing RFID inventories and crafting a user-friendly mobile application. This innovative approach significantly enhanced the overall efficiency of stock management.</p>" +
         "<p>Passionate by backend technologies, I made a shift from product management to assume the role of a tech lead in the realm of stock control.</p>" +
         "<p>When he's not working on open-source software, he is probably either rock climbing or sipping a fine Belgian Duvel beer.</p>"
}, {
    id: 'audren_burlot',
    name: 'Audren Burlot',
    photo: "jpg",
    twitter: 'AudrenBrlt',
    github: 'Firnael'
}, {
    id: 'jean_francois_albenque',
    name: 'Jean-François Albenque',
    bio: "<p>Je travaille en tant que Développeur (principalement sur le Back-End). Les technologies sur lesquelles je travaille sont les suivantes :</p>" +
         "<p>Java/J2EE, Unix, JUnit, Oracle, Angular, Jenkins, Karaté, Git, Sonar, Linux, DevOps, Docker, Kubernetes, IntelliJ</p>" +
         "<p>Je possède la certification Java SE 8 Oracle Certified Associate (OCA).</p>",
    photo: "jpg",
    twitter: 'devjfa',
    github: 'jfadev744'
}, {
    id: 'benoit_orihuela',
    name: 'Benoit Orihuela',
    photo: "jpg",
    github: 'bobeal'
}, {
    id: 'valentin_lefort',
    name: 'Valentin Lefort',
    bio: "<p>Développeur Backend chez SFEIR et Confluent Certified Kafka Developer.</p>" +
         "<p>Je m'intéresse à Kafka et son écosystème.</p>",
    photo: "jpg",
    twitter: 'valentinlefort4'
}, {
    id: 'julien_jakubowski',
    name: 'Julien Jakubowski',
    bio: `
          <p>Julien Jakubowski est developer advocate chez StreamNative.</p>
          <p>Il a une vingtaine d’années d’expérience en tant que développeur, tech lead et consultant. Il a construit plusieurs systèmes complexes à architecture distribuée, scalables et event-driven, dans des domaines variés : retail, banque, assurance, industrie…</p>
          <p>Julien est speaker à différentes conférences techniques (Devoxx, VoxxedDays, Berlin Buzzwords, JUGs, GDG, Agile Tours…), Julien est également l’un des fondateurs et leaders du Ch’ti JUG - Java User Group de Lille.</p>
          `,
    photo: 'jpg',
    twitter: 'jak78',
  },  {
    id: 'damien_metzler',
    name: 'Damien Metzler',
    bio: 
        "<p>Damien Metzler travaille comme Solutions Architect chez Amazon Web Service où il conseille ses clients grandes entreprises à utiliser les services AWS de manière optimale.</p><p>Il a aussi travaillé plusieurs années comme développeur chez Nuxeo, une solution de gestion documentaire opensource en Java, pour laquelle il a construit l'architecture de l'offre cloud, raison pour laquelle il a pas mal écrit sur ses expériences avec Java et le cloud.</p>",
    twitter: 'damienmetzler',
    github: 'dmetzler',
  },  {
    id: 'jerome_moliere',
    name: 'Jérôme Molière',
    bio: 
        "<p>Tombé dans  Java en 1996  , ingénieur ESIGELEC 1997. Auteur  pour Eyrolles. Architecte/coach technique </p>",
    photo: 'jpg',
    github: 'mentorj',
  },
  {
    id: 'sylvain_nael',
    name: 'Sylvain Nael',
    bio: "<p>Développeur Front chez RCA</p>",
    photo: 'jpg',
    twitter: 'sylvain_nb',
    website: 'https://www.linkedin.com/in/sylvain-nael-73513125/',
  },
  {
    id: 'raphael_semeteys',
    name: 'Raphaël Semeteys',
    bio: 
        "<p>Raphaël est DevRel, architecte et expert open source chez Worldline. <br>" + 
        "Geek depuis ses débuts, il a du adopter de nombreux angles de vue sur l'IT (développeur, analyste, architecte, chef de projet, consultant, avant-vente, direction technique...) et ce dans de multiples domaines métiers. Il aborde les (nouvelles) technologies toujours avec le même appetit, désormais pimenté par le recul que lui donne son expérience de près de 25 ans de conception/réalisation/exploitation de services et de SI soumis à de fortes contraintes (criticité/visibilité, performances/volumétrie, sécurité, exigences d'industrialisation).</p>",
    photo: 'jpg',
    twitter: 'raphaelsemeteys',
    github: 'raphiki',
    website: 'http://www.semeteys.org',
  },
  {
    id: "mohamed_ali_bouine",
    name: "Mohamed Ali Bouine ",
    bio: "<p>Développeur Scala chez Nickel, j’ai découvert le monde de la programmation fonctionnelle en 2018.</p><p>Depuis quelques mois, je m’intéresse également aux tests avec RobotFramework.</p>",
    photo: "jpg",
  },
  {
    id: "yann_huriez",
    name: "Yann Huriez",
    bio: "<p>Développeur Android depuis plus de dix ans, je n'oublie pas mes amours de jeunesse avec Java Swing et AWT, en client lourd (Mais bon c'est bien aussi d'évoluer...).</p>",
    photo: "jpg",
    github: "yhuriez",
    website: "https://popcorn-nantes.github.io/person/yann-huriez/",
  },
  {
    id: "remi_picard",
    name: "Rémi Picard",
    bio: "<p>Développeur Scala chez Nickel à Nantes. Passionné par les sujets Web et DevOps, vous me trouverez souvent aux MeetUps nantais.</p>",
    photo: "jpg",
    website: "https://fr.linkedin.com/in/r%C3%A9mi-picard",
  },
  {
    id: "gregory_houllier",
    name: "Grégory Houllier",
    bio: "<p>Senior Software Engineer chez Swile, Co Fondateur du meetup RennesJS et TypeScript Addict.</p>",
    photo: "jpg",
    twitter: "ghoullier",
    github: "ghoullier",
  },
  {
    id: "christophe_quintard",
    name: "Christophe Quintard",
    bio: "<p>Je suis passé par des startups, IBM, Timwi et depuis quelques années je travaille à l'urbanisation du SI chez Ouest-France. Je continue à coder, parce que je ne veux pas être un architecte hors-sol. Mon but, c'est un SI le plus évolutif possible, parce que nous ne sommes pas des bâtisseurs de cathédrales : en informatique, tout change, tout le temps !</p>",
    photo: "jpg",
    website: "https://christophequintard.fr",
  },
  {
    id: "remi_forax",
    name: "Rémi Forax",
    bio: "<p>Java Plombier, Maitre de Conférence, Virtual Machine Whisperer,\n<br>Martyrise ses pauvres étudiants, complexifie Java en faisant partie des gens qui écrivent les specs pour les lambdas, les modules, récemment les records et le pattern matching, développe des librairies et langage dynamiques open source utilisés ou pas.</p>",
    photo: "jpg",
    twitter: "remiforaxoff",
    github: "forax",
  },{
    id: "lise_quesnel",
    name: "Lise Quesnel",
    bio: "<p>Lise est développeuse web et Lead dev. Elle sait être moteur tant sur le plan humain que technique.<br> Les bonnes pratiques de développement sont pour elle le ciment de tout projet. Elle porte également une attention toute particulière à l’expérience utilisateur.<br> Grande curieuse, elle aime découvrir sans cesse de nouvelles choses.</p>",
    photo: "jpg",
    twitter: "QuesnelLise",
    github: "lisequesnel",
  },{
    id: "sun_tan",
    name: "Sun Tan",
    bio: "<p>Sun is a Senior Software Engineer and a Java developer with 15 years experience, currently working at Red Hat.<br> Sun is involved in the Eclipse Che project from the very beginning as a core contributor. He recently joined the JKube project team. <br>Sun has the community in his heart and is devoted to open source. He has been contributing to open source softwares while working for companies like Nuxeo, Serli and now Red Hat. <br>Today, his adventure continues in sharing his source code, promoting great talks and speakers at his local Paris Java User Group, coding with Eclipse Che and enjoying his new hobby: brewing beer in his kitchen.</p>",
    photo: "jpg",
    twitter: "__sunix_",
    github: "sunix",
    website: "https://blog.sunix.org",
  },{
    id: "lucille_moise",
    name: "Lucille Moise",
    bio: "<p>Du haut de mes 27 ans de curiosité, je suis passée par beaucoup de passion : Jeux Vidéos, Musique, Astronomie, IA, Littérature. Aujourd’hui, c’est chez Serli en tant que développeuse que je continue d’entretenir cette flamme.Développeuse web le jour (React, Java, Kotlin) et bidouilleuse-garou la nuit (Python), l’échange de découvertes et savoirs m’intéressent toujours.</p>",
    photo: "jpg",
    twitter: "itchae_",
    github: "LucilleMoise",
  },{
    id: "elvadas_nono",
    name: "Elvadas Nono",
    bio: "<p>Passionné par les nouvelles technologies ainsi et les causes humanitaires, Elvadas accompagne les Entreprises dans la mise en place des systèmes d'information modernes et efficients: </p>",
    photo: "jpg",
    twitter: "nelvadas",
    github: "nelvadas",
  },
  {
    id: "brian_clozel",
    name: "Brian Clozel",
    bio: "<p>Engineer @ VMware. Spring Framework, Spring Boot & Spring GraphQL committer.</p>",
    gravatar: "bclozel@vmware.com",
    twitter: "bclozel",
    website: "https://spring.io",
  },
  {
    id: "pierre_clainchard",
    name: "Pierre Clainchard",
    bio: "<p>CTO chez @kanoma_it, passionné de nouvelles technos et d'agilité, je suis tombé dans le Software Craftmanship depuis quelques années ! J'accompagne les devs de Kanoma dans le quotidien de leurs missions et sur leur plan de carrière</p>",
    photo: "jpg",
    twitter: "clainchoupi",
  },
  {
    id: "julien_deville",
    name: "Julien Deville",
    bio: "<p>Le sport et la culture physique sont devenus dès mon plus jeune âge un moyen d’appropriation du dépassement de soi et des compétences s’y rapportant.</p<p>Cette construction s’est aussi modélisée dans ma volonté à créer du lien avec les autres, mettre en interactions les meilleures compétences de chacun pour mener un projet à bien.</p><p>Très naturellement, après une vie d’athlète et de salarié, j’ai décidé de créer mon activité en accompagnant “les athlètes du quotidien” à construire le socle de leur performance.</p><p>Ma vie sportive m’a permis de cultiver et développer le goût de l’effort et le sens de l’implication.</p><p>Mes expériences professionnelles en tant que commercial puis de responsable d’agence, m’ont appris que le manager peut s’inspirer du jardinier : ” Le jardinier ne fait pas pousser les plantes: il guide leur croissance et suscite le meilleur environnement pour que l’ensemble du jardin se développe.”</p><p>Ma philosophie se résume à :</p><ul><li>amener, chacun, à garder la recherche d’efficacité en développant sa capacité d’adaptation aux changements permanents et complexes.</li><li>cultiver le “mieux se connaître”</li><li>construire le “mieux s’organiser” pour mieux performer</li></ul>",
  },
  {
    id: "sylvain_coudert",
    name: "Sylvain Coudert",
    bio: "<p>Dev depuis bientôt 15 ans, freelance depuis 4, podcasteur depuis 1. Adepte de bonnes pratiques, d'échanges humains, que ce soit avec mes pairs ou avec mes clients. Je suis également papa, chanteur, jongleur et VTTiste du dimanche printanier.</p>",
    photo: "jpg",
    twitter: "sylv_coud",
    website: "http://punkindev.fr",
  },
  {
    id: "alexandre_touret",
    name: "Alexandre Touret",
    bio: "<p>Je suis architecte et développeur sénior chez Worldline. Mon activité consiste à coder (principalement en Java), coacher des développeurs et concevoir des architectures.</p>",
    photo: "png",
    twitter: "touret_alex",
    github: "alexandre-touret",
    website: "https://blog.touret.info",
  },
  {
    id: "agnes_maury",
    name: "Agnès Maury",
    bio: "<p>Développeuse, autrice, gameuse, pâtissière, cat addict et passionnée de pléthore d'autres choses.</p>",
    photo: "jpg",
    twitter: "maury_agnes",
    github: "agnesmdev",
    website: "https://portfolio.agnesm.dev/",
  },
  {
    id: "laurent_delemotte",
    name: "Laurent Delemotte",
    bio: "<p>Développeur chez Santéclair depuis 10 ans. N'aime pas les objets mutables.</p>",
    photo: "jpeg",
    twitter: "das_Tiaw",
    github: "Tiaw",
  },
  {
    id: "thibault_duperron",
    name: "Thibault Duperron",
    bio: "<p>Développeur backend surtout JVM (Kotlin, Scala, Java), fan du contract-first et des petits poneys.</p>",
    gravatar: "zomzog@gmail.com",
    twitter: "Zomzog",
    github: "Zomzog",
    website: "https://zomzog.fr/",
  },
  {
    id: "thomas_brosillon",
    name: "Thomas Brosillon",
    bio: "<p>Ingénieur DevOps / SRE et Tech Lead</p>",
    github: "thomariobros",
    website: "https://www.linkedin.com/in/thomas-brosillon/",
  },
  {
    id: "thomas_rossignol",
    name: "Thomas Rossignol",
    bio: "<p>Director of Engineering chez Decathlon</p>",
    gravatar: "thomas.rossignol.pro@gmail.com",
    twitter: "RossignolTom",
  },
  {
    id: "sebastien_blanc",
    name: "Sebastien Blanc",
    bio:
      '<p>Sébastien Blanc est directeur de l\'experience développeurs, aka "lanceur de paillettes",  chez Red Hat. ' +
      " Son but principal est de rendre les développeurs heureux.</p>",
    photo: "jpg",
    twitter: "sebi2706",
    github: "sebastienblanc",
    website: "https://www.linkedin.com/in/s%C3%A9bastien-blanc-08a73b1",
  },
  {
    id: "julien_mourgues",
    name: "Julien Mourgues",
    bio:
      "<p>Je suis architecte Cloud chez Thales et travaille depuis 12 ans dans le monde Java/Javascript.</p>" +
      "<p>Depuis le lycée, j'ai toujours aimé les technologies Web.</p>" +
      "<p>Mon parcours est assez classique de développeur à architecte en passant par des cases de formateur, leader technique et consultant technique. Ces dernières années, je me suis passionné pour les technologies Cloud.</p>" +
      "<p>En perso, j'adore le tennis et je serai ravie de taper la balle avec qui le souhaite.</p>",
    photo: "jpg",
    twitter: "julm82",
    github: "julienmourgues",
    website: "https://fr.linkedin.com/in/julien-mourgues-469291146",
  },
  {
    id: "julien_tanguy",
    name: "Julien Tanguy",
    bio: "<p>Julien est développeur chez <a href='https://www.valwin.fr/'>Valwin</a>.</p>",
    photo: "jpg",
    twitter: "jutanguy",
    github: "jtanguy",
    website: "https://jtanguy.me",
  },
  {
    id: "julien_topcu",
    name: "Julien Topçu",
    bio: "<p>Sr Tech Lead à la Société Générale, j'aime concevoir des logiciels à forte valeur métier en usant de techniques issues du Domain-Driven Design, le tout propulsé en Xtreme Programming dans la philosophie Kanban #NoEstimates. Membre de la fondation OWASP, j'évangélise sur les techniques de sécurité applicative afin d'éviter de se faire hacker bien comme il faut.</p>",
    photo: "jpg",
    twitter: "JulienTopcu",
    github: "julien-topcu",
    website: "https://beyondxscratch.com/",
  },
  {
    id: "jordan_nourry",
    name: "Jordan Nourry",
    bio:
      "<p>Développeur senior chez Shodo, j'accompagne aujourd'hui Thalès Digital Factory dans la construction de leur plateforme Cloud permettant de déploiement des projets dans le monde entier de manière rapide, hautement securisé, scalable et résiliente.</p>" +
      "<p>En tant que craftsman, je redistribue depuis plusieurs années les connaissances acquises à travers mes expériences via des articles, BBLs, conférences et meetups.</p>",
    twitter: "JKnourry",
  },
  {
    id: "david_caillaud",
    name: "David Caillaud",
    bio: "<p>Expert en accessibilité du web depuis 2015, créateur d'une bibliothèque de composants accessibles en jsp pour le portail ameli et actuellement responsable du portail des médecins, la promotion de l'accessibilité des sites web est un sujet qui me passionne depuis des années</p>",
    photo: "jpg",
  },
  {
    id: "benjamin_casseron",
    name: "Benjamin Casseron",
    bio:
      "<p>Après une formation scientifique, Benjamin Casseron démarre sa carrière en tant que consultant dans le secteur de l’innovation. Il prend rapidement des responsabilités avec une casquette RH et le management d’une équipe. En 2012, Il crée une startup, kskills. Le but : proposer des challenges de programmation utilisés pour animer des équipes de développeurs ou pour recruter. Après la vente de son entreprise en 2014, Benjamin s’associe à Franck GASCARD pour créer le pôle startup / innovation au sein d’Externatic.</p>" +
      "<p>Benjamin intervient activement dans le développement des agences nantaises & bordelaises et participe en tant que formateur et intervenant.</p>" +
      "<p>Père de 2 enfants, ce qu’il aime dans la vie : le sport (running, escalade, sports nautiques), rencontrer & partager</p>",
    twitter: "bcasseron",
    website: "https://www.externatic.fr",
  },
  {
    id: "ozan_gunalp",
    name: "Ozan Gunalp",
    bio:
      "Ozan est architecte chez LesFurets.com. Il est ingénieur docteur avec 10 ans d’expérience dans les systèmes distribués," +
      "l’Internet des objets et les processus de développement logiciels. " +
      "Il s’intéresse au génie logiciel, facilitant la vie des développeurs en améliorant les process et les outils de delivery.",
    gravatar: "ozangunalp@gmail.com",
    twitter: "ozangunalp",
    github: "ozangunalp",
  },
  {
    id: "gilles_di_guglielmo",
    name: "Gilles Di Guglielmo",
    bio:
      "Gilles travaille depuis 15 ans pour différents éditeurs de logiciels (ILOG, PrimaSolution, Courtanet) sur des sujets très " +
      "variés : librairie graphique 2D, moteur de règles, plate-forme de services, code génération de modèle métier. " +
      "Actuellement, il est architecte pour le site LesFurets.com, et aime prendre l’air à San Francisco.",
    gravatar: "gdigugli@gmail.com",
    twitter: "gdigugli",
  },
  {
    id: "alexandre_dubreuil",
    name: "Alexandre Dubreuil",
    bio: "Hello, I’m a software engineer, conference speaker, open source maintainer and sound designer.",
    photo: "jpg",
    twitter: "dubreuia",
    github: "dubreuia",
    website: "https://alexandredubreuil.com/",
  },
  {
    id: "marie_viley",
    name: "Marie Viley",
    bio: "Recruteuse chez @zenikaIT et RGPD fan!",
    photo: "jpg",
    twitter: "marie_viley",
  },
  {
    id: "bruno_bonnin",
    name: "Bruno Bonnin",
    bio: "Vieux dev avec peu de cheveux et un gros ventre",
    photo: "jpg",
    twitter: "_bruno_b_",
    github: "bbonnin",
  },
  {
    id: "frederic_leguedois",
    name: "Frédéric Leguédois",
    bio: "Evangéliste Agile, libriste, voire polémiste ;-) Conférencier iconoclaste chez @CloudTemple . Garanti zéro certification.",
    photo: "jpg",
    twitter: "f_leguedois",
    website: "http://leguedois.fr",
  },
  {
    id: "loic_maze",
    name: "Loïc Maze",
    bio: "<p>Lead développeur front chez Oui.Sncf, il rêve un jour de comprendre ce qui peut se passer dans la tête d’un designeur.</p>",
    photo: "jpg",
  },
  {
    id: "lydie_dareau",
    name: "Lydie Dareau",
    bio: "<p>Lead designeur chez Oui.Sncf, elle rêve un jour que les développeurs acceptent de mettre des chatons sur la homepage du site.</p>",
    photo: "jpg ",
  },
  {
    id: "pierre-yves_aillet",
    name: "Pierre-Yves Aillet",
    bio: "<p>Pierre-Yves est passionné d’informatique. Il développe depuis 15 ans sur des langages variées allant de PHP à Java en passant par Javascript. Son IHM de prédilection est la ligne de commande. Il intervient sur des missions d’audit, d’expertise technique ou d’accompagnement pour la mise en place d’outils et d’une démarche DevOps.</p>",
    photo: "jpg",
    twitter: "pyaillet",
  },
  {
    id: "florent_ramiere",
    name: "Florent Ramière",
    bio: "<p>Florent Ramière a plus de vingt années d'expérience dans le développement logiciel et la conduite de projets informatiques. Il a passé plusieurs années aux Etats-Unis chez un éditeur de logiciel. A son retour en France après un détour chez Capgemini, il a co-fondé la société Jaxio. Après plus de 10 ans d'entreprenariat, Florent a rejoint Confluent -la société fondée par les créateurs d'Apache Kafka- où il accompagne les grands comptes en Europe en tant que Technical Account Manager.</p>",
    photo: "jpg",
    twitter: "framiere",
    github: "framiere",
  },
  {
    id: "jmdoudoux",
    name: "Jean-Michel Doudoux",
    bio:
      "<p>Passionné par le développement de logiciels et par la veille technologique, je possède une longue expérience, en SSII/ESN et personnelle, dans l'écriture d'applications avec différents langages. Je suis actuellement le CTO d’Oxiane Luxembourg et du groupe Oxiane.</p>" +
      "<p> Utilisant Java depuis sa version 1.0, j'aime partager ma passion pour cette plateforme et son écosystème notamment en me consacrant, depuis presque vingt années, à la rédaction de deux tutoriels, intitulés \"Développons en Java\", diffusés sous licence GNU FDL. Ce travail m'a permis d'être nommé Java Champion. Je suis également un des cofondateurs du Lorraine JUG.</p>",
    photo: "jpg",
    twitter: "jmdoudoux",
    website: "www.jmdoudoux.fr",
  },
  {
    id: "francois_desmier",
    name: "François Desmier",
    bio: "<p>Maker chez MaifX, l'accélérateur technologique de la MAIF. Passionné par les nouveaux enjeux soulevés par l'arrivée à maturité d'internet et concerné par les aspects self-data et privacy ethic, j'explore les nouveaux territoires (blockchain, P2P) pour y défricher les nouveaux sentiers business et faire le lien avec nos directions métier.</p>",
    photo: "jpg",
    twitter: "desmfr",
    website: "http://www.francoisdesmier.fr",
  },
  {
    id: "mathias_bernardeau",
    name: "Mathias Bernardeau",
    bio: "<p></p>",
    photo: "jpg",
  },
  {
    id: "benjamin_demonet",
    name: "Benjamin Demonet",
    bio: "<p></p>",
  },
  {
    id: "abdellatif_el_maknati",
    name: "Abdellatif El Maknati",
    bio: "<p>Abdell est un passionné de développement et d'architecture en particulier dans les mondes JAVA EE, mobile et Web. Il a travaillé en tant qu'auto-entrepreneur dans le domaine du développement de sites Web. Aujourd'hui, il évolue dans le développement et l'architecture au sein de la société AMPLEXOR. En parallèle, il donne régulièrement des formations auprès de différentes écoles dans le domaine de l'ingénierie informatique et participe autant que possible à des conférences et autres événements.</p>",
    photo: "jpg",
  },
  {
    id: "guillaume_lours",
    name: "Guillaume Lours",
    bio: "<p>Developpeur Senior à Saagie, touchant aussi bien au backend qu'au front. Co-fondateur des conferences Lean Kanban France et Codeurs en Seine Red Coat à Devoxx France.</p>",
    photo: "jpg",
    twitter: "glours",
  },
  {
    id: "jean_pascal_thiery",
    name: "Jean-Pascal Thiery",
    bio: "<p>Java Craftsman et agiliste pratiquant.</p><p>Jean-Pascal a arpenté les voies de l'intégration continue jusqu'à intégrer la mouvance DevOps. Il aime : Java, Docker, Mesos, et la qualité des livrables. Il n'aime pas : les phrases qui commence par \"Normalement, ...\".</p>",
    photo: "jpg",
    twitter: "jpthiery",
    github: "jpthiery",
    website: "https://kodokojo.io",
  },
  {
    id: "antoine_le_taxin",
    name: "Antoine Le Taxin",
    bio: "<p>Développeur fullstack, afición du javascript de la première heure, Antoine suit avec passion les évolutions de l’écosystème : de Backbone à React en passant par Angular et Node, bon nombre de frameworks JS lui sont passés sous les doigts.</p>",
    photo: "jpg",
    twitter: "ModuloM",
    github: "ModuloM",
    website: "https://kodokojo.io",
  },
  {
    id: "youen_chene",
    name: "Youen Chéné",
    bio: "<p>CTO chez <a href='http://www.saagie.com' target='_blank'>Saagie</a>.</p><p>Passionné d'informatique et de programmation depuis le CE2 (génération MO5/TO7), je suis un des activistes au sein du Normandy JUG, Devoxx4Kids et de [Codeurs en Seine](http://www.codeursenseine.com).</p><p>J'ai fait 7 ans de prestation et de consulting en région parisienne, je suis passé développeur-manager chez Masternaut et je suis maintenant CTO chez Saagie, une plateforme big data prête à l'emploi.</p>",
    gravatar: "youen.chene@gadz.org",
    photo: "jpg",
    twitter: "youen_chene",
    github: "youenchene",
    website: "http://www.saagie.com",
  },
  {
    id: "olivier_tavard",
    name: "Olivier Tavard",
    bio: "<p>Olivier Tavard, est cofondateur et développeur au sein de la société France Labs, une startup innovante née fin 2011 à Sophia-Antipolis. La société est centrée sur les moteurs de recherche open source pour entreprise, notamment Apache Lucene/Solr et Elasticsearch.</p><p>Olivier a plusieurs années d’expérience dans les moteurs de recherche Lucene, Solr et Datafari. Enfin Olivier s’occupe de la R&D de la société, et travaille au développement de Datafari, le moteur de recherche open source pour entreprise de France Labs.</p>",
    photo: "jpg",
    website: "http://www.francelabs.com/",
  },
  {
    id: "rossi_oddet",
    name: "Rossi Oddet",
    bio: "<ul><li>Développeur Java & Web à Nantes chez SQLI</li><li>Co-organisateur des conférences JCertif en Afrique</li><li>Enthousiaste de l'écosystème des langages alternatifs de la JVM (Groovy, Scala, etc.)</li></ul>",
    gravatar: "rossi.oddet@gmail.com",
    twitter: "rossioddet",
    website: "http://blog.roddet.com",
  },
  {
    id: "fred_rivard",
    name: "Fred Rivard",
    bio: "With its dual competency, business and technology, Fred turns technologies assets into business reality within embedded systems. Prior to founding IS2T, Fred has been part at OTI/IBM of the Java compiler team, the J9 Java virtual machine team, and the pervasive embedded team.<br/><br/>MBA, PhD in computer science",
    photo: "jpg",
    twitter: "FredRivard_IS2T",
    website: "http://www.is2t.com/",
  },
  {
    id: "sebastien_prunier",
    name: "Sebastien Prunier",
    bio: '"Je suis Développeur chez SERLI, spécialisé dans les technologies Java, Cloud et NoSQL (MongoDB, Couchbase). Je m\'intéresse plus récemment au langage Javascript, côté client (Angular.js) et côté serveur (Node.js) . Je fais aussi quelques contributions autour de la solution BPM Bonita. Vous pouvez me croiser dans différentes conférences : JUGs, Devoxx France, JugSummerCamp, BreizhCamp, Google Dev Fest ..."',
    gravatar: "sebastien.prunier@gmail.com",
    twitter: "sebprunier",
  },
  {
    id: "manuel_boillod",
    name: "Manuel Boillod",
    bio:
      "<p>Manuel Boillod est architecte Cloud </p>" +
      "<p>Après de nombreuses années d'architecture logiciel et de développement dapplications, je me suis spécialisé dans les architectures et écosystèmes du Cloud Publique.</p>" +
      "<p>Désormais je m'épanouis à mettre en place les meilleurs pratiques d'ingénieurie logicielle (devops, gitops, infra as code, ...) et à accompagner les équipes sur leurs déploiements dans AWS, Azure et Kubernetes.</p>" +
      '<p>Manuel est également organisateur du <a href="http://nantesjug.org/" target="_blank">Nantes JUG</a> et aime échanger autour des projets et des technologies.</p>',
    photo: "jpg",
    twitter: "mboillod",
    github: "boillodmanuel",
  },
  {
    id: "nicolas_deloof",
    name: "Nicolas De Loof",
    bio: "<p>Hacker at CloudBees</p>",
    gravatar: "nicolas.deloof@gmail.com",
    twitter: "ndeloof",
    github: "ndeloof",
    website: "http://blog.loof.fr",
  },
  {
    id: "quentin_adam",
    name: "Quentin Adam",
    bio: "Quentin ADAM is the CEO of Clever Cloud, a disruptive Platform as a Service allowing PHP, java, scala, ruby or nodeJS apps to run directly as they are, quickly, with auto scaling of the resources they need. As a developer, but also as commerce and management guy, Quentin is a early server-side javascript evangelist, scala enthusiastic, a JVM lover and distributed architecture user. Apart from Clever Cloud, he's also the founder of CompanyCamp.us.",
    gravatar: "quentin.adam@clever-cloud.com",
  },
  {
    id: "guillaume_degre",
    name: "Guillaume Degre",
    bio: "Guillaume est cofondateur de l'agence Open Linking, spécialisée en génération de trafic. Disposant d'une formation initiale de développeur web (PHP / ASP / JS ...) il s'est peut à peu orienté vers le web marketing et notamment le référencement naturel alliant ainsi les approches technique et marketing. @gdegre sur twitter.",
    photo: "jpg",
  },
  {
    id: "antony_guilloteau",
    name: "Antony Guilloteau",
    bio:
      "<p>Après 12 années en tant que développeur, architecte, lead dev dans les technos Java EE, j'ai évolué vers le rôle de Scrum master. Depuis 5 ans j'interviens sur des projets stratégiques de Voyages-Sncf.com où l'agilité est ancrée dans l'ADN de l'entreprise.</p>" +
      '<p>Je suis également le co-fondateur de <a href="http://www.fenikso.fr" target="_blank">Fenikso</a>, société de conseil qui accompagne entreprises et collectivités dans le renouveau de leurs pratiques et de leurs organisations.</p>' +
      "<p>Facilitateur, coach, j'explore tous les jours de nouvelles pratiques pour rendre l'équipe plus agile.</p>",
    photo: "jpg",
    twitter: "@aguilloteau",
    website: "http://www.fenikso.fr",
  },
  {
    id: "benoit_simard",
    name: "Benoit Simard",
    bio: "Benoît est un développeur en informatique passionné par les nouvelles technologies et la philosophie du libre. Ayant réalisé ses études à l'institut des mathématiques appliquées à Angers, son domaine d'expertise s'est tourné vers celui du web et des données. Chef de projet technique dans une SSI il est aussi bénévole au sein d'associations : Libertic, Alliance-libre & firstjeudi.",
    gravatar: "contact@bsimard.com",
  },
  {
    id: "damien_raude_morvan",
    name: "Damien Raude-Morvan",
    bio: 'Damien occupe le poste de responsable technique au sein de la startup nantaise <a href="http://www.dictanova.com/" target="_blank">Dictanova</a>. Il a 10 ans d’expérience dans le développement de logiciels informatiques complexes. Il a travaillé pour le compte de plusieurs grandes entreprises françaises dans le cadre de missions d’expertises, d’encadrement d’équipes de développement ou d’architecture logicielle. <p>Il est également impliqué dans la communauté des logiciels libres, notamment via le projet <a href="https://www.debian.org/" target="_blank">Debian GNU/Linux</a> et intervient en tant qu’enseignant vacataire à l’<a href="http://www.sciences-techniques.univ-nantes.fr/" target="_blank">Université de Nantes</a></p>',
    gravatar: "drazzib@drazzib.com",
    twitter: "drazzib",
    github: "drazzib",
    website: "http://www.drazzib.com",
  },
  {
    id: "cedric_fauvet",
    name: "Cédric Fauvet",
    bio: "Pendant plus de 8 ans, Cédric a travaillé en tant que consultant expert d’intégration de données (ETI Extract, Datastage, Talend, PDI...). Il a ensuite travaillé pour la startup française Talend en tant que consultant avant-vente, puis pour la startup américaine Pentaho en tant que responsable avant-vente France pour y être ensuite promu Business Developer du bureau Français. Aujourd’hui en poste chez Neotechnology, il organise le GraphDatabase meetup de Paris.",
    twitter: "CedricFauvet",
    website: "http://www.neotechnology.com/",
  },
  {
    id: "christophe_jollivet",
    name: "Christophe Jollivet",
    bio: "Développeur chez Apside et leader du JUG de Tours, Christophe Jollivet était, comme beaucoup d'entre nous, très réfractaire à JavaScript et faisait tout pour l'éviter. Et pourtant, après se être décidé à re-apprendre le langage et comprendre l'écosystème JavaScript actuel, il passe une bonne partie de son temps personnel à coder en JavaScript.",
    photo: "jpg",
  },
  {
    id: "jerome_creignou",
    name: "Jérôme Creignou",
    bio: "Expert Java EE chez MAAF Assurances, Jérôme travaille sur les technologies Java / Java EE depuis 10 ans. Il travaille sur les évolutions du socle de développement, à la réalisation de prototypes et d'expérimentations technologiques et assure le support de niveau 3 auprès des équipes de développement et de production. Il participe à l'évolution du cadre de développement Java à la MAAF. Depuis 2 ans Jérôme \"bricole\" beaucoup avec le javascript et particulièrement nodejs.",
    gravatar: "jerome.creignou@gmail.com",
  },
  {
    id: "julien_vey",
    name: "Julien Vey",
    bio: "Julien est développeur Java chez Zenika, passionné par tout ce qui a trait au web et aux nouveaux outils & langages associés. Julien a grandi dans le monde des RIA, avec Flex puis GWT, et s'est plus récemment donné comme mission de faire connaître le langage Dart en France.",
    gravatar: "vey.julien@gmail.com",
  },
  {
    id: "cedric_pineau",
    name: "Cédric Pineau",
    bio:
      "<p>Directeur de la technologie chez Taelys.</p>" +
      "<p>Enthousiasmé par la programmation fonctionnelle, entravé par mon quotidien de javaiste, passionné par les réflexions autour des architectures logicielles, interpellé par la qualité de ce que l'on produit, intéressé par les questions de performance, amusé par les modes qui rythment notre métier..</p>",
    twitter: "cedricpineau",
    website: "http://www.taelys.com",
  },
  {
    id: "david_pilato",
    name: "David Pilato",
    bio:
      '<p>David Pilato est "technical advocate" chez <a href="http://elasticsearch.com/" target="_blank">Elasticsearch.com</a>, après avoir passé les deux dernières années à promouvoir le projet open-source Elasticsearch, dont il anime la communauté française. Fidèle des JUG, il a donné une conférence sur le sujet lors de la première édition de Devoxx France en avril 2012 et sillonne désormais les routes de France pour partager sa passion. Il a implémenté un certain nombre de plugins pour l\'écosystème Elasticsearch (Rivers RSS, FileSystem et DropBox, Factories Spring).</p>' +
      '<p>Il a également implémenté Elasticsearch pour plusieurs projets, dont une importante administration française. Il est le co-auteur du projet open-source <a href="http://www.scrutmydocs.org/" target="_blank">[Scrutmydocs.org]</a> basé sur Elasticsearch qui permet de disposer d\'un moteur de recherche "à la google" des documents de vos disques durs.</p>' +
      "<p>@dadoonet et @ElasticsearchFR sur Twitter</p>",
    gravatar: "david@pilato.fr",
    twitter: "dadoonet",
    github: "dadoonet",
  },
  {
    id: "emmanuel_bernard",
    name: "Emmanuel Bernard",
    bio: "Diplômé de Supélec, Emmanuel a passé quelques années dans le secteur de la grande distribution où il a commencé à s'impliquer dans le monde de l'ORM. Il a rejoint l'équipe Hibernate en 2003 et est maintenant développeur principal chez JBoss de Red Hat. Emmanuel est le développeur principal d'Hibernate Annotations et Hibernate EntityManager, 2 projets clés qui s'appuient sur Hibernate Core pour implémenter la spécification Java Persistence (tm) et dirige également Hibernate Search et Validator. Emmanuel est membre de l'expert group JPA 2.0 et spec lead de la JSR 303: Bean Validation. Il intervient régulièrement dans diverses conférences et JUGs, dont JavaOne, JBoss World, Devoxx et est le co-auteur d'Hibernate Search in Action publié par Manning. Il est le fondateur du podcast Français sur Java lescastcodeurs.com.",
    gravatar: "emmanuel@hibernate.org",
  },
  {
    id: "tugdual_grall",
    name: "Tugdual Grall",
    bio: "Tug est Technical Account Manager chez <a href='https://redislabs.com'>RedisLabs</a> où il accompagne les clients dans leur déploiement de Redis; et travaille avec les différentes communautés de développeurs pour l'adoption de Redis et du NoSQL en général. Avant de rejoindre RedisLabs, Tug a travaillé chez Red Hat (Product Manager), MapR, MongoDB, Couchbase (Technical Evangelist) , eXo Platform (CTO) et Oracle (Product Manager/Developer OracleAS JavaEE).<br/><br/>Tug a participé à de nombreuses conférences DevoxxFR, FOSDEM, Google I/O, JavaOne et de nombreux meetups/groupes utilisateurs. Tugdual est co-fondateur du @NantesJUG. Lorsqu’il a le temps, il navigue en windsurf et code une application enregistrant ses performances <a href='https://pointeau-speed-challenge.com/'>https://pointeau-speed-challenge.com/</a> .",
    gravatar: "tugdual@gmail.com",
    twitter: "tgrall",
    github: "tgrall",
    website: "http://tgrall.github.io",
  },
  {
    id: "julien_ruchaud",
    name: "Julien Ruchaud",
    bio: "Julien Ruchaud est un ingénieur Java Web au sein d'une SSLL Nantaise Code Lutin. Il est le créateur du projet WebMotion. L'idée du projet est venu au fil de son expérience, en portant une forte critique sur les frameworks web existants, qui imposent entre autre des architectures contraignantes.",
  },
  {
    id: "peter_moskovits",
    name: "Peter Moskovits",
    bio: "Peter is a Developer Advocate for Kaazing, a software company enhancing the way business and customers communicate across the Web using the new HTML5 WebSocket standard. Peter works closely with the developer community to architect and deploy the best possible web communication solutions. Before joining Kaazing, in various product management leadership roles Peter was responsible for Oracle's portal product strategy. Peter is a frequent speaker at conferences and industry events, such as JavaOne, Oracle OpenWorld, and various user group meetings, and is the co-author of the Oracle WebCenter 11g Handbook. Peter is currently busy co-authoring The Definitive Guide to HTML5 WebSocket book, published by Apress.",
    photo: "jpg",
  },
  {
    id: "benjamin_poussin",
    name: "Benjamin Poussin",
    bio: "Gérant de la société Code Lutin, membre fondateur des réseaux Libre-Entreprise et Alliance-Libre, spécialisé dans les technologies Java et UML. Benjamin a aussi été responsable du thème entreprise lors des RMLL 2009 à Nantes.",
  },
  {
    id: "cedric_champeau",
    name: "Cédric Champeau",
    bio: 'Cédric Champeau travaille pour Oracle Labs, dans l\'équipe GraalVM et en particulier sur le framework Micronaut. Il est spécialisé dans la productivité développeur et maintient entre autres les plugins officiels de GraalVM et Micronaut pour Gradle et Maven. Il a travaillé plusieurs années pour Gradle Inc. sur des problématiques de gestion de dépendances et autre productivité développeur. Ancien contributeur sur le langage Groovy, il a notamment implémenté son compilateur statique. En dehors de l\'informatique, Cédric est un passionné d\'astronomie.',
    photo: 'jpg',
    twitter: "CedricChampeau",
    website: "http://melix.github.io/blog",
  },
  {
    id: "stephane_epardaud",
    name: "Stéphane Epardaud",
    bio: "Depuis les hautes montagnes de Nice, Stéphane travaille pour Red Hat sur le project Ceylon. C'est un hacker passionné de Java, C, Perl ou Scheme. Enthousiaste des standards web et des bases de données, il a travaillé sur divers projets tel qu'un éditeur XML WYSIWYG, une libraire de multi-threading enn C, un langage pour agents mobiles en Scheme (compilateur et machines virtuelles), ainsi que des services web 2.0 RESTful et une interfaces web riches en HTML 5 / Javascript. Avide de partage de connaissance, il va souvent prêcher sa paroisse dans des conférences tels que Scheme Workshop 2004, Nice Technical University en 2008, Polytech'Nice en 2009, le Mars JUG, le Paris JUG et le Riviera Java User Group qu'il a crée avec Nicolas Leroux. Acteur passionné d'open source depuis le début, il contribute au projet RESTEasy, et crée les projets jax-doclets, stamps.js, quelques modules de Play! Framework et développe des projets Ceylon pour Red Hat.",
    gravatar: "stephane.epardaud@gmail.com",
    photo: "jpg",
  },
  {
    id: "marek_jelen",
    name: "Marek Jelen",
    bio: "Open Shift Developer Evangelist",
    photo: "jpg",
  },
  {
    id: "medy_belmokhtar",
    name: "Médy Belmokhtar",
    bio: "Passionné des technos JS, il réalise chez NETAPSYS l'évangélisation et l'intégration de projets autour du framework ANGULAR-JS",
    gravatar: "medy.belmokhtar@netapsys.fr",
  },
  {
    id: "sebastien_roul",
    name: "Sebastien Roul",
    bio: "20 ans de développement, depuis VB 1.0 - mon métier : Construire et maintenir des logiciels.",
    gravatar: "sebastien.roul@netapsys.fr",
  },
  {
    id: "eric_charbonnier",
    name: "Eric Charbonnier",
    bio: 'Eric est Software IT Architect chez IBM, ou il est en charge du suivi technique des projets autour des solutions logicielles IBM. Son passé est essentiellement Software car Eric était spécialisé dans les middlewares comme WebSphere chez IBM. Aujourd\'hui, Eric est amené à assumer des rôles aussi différents que ceux de "Solution Designer" , "Technology Advisor", "Methodologist" dans des phases d\'avant vente de toute l\'offre software d\'IBM.',
    photo: "jpg",
  },
  {
    id: "dimitri_baeli",
    name: "Dimitri Baeli",
    bio: "Dimitri BAELI baigne dans l'univers Java depuis plus de 10 ans, sa passion pour les usines logicielles, l'organisation des développements, et les méthodes agiles ne l'empêche pas de mettre les mains dans le cambouis et développer des outils utiles aux développeurs.",
    gravatar: "dbaeli@gmail.com",
    photo: "jpg",
  },
  {
    id: "julien_dubois",
    name: "Julien Dubois",
    bio: "Julien Dubois est directeur du pôle conseil chez Ippon Technologies, société spécialisée dans le développement et l'architecture d'applications Java. Il y dirige une équipe de consultants et architectes de haut niveau, et intervient régulièrement chez les clients de la société. Julien est connu dans le monde Java pour avoir co-écrit le livre “Spring par la pratique”, avoir dirigé la filiale française de SpringSource, et pour parler régulièrement à des conférences. Vous pouvez le suivre sur Twitter: @juliendubois.",
    gravatar: "julien.dubois@gmail.com",
    twitter: "juliendubois",
  },
  {
    id: "jean_baptiste_defard",
    name: "Jean-Baptiste Defard",
    bio: "Jean-Baptiste Defard a fété en 2007 ses 20 ans de développement en informatique. Il s'est spécialisé dans la mise en oeuvre d'architectures objet. Tombé dans la marmite du C++ tout petit, il travaille aujourd'hui essentiellement en Java dans le domaine des applications d'entreprise. Il a rejoint Netapsys en 2007 et en a intégré sa direction technique.",
    photo: "jpg",
  },
  {
    id: "didier_girard",
    name: "Didier Girard",
    bio: 'Didier Girard est à la tête de la Direction Innovation et des Nouvelles Technologies de SFEIR où il définit la stratégie technologique de l\'entreprise tout en assurant des missions d\'architecture pour des grands comptes. Il est Docteur en Informatique de l\'Ecole Normale Supérieure de Lyon, architecte J2EE, il utilise Java coté serveur depuis 1997. Créateur du site portail <a href="http://www.application-servers.com" target="_blank">http://www.application-servers.com</a> et de <a href="http://www.ongwt.com" target="_blank">http://www.ongwt.com</a>, il anime régulièrement des conférences sur des sujets comme l\'industrialisation des développements, le client riche, Eclipse, les services web, l\'architecture J2EE… Didier Girard a été Directeur Technique de IMPROVE après avoir passé 4 ans chez Atos.',
    gravatar: "didier.girard@gmail.com",
  },
  {
    id: "redwene_haddou",
    name: "Redwene Haddou",
    bio: "Redwene est Architecte chez Sogeti Ouest.",
    photo: "jpg",
  },
  {
    id: "arnaud_heritier",
    name: "Arnaud Héritier",
    bio: "Arnaud Héritier est architecte senior. Il a dix années d'expériences professionnelles acquises au sein d'éditeurs de logiciels, de sociétés de services et de cabinets de conseil. Il rejoint eXo Platform en Juillet 2009 en tant que Software Factory Manager. Il y est responsable des méthodes et outils utilisés pour développer et livrer les produits. Il participe à divers projets open-source depuis plusieurs années. Sa contribution principale est pour le projet Apache Maven qu'il a rejoint en 2004 et dont il fait parti du comité de direction (PMC). Il est régulièrement speaker dans des conférences ou JUGs, et est le co-auteur du livre Apache Maven aux éditions Pearson. Il est diplômé d'un DESS en génie des logiciels applicatifs à l'université de Jussieu, Paris VI. Son Blog: <a href=\"http://blog.aheritier.net\" target=\"_blank\">http://blog.aheritier.net</a>",
    gravatar: "aheritier@gmail.com",
    website: "http://blog.aheritier.net",
  },
  {
    id: "olivier_jacob",
    name: "Olivier Jacob",
    bio: "Olivier est expert chez OCTO Technology depuis 2005. Il intervient principalement sur des missions d'architecture JEE et de mise en place de pratiques d'industrialisation des développements et agiles pour de grands comptes Français. Utilisateur de Maven depuis sa première version en 2003, il est rapidement devenu adepte de l'outil et accompagne aujourd'hui ses clients dans sa mise en place à l'échelle de l'entreprise.",
    photo: "jpg",
  },
  {
    id: "guillaume_laforge",
    name: "Guillaume Laforge",
    bio: "Guillaume Laforge est Developer Advocate chez Google Cloud, où il se focalise sur les architectures orientées événement, l'orchestration d'API, et l'intelligence artificielle générative. Dans le monde Java, Guillaume est sans doute plus connu pour avoir co-fondé le langage de programmation Apache Groovy, et pour être un des membres fondateurs du podcast tech Les Cast Codeurs.",
    gravatar: "glaforge@gmail.com",
    twitter: "glaforge",
    github: "glaforge",
  },
  {
    id: "francois_le_droff",
    name: "Francois Le Droff",
    bio: "Brestois d'origine, Parisien d'adoption, François est architecte technique chez Adobe France depuis 2007, après 9 ans d'expérience dans le développement d'applications Web principalement enJava/JavaEE. Acteur et contributeur de la communauté open source (qsos, xradar, fna), François est membre de l'OSSGTP, et du ParisJUG. Son Blog: <a href=\"http://droff.com\" target=\"_blank\">http://droff.com</a>",
    gravatar: "francois.le.droff@gmail.com",
  },
  {
    id: "rodrigue_le_gall",
    name: "Rodrigue Le Gall",
    bio: "Rodrigue Le Gall, Responsable des Services et co-fondateur de BonitaSoft.",
    photo: "jpg",
  },
  {
    id: "alexis_moussine_pouchkine",
    name: "Alexis Moussine-Pouchkine",
    bio: 'Alexis Moussine-Pouchkine aime le bon vin et les architectures Java. Chez Sun Microsystems, il tient le rôle d\'ambassadeur du projet Iibre GlassFish, un serveur d\'application Java EE de nouvelle génération. Ceci lui permet de rencontrer lors de réunions ou de conférences de nombreux développeurs Java et autres utilisateurs de technologies libres. Il participe à plusieurs communautés open source, traduit en français des ouvrages techniques autour de Java ou XML et possède néanmoins une vie en dehors de Java ! Son blog: <a href="http://blogs.sun.com/alexismp" target="_blank">http://blogs.sun.com/alexismp</a>',
    gravatar: "alexis.mp@gmail.com",
  },
  {
    id: "marian_muller",
    name: "Marian Muller",
    bio: "Marian Muller est un ingénieur Java à Serli. Dans le cadre des activités de R&D de la société, il participe au développement des serveurs Java EE GlassFish et JOnAS. Il a notamment conçu et développé la fonctionnalité de rolling upgrade pour GlassFish 4, et présenté le résultat de ses travaux à Devoxx 2011.",
  },
  {
    id: "christophe_pruvost",
    name: "Christophe Pruvost",
    bio: "Christophe est Solution Architect & Ingenieur Avant Vente Oracle France, il accompagne les clients durant les projets et phases d'avant vente autour des technologies JavaEE, Grille de Données (Data Grid) et SOA.",
  },
  {
    id: "antoine_sabot_durand",
    name: "Antoine Sabot-Durand",
    bio: "Après avoir travaillé pendant plus de 15 ans dans différentes société de service en informatique, Antoine est aujourd’hui employé chez Red Hat ou il co-dirige la spécification CDI et est en charge du développement de l’éco-système CDI. Il est également tech lead sur le projet Agorava permettant de développer des applications clientes des principaux réseaux sociaux.",
    photo: "jpg",
  },
  {
    id: "gregory_boissinot",
    name: "Grégory Boissinot",
    bio:
      "<p>Grégory est consultant Zenika, un cabinet d'architecture informatique spécialisé dans le conseil et la réalisation de solutions basées sur les nouvelles technologies.</p>" +
      "<p>Il est un spécialiste des différents outils de build et des problématiques d'intégration continue qu'il a mis en place à grande échelle. Il possède une expérience industrielle grand compte de ces problématiques et contribue activement à la communauté Open Source dans ce domaine en étant l'un des principaux commiteurs Jenkins/Hudson.</p>" +
      "<p>Evangéliste Gradle, Grégory est convaincu de l'apport de cet outil de build à la réussite des projets!</p>",
    photo: "jpg",
  },
  {
    id: "jose_paumard",
    name: "José Paumard",
    bio: "<p>José est Java Developer Advocate chez Oracle. PhD en mathématiques appliquées, maître de conférences à l'Université Sorbonne Paris Nord pendant 25 years, il est Java Champion Alumni et JavaOne Rockstar. Il est membre et organisateur du Paris JUG, et a été co-créateur de Devoxx France qu'il a co-organisé pendant 3 ans. Il a aussi co-créé JChateau, une unconference dans la Vallée de la Loire. Il développe le site de documentation <a href=\"https://dev.java\">https://dev.java</a>, publie tous les mois le JEP Café sur YouTube, et entretient une série de 80 heures de cours Java en français, également sur YouTube. Il est également auteur Java pour Pluralsight.</p>",
    gravatar: "jose.paumard@gmail.com",
    twitter: "JosePaumard",
    website: "http://blog.paumard.org",
  },
  {
    id: "hugo_wood",
    name: "Hugo Wood",
    bio: "Développeur autodidacte depuis 2003, professionnel depuis 2013, je n'ai de cesse d'apprendre de nouvelles techniques pour améliorer mon savoir-faire. J'aime étudier les langages, de C# à Haskell. Au quotidien, ce sont Java et JavaScript qui m'accaparent: je suis consultant et formateur chez Zenika. Enfin, j'apprécie les jeux de code : vous me retrouverez par exemple sur CodinGame, et là, c'est Python 3.",
    gravatar: "hx4.5@free.fr",
    twitter: "mercury_wood",
    github: "hgwood",
    website: "https://github.com/hgwood/blog",
  },
  {
    id: "dominique_jocal",
    name: "Dominique Jocal",
    bio: "Responsable informatique de l'activité Prévoyance chez le courtier gestionnaire nantais CBP, architecte, concepteur et codeur du système maison de Prévoyance, basé Spring, Grails et désormais Micronaut.",
    photo: "jpg",
    twitter: "djocal",
    website: "http://journaldudoj.blogspot.fr",
  },
  {
    id: "xavier_hanin",
    name: "Xavier Hanin",
    bio: "Après de nombreuses péripéties en tant qu'indépendant ou créateur de société, Xavier est actuellement architecte principal et responsable de l'agence de Bordeaux chez 4sh France, société de service spécialisée dans l'accompagnement des éditeurs de logiciels.<br/>Passionné par le développement en particulier Java et Web, il se disperse souvent notamment dans les projets open source (il est notamment créateur d'Apache Ivy et plus récemment de restx.io).<br/>Il partage volontiers sa passion en tant qu'enseignant à l'ENSEIRB MATMECA, fondateur du BordeauxJUG, ainsi que lors de conférences comme ApacheCon, JavaZone ou Devoxx ou plus simplement autour d'un verre.<br/>Vous pouvez le suivre sur twitter: @xavierhanin",
    gravatar: "xavier.hanin@gmail.com",
    twitter: "xavierhanin",
  },
  {
    id: "arnaud_bailly",
    name: "Arnaud Bailly",
    bio:
      "<p>Après diverses péripéties, dont un passage en banque, la création d'une société d'édition de jeux de rôles, une thèse en informatique, diverses missions longues pour des SSII ou des éditeurs de logiciels, Arnaud travaille aujourd'hui en tant qu'indépendant au sein de la société Murex comme développeur/consultant/coach technique/homme à tout faire.</p>" +
      "<p>Il se passionne pour tout ce qui a trait de près ou de loin au code, avec une dilection particulière pour l'univers Java côté serveur.</p>",
    gravatar: "arnaud.oqube@gmail.com",
    twitter: "abailly",
  },
  {
    id: "jerome_leleu",
    name: "Jérôme Leleu",
    bio:
      "<p>13 ans d'expérience dans le développement principalement sur du J2E.</p>" +
      "<p>Comme architecte chez SFR, je travaille depuis 2009 sur le SSO CAS des sites sfr.fr. Je suis actuellement responsable de l'architecture identité et selfcare.</p>" +
      '<p>Profil technique passionné, je suis committer sur le projet CAS et intéressé par tous les protocoles/librairies de sécurité, notamment avec la création de ma librairie <a href="https://github.com/leleuj/pac4j" target="_blank">pac4j</a>.</p>',
    photo: "gif",
    twitter: "leleuj",
    github: "leleuj",
  },
  {
    id: "maxime_greau",
    name: "Maxime Gréau",
    bio: "<p></p>" + "<p></p>" + "<p></p>",
    gravatar: "greaumaxime@gmail.com",
    twitter: "mgreau",
    website: "http://mgreau.com",
  },
  {
    id: "david_gageot",
    name: "David Gageot",
    bio:
      "<p>David is a Developer Advocate at Google Cloud. He's working on Containers Tools.</p>" +
      "<p>Previously, he helped open the R&D office of Docker in Paris</p>",
    gravatar: "dgageot@gmail.com",
    twitter: "dgageot",
    github: "dgageot",
    website: "http://blog.javabien.net/",
  },
  {
    id: "pierre_reliquet",
    name: "Pierre Reliquet",
    bio: "<p>Pierre Reliquet est consultant au sein de Zenika et formateur AngularJS. Il s'intéresse, particulièrement, à la stack web dont les rapides évolutions forcent les développeurs à se remettre sans cesse en question.</p>",
    gravatar: "pierre.reliquet@gmail.com",
    twitter: "preliquet",
    github: "PierreReliquet",
  },
  {
    id: "tyler_jewell",
    name: "Tyler Jewell",
    bio: "<p>Tyler Jewell is CEO of Codenvy, the cloud development environment, and a venture partner with Toba Capital where he focuses on investments on businesses related to middleware and application development. Tyler sits on the board of WSO2 and has made investments in ZeroTurnaround, InfoQ and AppHarbor.</p>",
    photo: "jpg",
    twitter: "TylerJewell",
    github: "TylerJewell",
  },
  {
    id: "stevan_le_meur",
    name: "Stévan Le Meur",
    bio: "<p>Stévan Le Meur est chef de produit chez Red Hat, spécialisé dans les outils pour développeurs et les technologies cloud, et travaille notamment sur Podman Desktop. Convaincu que de belles applications ne peuvent être créées que dans des environnements de développement exceptionnels, Stévan collabore étroitement avec les clients et les communautés open sources, saisissant toute opportunité pour simplifier la vie des développeurs.</p>",
    gravatar: "slemeur@codenvy.com",
    twitter: "stevanlm",
    website: "http://podman-desktop.io",
  },
  {
    id: "florent_benoit",
    name: "Florent Benoit",
    bio:
      "<p>Florent Benoit is working at Codenvy. He's working on the SaaS developer environment Codenvy by bringing support of JavaScript technologies like AngularJS, Grunt, bower, gulp.js and Yeoman.<p>" +
      "<p>He's also contributing to the CLI tool used to manage Codenvy projects, build or run applications.</p>" +
      "<p>Florent is also a member of Java EE specification including Java EE 8 and CDI 2.0.</p>" +
      "<p>Florent is an Eclipse committer on Eclipse Che project</p>",
    gravatar: "fbenoit@codenvy.com",
    twitter: "florentbenoit",
  },
  {
    id: "laurent_guerin",
    name: "Laurent Guerin",
    bio:
      "Specialized in Java and Web technologies with over 20 years of experience in the areas of databases, object development, code generation and project management." +
      "<ul>" +
      "<li>Senior Consultant</li>" +
      "<li>Java expert</li>" +
      "<li>Skill group manager</li>" +
      "<li>Technical evangelist</li>" +
      "<li>Part time professor ( University of Nantes )</li>" +
      "<li>OW2 member</li>" +
      "<li>Telosys project leader</li>" +
      "<li>Lecturer (Devoxx, MDDay, Open World Forum, … )</li>" +
      "<li>Certified Scrum Master</li>" +
      "</ul>",
    photo: "jpg",
    twitter: "ltguerin",
    github: "l-gu",
    website: "http://labs.sogeti.com/author/laurent-guerin/‎",
  },
  {
    id: "benoit_wilcox",
    name: "Benoit Wilcox",
    bio:
      "<p>Benoit Wilcox has been working in IT for 12 years, occupying different positions such as developer, integrator, technical manager and architect, dealing with a large range of technologies which has given him a rich and heterogeneous culture (Java, .Net, functional languages, scrum master, SIG).</p> " +
      "<p>For 3 years he’s been focused on Agile methods integration in companies, aiming at accompanying people and projects all along their transformation towards agile methods and to ensure the agile architecture of a project.</p> " +
      "<p>Besides his role as an applicative architect, his expertise also reaches the Scrum and XP methods and, in more technical terms, all developments lead by tests and behaviors (TDD, BDD) as well as ongoing integration.</p> " +
      "<p>Benoit is passionate about his work. He contributes to several projects i.e., Telosys Tools, Virtual Brown Paper and runs a personal blog around development and agile.</p> ",
    photo: "jpg",
    twitter: "WilcoxBenoit",
    github: "bewilcox",
    website: "http://labs.sogeti.com/benoit-wilcox/",
  },
  {
    id: "ludovic_chaboud",
    name: "Ludovic Chaboud",
    bio: "<p>Architecte Java/Web chez Sogeti, commiter sur le projet Telosys Tools pour la partie AngularJS, Spring MVC, JPA</p>",
    gravatar: "ludo1026@free.fr",
    twitter: "ludovicchaboud",
    github: "ludo1026",
    website: "http://blog2dev.blogspot.fr/",
  },
  {
    id: "thibaud_raison",
    name: "Thibaud Raison",
    bio:
      "<p>Thibaud est freelance depuis 2014.</p>" +
      "Depuis 20 ans, développeur et architecte logiciel (Java, Oracle), dans le domaine de la monétique, du transport, dans l'édition de logiciels, en R&D, ... à Grenoble, Valence ou Nantes.</p>",
    photo: "jpg",
    twitter: "ThibaudRaison",
  },
  {
    id: "pierre_cosson",
    name: "Pierre Cosson",
    bio: "<p>Pierre Cosson est développeur, chef de projet technique et formateur chez Kosmos éditeur d'une solution CMS spécialisé dans l’Éducation (Universités et Grandes Écoles).</p>",
    photo: "jpg",
  },
  {
    id: "ludovic_praud",
    name: "Ludovic Praud",
    bio:
      "<p>Ludovic a commencé sur Paris pour le compte de grandes usines ;-) (Energie et banque).</p>" +
      "<p>Aujourd'hui, il se qualifierait d'artisan Java/Web.</p>" +
      "<p>Il développe à Nantes depuis 2008 des applications Web pour des startups assez différentes : vote électronique, e-commerce, SaaS de paiement électronique et application WebTV.</p>" +
      "<p>Ludovic s'intéresse aux projets Guava, Play et Spring en contribuant de temps en temps à leur bug tracker et à leur mailing list :-p</p>",
    photo: "jpg",
  },
  {
    id: "mathilde_lemee",
    name: "Mathilde Lemée",
    bio:
      "<p>Après 2 ans à travailler pour Terracotta, Mathilde Lemée est désormais consultante freelance.</p>" +
      '<p>Elle a cofondé les <a href="http://www.duchess-france.org/" target="_blank">Duchess France</a> pour connecter et rendre visible les femmes travaillant dans le monde Java. En 2012 elle a organisé de nombreux évènements (Hadoop, Mahout, Mockito, Cache …). Elle blog sur <a href="http://java-freelance.fr" target="_blank">java-freelance.fr</a> sur les performances, les meilleures pratiques et les tests.</p>' +
      "<p>Elle contribue régulièrement à des projets open source et a créé FluentLenium, un surcouche de Selenium pour fournir une api fluide comme le font des projets comme Play!2.</p>" +
      '<p>Elle intervient aussi régulièrement dans des conférences Java en Europe (Paris JUG, Devoxx France, Mix-it, Softshake) et édite un jeux mobile éducatif (<a href="http://aetys.fr" target="_blank">Aetys.fr</a>) pour IPad/iPhone et Android.</p>',
    gravatar: "mathilde.lemee@yahoo.fr",
    twitter: "MathildeLemee",
  },
  {
    id: "didier_deschamps",
    name: "Didier Deschamps",
    bio:
      "<p>Didier est un footballeur puis entraîneur français de renommée internationale. Il a évolué au poste de milieu de terrain dans plusieurs grands clubs européens, notamment au FC Nantes, et en équipe de France.</p>" +
      "<p>Après sa retraite de joueur, il va occuper la fonction d'entraîneur de football dans différents clubs : l'OM , l'AS Monaco et la Juventus de Turin.</p>" +
      "<p>Depuis le 8 juillet 2012, Didier Deschamps assume le poste de sélectionneur de l'équipe de France.</p>",
    photo: "jpg",
  },
  {
    id: "jean-francois-garreau",
    name: "Jean-François Garreau",
    bio:
      "<p>Consultant IT chez @SQLI et Leader du @GDGNantes. Jean-François est développeur depuis maintenant 10 ans. Il a toujours évolué dans un monde java et a découvert Android en 2009 avec la version 1.1. Depuis, il continue de suivre les évolutions de la plateforme. </p>" +
      "<p>Depuis maintenant an et demi il a commencé à s'intéresser plus en profondeur au Web avec des sujets comme AngularJS / WebRTC / WebSockets.</p>",
    gravatar: "jean.francois.garreau@gmail.com",
    twitter: "jefBinomed",
    github: "jefBinomed",
  },
  {
    id: "cecilia_bossard",
    name: "Cécilia Bossard",
    bio: "<p>Développeuse, agiliste, boîte à outils, petit lutin du logiciel libre à Code Lutin</p>",
    photo: "jpg",
    twitter: "CeciliaBossard",
    github: "cbossard",
  },
  {
    id: "jean_palies",
    name: "Jean Paliès",
    bio: "<p>Je suis un développeur indépendant, à Nantes. Je suis aussi cofondateur des WIT et des Coding Goûters à Nantes. Je participe dès que je le peux aux Devoxx4Kids.</p>",
    photo: "jpg",
  },
  {
    id: "david_morin",
    name: "David Morin",
    bio: "<p>Développeur Java avant tout, David s'intéresse à tout ce qui tourne autour de la JVM avec un vif intérêt pour les aspects performance et scalabilité. Il découvre Hadoop en 2011 et se passionne pour son écosystème dynamique. Il a notamment travaillé sur la mise en place de la solution Big Data basée sur Hadoop au sein du Crédit Mutuel Arkea. Aujourd'hui, David travaille pour Cityzen Data, une start-up fournissant une plateforme scalable, sécurisée et éthique pour les données issues de capteurs.</p>",
    photo: "jpg",
    twitter: "davAtBzh",
  },
  {
    id: "thierry_wasylcszenko",
    name: "Thierry WASYLCZENKO",
    bio: "<p>Thierry est développeur Java depuis plusieurs années chez General Electric Healthcare en France et se passionne pour le polyglottisme, l'architecture des projets, JavaFX et les nouveaux outils qui facilitent la vie d'un développeur. Il est également auteur pour RebelLabs de ZeroTurnaround et l'un des leader de l'ElsassJUG, le JUG de Strasbourg en France. Suivez le sur LinkedIn ou sur Twitter @twasyl.</p>",
    photo: "jpg",
    twitter: "twasyl",
  },
  {
    id: "duyhai_doan",
    name: "DuyHai Doan",
    bio: "<p>DuyHai Doan is a Cassandra technical advocate. He spends his time between technical presentations/meetups on Cassandra, coding on open source projects to support the community and helping all companies using Cassandra to make their project successful. Previously he was working as a freelance Java/Cassandra consultant.</p>",
    photo: "jpg",
    twitter: "doanduyhai",
  },
  {
    id: "francois_kha",
    name: "François Kha",
    bio: "<p>Développeur chez CBP, courtier de gestion en assurance à Nantes. François s'intéresse aux pratiques de déploiement continu.</p>",
    gravatar: "francois.kha@gmail.com",
    twitter: "fanchok",
  },
  {
    id: "renan_michaud",
    name: "Renan Michaud",
    bio: "<p>Leader Technique chez VSC Technologies, je m'occupe notamment d'aider les équipes de développement de Nantes dans la démarche DevOps et dans la fourniture d'outils permettant d'améliorer la démarche Agile au sein des projets.</p>",
    gravatar: "renan.michaud@gmail.com",
    twitter: "renanmichaud",
  },
  {
    id: "gabriel_landais",
    name: "Gabriel Landais",
    bio: "<p>Lead développeur Java/SIG chez Capgemini, après être passé par de nombreuses autres entreprises.</p>",
    photo: "jpg",
  },
  {
    id: "clement_delafargue",
    name: "Clément Delafargue",
    bio:
      "<p>Clément Delafargue est consultant indépendant. Il travaille dans le web depuis 2002. Il est particulièrement intéressé par la programmation fonctionnelle.</p>" +
      "<p>Passionné par la technique et le développement, il a co-fondé en 2009 Eklaweb, une entreprise de développement sur mesure. Dans ce cadre, il a assemblé une équipe d’ingénieurs et les a formés à la programmation fonctionnelle. Il est désormais consultant indépendant et collabore avec différentes startups dont Clever-Cloud et Sounderbox.</p>" +
      "<p>En parallèle de son activité professionnelle, il donne des cours de développement, de FP et de CI à l’École Centrale de Nantes et à l’IMIE. Il a créé le Nantes FP, y donne des conférences et fait partie de scala.io</p>",
    photo: "jpg",
    twitter: "clementd",
    github: "divarvel",
    website: "http://cltdl.fr/blog",
  },
  {
    id: "florence_herrou",
    name: "Florence Herrou",
    bio: "<p>D'une formation initiale sur le comportement animal, je suis passée en devenant informaticienne au comportement bien plus étrange et déroutant des clients et parfois des utilisateurs. Consultante pour la société Ippon technologies à Nantes depuis 2007, j'ai pendant ces années effectué de nombreuses (et variées) missions de développement - comprenant souvent des conseils et de l'accompagnement du client pour créer une application utilisable.</p>",
    photo: "jpg",
    website: "http://blog.ippon.fr/author/florence_herrou/",
  },
  {
    id: "anthonny_querouil",
    name: "Anthonny Quérouil",
    bio: "<p>Le jour, je suis développeur indépendant et j’interviens sur les problématiques backend et frontend en utilisant notamment Java et Javascript.</p><p></p><p>Le soir, je contribue à plusieurs projets open sources autour de l’outil Asciidoctor, et je développe HubPress, un outil de blogging basé sur GitHub Pages.</p>",
    gravatar: "anthonny.querouil@gmail.com",
    twitter: "anthonny_q",
    github: "anthonny",
    website: "http://anthonnyquerouil.fr",
  },
  {
    id: "alain_helaili",
    name: "Alain Hélaïli",
    bio: "<p>L'un des deux Octocats Français! Arrivé chez GitHub après être passé chez MongoDB, dynaTrace et BEA, j'ai démarré Linux avec le kernel 0.9 et Java avec le JDK 1.0 mais je reste à l'affut des nouveautés technologiques et toujours curieux de la manière dont elles sont utilisées par les membres de mon espèce.</p>",
    gravatar: "helaili@github.com",
    twitter: "alainhelaili",
    github: "helaili",
  },
  {
    id: "pierre_alban_dewitte",
    name: "Pierre-Alban Dewitte",
    bio: "<p>Leader de l'équipe cloud à MyScript leader dans la reconnaissance d'écriture. Je suis passionné de développement. De l'OS à l'UI j'aime comprendre et assembler les API pour construire de nouvelles applications. J'anime la communauté MongoDB à Nantes.</p>",
    photo: "jpg",
    twitter: "padewitte",
    github: "padewitte",
    website: "http://padewitte.tumblr.com/",
  },
  {
    id: "guillaume_membre",
    name: "Guillaume Membré",
    bio: '<p>Geek à toute heure, je travaille principalement autour des technologies Java/JavaEE mais aussi sur des problématiques de déploiement continu, de qualimétrie. Désormais, je partage mon expérience pour faciliter la mise en place de démarche devops chez différents acteurs. J\'adore bidouiller des RaspberryPi ou Arduino pour créer des choses inutiles donc indispensables. Lorsque le temps le permet, je décris mes aventures sur mon <a href="https://www.geekeries.fun">site web</a>.</p>',
    photo: "jpg",
    twitter: "guillaumemembre",
    github: "gmembre-zenika",
    website: "https://www.geekeries.fun",
  },
  {
    id: "steve_sfartz",
    name: "Stève Sfartz",
    bio: '<p>Développeur NeXT à ses premières heures, Stève a vu naître Java, évangélisé les architectures .Net, lancé le Cloud Microsoft Azure, créé le SaaS Kosmos "Education Numérique" et monté la plateforme Restlet APISpark.</p><p>Aujourd\'hui, Stève intervient sur les programmes de transformation digitale des grandes DSI, et conseille les startups dans la structuration de leur R&D. Son dada : les architectures distribuées; interopérabilité, performances et résilience.</p>',
    photo: "jpg",
    twitter: "stevesfartz",
  },
  {
    id: "geoffrey_berard",
    name: "Geoffrey Berard",
    bio: "<p>Ingénieur R&D ches Les Furets.</p>",
    photo: "jpg",
    twitter: "geofberard",
  },
  {
    id: "laurent_maillet",
    name: "Laurent Maillet",
    bio: "<p>Consultant pour l’agence Zenika Nantes, j'interviens sur des missions de conception et réalisation d'applications Java et Web, de mise en place de socle technique et d’intégration continue. Je suis également formateur, entre autres, sur Javascript et Angular.</p>",
    photo: "jpg",
    twitter: "nebounet",
    github: "Nebulis",
  },
  {
    id: "guillaume_blondeau",
    name: "Guillaume Blondeau",
    bio:
      '<p>Guillaume est "Technical Detective" chez <a href="https://restlet.com" target="_blank">Restlet</a> où il touche à tout, du dev front à l\'automatisation d\'infrastructure. </p>' +
      "<p>Il aime surtout résoudre des problèmes et s'amuser à découvrir des technos sympas qui simplifient la vie.</p>",
    photo: "jpg",
    twitter: "guiblondeau",
    github: "guiblondeau",
  },
  {
    id: "mathieu_ancelin",
    name: "Mathieu Ancelin",
    bio:
      "<p>Mathieu ANCELIN est développeur chez SERLI, spécialisé dans la programmation web avec Scala, Java, JavaScript, des streams, de la data et cloud. Et s'il y du React, c'est encore mieux ;-)</p>" +
      "<p>Vous pouvez régulièrement le croiser au Poitou-Charentes JUG.</p>",
    photo: "jpg",
    twitter: "trevorreznik",
    github: "mathieuancelin",
    website: "http://reactivecouchbase.org/",
  },
  {
    id: "clement_escoffier",
    name: "Clement Escoffier",
    bio:
      "<p>Clement Escoffier (@clementplop) is a distinguished engineer at Red Hat. He is a Java Champion and also acts as a Reactive Architect at Red Hat.</p>" +
      "<p>Before joining Red Hat, Clement had several professional lives, from academic positions to management. He contributed to projects and products, touching many domains and technologies such as OSGi, mobile, continuous delivery, and DevOps. Clement has always been interested in software engineering, distributed systems, and event-driven architecture. He recently focused on Reactive Systems, Cloud-Native applications, and Kubernetes. Clement is an active contributor to many open-source projects such as Apache Felix, Eclipse Vert.x, SmallRye, Mutiny, and Quarkus. I recently authored the \"Reactive Systems in Java\" book.</p>",
    gravatar: "clement.escoffier@gmail.com",
    twitter: "clementplop",
    github: "cescoffier",
    website: "https://quarkus.io",
  },
  {
    id: "sebastien_gioria",
    name: "Sebastien Gioria",
    bio:
      "<p>Sébastien Gioria est Expert en Sécurité des Systèmes d’Informations, Chapter Leader de l’OWASP pour la France (http://www.owasp.fr), membre du OWASP Global Education Committee et Expert Judiciaire. Il a une expérience de plus de 15 ans dans la sécurité des Systèmesd’Informations au sein de postes techniques ou à responsabilité dans des banques, assurances, telecoms.</p>" +
      "<p>Sébastien gère la liaison entre l’OWASP et le comité ISO, colead les projets OWASP-SonarQube, et OWASP-CSRFGuard  et il a présenté divers sujets autour de la sécurité du Code dans des conférences en France ou à l’étranger.</p>",
    twitter: "spoint",
    github: "spoint42",
    website: "http://blog.appsec.fr",
  },
  {
    id: "marc_lebrun",
    name: "Marc Lebrun",
    bio: "<p>Consultant en sécurité informatique (pentesteur) reconverti dans l'éducation. Actuellement Directeur Pédagodique Adjoint à l'EPITECH Nantes, en charge du module Sécurité Web au niveau national.</p>",
    twitter: "marclebrun",
  },
  {
    id: "eric_briand",
    name: "Eric Briand",
    bio: "<p>Eric développeur Java/J2EE full-stack chez Zenika Nantes. Il aime travailler sur toutes les couches d'une application web, de la base de données jusqu'au front en utilisant aussi bien des technologies qui ont fait leur preuve mais aussi des technologies de pointe. Très intéressé par les technologies Cloud (PAAS & IAAS), il a déjà animé plusieurs ateliers autour de ce sujet et est formateur officiel Docker.</p>",
    gravatar: "eric.briand@zenika.com",
    twitter: "eric_briand",
    github: "ebriand",
  },
  {
    id: "julien_landure",
    name: "Julien Landuré",
    bio: "<p>CTO de Zenika Nantes, Julien navigue entre des missions de formation (AngularJS, AppEngine) et d'architecture. Issu de la génération Google, il a co-fondé en Janvier 2011 le GDG Nantes, participe depuis 5 ans au Google I/O et organise le DevFest Nantes.</p>",
    gravatar: "julien.landure@gmail.com",
    twitter: "jlandure",
    github: "jlandure",
  },
  {
    id: "antoine_cellier",
    name: "Antoine Cellier",
    bio: "<p>Consultant chez Zenika Nantes. J'interviens sur des missions de réalisation autour des technos front et back tel que AngularJS, ReactJS et Spring.</p>",
    twitter: "antoinecellier3",
  },
  {
    id: "freddy_mallet",
    name: "Freddy Mallet",
    bio: "<p>Freddy est le créateur de la plateforme SonarQube, le co-fondateur de la société SonarSource et il anime les développements produits au sein de SonarSource. </p>",
    gravatar: "freddy.mallet@gmail.com",
    twitter: "freddymallet",
    github: "fmallet",
    website: "http://www.sonarsource.com",
  },
  {
    id: "maxime_odye",
    name: "Maxime Odye",
    bio:
      "<p>Maxime, consultant back-end freelance.<br>" +
      "Passionné techniquement, j'aime découvrir et re-découvrir les différentes technologies gravitant autour de l'écosystème Java. Amateur des différentes communautés (Jug, BreizhCamp, AgileTour), j'estime que le partage technique, et non technique, dans le secteur de l'IT est quelque chose d'extraordinaire.<br>" +
      "Découverte, progression et approfondissement, l'enrichissement personnel est grand et essentiel pour nous faire tous progresser. Je suis formateur Elasticsearch et Elastic Stack, certified Spring Core by Pivotal et organisateur de l'Agile Tour Rennes</p>",
    photo: "jpg",
    twitter: "MaxOdye",
  },
  {
    id: "mathieu_pousse",
    name: "Mathieu Pousse",
    bio: "<p>Lead développeur backend chez Cloud-IAM, ex Ouest France et responsable des performances du site web, je me passionne pour les problématiques autour de Java et son écosystème, de Docker et Kubernetes, de la conception à l'industrialisation, du déploiement à l'exploitation.</p>",
    photo: "jpg",
  },
  {
    id: "yann_danthu",
    name: "Yann Danthu",
    bio:
      "<p>" +
      "Développeur, en couple avec Java depuis 1999, mais je dois avouer que je lui fais quelques infidélités avec Javascript ces derniers temps." +
      "</p>",
    photo: "jpg",
    twitter: "YannDanthu",
    github: "YannDanthu",
    website: "http://yann.danthu.com/",
  },
  {
    id: "matthieu_gioani",
    name: "Matthieu Gioani",
    bio:
      "<p>" +
      "Matthieu Gioani, consultant, designer &amp; facilitateur, accompagne les équipes projet et les managers sur les problématiques de design, d’émergence des besoins et d’innovation depuis plus de 6 ans." +
      "</p>",
    photo: "jpg",
    twitter: "Matt_Gio",
    website: "http://www.design-en-entreprise.fr/",
  },
  {
    id: "eric_bernardeau",
    name: "Eric Bernardeau",
    bio: "<p>" + "" + "</p>",
    website: "http://www.doyoubuzz.com/eric-bernardeau",
  },
  {
    id: "adrien_pessu",
    name: "Adrien Pessu",
    bio: "<p>Je suis passionné de développement, en particulier Kotlin, Angular, Java et Web. J’ai évolué pendant plusieurs années en société de services puis chez un éditeur logiciel, et je me suis lancé dans l’aventure freelance.</p>",
    photo: "jpg",
    twitter: "adrienpessu",
    github: "adrienpessu",
    website: "http://adrien.pessu.net",
  },
  {
    id: "yvonnick_frin",
    name: "Yvonnick Frin",
    bio:
      "<p>" +
      "Yvonnick est développeur javascript chez Zenika Nantes. Curieux et passionné, il aime découvrir les dernières technologies du Web.<br>" +
      "Adepte d’AngularJs depuis déjà deux ans, il se met à explorer le Flux avec React.<br>" +
      "Social, il écume les meetups nantais en quête de nouveautés." +
      "</p>",
    photo: "jpg",
    twitter: "YvonnickFrin",
    github: "frinyvonnick",
  },
  {
    id: "cyril_vrillaud",
    name: "Cyril Vrillaud",
    bio: "<p>Manager d'une équipe de delivery à Nantes pour Voyages-sncf.com, je suis également architecte transverse et travaille sur l'avenir du SI ecommerce.</p>",
    photo: "jpg",
  },
  {
    id: "simon_basle",
    name: "Simon Basle",
    bio: "<p>Simon est Software Engineer chez Pivotal dans l'équipe Spring / Reactor, après avoir passé quelques années en SSII puis chez Couchbase (où il contribuait au driver Java, basé sur RxJava). Passionné de dev depuis toujours, Simon s'intéresse tout particulièrement à la programmation réactive ces dernières années.</p>",
    gravatar: "sbasle@pivotal.io",
    twitter: "simonbasle",
    github: "simonbasle",
  },
  {
    id: "laurent_doguin",
    name: "Laurent Doguin",
    bio: "<p>Laurent is a Paris based Developer Advocate where he focuses on helping Java developers and the French community. He writes code in Java and blog posts in Markdown. Prior to joining Couchbase he was Nuxeo’s community liaison where he devoted his time and expertise to helping the entire Nuxeo Community become more active and efficient.</p>",
    twitter: "ldoguin",
    github: "ldoguin",
  },
  {
    id: "emeric_martineau",
    name: "Emeric Martineau",
    bio:
      "<p>Comment décrire quelqu'un qui a été hotliner, réparateur de PC et d'imprimantes, qui a tiré du câble réseau, qui a fait de l'administration réseau et système, fait du développement Delphi, Java (Web, Swing), qui s'intéresse au problématique de déploiement, d'automatisation...</br>" +
      "Ah oui, le mot à la mode c'est DevOPS !</br>" +
      "Alors va pour !</p>" +
      "<p>Moi j'aime pas les cloisons. Les routes toutes droites.</p>" +
      "<p>Et c'est pour ça qu'aujourd'hui je fais partie de l'équipe transverse de l'usine logicielle de Voyages-Sncf.com :-)</p>",
    photo: "jpg",
    twitter: "martineauemeric",
    github: "bubulemaster",
    website: "https://emericmartineau.blogspot.fr",
  },
  {
    id: "vickrame_ujoodha",
    name: "Vickrame Ujoodha",
    bio:
      "<p>Développeur backend java chez Zenkika Nantes.</p>" +
      "<p>Mes 11 années de prestations m'ont permis de travailler sur différents framework (anciens comme nouveaux).</p>" +
      "<p>Actuellement j'évolue plutôt sur la stack springboot, spring batch, avec un peu ELK.</p>" +
      "<p>Je suis aussi formateur ELK, ApacheCamel, ... </p>",
    twitter: "ruvachlea",
    github: "vickrame",
  },
  {
    id: "alexandre_delègue",
    name: "Alexandre Delègue",
    bio: "<p>Alexandre Delègue est ingénieur d'études chez SERLI. Développeur touche à tout il apprécie tout particulièrement la programmation fonctionnelle et les framework réactifs.</p>",
    gravatar: "alexandre.delegue@serli.com",
    twitter: "chanksleroux",
    github: "larousso",
  },
  {
    id: "alvin_berthelot",
    name: "Alvin Berthelot",
    bio: '<p>Développeur depuis plus de 10 ans sur des projets et des technologies hétérogènes, qui n’ont qu’un seul point commun, l’utilisation du web. Sa curiosité, son envie de partager les savoirs et son polyglottisme technologique lui permettent de mélanger les disciplines et ainsi de parler de tout… et surtout de n’importe quoi 🙂</p><p>Il travaille (tout de même de manière sérieuse) en tant qu’indépendant pour sa structure <a href="http://www.webyousoon.com" target="_blank">Webyousoon</a>.</p>',
    twitter: "alvinberthelot",
    github: "alvinberthelot",
    website: "http://alvin.berthelot.rocks/",
  },
  {
    id: "nicolas_giraud",
    name: "Nicolas Giraud",
    bio: "<p></p>",
  },
  {
    id: "gautier_de_saint_martin_lacaze",
    name: "Gautier de Saint Martin Lacaze",
    bio: "<p>Développeur freelance passionné, Gautier travaille principalement sur les technologies Java et JavaScript. Afin de rester au fait des nouveautés, il participe régulièrement à des conférences nantaises ou nationales. Il coorganise également le Nantes JUG depuis juin 2014. Ayant appris à dompter l'IDE Eclipse lors de ses premières années de travail, il contribue aujourd'hui à l'amélioration de son outil de travail via des patchs et la formation de ses clients. </p>",
  },
  {
    id: "thomas_buvignier",
    name: "Thomas Buvignier",
    bio: "<p>Product Owner UX et passionné de graphisme, je travaille au sein de l'agence Bewizyu sur les interfaces de nos clients.</p><p>Contributeur du blog, je suis toujours à l'affût des dernières tendances graphiques afin de pouvoir les retravailler et créer une expérience utilisateur optimale.</p><p>Ex-entrepreneur et ayant eu plusieurs vies ma curiosité se trouve résumée dans une citation de J.K Chesterton : \"Il n'y a pas de sujet peu intéressant, il n'y a que des personnes peu intéressées\"</p>",
    photo: "jpg",
    twitter: "CadentALatere",
  },
  {
    id: "florian_negre",
    name: "Florian Nègre",
    bio:
      "<p>Après plusieurs années de développement Java, puis une expérience dans la gestion de projet, et ensuite un rôle de facilitateur technique, je reviens à mon premier amour : le code.</p>" +
      "<p>Développeur chez Zenika, je suis arrivé depuis peu sur Nantes, je découvre avec plaisir cette nouvelle vie et de nouveaux challenges </p>",
    gravatar: "granini@gmail.com",
    twitter: "floriannegre",
    github: "fnegre",
  },
  {
    id: "emmanuel_demey",
    name: "Emmanuel Demey",
    bio: "<p>Directeur technique chez Zenika Lille et Google Developer Expert, je suis spécialisé dans Angular, VueJS, NodeJS, PWA, TypeScript et l'Accessibilité Web. Speaker à ses heures perdues. Aime également les bières (et oui quand on vient de Lille c'est normal...), le Jazz et la Domotique.</p>",
    photo: "jpg",
    twitter: "emmanueldemey",
    github: "gillespie59",
  },
  {
    id: "emmanuel_lebeaupin",
    name: "Emmanuel Lebeaupin",
    bio: "<p>Emmanuel Lebeaupin est développeur depuis plus de 15 ans et plus particulièrement dans le monde du Java et du Web. Aujourd'hui, il évolue au sein de la société CREATIVE et intervient dans le développement et l'architecture de projets. En parallèle, il accompagne ses clients dans le monde de Docker et de la conteneurisation.</p>",
  },
  {
    id: "yvelain_naude",
    name: "Yvelain Naude",
    bio: "<p>Yvelain NAUDE est développeur depuis plus de 10 ans et plus particulièrement dans le monde de l’embarqué. Aujourd'hui, il évolue au sein de la société CREATIVE et intervient dans le développement et l'architecture de projets.</p>",
  },
  {
    id: "olivier_truong",
    name: "Olivier Truong",
    bio: "<p>Développeur, chef de projet puis manager dans un grand groupe avant de devenir Freelance il y a 2 ans. Curieux, aime apprendre et partager tout ce qui peut nous rendre meilleurs dans notre job :)</p>",
    photo: "jpg",
  },
  {
    id: "nicolas_steinmetz",
    name: "Nicolas Steinmetz",
    bio: "<p>Consultant Indépendant, j'interviens sur des problématiques d'architecture applicative & d'infrastructure et sur des problématiques DevOps (automatisation, industrialisation, etc)</p>",
    photo: "jpg",
    twitter: "nsteinmetz",
    github: "nsteinmetz",
    website: "https://www.cerenit.fr/",
  },
  {
    id: "nabil_thalmann",
    name: "Nabil Thalmann",
    bio:
      "<p>Directeur du lab d'Intuiti. Co-fondateur de Personae User Lab en 2012 au sein de l’agence Intuiti et " +
      "directeur conseil études (17 d’expérience en UX research, près de 5000 personnes interviewées sur des " +
      "problématiques de conversion, de compréhension et d’accès à l’offre, de parcours utilisateur, d’évaluation " +
      "ergonomique, de prétest de comm/concept/service/produit…). Je ne cesse d’apprendre en interviewant et " +
      "observant l’humain dans des domaines très variés. J'aime à dire que l'humain est une drogue et que j'en " +
      "suis le dealer.</p>",
    photo: "jpg",
    twitter: "nabilthalmann",
  },
  {
    id: "salomon_brys",
    name: "Salomon Brys",
    bio:
      "<p>Passionné de Kotlin depuis 4 ans, je suis le développeur et mainteneur de la librairie Kodein. " +
      "Kodein 5.0 est la librarairie de DI n°1 en Kotlin et la première librairie Kotlin à être disponible sur " +
      "toutes les plateformes supportées par Kotlin.</p>" +
      "<p>Fortement ancré dans la philosophie Open-Source, je suis dédié à la création d'outils et de librairies " +
      "pour rendre la programmation plus facile, plus sûre et plus fun.</p>" +
      "<p>Je suis aussi addict aux jeux de sociétés et au pilotage d'avions de tourisme.</p>",
    photo: "jpg",
    twitter: "salomonbrys",
    github: "SalomonBrys",
    website: "http://kodein.net/fr/",
  },
  {
    id: "denis_rosa",
    name: "Denis Rosa",
    bio:
      "<p>Speaker and Developer Advocate at Couchbase, he started programming even before the college and never " +
      "stopped coding since then. He is Java Specialist and an enthusiast of online courses platforms and " +
      "accumulates dozens of courses on it. In the last few years, Denis also has been researching about " +
      "Microservices, NoSQL, Machine Learning and talking about all the new insights and trends he had " +
      "discovered in his path.</p>",
    photo: "jpg",
    twitter: "deniswsrosa",
    github: "deniswsrosa",
  },
  {
    id: "corentin_grall",
    name: "Corentin Grall",
    bio: "<p>Lycéen et passionné depuis toujours de nouvelles technologies, j'ai commencé il y a plusieurs années à m'intéresser au monde du développement à travers un jeu vidéo, Minecraft. Étant curieux, je me suis au fil des années intéressé à de nombreuses technologies ce qui m'a conduit à développer régulièrement en NodeJS et Java.</p>",
    photo: "jpg",
    twitter: "grallcorentin",
    github: "grallc",
    website: "about.me/grall",
  },
  {
    id: "malo_grall",
    name: "Malo Grall",
    bio: "<p>Je suis étudiant, passionné d'informatique et de sport. Voulant faire vétérinaire j'étais en prépa BCPST l'année dernière mais je suis dorénavant dans des études d'informatique, un cursus ingénieur à l'Université dans les maths et l'informatique de l'optimisation. Autrement, je développe en ce moment en JS, faisant du Node.JS et du React.</p>",
    photo: "jpg",
    github: "grallm",
  },
  {
    id: "sylvain_maillard",
    name: "Sylvain Maillard",
    bio:
      "<p>Je suis développeur depuis le lycée et développeur Java depuis les années 2000, je m'intéresse particulièrement à la programmation orientée objet, au Domain Driven Design, au refactoring d'applications. </p>" +
      "<p>Je travaille depuis 5 ans chez Oui.sncf en tant que lead developer. </p>",
    photo: "jpg",
    twitter: "sylvain_m44",
    github: "sylvain-maillard",
  },
  {
    id: "jean_philippe_baconnais",
    name: "Jean-Philippe Baconnais",
    bio:
      "<p>Développeur chez Zenika Nantes.</br>" +
      "Plongé dans le développement avec l'éco-système Java, curieux de nature, j'aime découvrir et expérimenter de nouvelles technos back end ou front end et les partager autour de moi.</br>" +
      "GitLab Heroes depuis l'été 2020 🦊 & Community Hero GitPod 🍑 depuis juin 2022.</br>" +
      "Co orga des Human Talks Nantes</p>",
    photo: "jpg",
    twitter: "jphi_baconnais",
    github: "jeanphibaconnais",
    website: "https://jeanphibaconnais.gitlab.io/",
  },
  {
    id: "thomas_nansot",
    name: "Thomas Nansot",
    bio: "Ancien développeur et architecte dans les premières années du site voyages-sncf.com, j'ai ensuite créé un studio de développement de jeu vidéo avec un ami. Après 4 années intenses, je suis revenu chez voyages-sncf.com pour prendre en charge un projet de calendrier des prix puis le management d'une équipe d'architecte technique. Il y a 7 ans, j'ai bougé à Nantes pour monter une entité de Delivery pour voyages-sncf.com. A mon départ pour l'entreprise LivingPackets, l'entité comptait plus de 130 personnes, principalement des profils techniques. Je suis actuellement CTO pour LivingPackets, nous développons un produit pour remplacer les emballages à usage unique utilisé par le e-commerce pour vous envoyer vos achats.",
    photo: "jpg",
    twitter: "tnansot",
    website: "http://livingpackets.com",
  },
  {
    id: "patrice_de_saint_steban",
    name: "Patrice De Saint Steban",
    bio:
      "<p>Depuis presque 10  ans je me passionne pour le développement d'applications WEB et Mobile, en touchant à toutes les couches du Front au Back jusqu'à son déploiement sur le Cloud.</p>" +
      "<p>J'ai travaillé sur des technologies très différentes, du PHP au JAVA et JAVASCRIPT, du GWT à Angular et React, de Google App Engine à NodeJS.</p>" +
      "<p>Je m'intéresse au Machine Learning et les agents conversationnels.</p>",
    photo: "jpg",
    twitter: "patoudss",
    github: "patou",
  },
  {
    id: "nicolas_payneau",
    name: "Nicolas Payneau",
    bio:
      "<p>Leader Technique et mouton à 5 pattes chez Thales le jour, j'interviens sur différents projets Java, Javascript. J'accompagne au quotidien les équipes vers une démarche DevOps et sur des problématiques \"moveToCloud\".</p>" +
      "<p>La nuit je bidouille en IOT et m'égare dans les limbes des services AWS pour combler ma soif de découverte.</p>",
    photo: "jpg",
    twitter: "npayneau",
    github: "npayneau",
  },
  {
    id: "adrien_bonnin",
    name: "Adrien Bonnin",
    bio: "<p>Développeur expérimenté, je m’intéresse aux technologies qui gravitent autour de l'écosystème Java et JavaScript. Ces dernières années m'ont amenées à découvrir Grails, un framework web qui recèle de magnifiques pépites pour améliorer la manière dont nous écrivons nos applications.</p>",
    photo: "jpg",
    github: "adbonnin",
  },
  {
    id: "francois_guillaume_ribreau",
    name: "Francois-Guillaume Ribreau",
    bio: "<p>Architect & head of digital development @Ouest-France - CTO & Founder @image-charts @Redsmin @MotionDynamic_ @cloud_iam_com @KillBug #FullStackHacker</p>",
    photo: "jpg",
    twitter: "FGRibreau",
    github: "fgribreau",
    website: "https://getnobullshit.com",
  },
  {
    id: "thomas_piart",
    name: "Thomas Piart",
    bio: "<p>Développeur .Net chez Veepee depuis 2018, avec une forte affinité pour les problématiques d'intégration & déploiement continu.<br/> Thomas travaille sur une API Gateway permettant à Veepee France et ses partenaires européens de partager leur catalogue de vente et leur logistique. <br/> <i>Random: Mon dernier projet n'est pas du tout agile: 9 mois, et un seul déploiement</i></p>",
    photo: "jpg",
    twitter: "tomap",
    github: "tomap",
  },
  {
    id: "pierre_antoine_ollivier",
    name: "Pierre-Antoine Ollivier",
    bio: "<p>SRE chez Veepee depuis 2018, ma mission au quotidien est de m'assurer que nos développeurs peuvent travailler dans les meilleures conditions possibles, en travaillant avec eux pour répondre à leurs problématiques autour de déploiement, disponibilité, automatisation, et en leur fournissant une qualité de service optimale pour la production.</p><p><i>Rien n'est plus définitif qu'une solution temporaire</i></p>",
    photo: "jpg",
  },
  {
    id: "ludovic_paquet",
    name: "Ludovic Paquet",
    bio: "<p>Lead SRE chez Veepee depuis 2016, je traite des problématiques de disponibilité, architectures, automatisation des déploiements au sein de la Digital Factory. Auparavant j'ai exercé 7 ans à la R&D de vente-privée.</p><p>Fun fact : j'ai longtemps été un des seul devs Java Linux de VP et j'ai survécu. Depuis j'ai de nombreux amis au sein de Vptech</p>",
    photo: "jpg",
  },
  {
    id: "julien_roy",
    name: "Julien Roy",
    bio: "Développeur depuis 15 ans et actuellement Architecte Java. Je travaille principalement sur des plateformes à fort traffic. Mes centre d'intérêts actuels tournent autour des architecture microservices et reactive.",
    photo: "jpg",
    twitter: "vanroy",
    github: "VanRoy",
    website: "https://www.linkedin.com/in/j-vanroy/",
  },
  {
    id: "nicolas_fedou",
    name: "Nicolas Fedou",
    bio: "Je suis Nicolas Fédou, développeur back Java et coach technique. \n<br>J'aime l'informatique depuis que je compose des commandes avec Linux. Assembler des commandes, des objets, des composants, des pipelines, c'est comme jouer aux Légo pour moi. \n<br>Depuis mes premières mission, j'ai toujours cherché à améliorer les conditions de travail de l'équipe par des petits script, puis de la CI/CD et depuis quelques années avec de la montée en compétence sur les pratiques de développement agile.\n<br>\n<br>Je travaille généralement avec des entreprises dont le logiciel est victime de son succès et commence à perdre en productivité ou en fiabilité.\n<br>Je leur permet de reprendre le contrôle sur leur patrimoine logiciel et d'avoir des développeurs qui maitrisent un savoir faire proche de l'état de l'art.\n<br>Le bénéfice principal étant de retrouver un logiciel capable d'évoluer à la vitesse du business du client sans défaut et qu'on ne décommissionne pas.\n<br>\n<br>J'interviens souvent avec un rôle de développeur mentor, co-Tech Lead ou encore en coaching technique parfois même pour déployer les préconisations d'un audit réalisé par moi-même ou par un pair.\n<br>Je réalise parfois des diagnostiques facturés au temps passé pour résoudre un problème rapide.\n<br>",
    photo: "jpg",
    twitter: "CoulasFedou",
    github: "coulas",
  },
  {
    id: "julien_bideau",
    name: "Julien Bideau",
    bio: "Développeur passionné chez Asys, j'adore découvrir de nouveaux langages, partager et apprendre au quotidien. J'aime chercher les solutions adéquates et améliorer continuellement nos process ! <br>Je travaille actuellement avec notre feature team sur la réécriture de notre legacy en microservices cloud ready",
    photo: "jpg",
    twitter: "JulienBideau",
    github: "JulienBideau",
  },
  {
    id: "jean_francois_james",
    name: "Jean-François James",
    bio: "Je me définis avant tout comme un \"Coding Software Architect\". Nommé Expert Fellow à Atos puis Worldline, je suis responsable de la toute nouvelle initiative TechRel qui vise à promouvoir l'entreprise dans les communautés Tech. J'aime bien partager et challenger mes connaissances à travers des articles, des présentations, des démos. Il y a toujours quelque chose à apprendre et améliorer !<br>Mon bagage technique est centré sur l'écosystème Java dont l'évolution permanente ne cesse de me passionner. J'ai eu l'opportunité de contribuer au projet Open Source Eclipse MicroProfile.<br>Bref, je reste très enthousiaste malgré mes plus de 30 ans dans l'IT.",
    photo: "jpg",
    twitter: "jefrajames",
    github: "jefrajames",
    website: "https://jefrajames.fr/",
  },
  {
    id: "nicolas_morel",
    name: "Nicolas Morel",
    bio: "Développeur depuis plus de 10 ans, j'ai débuté en SSII avant de rejoindre une startup bretonne, Klaxoon.<br>D'abord dev fullstack Java (si si, on peut faire du front en Java, coucou GWT 😱) puis dev frontend JS, je m'intéresse plus particulièrement aux sujets perf et dev xp.",
    photo: "jpg",
    twitter: "nmor3l",
    github: "nmorel",
  },
];

//Test gravatar : http://www.neoseeker.com/tools/gravatar_tester.php
