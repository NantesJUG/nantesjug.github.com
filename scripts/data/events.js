/*jshint unused: false */
// Structure:
// {
//     id: "",
//     title: "",
//     date: new Date(yyyy, mm, dd), //month begin at 0
//     time: "",
//     register: "",
//     place: "",
//     subjects: [ 
//         {
//             title: "",
//             time: "",
//             length: "",
//             type: "",
//             intro: "",
//             abstract: "", 
//             speakers: [""],
//             docs: [{ name: "", url: "", type: "" },
//             ]
//         },
//     ],
//     docs: [{ name: "", url: "", type: "" }
// },
var njEvents = [
        {
        id: '2026_03_17',
        title: `La transactionalité expliquée // JooQ une alternative à JPA`,
        date: new Date(2026, 2, 17), //month begin at 0
        time: '19h00',
        // register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/313064896/",
        place: "kleegroup",
        subjects: [
            {
            title: `La transactionalité expliquée`,
            time: '19h00',
            length: '30 min',
            type: 'quickie',
            abstract: `
            <p></p>
            `,
            speakers: ['benjamin_cavy']
            },
            {
            title: `JooQ une alternative à JPA`,
            time: '19h30',
            length: '55 min',
            type: 'talk',
            abstract: `
            <p></p>
            `,
            speakers: ['thibault_duperron']
            }

        ]
        },
        {
        id: '2026_02_10',
        title: `Un mot de passe ? Non merci // Devenez un expert du debug en JS`,
        date: new Date(2026, 1, 10), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/313064896/",
        place: "younup",
        subjects: [
            {
            title: `Un mot de passe ? Non merci !`,
            time: '19h00',
            length: '30 min',
            type: 'quickie',
            abstract: `
            <p>Les mots de passe, on en a tous marre. Entre les règles tordues, les resets toutes les deux semaines, et les tentatives de phishing, c’est plus de la sécu, c’est du sport.</p>
            <p>Heureusement, les passkeys arrivent avec une promesse simple : plus de galère, plus de mot de passe. Basées sur WebAuthn (soutenues par Google, Apple, et Microsoft), elles pourraient bien changer notre manière d’authentifier les utilisateurs.</p>
            <p>Dans ce quickie, on voit ensemble :</p>
            <ul>
                <li>Ce qu’est une passkey, concrètement</li>
                <li>Pourquoi c’est plus sécurisé et plus simple</li>
                <li>Un retour d'expérience sur l'intégration dans une application réelle</li>
                <li>Une rapide démo du fonctionnement des passkeys</li>
            </ul>
            `,
            speakers: ['quentin_aubert']
            },
            {
            title: `Devenez un expert du debug en JS`,
            time: '19h30',
            length: '55 min',
            type: 'talk',
            abstract: `
            <p>Vous parsemez votre code de console.log en espérant un miracle ?</p>
            <p>Et si, au lieu de subir JavaScript, vous appreniez enfin à l'écouter ?</p>
            <p>JavaScript n’est pas un moteur silencieux : à travers la console, la pile d’appels et les outils de profilage, il nous envoie constamment des signaux. Le tout est de savoir les décoder.</p>
            <p>Dans cette session, nous allons briser le quatrième mur : le code de cette présentation devient notre propre laboratoire. Nous utiliserons les Chrome DevTools comme un véritable outil de précision.</p>
            <p>Observer l'invisible : Maîtriser les différents types de breakpoints et les Live Expressions pour suivre l'état de vos données sans polluer votre code.</p>
            <p>Oubliez les slides statiques. Ici, on travaille "à cœur ouvert" et on découvre ensemble comment devenir un expert du debug.</p>
            <p>Préparez-vous à tendre l'oreille !</p>
            `,
            speakers: ['romain_guinand']
            }

        ]
        },
        {
        id: '2026_01_29',
        title: `Sécuriser la CI // Pseudonymisation à l'échelle`,
        date: new Date(2026, 0, 29), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/312865339/",
        place: "qlik",
        subjects: [
            {
                title: `Sécuriser vos Pipelines GitHub Actions : Meilleures Pratiques et Stratégies`,
                time: '19h00',
                length: '30 min',
                type: 'talk',
                abstract: `
                <p>Dans un monde où les attaques de la chaîne d'approvisionnement logicielle sont de plus en plus fréquentes, sécuriser vos pipelines CI/CD est devenu une priorité absolue. Cette présentation se concentrera sur les meilleures pratiques et les stratégies avancées pour sécuriser vos pipelines GitHub Actions. Nous explorerons les vulnérabilités courantes, les menaces potentielles et les solutions concrètes pour les atténuer.</p>
                `,
                speakers: ['adrien_pessu']
            },
            {
                title: `Pseudonymisation à l'échelle`,
                time: '19h30',
                length: '55 min',
                type: 'talk',
                abstract:
                `
                <p>Face à une pression réglementaire croissante sur la protection des données personnelles (RGPD, IA Act, DORA), l'équipe LINO partage son retour d’expérience sur la mise en œuvre d’un projet de pseudonymisation à l’échelle réalisé pour la Branche Grand Public et Numérique (BGPN) de La Poste, et couvrant 70 applications métiers.</p>
                <p>Ce témoignage met en lumière les choix structurants, depuis la sélection de l’outil LINO jusqu'à la mise en œuvre progressive du projet. Il revient également sur les difficultés rencontrées : trouver un équilibre entre protection et utilité des données, pallier la perte de la connaissance applicative et garantir la cohérence inter-applicative. Enfin, il présente les leviers activés pour répondre efficacement à ces enjeux.</p>
                <p>Cette présentation est animée le créateur de la solution LINO et le porteur de l'offre de service associée, qui ont participé à la conception et la mise en œuvre de ce projet qui a duré deux ans et qui a notamment contribué à l’obtention du label « Numérique Responsable » pour la BGPN.</p>
                `,
                speakers: ['yann_le_saint', 'adrien_aury']
            }
        ]
    },
    {
        id: '2025_12_11',
        title: `Soirée Lambda, Spring & Cursor AI`,
        date: new Date(2025, 11, 11), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-fr/aws-nantes/events/311871294/",
        place: "sqli",
        subjects: [
            {
                title: `De l'idée à la réalité avec AWS Lambda et Spring : un REX projet Spring Boot natif`,
                time: '19h00',
                length: '45 min',
                type: 'talk',
                abstract: `
                <p>Dernièrement, nous avons eu l'opportunité de réaliser un projet en Spring Boot native avec GraalVM dès sa mise en release. Le but étant de faire tourner le backend de notre projet en FaaS sur des lambdas AWS. Ce projet a été un succès client mais techniquement c'est une autre histoire.</p>
                <p>Nous vous proposons une rétrospective technique de ce projet avec les principales problématiques que nous avons rencontrées, comme la reflection et les ressources de build, et la façon dont nous y avons répondu. Car cela peut aussi vous arriver si cette techno vous intéresse.</p>
                `,
                speakers: ['valentin_dubuisson']
            },
            {
                title: `Cursor ou comment mixer Code & IA pour être plus productif !`,
                time: '19h45',
                length: '45 min',
                type: 'talk',
                abstract:
                `
                <p>Cursor AI s'est imposé comme compagnon de code avec un workflow de développement simple et intégré.</p>
                <p>Au delà de nous aider à créer un projet depuis zéro en respectant les bonnes pratiques, ce nouvel IDE sait répondre à beaucoup de choses...</p>
                <p>Disponible avec différents modèles, je montrerai quelques exemples de génération de code pertinente tout en partageant les bonnes pratiques autour de Cursor : Context Engineering, AGENTS.md, Plan Mode, Manipulation du navigateur, Serveur MCP.</p>
                <p>Vous souhaitez générer des apps sans coder mais vous ne savez pas par où commencer ? Vous avez essayé et vous n'êtes pas convaincu ?</p>
                <p>Venez assister à ce talk pour apprendre comment bien générer du code en utilisant l'IA !</p>
                `,
                speakers: ['julien_landure']
            }
        ]
    },
    {
        id: '2025_11_26',
        title: `Quand l'IA fait le tri de manière industrialisée // Construit un chatbot infusé à l'IA avec LangChain4j`,
        date: new Date(2025, 10, 26), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/311965158/",
        place: "onepoint",
        subjects: [
            {
                title: `Quand l'IA fait le tri de manière industrialisée`,
                time: '19h00',
                length: '45 min',
                type: 'talk',
                abstract: `
                <p>L’IA fait le tri dans vos mails, dans vos agendas et aussi dans vos … colis et lettres. Avec plus de 50 millions d’objets triés par jour et des contraintes de temps de détections inférieures à 500ms, La Poste a réussi à industrialiser l’IA afin de réduire le tri manuel de 20% à 5%.</p>
                <p> Pour réussir, La Poste en partenariat avec Thales, a développé une plateforme dédiée à la gestion des données et des modèles d'IA. Cette plateforme assure l’évolutivité, l’orchestration, et la performance des modèles de computer vision, déployés en Egde dans les centres de tri et en Datacenter. </p>
                <p> Avec plus de 30 modèles d’IA, les défis comme reconnaitre une adresse destinataire sur un pli noir ou s’assurer que l’IA ne mélange pas les informations destinataire/expéditeur ont conduit l’équipe à créer des pipelines d'entrainement, d'évaluation et de déploiement des modèles. </p>
                <p> Après 5 ans d'IA en production, ce talk sera l'occasion de partager les solutions mises en place pour répondre aux contraintes de performance, de résilience ou encore d'approvisionnement de GPU sur des infrastructures IAAS et PAAS.</p>
                `,
                speakers: ['guillaume_leblondel', 'nicolas_payneau']
            },
            {
                title: `Construit un chatbot infusé à l'IA avec LangChain4j`,
                time: '19h30',
                length: '45 min',
                type: 'talk',
                abstract:
                `
                <p><i>(Présentation en 🇫🇷)</i></p>
                <p>
                Add intelligent conversational AI in your Java application! 
                </p>
                <p>
                This presentation demonstrates how to build a production-ready chatbot from scratch using LangChain4j, 
                progressing from basic chat functionality to a sophisticated AI assistant with memory, content moderation, 
                document retrieval (RAG), and business integration.
                </p>
                `,
                speakers: ['antonio_goncalves']
            }
        ]
    },
    {
        id: '2025_10_09',
        title: `DIY : ma base de connaissance en bash // Le chaos engineering expliqué à mon neveu de 10 ans`,
        date: new Date(2025, 9, 9), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/311275374/",
        place: "sfeir",
        subjects: [

            {
                title: `DIY : Ma base de connaissance en bash`,
                time: '19h00',
                length: '15 min',
                type: 'quickie',
                abstract:
                    `
                <p>Après avoir testé beaucoup d'outils pour gérer ma base de connaissances, sans réellement trouver mon bonheur, j'ai fini par créer mon propre outil en bash.</p>
                <p>Venez découvrir le résultat final ainsi que l'envers du décor.</p>
                `
                ,
                speakers: ['manuel_boillod']
            },

            {
                title: `Le chaos engineering expliqué à mon neveu de 10 ans`,
                time: '19h30',
                length: '45 min',
                type: 'talk',
                abstract:
                    `
                <p>L'ingénierie du chaos expliquée de façon ludique et humoristique en mode vulgarisation technique, à l'aide de lego, de jenga et d'une application codée à la main par un non developpeur</p>
                `,
                speakers: ['michael_dangleterre']
            }
        ]
    },
    {
        id: '2025_09_18',
        title: `🦦 Comprendre l'Usine Logicielle // 📝 Event Sourcing avec Kotlin & Spring`,
        date: new Date(2025, 8, 18), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/310831073/",
        place: "zenika",
        subjects: [

            {
                title: `🦦 Une loutre pour comprendre l'Usine Logicielle`,
                time: '19h00',
                length: '15 min',
                type: 'quickie',
                abstract:
                    `
                <p>Suivez la visite de l'usine de loutres en bois 'WoOtter'.</p>
                <p>Au fil d'une métaphore d'usine de produits mignons manufacturés, découvrez ou clarifiez votre vision de l'usine logicielle.</p>
                <p>Un outil pour comprendre ou expliquer ce qu'est une usine logicielle à (presque) n'importe qui.</p>
                `
                ,
                speakers: ['vincent_thiebault']
            },

            {
                title: `📝  Si la facture électronique m'était comptée`,
                time: '19h30',
                length: '1h',
                type: 'talk',
                abstract:
                    `
                <p>La légende dit que de nombreuses factures ne seraient pas tracées. Afin de collecter plus précisément les taxes du royaume, l'argentier du roi va imposer au peuple la facturation électronique. Suivez nous dans les méandres et les pièges de la mise en place d'une architecture événementielle vouée à tracer les états de la facture, de son émission à son règlement... </p>
                <p>Comment mettre à profit un langage intuitif, <b>Kotlin</b>, en adoptant le paradigme réactif de <b>Spring Webflux</b>, combiné à la puissance de <b>Kafka</b> pour implémenter un système événementiel basé sur les concepts d'<b>Event Sourcing</b> et <b>State Pattern</b> qui garantira l'historisation des factures électroniques et la résilience à travers les âges.</p>
                `
                ,
                speakers: ['jeremy_lejeune', 'gregory_bevan', 'jerome_landreau']
            }
        ]
    },

    {
        id: '2025_06_17',
        title: `🍸 // Enter the Daggerverse ! // Suivez le lapin blanc et plongez dans la JVM // 🧀 🍷`,
        date: new Date(2025, 5, 17), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/307959282",
        place: "adresse_gare_sud",
        subjects: [
            {
                title: 'Verre d\'accueil 🍸',
                time: '19h00',
                length: '30 min',
                type: 'hello',
                abstract: "<p>C'est bientôt l'été ! Nous vous invitons donc à débuter cette dernière soirée de façon conviviale avec un verre de bienvenue.</p>",
            },
            {
                title: `Enter the Daggerverse !`,
                time: '19h30',
                length: '30 min',
                type: 'quickie',
                abstract: `
                    <p>Si je vous dis Dagger ? Cela ne vous parle peut-être pas. Si je vous dis... Docker ? Là, ça vous parle !</p>
                    <p>Dagger, c'est le moteur de CI/CD développé par Solomon Hykes, le papa de Docker. Un OVNI dans l'univers des moteurs de CI/CD, à la fois une alternative et un complément à Jenkins, Circle, GitHub Actions. Mais quid du Daggerverse ?</p>
                    <p>Laissez-nous vous embarquer dans ce nouvel univers, laissez nous vous faire tomber dans... le Daggerverse of madness !!</p>
                    <p>Dans ce talk, vous :
                        <ul>
                            <li>prendrez en main Dagger avec le langage de votre choix : Typescript, Go ou Python (et qui sait, Java ?)</li>
                            <li>découvrirez comment publier votre propre module Dagger dans... le Daggerverse !</li>
                        </ul>
                    </p>
                    <p>Vous découvrirez même comment en évitant le push and pray, vous augmentez votre productivité, votre satisfaction et réduisez votre impact énergétique.</p>
                    <p>Et vous serez à tout jamais séduit par Dagger et son univers à part entière.</p>
                    `,
                speakers: ['emeric_martineau', 'julien_haumont']
            },
            {
                title: `Comme Alice, osez suivre le lapin blanc et plongez dans la JVM pour comprendre son fonctionnement`,
                time: '20h00',
                length: '1h',
                type: 'talk',
                abstract: `
                    <p>Tout commence avec une mise à jour de Java 17 vers Java 21.0.1 qui fait planter un de nos benchmarks. Notre unique symptôme: une variable locale non null envoie une NullPointerException.</p>
                    <p>Ensemble, on va remonter dans le temps pour refaire l'analyse de ce bug. Lors de ce voyage, on va plonger dans la JVM, comprendre son fonctionnement et creuser pour trouver la root-cause de ce bug corrigé en 21.0.3.</p>
                    <p>A l'issu de cette présentation, vous comprendrez que c'était à votre portée. Sans le savoir, vous êtes déjà capable de compiler votre propre JDK pour diagnostiquer et corriger des bugs. Qui sait, vous deviendrez peut-être contributeur Java ?</p>
                    `,
                speakers: ['antoine_dessaigne']
            },
            {
                title: 'Planche apéro et Cocktail 🧀 🍷',
                time: '21h',
                length: '3h',
                type: 'cocktail',
                abstract: "<p>Et pour clôturer la soirée en beauté, restez discuter avec nous autour d'un verre et de délicieuses planches apéro 😋</p>",
            }
        ]
    },
    {
        id: '2025_05_15',
        title: `Signals : "Nouvelle" Norme des Frameworks Web // C'est pas le réseau, ça ping Marty !`,
        date: new Date(2025, 4, 15), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/307462842",
        place: "kleegroup",
        subjects: [
            {
                title: `Signals : "Nouvelle" Norme des Frameworks Web`,
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: `
                    <p>Venez découvrir "Signals", concept clé du développement Web de demain, qui date pourtant de... 2010.</p>
                    <p>Dans cette courte conférence à destination des développeurs Frontend, vous apprendrez que l'écosystème Web a bien mûri en 10, notamment en ce qui concerne la gestion de l'état de vos applications.</p>
                    <p>Que vous soyez développeurs Angular, React, Vue, Svelte, ou tout simplement VanillaJS, vous êtes concerné par ce changement !</p>
                    <p>L'objectif de Signals est de fournir une interface unique et commune à l'ensemble des frameworks Web, afin de gérer leurs variables réactives, tout en restant simple et performant.</p>
                    <p>Cette présentation s'appuiera sur des portions de code, afin de démontrer l'intérêt de cette nouvelle notion et comment l'implémenter dans nos usages.</p>
                    <p>"À l'aube d'une grande aventure", embarquerez-vous à bord de ce talk, à la recherche de l'expérience de développement idéale ?"</p>
                    `,
                speakers: ['damien_chazoule']
            },
            {
                title: `C'est pas le réseau, ça ping Marty !`,
                time: '19h30',
                length: '45 min',
                type: 'talk',
                abstract: `
                    <p>Vous ne comprenez pas pourquoi votre application est injoignable alors que ça ping ?</p>
                    <p>Durant cette session, nous aborderons les fondamentaux du réseau, tels que la connectivité, le routage et le filtrage.</p>
                    <p>Nous parlerons également des métriques de référence, comme la latence, la bande passante et les pertes de paquets.</p>
                    <p>Enfin, nous reviendrons sur les problèmes réseaux fréquemment rencontrés par les développeurs.</p>
                    `,
                speakers: ['cynthia_treger', 'david_santiago']
            }
        ]
    },
    {
        id: '2025_04_29',
        title: `Cats' Tail ou Comment créer son propre Jeu de Rôle avec l'Agentic AI`,
        date: new Date(2025, 3, 29), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/306768959",
        place: "qlik",
        subjects: [
            {
                title: `Cats' Tail ou Comment créer son propre Jeu de Rôle avec l'Agentic AI`,
                time: '19h00',
                length: '1h30',
                type: 'talk',
                abstract: `
                    <p>Vous êtes un Développeur ou une Développeuse, fan de Jeu de Rôle et aimez les chats ? Alors venez découvrir Cats' Tail, <b>un Jeu de Rôle transformant des concepts complexes d'IA en une expérience de jeu immersive et évolutive</b> !</p>
                    <p></p>
                    <p>Durant ce talk, vous découvrirez <b>comment mettre en oeuvre les techniques d'Agentic AI</b> afin de créer un Maître du Jeu (MJ) orchestrant plusieurs agents, chacuns spécialisé dans une tâche particulière.</p>
                    <p></p>
                    <p>En Bonus : Enrichir l'expérience en persistant les échanges entre joueurs et MJ dans une base de données afin de renforcer l'immersion des joueurs et joueuses :)</p>
                    `,
                speakers: ['arnaud_jean', 'tiffany_souterre']
            }
        ]
    },
    {
        id: '2025_03_12',
        title: "REX: Oxygen, le Design System de Doctolib // Mountain Quest: Du Camp de Base au Sommet - Une Aventure Product & Tech",
        date: new Date(2025, 2, 12), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/306401890",
        place: "doctolib",
        subjects: [
            {
                title: "REX: Oxygen, le Design System de Doctolib",
                time: '19h00',
                length: '0h30',
                type: 'quickie',
                abstract: `
                    <p>Chez Doctolib, on développe nos produits avec un Design System; c a d que nos designers et nos développeurs ont un langage commun pour imaginer et faire évoluer nos produits.</p>
                    <p>Mais en fait, c'est quoi un Design System ? Et pourquoi chez Docto, il y a une équipe dédiée ?</p>
                    <p>Une Intro et Rex de nos usages. Facile d'accès même pour les devs backs ;)</p>
                `,
                speakers: ['julien_tanay']
            },
            {
                title: "Mountain Quest: Du Camp de Base au Sommet - Une Aventure Product & Tech",
                time: '19h30',
                length: '0h45',
                type: 'talk',
                abstract: `
                    <p>Embarquez pour une expédition chez Doctolib, où le Product Manager (votre cartographe) et l'Engineering Manager (votre guide de montagne) unissent leurs forces pour mener l'équipe vers de nouveaux sommets. Découvrez comment nous avons construit des équipes autonomes qui allient vision stratégique et expertise tactique.</p>
                    <p>Dans cette aventure, nous vous dévoilerons comment notre équipe :
                    <ul>
                    <li>Trace des voies ambitieuses tout en maîtrisant un terrain legacy technique</li>
                    <li>Équipe ses membres avec les bons outils et le mindset nécessaire à la réussite</li>
                    <li>Gravis les défis techniques avec agilité</li>
                    <li>Cultive l'exploration et  la prise de risque maîtrisée</li>
                    <li>Transforme les obstacles techniques en tremplins</li>
                    </ul>
                    </p>
                    <p>À travers l'expérience de notre équipe plateforme, nous partagerons des stratégies éprouvées qui permettent aux équipes d'atteindre leurs sommets tout en gardant leur esprit d'innovation. De la gestion des clients internes aux exigences réglementaires, nous révélerons comment maintenir un esprit startup dans un environnement  complexe.</p>
                    `,
                speakers: ['julien_bideau', 'celine_forestier']
            }
        ]
    },
    {
        id: '2025_02_25',
        title: "Vous saurez tout sur les type systems // Développer pour le mode hors-ligne avec le web natif",
        date: new Date(2025, 1, 25), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/306045925",
        place: "qlik",
        subjects: [
            {
                title: "Vous saurez tout sur les type systems",
                time: '19h00',
                length: '0h45',
                type: 'talk',
                abstract: `
                    <p>Vous avez déjà entendu que JavaScript était un langage au typage dynamique mais faible ? Que la grande force de Rust réside dans son typage statique et fort ? On vous a déjà parlé du concept de duck typing en Python ? Ou encore l’inférence de type qui a bouleversé Java en version 10 avec le mot-clé var ?</p>
                    <p></p>
                    <p>Ces termes peuvent paraître complexes, mais pas de panique, c'est normal. Chaque langage a son propre type system et il existe de nombreux termes pour le décrire. Comprendre ces termes nous permet de mieux comprendre le fonctionnement du langage et sa philosophie.</p>
                    <p>Ce talk démystifiera les termes les plus importants pour que vous ne soyez plus dérouté·e·s quand vous entendrez « trop bien ! un langage à typage manifeste, fort et statique ! »</p>
                `,
                speakers: ['pierre_gradot']
            },
            {
                title: "Développer pour le mode hors-ligne avec le web natif",
                time: '20h00',
                length: '0h45',
                type: 'talk',
                abstract: `
                    <p>On a beau vivre au 21e siècle, Internet partout tout le temps, en vrai ça n'existe pas.</p>
                    <p>Et d'ailleurs est-ce bien souhaitable ?</p>
                    <p>En revanche, ce qu'on veut c'est avoir accès à notre travail, nos fichiers même si on est au milieu de nulle part. Ou plutôt dans le métro :D</p>
                    <p>Les API des navigateurs évoluent en permanence et nous fournissent tout ce dont on a besoin pour faire des applications autonomes où nos données sont accessibles tout le temps.</p>
                    <p>Dans ce talk je vous montre l'architecture que j'utilise dans les applications que je met en prod.</p>
                    <p>Et comment on peut gérer la synchronisation avec un serveur distant.</p>`,
                speakers: ['aleth_gueguen']
            }
        ]
    },
    {
        id: '2025_01_21',
        title: "Une identité pour les fédérer toutes // Conventions de l'architecture hexagonale",
        date: new Date(2025, 0, 21), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/305474896",
        place: "wescale",
        subjects: [
            {
                title: "Une identité pour les fédérer toutes !",
                time: '19h00',
                length: '0h30',
                type: 'quickie',
                abstract: `
                    <p>Dans un monde numérique où nos identités sont sollicitées à chaque clic, une question se pose : faut-il vraiment créer un compte à chaque fois que l’on accède à une nouvelle application ?</p>
                    <p>De FranceConnect aux boutons "Se connecter avec…" que vous croisez partout, ces solutions simplifient nos vies numériques. Mais avez-vous déjà réfléchi à ce qui se passe en coulisses ? Pourquoi pouvez-vous naviguer entre les outils de votre entreprise sans vous réauthentifier ? Et surtout, comment tout cela reste-t-il sécurisé ?</p>
                    <p>Dans ce talk, je vous propose de découvrir les principes de l’identité fédérée et du Single Sign-On (SSO), ces outils qui rendent votre navigation plus fluide. Nous parlerons des bases qui rendent ce système universel et fiable, tout en évoquant brièvement les protocoles qui le soutiennent, comme SAML et OIDC, pour satisfaire votre curiosité technique, sans jamais vous noyer dans les détails.</p>
                    <p>Que vous soyez un utilisateur intrigué ou un développeur souhaitant explorer ces concepts, vous découvrirez un univers où simplicité et sécurité s’entrelacent pour créer des expériences numériques à la fois puissantes et élégantes.</p>
                `,
                speakers: ['sebastien_ferrer']
            },
            {
                title: "Quand les conventions hexagonales ne suffisent plus, ArchUnit à la rescousse",
                time: '19h45',
                length: '0h45',
                type: 'talk',
                abstract: `
                    <p>En architecture logicielle, on utilise de nombreuses conventions de design.</p>
                    <p>Certaines peuvent être renforcées au niveau de l'outil de build ou du langage.</p>
                    <p>Mais je remarque que le plupart restent de fragiles conventions.</p>
                    <p>Cependant les développeurs sont faillibles et ces conventions sont bien vite enfreintes consciemment ou non.</p>
                    <p>J'ai remarqué que le drift de design est souvent détecté trop tard. La dette technique s'est alors installé.</p>
                    <p>J'apprécie l’architecture hexagonale, dont les interprétations et implémentations varient. Ce qui la rend d'autant plus sensible au drift.</p>
                    <p>Pour éviter ça, j'ai pris l'habitude de renforcer les conventions de design de mes app hexagonales par des tests d'architecture.</p>
                    <p>Je vous montre un exemple en Java avec ArchUnit.</p>
                `,
                speakers: ['antoine_salesse']
            }
        ]
    },
    {
        id: '2024_12_17',
        title: "🍸 // Crash investigation : au coeur d'une application de ecommerce // Démystifier la création d'opérateurs Kubernetes en Java avec Quarkus // 🧀 🍷",
        date: new Date(2024, 11, 17), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/304559809",
        place: "adresse_gare_sud",
        subjects: [
            {
                title: 'Verre d\'accueil 🍸',
                time: '19h00',
                length: '30 min',
                type: 'hello',
                abstract: "<p>La fin de l'année approche, nous vous invitons donc à débuter cette dernière soirée de façon conviviale avec un verre de bienvenue.</p>",
            },
            {
                title: "Crash investigation : debug en prod d'une application de ecommerce",
                time: '19h30',
                length: '0h30',
                type: 'quickie',
                abstract: `
                    <p>Dans cette présentation, je vous invite à me rejoindre <b>dans la peau d’un enquêteur</b>, explorant les subtilités de l’investigation dans une application de distribution de billets de trains.</p>
                    <p>Le contexte : l'application est basée sur des microservices en <b>Java</b>, bâtie avec <b>Spring Boot</b> et orchestrée par <b>Kubernetes</b>. En apparence, tout semble fonctionner, mais un problème récurrent vient troubler le tableau. De manière sporadique et imprévisible, <b>certains services plantent dès leur démarrage</b>. Pourquoi ? Comment ? Les indices initiaux sont ténus, et rien ne semble expliquer ces défaillances aléatoires.</p>
                    <p>À travers une exploration minutieuse des couches de l’application, des mécanismes de Spring Boot, Tomcat, Jackson et des rouages de Kubernetes, nous partirons ensemble <b>en quête de l’origine de ces pannes mystérieuses</b>. Ensemble, découvrons qui est le coupable dans cette intrigue logicielle.</p>
                `,
                speakers: ['francois_kha']
            },
            {
                title: "Démystifier la création d'opérateurs Kubernetes en Java avec Quarkus",
                time: '20h00',
                length: '0h45',
                type: 'talk',
                abstract: `
                    <p>Les <strong>opérateurs Kubernetes</strong> sont devenus un outil essentiel pour simplifier le déploiement et la gestion d'applications complexes. Avec le <strong>Java Operator SDK</strong> et <strong>Quarkus</strong>, développer des opérateurs en Java devient accessible et efficace, même pour les environnements les plus complexes. Ces opérateurs permettent d'automatiser la gestion des <strong>API legacy</strong> et des <strong>sources de données externes</strong> au cluster Kubernetes, tout en restant dans un écosystème familier pour les développeurs Java.</p>
                    <p>Dans cette présentation pratique, nous allons démystifier le processus de création d'un opérateur Kubernetes en utilisant le Java Operator SDK et Quarkus. Vous découvrirez comment définir des <strong>Custom Resource Definitions (CRDs)</strong> pour modéliser les concepts clés de vos applications, puis comment utiliser Quarkus pour créer des <strong>contrôleurs légers et performants</strong>, capables de surveiller et d'agir sur des ressources du cluster ou des services externes.</p>
                    <p>Et ce ne sera pas seulement théorique ! Nous allons <strong>coder en direct</strong> pour vous montrer à quel point il est simple de créer un opérateur en Java avec Quarkus. Rejoignez-nous pour une session interactive où nous vous guiderons dans le développement d'un opérateur Kubernetes robuste.</p>
                `,
                speakers: ['horacio_gonzalez']
            },
            {
                title: 'Planche apéro et Cocktail 🧀 🍷',
                time: '21h',
                length: '3h',
                type: 'cocktail',
                abstract: "<p>Et pour clôturer la soirée en beauté, restez discuter avec nous autour d'un verre et de délicieuses planches apéro 😋</p>",
            },
        ]
    },
    {
        id: '2024_11_19',
        title: "Paketo Buildpacks // Sous le capot d'une application JVM",
        date: new Date(2024, 10, 19), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/304303223",
        place: "qlik",
        subjects: [
            {
                title: "Paketo Buildpacks : la meilleure façon de construire des images OCI?",
                time: '19h00',
                length: '0h45',
                type: 'talk',
                abstract: "<p>Les Buildpacks existent depuis plus de 10 ans ! <br/>" +
                    "D'abord, ils étaient utilisés pour détecter et construire une application avant de la déployer sur certains PaaS (Platform as a Service). <br/>" +
                    "Ensuite, nous avons pu créer des images Docker (OCI) avec leur dernière génération, les Cloud Native Buildpacks (CNCF en incubation).  <br/>" +
                    "Sont-ils une bonne alternative au Dockerfile ?  <br/>" +
                    "Que sont les buildpacks Paketo ?  <br/>" +
                    "Quelles communautés les soutiennent et comment ?",
                speakers: ['anthony_dahanne']
            },
            {
                title: "Sous le capot d'une application JVM - JDK Flight Recorder / JDK Mission Control",
                time: '19h45',
                length: '0h45',
                type: 'talk',
                abstract: "<p>Java Flight Recorder (JFR) et Java Mission Control (JMC) sont deux outils qui peuvent être utilisés pour diagnostiquer en détail le comportement d'une application, lorsque le monitoring de plus haut niveau, avec des logs, des métriques ou un APM n'est pas suffisant.</p>" +
                    "<p>JFR est un moyen basé sur les événements pour observer ce qui se passe à l'intérieur d'une JVM. JMC est l'interface utilisateur associée qui nous aide à parcourir les événements JFR. Avec JFR et JMC, nous pouvons avoir des aperçus sur les threads, le comportement de la mémoire, les opérations d'I/O, la configuration du GC, et bien plus encore, en fonction de la configuration de l'enregistrement.</p>" +
                    "<p>Au travers d'une démo et en utilisant une application exemple, nous examinerons le type d'informations que nous pouvons obtenir en utilisant ces outils, et utiliserons cela pour améliorer la performance globale de notre application.</p>",
                speakers: ['guillaume_darmont']
            }
        ]
    },
    {
        id: '2024_10_29',
        title: "Retour d'XP sur Accelerate // Comment ingérer 100 Mrd. d'événements",
        date: new Date(2024, 9, 29), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/304012594",
        place: "sii",
        subjects: [
            {
                title: "Accelerate, retour d'XP Decathlon",
                time: '19h00',
                length: '0h20',
                type: 'quickie',
                abstract: "<p>Au cours de ce quickie après un rappel sur ce qu'est Accelerate, je présenterai comment nous nous en sommes inspiré chez Decathlon et les enseignements que nous en avons tiré</p>",
                speakers: ['jean-philippe_le-goff']
            },
            {
                title: "Comment ingérer 100 Mrd. d'événements depuis des millions d'appareils par mois ?",
                time: '19h30',
                length: '0h45',
                type: 'talk',
                abstract: "<p>Lors de cette présentation, vous allez découvrir comment une petite équipe de dév a réussi à monter une infrastructure dans AWS qui répond à des besoins de scalabilité forte, tout en étant robuste et avec des coûts maîtrisés.</p>" +
                    "<p>Nous allons parcourir la pipeline depuis l’ingestion, en passant par l’agrégation pour finir par la restitution de la donnée.</p>" +
                    "<p>Nous aborderons beaucoup de services AWS : Lambda, ECS, ELB, Athena, Kinesis & Firehose, et bien d’autres… Nous verrons également comment le tout est déployé.</p>" +
                    "<p>Enfin, nous aurons un aperçu de comment maîtriser la scalabilité, la sécurité et les coûts au fil du temps.</p>",
                speakers: ['valentin_maerten']
            }
        ]
    },
    {
        id: '2024_10_02',
        title: "La recherche à l'ère de l'IA // Elasticsearch Query Language: ES|QL",
        date: new Date(2024, 9, 2), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/nantes-java-user-group/events/303451947",
        place: "zenika",
        subjects: [
            {
                title: "La recherche à l'ère de l'IA",
                time: '19h00',
                length: '0h45',
                type: 'talk',
                abstract: "<p>La recherche ne se contente plus de l'approche maintenant traditionnelle basée sur la fréquence des termes (TF/IDF ou BM25) mais plus sur la tendance actuelle du machine learning où les nouveaux modèles ont ouvert une nouvelle dimension pour la recherche.</p>" +
                    "<p>Cette conférence donne un aperçu de :" +
                    "<ul>" +
                    "<li>La recherche 'Classique' et ses limitations</li>" +
                    "<li>Qu'est qu'un modèle de machine learning et comment vous pouvez l'utiliser</li>" +
                    "<li>Comment utiliser la recherche vectorielle ou la recherche hybride dans Elasticsearch</li>" +
                    "<li>Comment ChatGPT d'OpenAI ou les 'large language models' (LLMs) similaires viennent jouer naturellement avec Elastic</li>" +
                    "</ul></p>" +
                    "<p>La démo principale montre comment générer des embeddings à partir de musiques puis comment trouver la musique qui s'approche le plus d'une musique que nous fredonnons 🎵 🎸 🎻.</p>",
                speakers: ['david_pilato']
            },
            {
                title: "Elasticsearch Query Language: ES|QL",
                time: '20h00',
                length: '0h45',
                type: 'talk',
                abstract: "<p>Dans cette session sans slides, nous découvrirons par la pratique ce qu'apporte le nouveau language `ES|QL` pour aller fouiller dans nos données indexées dans Elasticsearch et ce, de façon interactive et visuelle.</p>" +
                    "<p>`ES|QL` et surtout le nouveau moteur derrière l'API `_query` apportent à la fois une syntaxe simplifiée permettant d'affiner vos résultats, étape par étape et ajouter de nouvelles fonctionnalités comme par exemple l'enrichissement de données et la transformation à la volée, directement dans votre requête, mais également des performances inégalées.</p>",
                speakers: ['david_pilato']
            }
        ]
    },
    {
        id: '2024_06_12',
        title: "Soirée de fin d'année : JUnit 5 // Spring Boot",
        date: new Date(2024, 5, 12), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/301290651",
        place: "adresse_gare_sud",
        subjects: [
            {
                title: 'Verre d\'accueil 🍸',
                time: '19h00',
                length: '0h30',
                type: 'hello',
                abstract: "<p>C'est la dernière de la saison, alors nous vous proposons de commencer cette dernière soirée de la meilleure des manières avec un petit verre d'accueil</p>"
            },
            {
                title: "Rendre ses tests aussi clean que son code de prod grâce à JUnit 5 & cie",
                time: '19h30',
                length: '0h45',
                type: 'talk',
                abstract: "<p>Après avoir développé une nouvelle fonctionnalité, on passe souvent par une phase de refactoring pour essayer de trouver une meilleure implémentation. Mais peut-être qu’on oublie parfois d’améliorer les tests ?</p>" +
                    "<p>Une fois écrits, les tests serviront non seulement à détecter de potentiels bugs, mais aussi à documenter un comportement et à apporter de la confiance à l’équipe lors des développements suivants. Pour remplir ces fonctions cruciales, une suite de test doit être lisible, compréhensible, facile à enrichir, et exécutable rapidement.</p>" +
                    "<p>Voyons comment tirer parti d’outils tels que JUnit 5, AssertJ ou Spring Test pour atteindre ces objectifs !</p>",
                speakers: ['juliette_de_rancourt']
            },
            {
                title: "Rechargez vos applications web avec Spring Boot",
                time: '20h20',
                length: '0h45',
                type: 'talk',
                abstract: "<p>Si vous faites vivres des applications web, les mettre à jour à la dernière version de Spring n'est pas juste une question de maintenance: c'est aussi le bon moment pour appuyer sur &quote;F5&quote; et recharger votre stack web. Vous pouvez faciliter la vie des développeurs et apporter de la valeur à vos utilisateurs. Avec Spring Boot 3.2, l'équipe Spring vous aide à faire évoluer vos applications selon vos besoins:</p><ul>" +
                    "<li>Améliorer l'efficacité en production avec les Virtual Threads</li>" +
                    "<li>Utiliser une API moderne de client HTTP (sans Reactive!) avec RestClient</li>" +
                    "<li>S'aider des métriques et des traces pour résoudre les incidents en production</li>" +
                    "<li>Mieux gérer les certificats TLS avec les bundles</li>" +
                    "<li>Connecter l'application à d'autres systèmes grâce à Docker compose et Testcontainers</li>" +
                    "<li>Améliorer les temps de démarrage avec CDS ou bien Checkpoint Restore</li>",
                speakers: ['stephane_nicoll']
            },
            {
                title: 'Petits fours et Cocktail 🍣 🍷',
                time: '21h20',
                length: '3h',
                type: 'summer',
                abstract: "<p>Et pour bien finir, restez discuter avec nous autour d'un verre et des petits fours 😋</p>",
            }
        ]
    },
    {
        id: '2024_05_28',
        title: "Pizzas et agrégations, ou comment MongoDB a sauvé mon restaurant // Comment j'ai remplacé mon extincteur par un manuel des castors juniors",
        date: new Date(2024, 4, 28), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/300973582",
        place: "onepoint",
        subjects: [
            {
                title: "Pizzas et agrégations, ou comment MongoDB a sauvé mon restaurant",
                time: '19h00',
                length: '0h30',
                type: 'quickie',
                abstract: "<p>MongoDB offre un grande flexibilité sur le format des données, mais comment les manipuler lorsqu’on doit modifier des milliers de documents ?</p>" +
                    "<p>Les agrégations offre une solution simple : faire une pipeline pour éditer les documents, les enrichir ou en récupérer des informations pour générer des métriques globales.</p>" +
                    "<p>Venez découvrir les agrégations MongoDB à travers l'exemple d'une pizzeria, qui doit modifier l'intégralité de sa base de données suite à un choix culinaire discutable...</p>" +
                    "</p>",
                speakers: ['alexis_voisin']
            },
            {
                title: "Comment j'ai remplacé mon extincteur par un manuel des castors juniors",
                time: '19h45',
                length: '1h00',
                type: 'talk',
                abstract: "<p>Vous en avez marre d'intervenir tout le temps en mode pompier sur vos projets ? Vous ne touchez plus à rien dans le code dans la crainte de tout voir exploser ? Vous aimeriez remettre de la sérénité dans vos refactos de code ?</p>" +
                    "</p>Prenez vos places pour un entrainement spécial au Software Craftsmanship aux côtés de Riri, Fifi et Loulou qui fera de vous un vrai adepte du scoutisme.</p>" +
                    "</p>Nous parcourrons et illustrerons, au travers d’exemples concrets, un guide de bonnes pratiques (Clean Code, SOLID, proposition de démarches) vous permettant dans un premier temps d'identifier vos éventuels refactos et par la suite de les suivre et de les traiter.</p>" +
                    "</p>Installez-vous confortablement et venez récupérer votre médaille de parfait petit scout. 🎖️</p>" +
                    "</p>",
                speakers: ['ambre_person', 'gwenael_bec']
            }
        ]
    },
    {
        id: '2024_04_03',
        title: "Github actions // Fusion",
        date: new Date(2024, 3, 3), //month begin at 0
        time: '19h00',
        register: "https://www.meetup.com/fr-FR/nantes-java-user-group/events/299812280/",
        place: "lepalace",
        subjects: [
            {
                title: "Passe à l'Actions avec GITHUB !",
                time: '19h00',
                length: '0h30',
                type: 'quickie',
                abstract: "<p>De nos jours, l'automatisation est omniprésente dans nos processus de développement principalement pour les phases de tests, de build et de déploiements.</p>" +
                    "<p>Au-delà de cette simple automatisation, la plateforme GitHub Actions vous offre la possibilité d'aller encore plus loin en créant vos propres actions personnalisées.</p>" +
                    "<p>Que l’on soit technique ou fonctionnel, on trouve des avantages concrets dans l'intégration de GitHub Actions dans le processus de développement en automatisant de tâches simples et fastidieuses.</p>" +
                    "<p>Ce talk permet de découvrir les GitHub Actions personnalisées, en découvrant les étapes de création d'une Github Action en mettant l'accent sur la simplicité et l'efficacité.</p>",
                speakers: ['aymeric_laleau']
            },
            {
                title: "Bienvenu dans l'ère de Fusion",
                time: '19h45',
                length: '1h00',
                type: 'talk',
                abstract: "<p>Découvrez ce qu'est Yupiik OSS et pourquoi il a été créé comme un framework OSS complet pour simplifier le processus de développement de bout en bout.</p>" +
                    "<p>Nous commencerons par discuter de l'écosystème IT et Cloud / Java dans lequel nous évoluons aujourd'hui et de ses défis.</p>" +
                    "<p>Une brève deuxième partie comparera également les modèles Java courants à des solutions plus récentes dans d'autres langages pour voir si nous partons d'un héritage ou si nous sommes juste en avance par rapport à eux.</p>" +
                    "<p>Enfin, la dernière partie portera sur la façon dont l'écosystème Fusion prend en compte cet état, d'un simple programme CLI à une API ou une application web déployée dans un cluster Kubernetes, mais nous veillerons également à prendre en compte les aspects de sécurité, de déploiement et de documentation (vivante).</p>",
                speakers: ['romain_manni-bucau', 'francois_papon']
            }
        ]
    },
    {
        id: '2024_03_12',
        title: "Product Owner vs Product Manager // JobRunr",
        date: new Date(2024, 2, 12), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/nantes-java-user-group/events/299386567/',
        place: 'sqli',
        subjects: [
            {
                title: "J'suis Product Owner et moi J'suis Product Manager ! Sommes-nous si différents ?",
                time: '19h00',
                length: '0h15',
                type: 'quickie',
                abstract: "<p>Lors d’entretiens techniques/fonctionnels que je fais passer à des candidats, je me suis rendu compte que la définition du rôle de Product Manager et Product Owner était parfois confuse et interprétée de différentes manières.</p>" +
                    "<p>Afin que vous puissiez alimenter votre réflexion, on évoquera les principales fonctions du Product Owner et du Product Manager. On se fera un avis sur leur complémentarité ou différence et surtout on abordera également quelques clichés qui selon moi ne sont pas fondés.</p>",
                speakers: ['julien_boeuf']
            },
            {
                title: "Global Inventory at Scale: How Decathlon manages Stock Worldwide using JobRunr [EN]",
                time: '19h30',
                length: '1h00',
                type: 'talk',
                abstract: "<p>In the competitive world of retail, managing stock for 1700 Decathlon stores across 5 continents presented a formidable challenge: maintaining accurate, real-time inventory across diverse time zones. How do you ensure that a football or a snorkeling mask is available when a customer needs it, irrespective of the store's location?</p>" +
                    "<p>Join us as we narrate Decathlon's journey through this complex landscape. This talk will dive into our innovative approach - a blend of RFID technology, robotics, custom coding, and the power of JobRunr - an open-source distributed job scheduler. We'll share our journey of exploring various tools and technologies, highlighting how JobRunr emerged as our top choice for its efficiency and scalability. We'll explain how our integration of open-source software, automated systems, and robotics has not only improved inventory accuracy but also enhanced the global shopping experience at our stores. Additionally, we'll show you how JobRunr works and demonstrate its capabilities through a live coding session.</p>" +
                    "<p>After this session you will know all about the challenges we faced, the solutions we devised, and how these insights can be practically applied in your own business scenario.</p>" +
                    "<p><u>Conférence en anglais</u></p>",
                speakers: ['ronald_dehuysser', 'francois-xavier_verryser']
            }
        ]
    },
    {
        id: '2024_02_15',
        title: "Generative AI par la pratique : cas concrets d'utilisation d'un LLM en Java",
        date: new Date(2024, 1, 15), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/nantes-java-user-group/events/298858263/',
        place: 'eartsup',
        subjects: [
            {
                title: "Generative AI par la pratique : cas concrets d'utilisation d'un LLM en Java",
                time: '19h00',
                length: '1h30',
                type: 'eartsup',
                abstract: "<p>Le NantesJug, Generative AI Nantes, GDG Nantes et GDG Nantes Cloud s'associent pour vous organiser un meetup inédit à Nantes !<br/>" +
                    " Venez assister à la conférence de Guillaume Laforge, Developer Advocate chez Google Cloud.<br/>" +
                    " RDV le jeudi 15 février à 19h dans les locaux d'e-artsup Nantes, 18 Rue Flandres - Dunkerque 40, 44000 Nantes<br/>" +
                    " Generative IA par la pratique : cas concrets d'utilisation d'un LLM en Java, avec l'API PaLM, Gemini et LangChain4J<br/>" +
                    " Les Large Language Models (LLM) sont une nouvelle technologie puissante qui peut être utilisée pour une variété de tâches, notamment la génération de texte, la traduction de texte et la rédaction de différents types de contenu créatif. Cependant, les LLMs peuvent être difficiles à utiliser, en particulier pour les développeurs qui ne sont pas expérimentés en Python, la “lingua franca” de l'IA.<br/>" +
                    " Alors, qu'en est-il des développeurs Java ? Comment pouvons-nous tirer parti de l'IA générative ?<br/>" +
                    " Cette présentation vous montrera comment utiliser les LLMs en Java sans avoir besoin de Python. Nous utiliserons l'API PaLM et Gemini, fournie par les services Google Cloud Vertex AI, pour effectuer une variété de tâches, telles que la recherche dans de la documentation, la génération d'histoires pour enfants, la synthèse du contenu, l'extraction de mots-clés ou d'entités, et plus encore.<br/>" +
                    " Et nous plongerons dans les possibilités offertes par le framework LangChain4J pour les développeurs Java !<br/>" +
                    " Qui est Guillaume Laforge ? Developer Advocate chez Google Cloud, où il se focalise sur les architectures orientées événement, l'orchestration d'API, et l'intelligence artificielle générative.<br/>" +
                    " Dans le monde Java, Guillaume est sans doute plus connu pour avoir co-fondé le langage de programmation Apache Groovy, et pour être un des membres fondateurs du podcast tech Les Cast Codeurs.</p>",
                speakers: ['guillaume_laforge']
            }
        ]
    },
    {
        id: '2024_01_23',
        title: "JCon Europe 2023 // Memory layout & Performance en Java",
        date: new Date(2024, 0, 23), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/298360020/',
        place: 'qlik',
        subjects: [
            {
                title: "Retour sur le JCon Europe 2023",
                time: '19h00',
                length: '20 min',
                type: 'quickie',
                abstract: "<p>Description des thèmes principaux abordés lors du Jcon Europe de juin 2023</p>",
                speakers: ['jean_francois_albenque']
            },
            {
                title: "Memory layout & Performance en Java",
                time: '19h30',
                length: '60 min',
                type: 'talk',
                abstract: "<p>En quoi l'agencement des objets mémoire joue t'il sur nos perfs ? Quels leviers/outils avons-nous ? C'est le but de ce talk</p>",
                speakers: ['jerome_moliere']
            }
        ]
    }, {
        id: '2023_12_07',
        title: "🍸 Soirée de fin d'année 🍸 Podman et Hello Quarkus 3",
        date: new Date(2023, 11, 7), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/297121443',
        place: 'les_brasses',
        subjects: [
            {
                title: 'Verre d\'accueil 🍸',
                time: '19h00',
                length: '30 min',
                type: 'hello',
                abstract: "<p>C'est bientôt la fin de l'année, alors nous vous proposons de commencer cette dernière soirée de la meilleure des manières avec un petit verre d'accueil</p>",
            }, {
                title: "Podman Desktop: Open Source GUI pour conteneurs et Kubernetes",
                time: '19h30',
                length: '30 min',
                type: 'quickie',
                abstract: "Les conteneurs sont omniprésents dans le monde actuel du développement logiciel, mais pour les développeurs, cela peut être intimidant, en particulier avec les divergences entre les environnements locaux et de production. <br/>" +
                    "Dans ce talk, nous vous présenterons Podman Desktop qui comble cet écart. Il s'agit d'une interface graphique (GUI) entièrement open-source qui simplifie les workflows de conteneurs et est compatible avec Podman, Lima, Docker, et bien plus encore. Plateforme idéale pour interagir avec les conteneurs, Podman Desktop fournit également une interface utilisateur pour travailler avec vos environnements Kubernetes. Vous pouvez aussi configurer vos clusters locaux (avec MiniKube et KinD). <br>" +
                    "Dans la démo nous verrons comment Podman Desktop permet de faciliter la transition des conteneurs vers les environnements Kubernetes. Vous apprendrez comment Podman Desktop peut être le tremplin qui dynamise vos processus de développement de conteneurs !<br>",
                speakers: ['stevan_le_meur']
            }, {
                title: "Hello Quarkus 3!",
                time: '20h00',
                length: '60 min',
                type: 'talk',
                abstract: "Quarkus est une stack pour écrire des applications Java pour le Cloud. En réduisant l’emprunte mémoire et le temps de démarrage, les applications Quarkus permettent en autre d’augmenter la densité de déploiement, le développement d'application serverless en Java, un meilleur comportement dans Kubernetes…<br>" +
                    "La première release publique de Quarkus a été faite en Mars 2019. Nous voilà 4 ans plus tard avec Quarkus 3.x. Entre temps, Quarkus a grandi, son écosystème s’est enrichi. Mais, Quarkus est resté fidèle à ses principes.<br>" +
                    "Cette présentation rappelle les points fondamentaux de Quarkus (build-time principle, reactive core, container-first...) et explique leur évolution au cours de ces 4 dernières années ainsi que les nouveautés de Quarkus 3.x tels que la nouvelle dev ui, l’intégration d’Hibernate 6, le passage à Jakarta et à Flow, le support des threads virtuels (project loom), les différentes améliorations de l’expérience pour les développeurs, le support des architectures ARM…<br>",
                speakers: ['clement_escoffier']
            },
            {
                title: 'Petits fours et Cocktail 🍣 🍷',
                time: '21h',
                length: '3h',
                type: 'winter',
                abstract: "<p>Et pour bien finir, restez discuter avec nous autour d'un verre et des petits fours 😋</p>",
            },
        ]
    }, {
        id: '2023_11_09',
        title: "Azerty, Qwerty, peut-on faire mieux ? // Retourner le cerveau de sa Gameboy",
        date: new Date(2023, 10, 9), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/296909012',
        place: 'zenika',
        subjects: [
            {
                title: "Azerty, Qwerty, peut-on faire mieux ?",
                time: '19h00',
                length: '20 min',
                type: 'quickie',
                abstract: `<p>Qwerty, Bépo, dvorak, colemak, workman... autant de dispositions de touches sur les claviers plus ou moins optimisées. Je vous présenterais celle que j'utilise depuis plus d'un an et quels bénéfices j'en ai tiré et les points durs. #mechkeyboard #diy</p>`,
                speakers: ['guillaume_membre'],
            },
            {
                title: "Retourner le cerveau de sa Gameboy et les attraper (vraiment) tous 💪",
                time: '19h30',
                length: '60 min',
                type: 'talk',
                abstract: `<p>Vous avez 10 ans. Vous êtes assis sous un arbre dans votre jardin, et vous jouez à la Gameboy Pocket. La vie est douce. Soudain, votre meilleur ami débarque de nulle part, sa cartouche de Pokémon Bleu dans la main, et vous crie quelque chose ! Il le jure sur la tête de son chien : il a réussi à attraper Mew. Selon vous, il y a deux explications possibles : votre ami s'est acheté un Action Replay et a triché comme un malpropre, ou il vous joue du pipeau. Et si je vous disais qu'il existait une 3ème explication : votre ami est un génie de l'assembleur. C'est ce que je vous propose de découvrir dans un talk qui sent bon les années 90 et le reverse engineering.</p>`,
                speakers: ['audren_burlot']
            },
        ]
    },
    {
        id: '2023_10_10',
        title: "Zookeeper vs KRaft // Kotlin",
        date: new Date(2023, 9, 10), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/296486844/',
        place: 'seyos',
        subjects: [
            {
                title: "Zookeeper vs KRaft: une histoire de consensus dans Kafka",
                time: '19h00',
                length: '20 min',
                type: 'quickie',
                abstract: `<p>En octobre 2022, Confluent annonçait la dépréciation de Zookeeper dans Kafka et l’avènement de KRaft.</p>
                             <p>En Mai 2023, au Kafka Summit, Jay Krups (CEO de Confluent), confirmait que KRaft allait devenir la configuration par défaut.</p>
                             <p>Les questions qu'on peut se poser :</p>
                             <p>- Quel problème résout Zookeeper dans Kafka ? Et donc, pourquoi changer ?</p>
                             <p>- Qu'apporte KRaft ?</p>
                             <p>- Quel impact pour les utilisateurs et sur l’écosystème en général ?</p>`,
                speakers: ['valentin_lefort'],
            },
            {
                title: "En production pour la vie avec un backend en Kotlin",
                time: '19h30',
                length: '45 min',
                type: 'talk',
                abstract: `<p>Dans cette présentation, nous verrons concrètement comment Kotlin permet de produire du code gracieux, maintenable et évolutif.<br/> La présentation abordera également quelques concepts de programmation fonctionnelle, de programmation asynchrone avec les coroutines et même un peu de testabilité.<br/>Le tout agrémenté d'exemples de la vraie vie (via un projet open-source basé sur Spring Boot)</p>`,
                speakers: ['benoit_orihuela']
            },
        ]
    },
    {
        id: '2023_09_19',
        title: "Soirée : Apache Pulsar, et introduction aux outils de Securité (SAST)",
        date: new Date(2023, 8, 19), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/295921312/',
        place: 'sfeir',
        subjects: [
            {
                title: "Introduction aux outils de tests de sécurité d'application statique (SAST)",
                time: '19h00',
                length: '20 min',
                type: 'quickie',
                abstract: `<p>Le plus tôt vous testez votre application, moins les bugs de sécurité vous coûtera. Alors autant tester directement votre code. Mais avant d'installer le premier outil venue, regardons ensemble ce qu'est exactement un Static Application Security Testing (SAST). Y-a-t'il plusieurs type de SAST? Comment savoir si l'outil est pertinent ?</p>
                            <p>Nous allons répondre à ces questions pour vous permettre d'envoyer du code en production plus sereinement.</p>
                             `,
                speakers: ['adrien_pessu'],
            },
            {
                title: "Apache Pulsar : enfin une alternative à Kafka!",
                time: '19h30',
                length: '60 min',
                type: 'talk',
                abstract: `<p>Aujourd'hui, quand on pense à créer des applications event-driven et temps réel, les mots qui viennent spontanément sont : RabbitMQ, ActiveMQ ou encore Kafka. Ce sont les solutions qui dominent ce paysage. Mais pour créer des applications événementielles exigeantes, il y a une alternative qui monte : Apache Pulsar.</p>
                            <p>Après un bref rappel des concepts du messaging, vous découvrirez les caractéristiques-clé de Pulsar. Vous apprendrez notamment :
                            <ul>
                            <li>- comment Pulsar permet de dépasser certaines limites qu'on peut rencontrer avec d'autres brokers</li>
                            <li>- comment il permet de scaler rapidement et sans prise de tête</li>
                            <li>- comment il garantit une excellente durabilité des messages</li>
                            <li>- en quoi il est pertinent en tant que plateforme de streaming et de messagerie unifiée</li>
                            <li>- comment l'intégrer à votre existant compatible avec Kafka ou RabbitMQ</li>
                            <li>- un aperçu de la communauté open-source autour de Pulsar</li>
                            </ul></p>`,
                speakers: ['julien_jakubowski']
            },
        ]
    },
    {
        id: '2023_06_22',
        title: "API explosives 🧨 // Déployer du Java en serverless c'est possible.",
        date: new Date(2023, 5, 22), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/293967666',
        place: 'adresse_gare_sud',
        subjects: [
            {
                title: 'Développeurs, faites exploser vos APIs 🧨 ',
                time: '19h00',
                length: '15 min',
                type: 'quickie',
                abstract: '<p>La “pyramide des tests” est une notion dont tout le monde a déjà entendu au moins une fois. Entre tests unitaires, tests d’intégration ou encore tests de charge, ils sont souvent négligés, par manque de budget, de temps (ou les deux) ou bien par manque de conviction (ou les 3 ?).</p>' +
                    "<p>Après vous avoir expliqué notre façon de voir les tests de charge, nous vous montrerons comment nous, développeurs, avons pu concevoir, analyser, exécuter et interpréter des tirs de charge et avec quels outils.</p>",
                speakers: ['sylvain_nael', 'jean_philippe_baconnais'],
            },
            {
                title: "Déployer du Java en serverless c'est possible.",
                time: '19h30',
                length: '60 min',
                type: 'talk',
                abstract: `<p>Les architectures modernes font la part belle micro-services et aux fonctionnalités sans gestion de serveur. Très (trop ?) souvent, les exemples que l'on peut voir utilisent des langages interprétés alors que Java reste toujours un langage fort plébiscité en entreprise. Peut-on donc faire du serverless avec Java ?</p>
                    <p>Dans cette session, je vous présenterai les intérêts des solutions serverless ainsi que les différentes options dont on dispose sur AWS pour y faire tourner une application Java. Enfin, nous regarderons les challenges spécifiques à la plateforme et comment on peut les contourner grâce à certaines nouveautés du langage comme l'API CRaC.
                    Après cette présentation, vous devriez savoir si vous pouvez faire tourner votre service de trading de licorne avec Spring et ceci sans avoir à gérer de serveur !</p>`,
                speakers: ['damien_metzler']
            },
        ]
    },
    {
        id: '2023_05_09',
        title: "Hands-on Threads virtuels du JDK 19",
        date: new Date(2023, 4, 9), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/nantes-java-user-group/events/293108986/',
        place: 'lepalace',
        subjects: [
            {
                title: 'Introduction: les Threads virtuels',
                time: '19h00',
                length: '30 min',
                type: 'talk',
                abstract: '<p>Introduction à Loom et aux threads virtuels... puis hands-on/kata</p>',
                speakers: ['jerome_moliere'],
            },
            {
                title: 'Hands-on Threads virtuels du JDK 19',
                time: '19h30',
                length: '90 min',
                type: 'hands-on',
                abstract:
                    "<p>Hands-on pour découvrir par la pratique les threads virtuels sous forme de koans (tests unitaires) autour des nouveautés apportées par cette API</p><p>Venez avec votre machine et le JDK 19 installé, ou partagez les exercices avec votre voisin/voisine.</p>",
                speakers: ['jerome_moliere']
            },
        ]
    },
    {
        id: '2023_04_12',
        title: "Web3 // Mob programming",
        date: new Date(2023, 3, 12), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/292533766/',
        place: 'lepalace',
        subjects: [
            {
                title: 'Web3 ? Demystifions les blockchains et les applications décentralisées !',
                time: '19h00',
                length: '40 min',
                type: 'talk',
                abstract: '<p>Les termes Blockchain, proof-of-stake, smart contract, dApp, token, NFT, DAO ou Web3 vous laissent perplexes, vous donnent le vertige ou voire même vous énervent ? Venez découvrir les concepts et les composants structurants qui se cachent derrière tout ça !</p>',
                speakers: ['raphael_semeteys'],
            },
            {
                title: 'Mob programming, la véritable approche du développement en équipe',
                time: '19h45',
                length: '55 min',
                type: 'talk',
                abstract:
                    "<p>Shérif, le manager, est en colère. Il vient de surprendre toute l’équipe de développement autour d’une même machine. Rendez-vous compte ! Après des comparaisons douteuses avec la DDE, il les a bien sermonnés et leur a ordonné de retourner à leur poste de travail immédiatement, un peu de sérieux ! Avec Shérif, la bamboche, c’est terminé !</p>" +
                    "<p>Malheureusement, des Shérif, il en existe encore beaucoup dans les open-spaces de nos DSI. Partager un ordinateur entre plusieurs développeurs, mais pourquoi donc ?</p>" +
                    "<p>Le MOB programming est une pratique s’appuyant sur le Lean et sur Extreme Programming qui consiste à réaliser une tâche, qu’elle soit technique ou non, à plusieurs. Les groomings, planifications et autres réunions de conception, ne serait-ce pas déjà des MOBs ?</p>" +
                    "<p>De mythe à réalité, nous vous proposons de faire un retour d’expérience du MOB programming dans une équipe produit chez Ouest-France. Nous vous offrirons deux points de vue, celui du lead, présent depuis le début du projet (5 ans) et celui d’un développeur qui a rejoint l’équipe début 2021.</p>",
                speakers: ['maxime_odye', 'mathieu_pousse']
            },
        ]
    },
    {
        id: '2023_04_06',
        title: "Dev'Party - Clash of Code",
        date: new Date(2023, 3, 6), //month begin at 0
        time: '19h00',
        register: 'https://www.billetweb.fr/devparty-nantes',
        place: 'eartsup',
        subjects: [
            {
                title: 'Retour de la Dev\'Party avec Codingame et les communautés tech nantaise ! ',
                time: '19h00',
                length: '30 min',
                type: 'talk',
                abstract: 'Venez participer à ce tournoi de programmation DevParty !<br/><br/>Sous forme d\'un tournoi "Clash of Code" fourni par la plateforme Codingame, vous affronterez les autres participants tout au long de la soirée sur différentes épreuves de code :<br/><br/>    Fastest : Vous devez terminer le défi aussi vite que possible.<br/>    Shortest : Vous devez écrire le code le plus concis. Prenez votre temps pour parvenir à la solution la plus courte !<br/>    Reverse : Vous devez deviner ce qu\'il y a à faire en observant le jeu de tests fourni.<br/><br/>Chaque épreuve durera entre 5 et 15 min, et vous devrez passer le maximum de tests pour avoir le meilleur score possible et ainsi améliorer votre classement général.<br/><br/>Vous pourrez utiliser le langage de programmation de votre choix : js, java, go, python, et bien d\'autres<br/><br/>Co-organisé avec les communautés tech nantaises, cette soirée sera agrémentée par un buffet, des boissons et bien sûr des lots à gagner.<br/><br/>Il s\'agit d\'un tournoi individuel, où tous les joueurs seront regroupés par arène de 10 joueurs max, et les meilleurs repartiront avec des lots.<br/><br/>N\'oubliez pas votre laptop pour participer !<br/>',
                speakers: [],
            },
        ]
    },
    {
        id: '2023_03_16',
        title: "Robotisez les tests de vos microservices + De Java vers Kotlin : codez deux fois plus vite !",
        date: new Date(2023, 2, 16), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/291639279/',
        place: 'nickel',
        subjects: [
            {
                title: 'Robotisez les tests de vos microservices',
                time: '19h00',
                length: '45 min',
                type: 'talk',
                abstract: "<p>Pour assurer la fiabilité et le bon fonctionnement de nos microservices chez Nickel, nous écrivons des tests automatisés avec RobotFramework, un outil python et open source.</p><p>Sa syntaxe user-friendly permet de comprendre rapidement l’objet d’un test dès la lecture de son code. Il offre également un gain de temps à nos développeurs pour construire leur jeu de données.</p><p>Nous écrirons ensemble le test d’une API REST pour découvrir RobotFramework, ses concepts, sa syntaxe et ses rapports de tests en sortie.</p><p>Enfin, nous vous présenterons les choix et les outils que nous avons retenus pour obtenir des tests stables et maintenables au quotidien..</p>",
                speakers: ['remi_picard', 'mohamed_ali_bouine']
            }, {
                title: "De Java vers Kotlin : codez deux fois plus vite !",
                time: '19h45',
                length: '45 min',
                type: 'talk',
                abstract: "<p>Vous aimez Java, mais pas son aspect verbeux ?</p><p>Vous aimez les try catch mais pas les NullPointerException ?</p><p>Vous en avez assez d'écrire des equals et des hashcode ?</p><p>Qu'à cela ne tienne, un langage peut vous venir en aide : Scala !</p><p>... Ah, non attendez, c'est pas la bonne fiche...</p><br/><p>Donc ! Vous connaissez sans doute Scala et tous les avantages qu'il offre par rapport à Java, mais connaissez-vous Kotlin ? Ce qu'il apporte par rapport à Scala ? Et surtout, pourquoi vous devriez sérieusement considérer un projet avec si vous souhaitez vous simplifier la vie ?</p><br/><p>Je vous propose de vous faire découvrir ce langage au travers de cette présentation, autour de ses avantages et des outils qu'il propose afin d'avoir un projet fiable et simple à maintenir !</p>",
                speakers: ['yann_huriez']
            }
        ]
    },
    {
        id: '2023_02_02',
        title: "Advanced TypeScript Patterns + Urbaniser un SI pour 10 ans",
        date: new Date(2023, 1, 2), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/291067375',
        place: 'talend',
        subjects: [
            {
                title: 'Advanced TypeScript Patterns',
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>Durant ce talk nous verrons ensemble comment les nouveautés introduite depuis TypeScript 4 (Template Literals Types, Recursive Conditional Types etc) peuvent nous aider à rendre notre code plus robuste et expressif.</p>",
                speakers: ['gregory_houllier']
            }, {
                title: "Urbaniser un SI pour 10 ans",
                time: '19h30',
                length: '90 min',
                type: 'talk',
                abstract: "<p>Un SI, ça doit évoluer en permanence, et si possible, pas en faisant une refonte totale tous les 3 ans. Alors je vous propose de parler de microservices, de Domain-driven design, de déclaratif, de réactif, de chorégraphie et de plein d'autres beaux concepts d'urbanisation qui servent justement à ça : rendre votre SI évolutif, pour que votre prochaine urbanisation dure au moins 10 ans.</p>",
                speakers: ['christophe_quintard']
            }
        ]
    },
    {
        id: '2023_01_24',
        title: "Tooling monorepo polyglot + Architecture Microservices et cohérence des données",
        date: new Date(2023, 0, 24), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/290766700',
        place: 'eartsup',
        subjects: [
            {
                title: 'Du tooling JS dans mon monorepo polyglot',
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>Nous découvrirons comment les nouveaux outils JS (nx / turborepo) peuvent améliorer votre expérience et productivité sur un large monorepo.<br>Puis comment en bénéficier sur d'autres languages.</p>",
                speakers: ['nicolas_morel']
            }, {
                title: "Architecture Microservices et cohérence des données : on fait comment pour de vrai ?",
                time: '19h30',
                length: '90 min',
                type: 'talk',
                abstract: "<p>Les architectures microservices ont le vent en poupe. Elles présentent de nombreux avantages pour mettre en place les bonnes pratiques DevOps et faire travailler en parallèle des équipes pluridisciplinaires autonomes. Evoluer du monolithe vers les microservices n’est pas un long fleuve tranquille… Les challenges ne manquent pas. L’un d’entre eux, et non des moindres, est la cohérence des données. Un des principes de base est que chaque service possède sa propre base de données. Quand une transaction métier invoque plusieurs services, on ne peut donc plus compter sur les bonnes vieilles transactions ACID des serveurs SQL.</p><br>"
                    + "<p>Quant aux transactions distribuées XA/2PC, oubliez les, elles sont jetées au pilori des mauvaises pratiques depuis bien longtemps ! Une fois ce constat établi, on fait quoi concrètement ? Comment peut-on répondre à cette problématique ? Dans cette présentation, nous verrons comment procéder avec deux approches : les SAGA et les LRA (Long Running Action). Un exemple concret basé sur MicroProfile et le framework Eeventuate Tram vous permettra de les appréhender et de choisir la bonne option pour votre projet Microservices</p><br>",
                speakers: ['jean_francois_james']
            }
        ]
    },
    {
        id: '2022_12_13',
        title: "🍸 Soirée de fin d'année 🍸 spéciale Java 19 avec José Paumard et Rémi Forax",
        date: new Date(2022, 11, 13), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/289829724',
        place: 'madeleine_icilundi',
        subjects: [
            {
                title: 'Verre d\'accueil 🍸',
                time: '19h00',
                length: '30 min',
                type: 'hello',
                abstract: "<p>C'est bientôt la fin de l'année, alors nous vous proposons de commencer cette dernière soirée de la meilleure des manières avec un petit verre d'accueil offert par Decathlon</p>",
            }, {
                title: "Java 19 et au-delà : programmation orientée données et programmation asynchrone",
                time: '19h30',
                length: '90 min',
                type: 'talk',
                abstract: "Nous allons parler des deux sujets brûlants actuellement en développement en Java : la Programmation Orientée Données (Data Oriented Programming en anglais) et la programmation asynchrone.\n<br>" +
                    "En programmation centrée sur les données, les données sont au premier plan et le code qui les traite au second. En programmation objet, ce qui est au premier plan, ce sont les API et les implémentations. Nous allons donc expliquer ces concepts, l'intérêt de les introduire en Java, et les nouveaux patterns de code que cela apporte. Nous verrons ce que le projet Amber a déjà livré dans le JDK 19 pour implémenter ces concepts, en version finale et en pré-version et ce qui est prévu pour les versions suivantes.\n<br>" +
                    "Le JDK 19 contient en plus deux pré-versions livrés par le projet Loom. Tout d'abord les threads virtuels, plus légers que les threads classiques que l'on a depuis 25 ans. Ils peuvent être créés en plus grand nombre et peuvent être bloqués quasiment sans perte de performance. Ensuite, la programmation concurrente structurée introduit la notion de scope et propose un nouveau modèle de programmation asynchrone. Nous couvrirons ces deux sujets et verront comment cela va révolutionner l'écriture de code asynchrone.<br>",
                speakers: ['jose_paumard', 'remi_forax']
            },
            {
                title: 'Petits fours et Cocktail 🍣 🍷',
                time: '21h',
                length: '3h',
                type: 'winter',
                abstract: "<p>Et pour bien finir, restez discuter avec nous autour d'un verre et des petits fours offerts par Decathlon 😋</p>",
            },
        ]
    }, {
        id: '2022_11_15',
        title: "Les post-mortems && Java dans Kubernetes",
        date: new Date(2022, 10, 15), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/289447972/',
        place: 'zenika',
        subjects: [
            {
                title: "Les post-mortems ou comment sortir heureux d’un carnage",
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "Une fonctionnalité, un projet, une réunion, ça ne se passe pas toujours bien. Loin de là. C’est parfois même un carnage. 😱 Que fait-on dans ces cas-là ? Ça s’est terminé dans les larmes, le sang et la sueur mais qu’importe ! On met tout ça sous le tapis, c’est fini, on en parle plus. 🙈<br><br>Pour que cela recommence encore la prochaine fois ? Pour que tout le monde en souffre sans oser en parler ? Pas la peine !<br><br>Alors on prend notre courage à deux mains, et on organise un POST-MORTEM. Mais qu'est-ce que c'est ? À quoi cela sert-il ? Et comment le mettre en place ? 🤔<br><br></br></br>Vous découvrirez dans ce talk les différentes étapes d'un post-mortem réussi et comment l'animer au mieux pour que chacun et chacune puisse être heureux.se après un tel carnage, sans pour autant être psychopathe ! 😌",
                speakers: ['lise_quesnel']
            },
            {
                title: "Java dans Kubernetes pour ceux qui ne connaissent pas Kubernetes",
                time: '19h30',
                length: '90 min',
                type: 'talk',
                abstract: "Kubernetes, ca à l'air vraiment sympa, pour le scaling, la reproductibilité et tout et tout ... <br>Tout le monde en parle, et en plus c'est hype !<br> Alors, c'est le moment de passer dans le cloud et de migrer nos applications Java vers Kubernetes !<br>Oui mais ... enfin ... il y'a trop de fichiers YAML à maintenir et nous détestons le YAML ! Et en plus de maintenir l'application Java, il faut<ul><li>écrire et maintenir des Dockerfiles</li><li>écrire et maintenir plein de fichiers YAML</li><li>configurer et gérer la CI/CD pour le déploiement</li><li>etc.</li></ul>Et oui, pendant ce talk, nous allons souffrir 👿 ... mais je vais vous tenir par la main et vous guider. Et c'est promis, vous sortirez de ce talk en sachant migrer vos applications Java dans Kubernetes en seulement 5 lignes de XML 🤣 ... avec le projet JKube.",
                speakers: ['sun_tan']
            }
        ]
    }, {
        id: '2022_10_04',
        title: "Micronaut Test Resources",
        date: new Date(2022, 9, 4), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/nantes-java-user-group/events/288667403/',
        place: 'cantine',
        subjects: [
            {
                title: "REX Bit.dev : gadget ou indispensable ?",
                time: '19h00',
                length: '15 min',
                type: 'quickie',
                abstract: "C’est l’histoire d’une équipe qui part à la recherche d’un outil pour leur simplifier la vie et le quotidien pour leur développement front. Une solution s’offre à nous, Bit.dev, qui nous promet du Component-Driven-Development sans le moindre effort. Mais qu’en est-it ? " +
                    "<br><br>Je vous partagerais mon expérience, et celle de mes collègues. Pourquoi on a fait ce choix, comment on a pris en main et mis en place cet outil, son utilisation au quotidien et surtout ce qu’on en a tiré.",
                speakers: ['lucille_moise']
            },
            {
                title: "Micronaut Test Resources",
                time: '19h30',
                length: '90 min',
                type: 'talk',
                abstract: "Tester vos microservices sans peine avec Micronaut Test Resources Micronaut est un framework full-stack moderne, basé sur la JVM, permettant de construire des microservices ou applications serverless facilement." +
                    "<br/>De part son emphase sur la compilation ahead-of-time, il s'intègre particulièrement bien avec GraalVM, poussant les limites de ce qu'on peut faire avec le langage Java." +
                    "<br/>Cependant, le développement d'applications modernes est aussi synonyme de multiples intégrations qui sont parfois difficiles à configurer. Par exemple, votre application peut avoir besoin d'une base de données, d'un serveur Kafka, d'un broker MQTT ou autre. Micronaut Test Resources permet de grandement simplifier le développement de telles applications: sans aucune configuration, il est capable de démarrer des conteneurs de test pendant le développement ou les tests, réduisant considérablement l'effort nécessaire pour obtenir une excellente productivité développeur." +
                    "<br/>Dans cette session, nous montrerons les bases d'une application Micronaut et comment il s'intègre, en partculier, avec les outils de builds et Testcontainers." +
                    "<br/>Micronaut Test Resources est aussi un framework extensible, rendant relativement simple l'ajout de vos propres ressources de test: il est par exemple possible d'exposer un conteneur Docker avec quelques lignes de configuration. En dernier recours, il est toujours possible d'implémenter vos propres ressources de test." +
                    "<br/>Enfin, il est intéressant de savoir que Micronaut Test Resources est conçu de façon à ce que les ressources de test puissent être partagées entre différents projets, même s'ils utilisent des outils de build différent ! Cerise sur le gâteau, nous montrerons comment les images natives peuvent bénéficier de ce mécanisme.",
                speakers: ['cedric_champeau']
            }
        ]
    },
    {
        id: '2022_09_22',
        title: "Copilot // GraalVM",
        date: new Date(2022, 8, 22), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/288327013/',
        place: 'sii',
        subjects: [
            {
                title: "Copilot : L’intelligence artificielle au service des développeurs",
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "Amis développeurs, vous avez besoin :" +
                    "<ul>" +
                    "<li>d’écrire des tests pour vos applications Web/JavaScript ?</li>" +
                    "<li>de compléter une classe Java d’accès aux données ?</li>" +
                    "<li>d’ajouter des nouveaux services à votre déploiement containerisé ?</li>" +
                    "</ul>" +
                    "Tapez votre code, commentez votre besoin, et laissez Copilot vous assister et augmenter votre productivité! GitHub Copilot est un outil qui s’appuie sur l’intelligence artificielle pour vous aider à coder avec des « suggestions/autocompletions » très riches.<br>" +
                    "Mais attention: Copilot, l’essayer c’est adopter!",
                speakers: ['tugdual_grall']
            },
            {
                title: "A la découverte de GraalVM",
                time: '19h30',
                length: '60 min',
                type: 'talk',
                abstract:
                    "<p>Débit élevés, temps de démarrage supersonique , utilisation rationnelle des resources Mémoire et CPU, Prise en charge native de plusieurs langages de programmation, Compilation en binaire exécutable des programmes Java, réduction des côuts d\'infrastructure dans le cloud public/privé, sont peut être des choses dont vous avez entendu parlé au sujet de Oracle GraalVM, Il y’a beaucoup de buzz autour de la nouvelle coqueluche de l’écosystème Java, mais qu’est ce que c’est exactement?</p>" +
                    "<p>Nous vous proposons de faire connaissance avec GraalVM;</p>" +
                    "<p>Que vous soyez développeur ou opérationnel, Gestionnaire d’application, d'infrastructure ou DSI , si vous évoluez dans un environment où foisonnent les technologies Java, NodeJS, Javascript, Python, Ruby, R ou même C et C++... Rejoignez cette web diffusion interactive en direct pour en savoir plus sur:</p>" +
                    "<p></p>" +
                    "<p>Le fonctionnement de GraalVM ainsi que les bénéfices que vous pourrez en tirer	</p>" +
                    "<p>Mettre les mains dans le cambouis et aller à la conquête de GraalVM	</p>" +
                    "<p>Découvrir les cas d\'usage innovant de GraalVM en entreprise et ainsi que des retours d\'expérience enrichissant</p>",
                speakers: ['elvadas_nono']
            }
        ]
    },
    {
        id: '2022_06_16',
        title: "🍹 Cocktail // APM avec Glowroot // Spring Boot // Petits fours 🍣 🍷",
        date: new Date(2022, 5, 16), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/285807648/',
        place: 'adresse_gare_sud',
        subjects: [
            {
                title: 'Verre d\'accueil 🍸',
                time: '19h00',
                length: '30 min',
                type: 'hello',
                abstract: "<p>C'est bientôt l'été, alors nous vous proposons de commencer cette dernière soirée de la meilleure des manières avec un petit verre d'accueil</p>"
            },
            {
                title: "Glowroot : un APM à portée des devs",
                time: '19h30',
                length: '30 min',
                type: 'talk',
                abstract: "Une présentation rapide des APM (Application Performance Management), et en particulier de Glowroot, un APM Open Source, gratuit et très simple à mettre en oeuvre pour commencer à monitorer ses applications au plus tôt",
                speakers: ['pierre_clainchard']
            },
            {
                title: 'AOT and Native with Spring Boot 3.0',
                time: '20h00',
                length: '1h',
                type: 'talk',
                abstract: '<p>Après une phase d\'expérimentation avec le projet Spring Native, l\'équipe Spring contribue le support Ahead of Time (AOT) à Spring.</p>' +
                    '<p>Cette nouvelle fonctionnalité va permettre un support des applications natives avec GraalVM mais aussi améliorer l\'efficacité des applications JVM classiques.</p>' +
                    '<p>Pendant cette présentation, Brian va détailler l\'état de l\'art du support AOT dans Spring Framework 6.0 et Spring Boot 3.0:</p>' +
                    '- l\'architecture du moteur AOT</br>' +
                    '- comment cette nouvelle infrastructure peut-être utilisée par des librairies</br>' +
                    '- l\'expérience développeur</br>',
                speakers: ['brian_clozel']
            },
            {
                title: 'Petits fours et Cocktail 🍣 🍷',
                time: '21h00',
                length: '3h',
                type: 'summer',
                abstract: "<p>Et pour bien finir, restez discuter avec nous autour d'un verre et des petits fours 😋</p>"
            },
        ]
    },
    {
        id: '2022_05_24',
        title: "Reactive spring // Une application métier durable en hexagone et en Spring Boot",
        date: new Date(2022, 4, 24), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/285805082/',
        place: 'onepoint',
        subjects: [
            {
                title: "Concevoir une application réactive avec Spring ",
                time: '19h00',
                length: '60 min',
                type: 'talk',
                abstract: "Présentation des concepts de la programmation réactive avec Spring boot.\n" +
                    "<br>Au programme :\n<ul>" +
                    "<li>Présentation de Spring Webflux</li>\n" +
                    "<li>Présentation de Reactor</li>\n" +
                    "<li>Démo avec des Usecases Synchrones/Asynchrones</li>" +
                    "</ul>",
                speakers: ['julien_bideau']
            },
            {
                title: "Une application métier durable en hexagone et en Spring Boot",
                time: '20h00',
                length: '60 min',
                type: 'talk',
                abstract:
                    "Nos logiciels suivent les évolutions des besoins de leurs utilisateurs. " +
                    "<br>Fonctionnalités après fonctionnalités, on finit toujours par avoir ce défi de ranger ce code spaghettis, de refaire l'architecture logicielle pour séparer des responsabilités et modulariser le code. " +
                    "<br>Nous verrons avec l'architecture hexagonale et la modularité de Spring Boot, une des meilleures solutions que je connaisse.",
                speakers: ['nicolas_fedou']
            }
        ]
    },
    {
        id: '2022_04_19',
        title: "🤯 Préparation mentale // Biais cognitifs dans le dev 🧠",
        date: new Date(2022, 3, 19), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/284797567',
        place: 'lepalace',
        subjects: [
            {
                title: "Préparation mentale",
                time: '19h00',
                length: '25 min',
                type: 'quickie',
                abstract:
                    "<p>Introduire les principes de base de la préparation mentale dans le monde de l'entreprise, et transmettre le bon équilibre entre le désir de réussir et le plaisir d'apprendre.</p>",
                speakers: ['julien_deville']
            }, {
                title: "Notre cerveau est \"null\"! Quelques biais cognitifs appliqués au métier de dev...",
                time: '19h30',
                length: '50 min',
                type: 'talk',
                abstract:
                    "<p>Pourquoi est-ce que nos chiffrages sont si souvent à côté de la plaque? </br>" +
                    "Pourquoi le besoin métier est-il à ce point systématiquement mal cerné? </br>" +
                    "Est-ce vraiment pertinent d'écrire des tests avant de coder?  </br>" +
                    "Autant de questions dont la réponse peut se trouver dans l'étude de nos biais cognitifs!</p>" +
                    "<p>J'aurais d'ailleurs pu pompeusement titrer ce talk: Que nous apprennent les neurosciences au sujet de la vie des projets. </br>" +
                    "Mais on ne parlera pas ici de neurosciences, juste de quelques bases de psychologie sociale ou cognitive adaptée au monde du développement logiciel. En prime, et en toute gratuité, vous repartirez avec des armes, des outils concrets pour mieux combattre des travers que nous avons tous !</p>",
                speakers: ['sylvain_coudert']
            }
        ]
    },
    {
        id: '2022_04_08',
        title: "La Nuit des Meetups",
        date: new Date(2022, 3, 8), //month begin at 0
        time: '19h15',
        register: 'https://www.lacantine.co/agenda/event/08-04-2022-lanuitdesmeetups/',
        place: 'cantine',
        subjects: [
            {
                title: "Programme sur le site de l'évènement",
                time: '18h00',
                length: '4h',
                type: 'talk',
                abstract:
                    "<p>Le Nantes JUG est heureux de participer à la Nuit des Meetups avec pleins de talks au programme !!</p>" +
                    "<p>👉 Les <a href=\"https://www.lacantine.co/agenda/event/08-04-2022-lanuitdesmeetups/\" target=\"_blank\">inscriptions se font sur la page de l'évènement</a>.</p>" +
                    "<p>Vous connaissez la Nuit des Chercheur·euse·s 🧬ou bien encore celle des Musées 🏛? Vous voulez vous abreuver de contenus techniques dans une ambiance sympathique ?</p>" +
                    "<p>Nous vous proposons de découvrir un nouvel évènement à destination des communautés tech : la première Nuit des meetups de Nantes !</p>" +
                    "<p>Lors de cette soirée (tardive), nous inviterons les organisateurs de meetups tech à proposer de courtes conférences, expertes ou vulgarisées, à destination de toutes et tous.</p>" +
                    "<p>Seront présent·e·s : Software Crafters, Cocoaheads Nantes, GDG Nantes Android, Blockchain et société, Nantes Numerique Responsable, Craft Your product, Agile Nantes, Human Talks, GDG Nantes, Nantes Devops, Nantes JUG, NoCode…</p>" +
                    "<p>Ce sera également l’occasion de mixer les contenus, d’assister à des conférences que vous n’avez peut être pas l’habitude de voir et de proposer aux entreprises qui souhaitent accueillir les meetups à l’année de se présenter de manière conviviale.</p>" +
                    "<p><i>[<a href=\"https://www.lacantine.co/agenda/event/08-04-2022-lanuitdesmeetups/\" target=\"_blank\">Programme en cours de création</a>]<i></p>" +
                    "<p>Vous pouvez vous pré-inscrire dès maintenant, l’ensemble du programme sera disponible en mars.</p>",
                speakers: []
            }
        ]
    },
    {
        id: '2022_03_29',
        title: "Katas d'architecture // Checklist pour concevoir une application dans le cloud",
        date: new Date(2022, 2, 29), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/284488055/',
        place: 'eartsup',
        subjects: [
            {
                title: "Améliorer les compétences et les infrastructures avec les katas d'architecture",
                time: '19h00',
                length: '20 min',
                type: 'quickie',
                abstract:
                    "<p></p>",
                speakers: ['alexandre_touret']
            }, {
                title: "Checklist pour concevoir une application dans le cloud : 10 conseils à l'attention des concepteurs et architectes",
                time: '19h30',
                length: '45 min',
                type: 'talk',
                abstract:
                    "<p>Kubernetes et les technologies cloud sont aujourd'hui les standards pour déployer des applications de toutes sortes dans le cloud: api, batchs, microservices et même des monolithes!" +
                    "Au delà de la hype - et des trolls, ils apportent des solutions à beaucoup de problèmes mais aussi une grande complexité.</p>" +
                    "<p>Il peut donc être très difficile pour les développeurs et concepteurs d'identifier les contraintes de telles architectures. </p>" +
                    "<p>Dans cette présentation, vous (re)découvrirez dix astuces et conseils que j'ai pu mettre en pratique et qui m'ont aidé dans mes derniers projets.</p>" +
                    "<p>Ces derniers traiteront :" +
                    "<ul>" +
                    "<li>de la pertinence du cloud dans vos projets et organisations</li>" +
                    "<li>du choix des solutions technologiques</li>" +
                    "<li>des contraintes de conception liées à K8S</li>" +
                    "<li>du développement</li>" +
                    "<li>de la gestion des livraisons au travers de la CI</li>" +
                    "<li>de l’observabilité </li>" +
                    "<li>et plus encore !</li>" +
                    "</ul>" +
                    "</p>",
                speakers: ['alexandre_touret']
            }
        ]
    },
    {
        id: '2022_02_22',
        title: "Soirée Quickies : écrire un livre, développer sans JDK et immutabilité",
        date: new Date(2022, 1, 22), //month begin at 0
        time: '19h15',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/283354801',
        place: 'eartsup',
        subjects: [
            {
                title: "Ivre et au chômage, elle décide d'écrire un livre sur le Scala en plein Covid",
                time: '19h15',
                length: '20 min',
                type: 'quickie',
                abstract:
                    "<p>REX sur l'écriture d'un premier livre : comment s'est arrivé ? Pourquoi j'ai accepté ? Par quelles étapes de dépression suis-je passée ?<br>" +
                    "Je vais parler des relations avec l'équipe éditoriale, des délais, des étapes de la réalisation d'un livre du jour 1 avec les premières lignes jusqu'à la livraison.<br>" +
                    "Je ne m'arrête pas là, on va parler de marketing, publicité, impression, sortie officielle du livre et pourquoi je ne referai plus ça.</p>",
                speakers: ['agnes_maury']
            }, {
                title: "Qui a dit qu’il fallait avoir un JDK sur son poste pour développer une application Java ? Prenez votre IDE Cloud GitPod et le tour est joué 💪",
                time: '19h40',
                length: '20 min',
                type: 'quickie',
                abstract:
                    "<p>Quand on arrive sur des projets, la configuration de votre poste est une étape obligatoire : avoir la bonne version du JDK, de Maven ou de librairies. Le tout avec quelques Mo / Go qui s’accumulent sur votre disque dur.</p>" +
                    "<p>Avec l’arrivée des IDE Cloud tels que GitPod, la configuration nécessaire sur un projet est mutualisée sur le cloud et cette étape qui pouvait devenir une réelle galère n’est plus qu’un lointain souvenir !</br>" +
                    "Après vous avoir présenté en quelques mots GitPod, je vous ferai une démonstration de ce qui est possible pour un dev Java.</p>",
                speakers: ['jean_philippe_baconnais']
            }, {
                title: "L'immutabilité en Java quand on a la flemme",
                time: '20h00',
                length: '20 min',
                type: 'quickie',
                abstract:
                    "<p>L'immutabilité c'est cool ! L'immutabilité c'est tendance ! Mais l'immutabilité, c'est quoi au fait ?</br>" +
                    "En principe, c'est garantir qu'une structure de donnée ne puisse être modifiée et donc muter. Dans la plupart des langages fonctionnelles comme Haskell, c'est même la norme. Mais en Java ... c'est pas vraiment ça. Il y a peut-être les records qui sont apparus en preview sur la JDK14, c'est vrai, mais ça reste très limité et peu flexible.</br>" +
                    "Heureusement, il est possible de s'arranger à rendre Java immutable au prix de pas mal d'effort. Mais quand on a la flemme ? ... Comment faire ? ...</p>",
                speakers: ['laurent_delemotte']
            }
        ]
    },
    {
        id: '2022_02_09',
        title: "OpenApi Generator / Fuites de données",
        date: new Date(2022, 1, 9), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/283502336/',
        place: 'eartsup',
        subjects: [
            {
                title: "Approche \"contract-first\" avec OpenApi Generator",
                time: '19h00',
                length: '35 min',
                type: 'talk',
                abstract:
                    "<p>L'API c'est la UI du développeur backend. Trop souvent on se contente d'une documentation générée à la fin. Pourquoi ne pas la placer au premier plan ?</p>" +
                    "<p><b>⚠⚠⚠ La présentation d'un pass sanitaire (ou vaccinal) est obligatoire. ⚠⚠⚠</b></p>",
                speakers: ['thibault_duperron']
            }, {
                title: "10 leçons sur les 10 plus grosses fuites de données",
                time: '19h40',
                length: '35 min',
                type: 'talk',
                abstract:
                    "<p>Sony, Über, Yahoo, Adult Friends finder, ces noms vous disent quelque chose ?</br>" +
                    "Vous utilisez peut-être les services de ses entreprises.</br>" +
                    "Elles ont aussi un point commun, elles ont subi une fuite de leurs données utilisateurs.</br>" +
                    "Comment les hackers s’y sont pris ? et surtout Quelles leçons peut-on en tirer pour le développement de nos applications ?</br></p>" +
                    "<p><b>⚠⚠⚠ La présentation d'un pass sanitaire (ou vaccinal) est obligatoire. ⚠⚠⚠</b></p>",
                speakers: ['adrien_pessu']
            }
        ]
    },
    {
        id: '2021_12_01',
        title: "Spot d'AWS : penser son archi pour laisser tomber les serveurs",
        date: new Date(2021, 11, 1), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/282094863',
        place: 'eartsup',
        subjects: [
            {
                title: "Spot d'AWS : penser son archi pour laisser tomber les serveurs",
                time: '19h00',
                length: '90 min',
                type: 'talk',
                abstract:
                    "<p>Introduction aux instances spot AWS pour faire des économies et améliorer la résilience de ses applications.</p>" +
                    "<p>Depuis plusieurs années, AWS propose d'utiliser des machines SPOT, des VMs bradées mais qui peuvent vous être retirées à tout moment. Découvrez comment Sparklane a pensé son architecture résiliante et son outillage DevOps pour profiter au maximum de ce type de machine et ainsi réduire considérablement ses coûts de hosting.</p>" +
                    "<p><b>⚠⚠⚠ La présentation d'un pass sanitaire est obligatoire. ⚠⚠⚠</b></p>",
                speakers: ['thomas_brosillon', 'thomas_rossignol']
            }
        ]
    },
    {
        id: '2021_09_16',
        title: "Décollage de microservices Micronaut en Java dans les nuages",
        date: new Date(2021, 8, 16), //month begin at 0
        time: '18h00',
        register: 'https://gdg.community.dev/events/details/google-gdg-cloud-nantes-presents-decollage-de-microservices-micronaut-en-java-dans-les-nuages/',
        place: 'online',
        subjects: [
            {
                title: "Décollage de microservices Micronaut en Java dans les nuages",
                time: '18h15',
                length: '60 min',
                type: 'talk',
                abstract:
                    "<p>Au lieu de passer trop de temps sur de l'infra, prenez avantage des solutions serverless. Focalisez vous sur votre code Micronaut, et déployer le rapidement sous forme de fonction, d'application, ou dans un conteneur, sur Google cloud Platform.</p>" +
                    "<p>Dans cette session, vous découvrirez les choix offerts par Google Cloud pour déployer des applications Micronaut. Avec Micronaut Launch, c'est d'autant plus facile pour démarrer un nouveau projet à partir d'un template, et après quelques modifications, d'être capable de déployer en production dans la minute qui suit.</p>" +
                    "<p>Grâce à ses performances, sa faible consommation mémoire, la possibilité de créer des images natives, Micronaut démarre au quart de tour, et est particulièrement bien adapté pour le cloud et les solutions serverless.</p>" +
                    '<p>Cette session "Java & Google Cloud" est co-organisée avec le <a href="https://gdg.community.dev/gdg-cloud-nantes/">GDG Cloud Nantes</a>.</p>',
                speakers: ['guillaume_laforge']
            }
        ]
    },
    {
        id: '2020_12_16',
        title: "Comment votre application peut être une bonne citoyenne du Cloud (Virtuel)",
        date: new Date(2020, 11, 16), //month begin at 0
        time: '18h45',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/275018773',
        place: 'online',
        subjects: [
            {
                title: "Comment votre application peut être une bonne citoyenne du Cloud",
                time: '19h00',
                length: '60 min',
                type: 'talk',
                abstract: "<p>Venez découvrir dans cette session 100% live coding et interactive comment Java revient en force dans le monde du Cloud.</p>"
                    + "<p>On verra comment des nouvelles stacks Java peuvent s'intégrer et tirer profit des nouvelles contraintes imposées par le monde merveilleux du cloud</p>",
                speakers: ['sebastien_blanc']
            }
        ]
    }, {
        id: '2020_10_26',
        title: "Des petites voitures sur AWS et du scripting en Java avec jbang",
        date: new Date(2020, 9, 26), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/274020038/',
        place: 'lepalace',
        subjects: [
            {
                title: "Comment j'ai fini par déployer à 2h du matin une application sur AWS pour piloter des voitures électriques avec un vélo d'appartement.",
                time: '19h15h',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>- J'ai une super idée, mais je vais avoir besoin d'aide, parce que moi et le code...<br>" +
                    "ha ?<br>" +
                    "- Je voudrais faire tourner des voitures électriques sur un circuit en faisant pédaler des gens pendant 24h<br>" +
                    "...<br>" +
                    "- Tu vois comment faire ?<br>" +
                    "- Alors... c'est pas dur... Il suffit de deux Arduino, d'un Raspberry, quelques capteurs et c'est parti...</p>" +
                    "<p>Et voilà à peu près comment en 2 minutes j’ai été convaincu de suivre un hurluberlu dans un projet franchement rigolo mêlant de nombreuses technos.</p>" +
                    "<p>Et cerise sur le gâteau, les aléas techniques m’ont conduit jusqu’à déployer la solution sur AWS depuis une salle des fêtes en rase campagne un jour de tempête avec pour seule connexion mon téléphone…</p>",
                speakers: ['nicolas_giraud']
            },
            {
                title: "Scripting en Java avec jbang",
                time: '20h00',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>Si vous aussi vous maîtrisez Java mais pas le bash, et si vous aussi vous aimez le support d'un IDE pour faire un script, alors venez découvrir le pouvoir de jbang et du scripting en Java.</p><hr><p>⚠️⚠️⚠️<i>En raison des contraintes sanitaires, nous ne serons pas en mesure d'organiser l'apéritif de fin de soirée.<br/>"
                    + "Venez avec vos masques, qui sont obligatoires tout au long de la soirée.</i>⚠️⚠️⚠️</p>",
                speakers: ['gautier_de_saint_martin_lacaze']
            }
        ]
    }, {
        id: '2020_09_29',
        title: "Chaos Engineering avec Spring / Data science avec les projets Apache",
        date: new Date(2020, 8, 29), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/Nantes-Java-User-Group/events/273424912/',
        place: 'eartsup',
        subjects: [
            {
                title: "Comment pratiquer le Chaos engineering avec Spring Boot",
                time: '19h15h',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>On parle souvent de chaos engineering mais dans la pratique ça donne quoi ? En tant que développeur, j'ai l'impression que cette discipline est réservée au OPS. </p>"
                    + "<p>Sur un projet Java avec Spring Boot, puis je faire du chaos engineering ? </p><p>Dans ce quickie, on vous donne la solution avec 'Chaos Monkey for Spring Boot'.</p>"
                ,
                speakers: ['julien_mourgues']
            },
            {
                title: "Drilling Zeppelin: data science dans la galaxie apache",
                time: '20h00',
                length: '30/40 min',
                type: 'quickie',
                abstract: "<p>Il existe de nombreux projets de la fondation apache liés à la data science: Zeppelin, Drill, Spark, Flink, etc.</p>" +
                    "<p>Dans ce talk, nous verrons comment utiliser ensemble ces projets pour faire de la data science sur son PC ou sur un serveur simplement en branchant les projets apache les uns aux autres.</p>"
                    + "<p>&nbsp;</p><p>&nbsp;</p><hr><p>⚠️⚠️⚠️<i>En raison des contraintes sanitaires, nous ne serons pas en mesure d'organiser l'apéritif de fin de soirée.<br/>"
                    + "Venez avec vos masques, qui sont obligatoires tout au long de la soirée.</i>⚠️⚠️⚠️</p>",
                speakers: ['julien_tanguy']
            }

        ]
    }, {
        id: '2020_03_12',
        title: "Accessibilité // Architecture Hexagonale Level 2",
        date: new Date(2020, 2, 12), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/269153499/',
        place: 'hep-campus',
        subjects: [
            {
                title: "Envie de faire de l'accessibilité ? Enjeux et mise en place",
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>L'accessibilité des sites web est un enjeu de société. Pourquoi est-il si difficile de la mettre en pratique ?</p>",
                speakers: ['david_caillaud']
            },
            {
                title: "Architecture Hexagonale Level 2 : Comment bien écrire ses tests",
                time: '19h45',
                length: '1h',
                type: 'talk',
                abstract: "<p>De plus en plus d’équipes adoptent l’architecture hexagonale comme structure de prédilection pour leurs applications métiers, mais peu d’entre elles savent réellement bien les tester. Et malheureusement lorsque l’on se plante sur ce point, la maintenance de notre architecture hexa devient un véritable calvaire !</p> " +
                    "<p>Lors de ce talk, nous allons aborder les 5 niveaux de tests préconisés pour les microservices adaptés à l'architecture héxagonale. Et en prime comment avoir une documentation drivée par les tests. Venez découvrir à côté de quoi vous êtes peut-être passés dans le développement de vos tests !</p>" +
                    "<p>Ceci est une live coding session en Java/Kotlin SpringBoot.</p>",
                speakers: ['julien_topcu', 'jordan_nourry']
            }
        ]
    }, {
        id: '2020_02_13',
        title: "Motivation et Scaling Java Application",
        date: new Date(2020, 1, 13), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/268263166/',
        place: 'sii',
        subjects: [
            {
                title: "Comment fonctionne la motivation ?",
                time: '19h00',
                length: '30 min',
                type: 'talk',
                abstract: "<p>On recherche un développeur motivé“. Vous avez déjà certainement vu cette offre d’embauche.</p>" +
                    "<p>Qu’est-ce qu’être motivé et est-ce un état permanent comme l’évoque cette phrase ?</p>" +
                    "<p>On verra les mécanismes de la motivation et comment faire pour motiver quelqu’un.</p>",
                speakers: ['guillaume_blondeau']
            },
            {
                title: "Scaling Java Application : Vers l’infini et au delà",
                time: '19h45',
                length: '1h',
                type: 'talk',
                abstract: "<p>Un moteur de calcul de prix en Java et scalable jusqu’à l’infini c’est possible ! Mais à notre grande surprise le chemin était pavé d’embuches.</p>" +
                    "<p>Dans cette présentation, je partage les différentes étapes, les problèmes rencontrés, les solutions ainsi que les outils qui nous ont permit d’atteindre cet objectif. On y parle JVM, Docker, AWS, Off-heap, Caching, Postgresql, Concurrence et autres réjouissances qui sortent un peu de notre quotidien de développeur.</p>",
                speakers: ['julien_roy']
            }
        ]
    }, {
        id: '2020_01_20',
        title: "Tendances marché // Redis : du Clé/Valeur au Multimodèle",
        date: new Date(2020, 0, 20), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/267743136/',
        place: 'talend',
        subjects: [
            {
                title: "Baromètre des salaires et des tendances marché sur l’environnement Java / JVM",
                time: '19h00',
                length: '15 min',
                type: 'quickie',
                abstract: "<p>Je viens vous restituer une partie de l'analyse réalisée dans le cadre du baromètre des salaires.</p>" +
                    "<p>Cette étude est basée sur les + 1300 candidats rencontrés l'année dernière et + 200 entreprises accompagnées.</p>",
                speakers: ['benjamin_casseron']
            },
            {
                title: "Redis : du Clé/Valeur au Multimodèle",
                time: '19h30',
                length: '1h',
                type: 'talk',
                abstract: "<p>Vous connaissez surement Redis l'une des bases de données NoSQL les plus populaires chez les développeurs. D'ailleurs Vous l'utilisez peut être déjà, mais sûrement de façon simple: en clé/valeur sous forme de cache. Mais Redis est bien plus que cela !</p>" +
                    "<p>Durant cette présentation vous découvrirez, avec des démonstrations, les structures de données telles que les Hash, Set, Sorted Set, Geospatial, Pub/Sub et Streams, qui nativement vous offrent de nombreuses options pour enrichir simplement vos applications.</p>" +
                    "<p>Vous verrez également que Redis avec son système d'extensions (les Modules Redis) permet maintenant de gérer plusieurs modèles de données (Structures, Commandes) :" +
                    "<ul><li>JSON</li>" +
                    "<li>Time Series</li>" +
                    "<li>Search</li>" +
                    "<li>Graph</li>" +
                    "<li>Bloom Filter</li></ul></p>" +
                    "<p>En résumé une base de donnée polyglotte parfaite pour vos micro-services !</p>",
                speakers: ['tugdual_grall'],
                docs: [
                    { name: 'La vidéo du talk', url: 'https://youtu.be/OqkFDtgMAYk', type: 'youtube' },
                ]

            }
        ]
    },
    {
        id: '2019_12_03',
        title: "Retour d'experience Kubernetes  - Soirée de fin d'année!",
        date: new Date(2019, 11, 3), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/Nantes-Java-User-Group/events/266458249/',
        place: 'resto_grand_t',
        subjects: [
            {
                title: "Meet & Greet",
                time: '19h00',
                length: '30 min',
                type: 'buffet',
                abstract: "<p>Verre de bienvenue offert par les sponsors du JUG</p>",
                speakers: []
            },
            {
                title: "Kubernetes: Retour d'Experience par VPTech",
                time: '19h30',
                length: '1h',
                type: 'talk',
                abstract: "<b><br/>En collaboration avec le Meetup 'CNCF Nantes'<br/><br/></b><p>Durant cette presentation Thomas, Ludovic et Pierre Antoine de VPTech ferons un retour d’expérience de l'utilisation de Kubernetes au sein de l’organisation Vptech.</p><p>Du développement à la mise en production, quels sont les outils et procédures mis en place afin d’augmenter la fiabilité et le time to market des développements.</p><p>2 points de vue vous seront présentés, celui des <b>SRE</b> et celui des <b>développeurs</b>.</p>",
                speakers: ['ludovic_paquet', 'pierre_antoine_ollivier', 'thomas_piart'],
                docs: [
                    { name: 'Les slides du talk', url: 'https://drive.google.com/file/d/1iPTGrXIUdADeguKFEyGly-_UET2X0Czj', type: 'pdf' },
                ]
            },
            {
                title: "Meet & Greet",
                time: '20h30',
                length: '2h',
                type: 'buffet',
                abstract: "<p>Buffet offert par les sponsors du JUG</p>",
                speakers: []
            }
        ]
    },
    {
        id: '2019_11_17',
        title: "GitOps & Infra as code avec Pulumi // AWS : 10 trucs que j’aurais aimé connaître",
        date: new Date(2019, 10, 7), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/265679860/',
        place: 'eartsup',
        subjects: [
            {
                title: 'GitOps & Infra as code avec Pulumi',
                time: '19h00',
                length: '45 min',
                type: 'talk',
                abstract: "<p>Arrivée avec Kubernetes, nous verons comment la pratique <b>GitOps</b> peut se décliner pour déployer nos infrastructures et applications sur <b>AWS</b>.</br>" +
                    "Ce quickie sera l'occasion de découvrir l'outil d'infra as code qui fait le buzz en ce moment, <b>Pulumi</b>.</br>" +
                    "Alors venez dire bye-bye à vos anciennes pratiques 👋</p>",
                speakers: ['manuel_boillod']
            },
            {
                title: 'AWS : les 10 trucs que j’aurais aimé connaître avant de commencer',
                time: '19h40',
                length: '1h',
                type: 'talk',
                abstract: "<p>Tout le monde veut se lancer sur le cloud avec AWS. Après tout, suivre les tutos ce n’est pas si compliqué. Mais après quelques jours, les ennuis commencent : instances qui rament, montées de version des services imposées, facture salée… :’( Je vous partagerais 10 points qui m'ont fait passer de 😱 ou 😩 en passant par 😰 vers 🍾.</p>" +
                    "<p>Quel instances choisir parmis les 170 modèles? Pourquoi les accès disques sont bridés ? ... Autant de questions auxquelles j'apporterais des éléments de réponses.</p>",
                speakers: ['guillaume_membre']
            }
        ]
    }, {
        id: '2019_10_15',
        title: "Apache Pulsar // ⛳️ Votre API passe-t-elle le contrôle technique ?",
        date: new Date(2019, 9, 15), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/265336817/',
        place: 'eartsup',
        subjects: [
            {
                title: 'Introduction à Apache Pulsar',
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>\"Apache Pulsar, encore un système de messages pub/sub\", me direz-vous ? C'est pas faux... </p>" +
                    "<p>Néanmoins, regardons de plus près... Pulsar est devenu un Top Level Project de la fondation Apache au mois de septembre 2018 et il se targue de vouloir unifier les modèles de messages traditionnels et le streaming, tout en fournissant un système extrêmement performant. " +
                    "Alors partons à la découverte de ce nouveau pulsar pour voir de quoi il retourne !</p>",
                speakers: ['bruno_bonnin']
            },
            {
                title: '⛳️ Votre API passe-t-elle le contrôle technique ?',
                time: '19h40',
                length: '1h',
                type: 'talk',
                abstract: "<p>Nous savons tous développer une API mais avons-nous bien intégré toutes les problématiques?</p>" +
                    "<p>Son aspect organisationnel et humain, sa gouvernance, ses contraintes business et d'opérabilité (SLA, SLO, SLI), son release management, ses méthodes de requêtage, sa sécurité (ses performances, sa mise à l'échelle), ses différents types de test, sa documentation, son versioning (compatibilité, changelog), son monitoring — et bien plus encore — de cette API une fois en production ?</p>" +
                    "<p>Durant ce talk, c'est plus de 70 points d'attentions rarement évoqué que je vous propose d'aborder, à la lumière de retours d'expériences provenant de tech-leader comme Uber, Stripe, Facebook et Google mais aussi d'entreprise française de la petite startup à la PME.</p>",
                speakers: ['francois_guillaume_ribreau']
            }
        ]
    }, {
        id: '2019_09_24',
        title: "Les nouveautés Eclipse IDE // Écrire des tests ? C’est illogique.",
        date: new Date(2019, 8, 24), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/264731630/',
        place: 'talend',
        subjects: [
            {
                title: 'Les nouveautés Eclipse IDE',
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: "<p>Vous êtes développeur Java et vous utilisez Eclipse IDE, mais connaissez vous réellement ses dernières nouveautés ?</p>" +
                    "<p>Au travers de cette présentation, je vous propose de découvrir les fonctionnalités de l'IDE Eclipse introduite dans les dernières release.</p>" +
                    "<p>Cette présentation s'adresse aussi bien aux novices qu'aux chevronnées ayant envie d'apprendre à mieux connaître leur outil de développement quotidien.</p>",
                speakers: ['gautier_de_saint_martin_lacaze']
            },
            {
                title: 'Écrire des tests ? C’est illogique.',
                time: '19h40',
                length: '1h',
                type: 'talk',
                abstract: '<p>Écrire des tests c\'est bien, rédiger des spécifications c\'est mieux.</p>' +
                    '<p>C\'est la promesse de Spock, un framework de spécification dont l\'objectif est d\'organiser nos tests afin de les rendre facile à lire, rapide à comprendre et simple à maintenir.</p>',
                speakers: ['adrien_bonnin']
            }
        ]
    }, {
        id: '2019_06_25',
        title: "Soirée Quickies + 🍸",
        date: new Date(2019, 5, 25), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/GNbSS/4xjVv/f',
        place: 'adresse_gare_sud',
        subjects: [
            {
                title: 'Verre d’accueil 🍸',
                time: '19h00',
                length: '15 min',
                type: 'hello',
                abstract: "<p>Quoi de mieux pour commencer cette dernière soirée avant l'été que de commencer par un petit verre d'accueil 😎</p>"
            },
            {
                title: 'Faire un chatbot en Java avec Spring Boot ',
                time: '19h15',
                length: '25 min',
                type: 'quickie',
                abstract: '<p>Retour sur la hype des chatbots qui ne s\'estompe pas, avec tous les jours de nouveaux bots et de nouveaux acteurs.' +
                    '<ul style="margin:0"><li>Pourquoi un tel engouement sur les chatbots ?</li>' +
                    '<li>Pourquoi le faire en Java ?</li>' +
                    '<li>Revue des différents NLP (Natural language processing)</li>' +
                    '<li>Quels sont les pièges à éviter ?</li></ul></p>' +
                    '<p>Autant de questions à répondre sur ce tour d\'horizon !</p>',
                speakers: ['julien_bideau', 'nicolas_payneau']
            }, {
                title: 'REX : entamer une migration Kotlin dans une DSI Java',
                time: '19h40',
                length: '25 min',
                type: 'quickie',
                abstract: '<p>Au sein de la DSI de Pôle emploi, les infrastructures black end sont depuis une dizaine d’années faites en Java et le choix des langages n’est pas (encore) déterminé par les équipes de développement.</p>' +
                    '<p>Kotlin utilisant la JVM, il est désormais possible d’intégrer du Kotlin dans des projets java. Dans ce REX je vous présenterai la manière dont nous avons pu entamer l\'intégration du Kotlin dans nos composants black end Java, les problématiques rencontrées, mais aussi les opportunités qui s\'ouvrent à nous pour la suite.</p>',
                speakers: ['jean_philippe_baconnais'],
                docs: [
                    { name: 'Slides', url: 'https://docs.google.com/presentation/d/1X7nhim9r0tU90c5UF5U-G6fwKW5hkcNQdV6N3xF-5Jg', type: 'drive' },
                ]
            }, {
                title: 'CORS, XSS, CSRF, SQL injection #BackToTheBasics',
                time: '20h05',
                length: '25 min',
                type: 'quickie',
                abstract: '<p>Pas besoin d\'être RSSI ou DevOpsSec pour se soucier de sécurité. Que l\'on soit développeur back ou front, la sécurité est l\'affaire de tous.</p>' +
                    '<p>Pourtant, on la confie souvent aveuglement à nos frameworks. Mais alors comment vérifier la sécurité de nos données et de nos utilisateurs.</p>' +
                    '<p>A travers quelques démos, nous allons voir les failles les plus basiques et pourtant les plus répandus : CORS, XSS, CSRF et SQL injection</p>',
                speakers: ['adrien_pessu']
            },
            {
                title: 'Chaos Engineering',
                time: '20h30',
                length: '25 min',
                type: 'quickie',
                abstract: '<p>Le Chaos Engineering est une discipline émergente dans le secteur de l’IT. Elle est expérimenté depuis plusieurs année chez des acteurs majeurs comme Netflix. Elle a été introduite pour apporter des solutions à l’accroissement de la complexité ds systèmes d’information et des organisations. J’espère vous apporter quelques éclairage sur cette discipline en pleine croissance et vous convaincre de vous y intéresser et de commencer à intégrer des pratiques liées à cette discipline dans votre cycle de développement logiciel.</p>',
                speakers: ['thomas_nansot'],
                docs: [
                    { name: 'Slides', url: 'https://fr.slideshare.net/ThomasNansot/meet-up-chaos-engineering', type: 'slideshare' },
                ]
            },
            {
                title: 'Cocktail dinatoire 🥳 + 🍻 + 🍣',
                time: '21h00',
                length: '3h',
                type: 'cocktail',
                abstract: "<p>Discussions et partages autour d'un ou plusieurs verres, jusqu'au bout de la nuit... </p>"
            }
        ]
    }, {
        id: '2019_05_20',
        title: " Java 12 // Quarkus 😛",
        date: new Date(2019, 4, 20), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/GKJHP/4xjVv/f',
        place: 'eartsup',
        subjects: [
            {
                title: 'Java 12, quoi de neuf ?',
                time: '19h00',
                length: '30 min',
                type: 'quickie',
                abstract: '<p>Java sort maintenant une nouvelle version tous les 6 mois. En mars dernier est donc sortie la version 12. Après un rapide récapitulatif des nouveautés depuis la version 10 voyons ce que cette version apporte à l\'environnement java et ce qui nous attend pour la suite.</p>',
                speakers: ['patrice_de_saint_steban']
            }, {
                title: 'Quarkus',
                time: '19h30',
                length: '1h30',
                type: 'talk',
                abstract: "<p>De Java au natif: venez découvrir GraalVM et Quarkus</p>" +
                    "<p>Microservices, montée en charge rapide et Kubernetes demandent des applications ayant un temps de démarrage rapide et une petite empreinte memoire; c'est pourquoi Java est peu utilisé dans ce contexte.</p>" +
                    "<p>Cela va changer!</p>" +
                    "<p>Venez découvrir Quarkus, la stack Java orientée microservices qui utilise vos librairies préférées (Hibernate, vert.x, Camel, RESTEasy, Netty…), et se déploie sur GraalVM et Hotspot. </p>" +
                    "<p>Durant cette session vous découvrirez GraalVM, et Quarkus et comment les deux réunis se concentrent sur la vitesse et la mémoire et ce avec un bonne expérience développeur." +
                    "<p>La prochaine 'Java Revolution' est en cours, rejoignez nous!",
                speakers: ['tugdual_grall']
            }
        ]
    }, {
        id: '2019_04_25',
        title: "Les furets : Vault // dOOv",
        date: new Date(2019, 3, 25), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/GBQk4/wWq2C/f',
        place: 'eartsup',
        subjects: [
            {
                title: 'Déploiement de vos secrets applicatifs : Hashicorp Vault et la livraison en continue',
                time: '19h00',
                length: '45 min',
                type: 'talk',
                abstract: '<p>La gestion des secrets applicatifs, tels que les identifiants de connexion aux bases de données, les phrases ' +
                    'secrètes ("passphrase"), les sels ("salt") et les clefs privées, est difficile. La disponibilité de ces éléments ' +
                    'est critique au bon fonctionnement d’une application, mais ils ont besoin d’être correctement protégés afin de ' +
                    'réduire la surface d’attaque du système.</p>' +
                    'La plupart des systèmes de gestion de secrets, comme Hashicorp Vault, sont utilisés comme une base de données ' +
                    'centralisée, mais cela devient un point de défaillance unique et nécessite un effort supplémentaire pour sécuriser ' +
                    'l’ensemble du système.</p>' +
                    '<p>Pourquoi ne pas déployer vos secrets, avec Hashicorp Vault, en même temps que votre application ? Grâce à votre ' +
                    'usine logicielle, il est possible de déployer une copie de vos secrets dans un Vault sécurisé par un "one time token", ' +
                    'accessible seulement par votre application.</p>' +
                    '<p>Dans cette présentation, nous allons présenter un pipeline de livraison continue permettant cette approche, montrer ' +
                    'les implications de la gestion de secrets dans votre infrastructure de build, et utiliser le "threat modeling" pour ' +
                    'vérifier la sécurité du Vault déployé.</p>',
                speakers: ['alexandre_dubreuil'],
                docs: [
                    { name: 'Slides', url: 'https://lesfurets.github.io/vault-continuous-secret-deployment/vault-continuous-secret-deployment-nantes-jug.html#/', type: 'html' },
                ]
            },
            {
                title: 'Comment créer son propre langage avec un fluent API et un lambda builder ?',
                time: '20h00',
                length: '1h',
                type: 'talk',
                abstract: '<p>Avec le framework dOOv, nous adoptons une nouvelle approche pour résoudre un problème récurrent dans nos applications : conjuger performance, lisibilité et typage fort.</p>' +
                    '<p>Depuis Java 8, les lambdas permettent de composer des fonctions avec d’excellentes performances à l’exécution. ' +
                    'dOOv fournit une fluent API qui permet d’écrire la logique d’une application avec un DSL « pur Java » et construit des lambdas pour l’exécution.</p>' +
                    '<p>Il devient possible de parcourir l’arbre de syntaxe du DSL lors de l’exécution et d’effectuer dynamiquement des réécritures.</p>' +
                    '<p>Pendant la session, nous présenterons le fonctionnement du framework, les problèmes rencontrés pour générer du langage naturel, ' +
                    'l’instrumentation du code écrit en DSL et la réécriture des arbres de syntaxe pour les afficher sous forme canonique.</p>',
                speakers: ['gilles_di_guglielmo', 'ozan_gunalp'],
                docs: [
                    { name: 'Slides', url: 'https://doov.io/conference/how_to_create_dsl_with_lambda_builders_nantes_jug.html#/', type: 'html' },
                ]
            }
        ]
    }, {
        id: '2019_03_12',
        title: "Développeurs VS agilité // Micronaut",
        date: new Date(2019, 2, 12), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/Gs5N6/wWq2C/f',
        place: 'eartsup',
        subjects: [
            {
                title: 'Développeurs & agilité : la guerre est déclarée ?',
                time: '19h00',
                length: '1h',
                type: 'talk',
                abstract: '<p>Quand on parle d\'agilité aux développeurs, on constate différentes réactions. Il y a les enthousiastes, ceux qui s\'en fichent, et ceux qui s\'y opposent farouchement.</p>' +
                    '<p>En ce moment, on peut constater un accroissement des développeurs ne souhaitant plus entendre parler d\'agilité.</p>' +
                    '<p>Pourquoi une telle scission ? La guerre est-elle ouvertement déclarée ou a-t-on un espoir de réconciliation ?</p>',
                speakers: ['cecilia_bossard', 'jean_palies']
            },
            {
                title: 'Micronaut Framework, déballage et prise en main',
                time: '20h15',
                length: '45 min',
                type: 'talk',
                abstract: '<p>Non ce n\'est pas un nouveau téléphone, mais un nouveau framework web service compatible Java, Kotlin et Groovy mon préféré ! Il annonce une vitesse de démarrage maxi avec des empreintes threads et mémoire mini, grâce à de la programmation réactive et une injection de dépendance réécrite sans Reflection : un socle pour réconcilier les applications basées JVM avec le Cloud ! Venez découvrir cette stack "post-Spring" qui sait presque tout faire - même du Sql, et même tirer parti de modules Spring - avec une application exemple sur le thème de la Radio Fip (ma préférée aussi).</p>',
                speakers: ['dominique_jocal']
            }
        ]
    }, {
        id: '2019_02_27',
        title: "Quickies: Graal VM, Psycho, CNCF et VS Code ",
        date: new Date(2019, 1, 27), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/GlQWC/13h0g/f',
        place: 'zenika',
        subjects: [
            {
                title: 'De la data science dans ma webapp avec GraalVM',
                time: '19h00',
                length: '20 min',
                type: 'quickie',
                abstract: "<p>Présentation du langage R (utilisé largement par les data scientists) et son intégration avec le monde Java via GraalVM ou comment intégrer des mondes qui se parlent peu.</p>",
                speakers: ['bruno_bonnin']
            },
            {
                title: '3 techniques faciles de manipulation',
                time: '19h30',
                length: '20 min',
                type: 'quickie',
                abstract: '<p>Qui ne s\’est jamais fait manipulé ? Évidemment, on est tous allé à une soirée alors qu\’on en avait pas envie, on a tous acheté un truc sans en avoir besoin et on a tous été influencé par ses proches.</p><p>L\’idée de cette présentation est de vous ouvrir les yeux sur les relations et les influences entre les gens. Je vous exposerai les mécanismes de prise de décision au travers de 3 techniques simples de manipulation.</p><p>A la sortie de ce talk, vous devriez être moins influençable et maître de vos décisions (voir même manipuler les autres).</p>',
                speakers: ['marie_viley']
            },
            {
                title: 'La CNCF et son écosystème',
                time: '20h00',
                length: '20 min',
                type: 'quickie',
                abstract: '<p>Découverte de la Cloud Native Computing Foundation qui pilote la communauté des projets d\'orchestration des containers et micro-services</p>',
                speakers: ['julien_landure']
            },
            {
                title: 'Développer en Java dans VS Code',
                time: '20h30',
                length: '20 min',
                type: 'quickie',
                abstract: '<p>En quelques années VS Code (Visual Studio Code) est devenu l\'éditeur de code le plus populaire; tout particulièrement dans les communautés Javascript, Python, et autres langages dynamiques.<p><p>Mais savez vous qu\'il est également possible d\'utiliser VS Code pour développer en Java?<p><p>Venez découvrir durance ce tools in action, les fonctionnalités clés de tout éditeur Java, supportées par VS Code:<p><ul><li>Code Completion</li><li>Debugger</li><li>Refactoring</li><li>Test</li><li>Support de Maven & Graddle</li><li>Code Navigation et Outline</li><li>...</li></ul>',
                speakers: ['tugdual_grall']
            }
        ]
    }, {
        id: '2019_01_15',
        title: "Minecraft // Cessons les estimations",
        date: new Date(2019, 0, 15), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/FTJwH/4xjVv/f',
        place: 'eartsup',
        subjects: [{
            title: 'Comment nous avons gagné notre argent de poche grâce à Minecraft',
            time: '19h00',
            length: '15 min',
            type: 'quickie',
            abstract: '<p>Description de notre parcours qui nous a mené de simples joueurs à administrateur d\'un serveur Minecraft comptant plusieurs milliers d\'utilisateurs nous faisant ainsi notre argent de poche</p>',
            speakers: ['corentin_grall', 'malo_grall']
        }, {
            title: "Cessons les estimations (One-man show)",
            length: '1h',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Un one man show afin de susciter la réflexion par le rire, afin de vulgariser les valeurs fondamentales de l’agilité, au delà de l’application d’une quelconque méthode.</p>" +
                "<p>Cette conférence iconoclaste, non technique, s’adresse à toute personne ayant eu un premier contact avec un projet de développement logiciel (clients, donneurs d’ordre, développeurs, chefs de projet, product owner, scrum master…)</p>",
            speakers: ['frederic_leguedois']
        }
        ]
    }, {
        id: '2018_12_13',
        title: "Dev & UI // CQRS & EventSourcing",
        date: new Date(2018, 11, 13), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/FTJtQ/4xjVv/f',
        place: 'eartsup',
        subjects: [{
            title: "Dev & UI : main dans la main avec le DesignOps",
            length: '45min',
            time: '19h00',
            type: 'talk',
            abstract: "<p>Il était une fois, dans une société nommée OUI.sncf, un développeur et une UI designer qui passaient leur temps à se chamailler. Le premier rêvait de spécifications responsives et de composants réutilisables par toutes les équipes. La seconde aspirait à ce que ses maquettes soient traitées avec respect et qu’une cohérence graphique soit enfin obtenue sur son site préféré. Ont-ils pu mettre leurs différents de côté pour aller au bout de leur ambition ? Vous le saurez en écoutant leur histoire...</p>",
            speakers: ['loic_maze', 'lydie_dareau']
        }, {
            title: "Implémentation de CQRS et EventSourcing avec le framework Axon ",
            length: '45min',
            time: '20h00',
            type: 'talk',
            abstract: "<p>Je m'intéresse depuis un moment à l'event sourcing, pour l'avoir utilisé sur deux applications, ce n'est pas si simple et on a tendance à laisser tomber le pattern en cours de route. Du coup, lorsque nous avons du mener la refonte d'une application interne à Oui.sncf basée sur l'event sourcing, nous avons utilisé le framework Axon qui a géré toute la plomberie pour nous.</p>" +

                "<p>Je pense que l'intérêt de ce framework est de gérer des problématiques complexes de concurrence, lock, etc, et de laisser le dev s'occuper de l'aspect métier.</p>" +

                "<p>J'ai préparé une session de livecoding pour présenter rapidement les concepts eventsourcing et CQRS, et pour voir la mise en œuvre sur un usecase classique.</p>",
            speakers: ['sylvain_maillard']
        }
        ]
    }, {
        id: '2018_11_20',
        title: "MQTT, Mosquitto et Paho // Google Container Tools",
        date: new Date(2018, 10, 20), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/FTJs9/4xjVv/f',
        place: 'eartsup',
        intro: "<div style=\"color: #0074be\">" +
            "<p>Cette soirée est co-organisée avec le meetup <a href=\"https://www.meetup.com/fr-FR/Docker-Nantes/\" target=\"_blank\">Docker Nantes</a>. Les inscriptions se font uniquement ici, sur le meetup du Nantes JUG.</p>" +
            "</div>",
        subjects: [{
            title: "Machine to machine : jouons un peu avec MQTT, Mosquitto et Paho",
            length: '30min',
            time: '19h00',
            type: 'quickie',
            abstract: "<p>MQTT est un protocole léger basé sur le pattern « Publish/Subscribe » qui s’est imposé pour les échanges M2M et donc l’IoT. Simple et facile à appréhender il peut être utilisé pour des cas d’usage très variés aussi bien avec un Raspberry Pi qu’un serveur Linux ou dans le cloud.</p>" +
                "<p>Ce quickie vous permettra de découvrir les principes de base du protocole MQTT, avec des démos utilisant le brocker « Mosquitto » et bien sûr un peu de code Java avec la librairie « Paho ».</p>",
            speakers: ['laurent_guerin']
        }, {
            title: "Google Container Tools : développer efficacement dans un monde de conteneurs",
            length: '1h',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Kubernetes est devenu l'orchestrateur de choix pour déployer des applications. Mais qu'en est-il du quotidien des développeurs qui créent ces applications ? Plus on s'appuie sur la plateforme, plus il est compliqué de développer en dehors de la plateforme. Et développer à l'intérieur de conteneurs n'est pas réputé facile ni agréable.</p>" +
                "<p>Google est à l'origine de plusieurs projets Open-Source qui se focalisent sur l'expérience des développeurs dans un monde de conteneurs. Kaniko permet de construire une image Docker à partir d'un Dockerfile, dans un cluster Kubernetes, de manière sécurisée. Skaffold facilite le déploiement continu d'applications pour Kubernetes. Les images Distroless offrent des images de base légères, sécurisées et de qualité. Bazel permet meme de construire des images Docker sans Docker. Venez découvrir comment ces outils se combinent pour offrir un environment de développement agréable et performant dans le monde des conteneurs.</p>",
            speakers: ['david_gageot']
        }
        ]
    }, {
        id: '2018_10_09',
        title: "LinuxKit // Kafka",
        date: new Date(2018, 9, 9), //month begin at 0
        time: '19h00',
        register: 'http://meetu.ps/e/FT1P3/tBvy3/f',
        place: 'eartsup',
        subjects: [{
            title: "LinuxKit",
            length: '30min',
            time: '19h00',
            type: 'quickie',
            abstract: "<p>Cela fait des années que certaines distributions linux permettent de construire son linux “from scratch” mais cela restait une opération compliquée et périlleuse. LinuxKit propose la même chose mais avec une approche beaucoup plus moderne et outillée. Cela devient presque aussi facile que de monter un meuble ikea ! (avec une notice quand même)</p>" +
                "<p>Le projet LinuxKit, créé par Docker Inc., a été pensé pour créer un OS aussi minimaliste et maintenable que possible (sans compromis avec la sécurité) et y déployer des conteneurs.</p>" +
                "<p>Nous allons vous présenter la genèse et les concepts du projet, l’écosystème des outils complémentaires qui vous permettront de composer et construire votre distribution. Puis, nous créerons notre première distribution en live !</p>",
            speakers: ['eric_briand', 'pierre-yves_aillet']
        }, {
            title: "Au delà des brokers: un tour de l'environnement Kafka",
            length: '1h',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Apache Kafka ne se résume pas aux brokers, il y a tout un écosystème open-source qui gravite autour. Je vous propose ainsi de découvrir les principaux composants comme Kafka Streams, KSQL, Kafka Connect, Rest proxy, Schema Registry, MirrorMaker, etc.</p><p>Venez avec vos questions, plus la session sera interactive, meilleure elle sera !</p>",
            speakers: ['florent_ramiere']
        }
        ]
    }, {
        id: '2018_09_25',
        title: "Java 9, 10 et + par Jean-Michel Doudoux",
        date: new Date(2018, 8, 25), //month begin at 0
        time: '19h30',
        register: 'http://meetu.ps/e/FNyYs/4xjVv/f',
        place: 'terrasses_de_l_erdre',
        intro: "<div style=\"color: #0074be\"><div class=\"row\">" +
            "<div class=\"col-md-8\">" +
            "<p>Si comme nous, vous avez commencé le java il y a plus de 10 ans, vos recherches web sur Java vous ont forcément amené sur les articles de Jean-Michel Doudoux.<p>" +
            "<p>🎂 C'est donc pour les 10 ans du JUG que nous l'accueillons avec plaisir, pour nous parler des derniers changements de Java.</p>" +
            "<p>Cette soirée exceptionnelle 🎊 sera suivi d'un cocktail dinatoire 🍸 🍣 au restaurant du parc des expositions, les Terrasses de l'Erdre.</p>" +
            "<p>🎁 Il y aura des places pour DevFest à gagner ainsi d'autres suprises... 🎁</p>" +
            "</div>" +
            "<div class=\"col-md-4 col-xs-6\"><img src=\"/images/site/10_ans.png\" width=\"100%\"></div>" +
            "</div></div>",
        subjects: [{
            title: "Java, le changement c'est maintenant (... enfin depuis un an déjà)",
            length: '1h30min',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Ce n'est pas qu'un slogan politique mais bien la réalité pour Java depuis l'année écoulée.</p>" +
                "<p>A tel point que plusieurs caractéristiques historiques de Java sont partiellement remises en cause notamment la lenteur patente entre deux releases, l'embonpoint endémique du JRE/JDK, la gratuité, et même la sacro sainte rétro-compatibilité, ...</p>" +
                "<p>Faisons un tour de ces évolutions qui sont parfois de profonds changements avant de fêter le 10ème anniversaire du Nantes JUG. " +
                "Comment l'utiliser dans vos applications en offrant des possibilités de requêtes géospatiales.</p>",
            speakers: ['jmdoudoux']
        }
        ]
    }, {
        id: '2018_06_20',
        title: "S2 Geometry // Couchbase 101",
        date: new Date(2018, 5, 20), //month begin at 0
        time: '19h30',
        register: 'http://meetu.ps/e/FqHTW/wWq2C/f',
        place: 'eartsup',
        subjects: [{
            title: "Introduction a S2 Geometry",
            length: '30min',
            time: '19h30',
            type: 'quickie',
            intro: 'Une solution simple pour vos besoins "géospatiaux"',
            abstract: "<p>Durant ce quickie vous découvrirez la librairie S2 Geometry (http://s2geometry.io/) et " +
                "comment l'utiliser dans vos applications en offrant des possibilités de requêtes géospatiales.</p>",
            speakers: ['tugdual_grall']
        },
        {
            title: "Couchbase 101 [EN]",
            length: '45min',
            time: '20h15',
            type: 'talk',
            abstract: "<p>Today's mission-critical applications demand support for millions of interactions with " +
                "end-users. Traditional databases were built for thousands.</p>" +
                "<p>Couchbase Server is an open source, distributed, NoSQL document-oriented database. It " +
                "exposes a fast key-value store with managed cache for sub-millisecond data operations, " +
                "purpose-built indexers for fast queries and a powerful query engine for executing SQL-like queries.</p>" +
                "<p>In this talk, we develop a small microservice using a very productive combination: " +
                "Couchbase, Spring Boot and Spring Data. We also will deploy both your application and " +
                "database on Kubernetes, to show how you can build truly elastic microservices.</p>" +
                "<p><u>Conférence en anglais</u></p>",
            speakers: ['denis_rosa']
        }
        ]
    }, {
        id: '2018_05_23',
        title: "UX // Kotlin - Avancé",
        date: new Date(2018, 4, 23), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/250684407/',
        place: 'eartsup',
        subjects: [{
            title: "3 exemples pour comprendre l'intérêt de la phase UX research lors de la conception",
            length: '30min',
            time: '19h00',
            type: 'talk',
            abstract: "<p>À travers 3 exemples, nous verrons comment l'approche UX, et plus particulièrement la " +
                "phase de test, fait le plus grand bien à la conception d'un projet. Pour le meilleur ou pour le pire." +
                "Observer et interviewer l'être humain est indispensable pour savoir si l'expérience que vous " +
                "proposez est bien celle attendue par lui, pour comprendre les motivations qui l'anime et " +
                "mieux détecter les facteurs qui faciliteront l'appropriation d'un service ou d'un produit.</p>",
            speakers: ['nabil_thalmann']
        },
        {
            title: "Kotlin asynchrone : les coroutines",
            length: '1h',
            time: '19h45',
            type: 'talk',
            abstract: "<p>Les Coroutines sont la nouvelle fonctionalité du langage Kotlin pour sa version 1.1. En " +
                "l'essence, elles vous permettent d'écrire du code séquentiel mais asynchrone.</p>" +
                "<p>Dans ce talk, je présenterai le concept des coroutines et expliquerai comment Kotlin " +
                "implémente les coroutines pour être un outil sur lequel construire plutôt qu'un standard imposé à la communauté. " +
                "À travers un live-coding, nous explorerons les primitives bas niveau comme les principales " +
                "libraries haut niveau. Je montrerai comment ce formidable outil peut être utilisé aussi bien " +
                "en back-end sur un serveur que sur une application Android.</p>",
            speakers: ['salomon_brys']
        }
        ]
    }, {
        id: '2018_05_03',
        title: "Les joies de la négociation // TICK-Tac",
        date: new Date(2018, 4, 3), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/250168593/',
        place: 'eartsup',
        subjects: [{
            title: "Les joies de la négociation",
            length: '30min',
            time: '19h00',
            type: 'quickie',
            abstract: "<p>S’il est bien un aspect du métier de développeur qu’on aime pas toujours/trop, c’est de devoir négocier. " +
                "Souvent, la négociation se résume à un rapport de force. " +
                "Lors de l’entretien d’embauche ou l’entretien annuel, négocier son salaire est rarement une partie de plaisir, laissant parfois le sentiment de s’être fait (un peu ?) avoir." +
                "Même au sein d’une équipe, les négociations pour les choix techniques peuvent s’avérer... compliquées.</p>" +
                "<p>Ça n’est pas une fatalité :)</p>" +
                "<p>À partir d'un livre, « Comment réussir une négociation » (titre original : Getting to Yes), et de quelques retours d’expérience, découvrez quelques clés pour être mieux armés dans vos négociations.</p>",
            speakers: ['olivier_truong']
        },
        {
            title: "TICK-Tac, il est l'heure de collecter et exploiter vos données temporelles",
            length: '1h',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Nos activités quotidiennes sont liées au temps. Pourquoi ne pas utiliser des bases temporelles (time series databases) pour stocker et exploiter vos données ?</p>" +
                "<p>Au travers de la plateforme TICK (Telegraf, InfluxDB, Chronograf et Kapacitor) et Grafana et sur la base de l'exemple d'un monitoring de plateforme, nous verrons comment manipuler ces données temporelles.</p>",
            speakers: ['nicolas_steinmetz']
        }
        ]
    }, {
        id: '2018_04_26',
        title: "OpenFaas // Kotlin",
        date: new Date(2018, 3, 26), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/249153190/',
        place: 'creative',
        subjects: [{
            title: "OpenFaas, une solution simple et rapide à déployer pour faire du FaaS.",
            length: '30min',
            time: '19h00',
            type: 'talk',
            abstract: "<p>OpenFaaS est un projet d'Alexis Ellis, Docker Captain, basé sur Docker et sur les orchestrateurs Swarm ou Kubernetes. Cette solution facilite la mise en œuvre d'une architecture Serverless à base de fonctions.</p>" +
                "<p>A la différence de AWS Lambda ou d'autres services FaaS (Function as a Service) comme Google Cloud Functions, OpenFaas est une solution qui peut être déployée en On Premise, et ce très rapidement et simplement. L'autre différence est que tout peut devenir une fonction, y compris un binaire. " +
                "On comprend mieux pourquoi depuis sa présentation à la DockerCon 2017, ce projet fait fureur dans la communauté Docker.</p>" +
                "<p>Après une présentation succincte de ce qu'est le FaaS, nous explorerons la solution et l'ensemble de ses possibilités. Pour démontrer la puissance de ce framework, nous terminerons ce talk par une démonstration mettant en œuvre plusieurs fonctions.</p>",
            speakers: ['emmanuel_lebeaupin']
        },
        {
            title: "À la découverte de Kotlin",
            length: '45min',
            time: '19h35',
            type: 'talk',
            abstract: "<p>Kotlin est un langage de programmation qui s’adresse principalement aux utilisateurs Java. Supporté depuis l’année dernière par les plateformes Android, ce langage simple et moderne a fait une percée dans le monde du développement mobile. Interopérable avec Java, Kotlin est désormais doté d’une version JS et native qui élargit le champ de ses capacités.</p>" +
                "<p>Après un vernis historique sur les origines de ce langage, découvrons ensemble tout l’intérêt de Kotlin au travers de quelques points de syntaxe, concepts de base et outils. Nous terminerons ce talk par la présentation de deux exemples l’un sur Android et l’autre en Kotlin JS.</p>",
            speakers: ['yvelain_naude']
        }
        ],
        docs: [
            { name: 'flyer', url: 'https://goo.gl/V9kk4g', type: 'pdf' },
        ]
    },
    {
        id: '2018_04_10',
        title: "Open Tracing // Il n'y a pas que Angular, React ou VueJS",
        date: new Date(2018, 3, 10), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/249153080/',
        place: 'ynov',
        subjects: [{
            title: "Open Tracing, le SLF4J du traçage distribué",
            length: '30min',
            time: '19h00',
            type: 'talk',
            abstract: "<p>Un id de corrélation, cela n'a rien de nouveau, mais cela change la vie, surtout couplé avec un outil d'agrégation de logs. </p>" +
                "<p>Il est de plus en plus rare qu'une page web ne génère qu'une seule requête côté serveur. Et quand un bug survient, c'est la fin... " +
                "Parmi les X applications interrogées, pour trouver la source du bug, cela devient vite la galère... C'est une perte de temps, et une source de stress.</p>" +
                "<p>Open Tracing est une API disponible dans plusieurs langages, permettant de s'interfacer avec différents outils de traçage. " +
                "A l'image de Slf4J pour les logs, Open Tracing pemet donc de passer à une implémentation à une autre avec peu d'effort. " +
                "Vous utilisez à l'heure actuelle Zipkin, et vous voulez passer sur Jaeger, rien de plus simple. Quelques lignes à changer dans son code et c'est fait.</p>" +
                "<p>Je vous présenterais le principe de la corrélation d'id et les notions qui vont avec (trace, span, etc.), les outils existants, et pourquoi je crois en Open Tracing.</p>",
            speakers: ['florian_negre']
        },
        {
            title: "Il n'y a pas que Angular, React ou VueJS dans la vie",
            length: '45min',
            time: '19h35',
            type: 'talk',
            abstract: "<p>Nous connaissons tous les frameworks/librairies à la mode : de Angular à React, en passant par le tout dernier VueJS. Mais devons-nous nous limiter à ces trois solutions ? </p>" +
                "<p>Durant cette conférence, nous allons aborder plutôt les projets les moins connus, mais pas les moins intéressants, et qui pourraient être sources" +
                "d'idées pour les grands du Web. De Inferno à Marko, en passant par Preact, nous allons enfin pouvoir connaitre les avantages et inconvénients de ces solutions alternatives. </p>",
            speakers: ['emmanuel_demey']
        }
        ]
    },
    {
        id: '2018_03_22',
        title: "Micro-Interactions // Devenir une plateforme de services",
        date: new Date(2018, 2, 22), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/248653942/',
        place: 'insula',
        subjects: [{
            title: "Il n'y a pas de magie, tout est dans les détails !",
            length: '30min',
            time: '19h00',
            type: 'talk',
            abstract: "<p>Et s'il existait un monde où les petits détails d'une app ou d'un site web servent en même temps l'experience utilisateur et l'immersion dans un univers graphique ?</p><p>Un nouveau monde à la croisée de l'UX et de l'UI.</p>" +
                "<p>Plongée dans le monde des Micro-interactions...</p>" +
                "<p></p>" +
                "<p>Et s'il était possible d'améliorer l'experience utilisateur d'une app juste en travaillant les détails ?</p>" +
                "<p>S'il était possible d'apporter du réel dans une app virtuelle simplement ?</p>" +
                "<p>Ou comment récompenser physiquement l’utilisateur pour le guider dans son parcours ?</p>",
            speakers: ['thomas_buvignier']
        },
        {
            title: "ŌPUN : Devenir une plateforme de service",
            length: '45min',
            time: '19h35',
            type: 'talk',
            abstract: "<p>Lorsque ta direction te dit qu'il faut diversifier les activités et devenir une plateforme de services, un reset s'impose pour penser, from scratch, un nouveau pan du système d'information.</p>" +
                "<p>Durant l’année passée, nous avons pensé et mis en oeuvre un ensemble de méthodologies, pratiques, solutions techniques pour servir de nouveaux produits innovants bénéficiant d’un time-to-market compétitif et de coûts maîtrisés. Cette initiative prise dans une grosse entreprise de la région nous permet le droit à l’erreur, la possibilité de jeter au besoin tout en valorisant son legacy et en responsabilisant les développeurs.</p>" +
                "<p>Nous verrons donc ensemble les différentes étapes que nous avons suivi lors de cette “rupture”, les méthodologies employées, les façons de travailler, les patterns utilisés. Nous vous présenterons la suite d’outils que nous avons créé à l’occasion, lorsque les outils du marché ne convenaient pas à nos cas d’utilisation (la stack Netflix n’est pas faite pour tout le monde ;-).</p>" +
                "<p>Au programme, reverse-proxy, API gateway, ingestion de data, feature flipping, A/B testing, des démos qui plantent et bien plus encore.</p>",
            speakers: ['mathieu_ancelin', 'alexandre_delègue', 'francois_desmier']
        }
        ]
    },
    {
        id: '2018_02_27',
        title: "Cloud // Microservices",
        date: new Date(2018, 1, 27), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/247576881/',
        place: 'epitech',
        subjects: [{
            title: "Cloud : le couteau SaaS du développeur (et de la startup) !",
            length: '45min',
            time: '19h00',
            type: 'talk',
            abstract: "<p>Et si on pouvait développer une application sans coder! Ou pas…</p>" +
                "<p>Retour d'expérience sur le développement et la mise en production d’une application web s'appuyant sur +15 SaaS.<br/>" +
                "Ce partage nous permettra d’aborder les points suivants:<ul>" +
                "<li>Tour d’horizon de l’offre *aaS,</li>" +
                "<li>Pourquoi du SaaS ?</li>" +
                "<li>Avantages et inconvénients,</li>" +
                "<li>La sécurité,</li>" +
                "<li>Les limites,</li>" +
                "<li>...</li>" +
                "</ul></p>",
            speakers: ['yann_danthu']
        },
        {
            title: "Comment maintenir de la cohérence dans votre architecture microservices",
            length: '45min',
            time: '19h45',
            type: 'talk',
            abstract: "<p>La tendance est au délaissement des architectures monolithiques au profit de micro-services bien découpés. Ainsi nous facilitons le passage à l'échelle, réduisons la taille de chaque projet et pouvons utiliser la pile techno adaptée à chaque module.</p>" +
                "<p>Cependant, en séparant ces briques, nous repoussons la complexité à la limite entre chaque module. La cohérence fournie par une base de code atomique et son système de types est perdue.</p>" +
                "<p>Dans cette session, je montrerai comment tenir compte explicitement des frontières entre modules permet de réduire le risque de données incohérentes. Je montrerai comment encoder les messages inter-modules, en déclarant explicitement pour chaque brique, la structure nécessaire et ce qui doit pouvoir évoluer sans impacter le module. La serialisation implicite a beau etre plus simple au début, l'explicite aide beaucoup.</p>" +
                "<p>Je donnerai des exemples en scala et javascript, tout en tirant des comparaisons avec mon expérience en développement web, où on a une expérience fournie de ce qui se passe quand les développeurs essayent d'ignorer les frontières entre coté serveur et coté client.</p>",
            speakers: ['clement_delafargue']
        }
        ]
    }, {
        id: '2018_01_31',
        title: "Progressive Web App // Recouvrer de la productivité avec Gradle",
        date: new Date(2018, 0, 31), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/246931283/',
        place: 'eartsup',
        subjects: [{
            title: "Native apps are doomed",
            length: '30min',
            time: '19h00',
            type: 'quickie',
            abstract: "<p>Les progressive web apps envahissent progressivement le marché comme Twitter avec Twitter Lite.<br/>" +
                "Y'a-t-il encore aujourd'hui à développer une application native, avec toutes les difficultés que celà entraîne ?</p>",
            speakers: ['mathias_bernardeau']
        },
        {
            title: "Recouvrer de la productivité avec Gradle",
            length: '1h',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Vous entendez parler de Gradle, mais pour vous, ça n'est qu'un autre outil de build. Vous ne voyez pas l'intérêt. Pourtant, Gradle est différent. Il est conçu pour la productivité : réduire les temps de build, améliorer la modélisation des applications, résoudre les problèmes de gestion de dépendence...</p>" +
                "<p>Dans cette session, nous parlerons de Gradle 4 et des fonctionnalités uniques qu'il apporte : tâches incrémentales, builds composites, cache distribué, ... Nous montrerons aussi les build scans et comment ils permettent de gagner un temps précieux en donnant une perspective unique sur vos builds. Enfin, nous aborderons brievement l'arrivée de Gradle 5, qui innovera une fois de plus dans le domaine de la gestion de dépendances.</p>",
            speakers: ['cedric_champeau']
        }
        ]
    }, {
        id: '2017_12_14',
        title: "Soirée de Noël : Quickies & Cocktail",
        date: new Date(2017, 11, 14), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/245415172/',
        place: 'adresse_gare_sud',
        subjects: [{
            title: "Kotlin, la java qu'on aimerait avoir",
            length: '20min',
            time: '19h00',
            type: 'quickie',
            abstract: "<p>Je vais vous présenter le langage Kotlin, ses concepts principaux et sa syntaxe compacte par rapport à Java. Je vous montrerai en exemple une application Spring boot développée en Kotlin.</p>",
            speakers: ['adrien_pessu']
        },
        {
            title: 'Verdaccio un proxy npm à la rescousse',
            length: '20min',
            time: '19h20',
            type: 'quickie',
            abstract: "<p>La construction d'une application repose principalement sur le code source que nous autres développeurs (euses) avons développé, mais également sur toutes les dépendances (frameworks ou librairies) que nous allons ajouter au sein de cette même application.</p>" +
                "<p>Pour assurer la reproductibilité, la maintenabilité et l'évolution du processus de construction de notre application vis à vis des dépendances on s'appuie généralement sur un dépôt de dépendances accessible depuis Internet." +
                "L'écosystème JavaScript n'échappe pas à la règle et en quelques années npm est devenu un mastodonte régissant quasiment toutes les dépendances JavaScript.</p>" +
                "<p>Lors de ce quickie nous verrons quels sont les avantages et les inconvénients de cette situation et comment nous pouvons utiliser l'outil Verdaccio comme proxy npm pour résoudre les problèmes du quotidien en entreprise.</p>",
            speakers: ['alvin_berthelot']
        },
        {
            title: 'Gamifier notre outillage traditionnel pour mettre en avant des concepts innovants.',
            length: '20min',
            time: '19h40',
            type: 'quickie',
            abstract: "<p>Comment nous avons construit un jeu afin de mettre en évidence différents concepts (scalibilité, résilience, …) et prouver le fonctionnement de composant techniques (Docker Swarm, SSE, …)" +
                "Le tout sur la base de technologies issues du développement d'application de gestion.</p>" +
                "<p>Il s’agit d’une présentation d’introduction qui présente le produit fini, et la démarche mais qui n’entre pas dans les détails techniques des différents composants du jeu.</p>",
            speakers: ['nicolas_giraud']
        },
        {
            title: 'Language Server Protocol : intégrer simplement un language dans un IDE',
            length: '20min',
            time: '20h00',
            type: 'quickie',
            abstract: "<p>Si je vous demandais de supporter un DSL dans plusieurs IDE, vous ne trouveriez pas ça compliqué ? Vive le mal de crâne! Et si je vous disais que j'avais un outil pour vous aider ? Faites place au Language Server Protocol! Cette spécification vise à simplifier l'intégration d'un language de programmation dans un IDE. Elle est totalement hallucinante. Le support de C# dans Eclipse, celui de java dans VSCode c'est grâce à elle. Alors si vous voulez simplement comprendre comment ça marche ou si vous voulez créer et intégrer votre propre serveur de language, venez voir cette présentation. Je vous montrerez comment jouer avec le LSP pour avoir de la complétion, documentation et validation sur un DSL maison.</p>",
            speakers: ['gautier_de_saint_martin_lacaze']
        }, {
            title: 'Cocktail 🍾 🍕 🍹',
            time: '20h30',
            type: 'cocktail',
            abstract: '<p>Quoi de mieux qu\'un cocktail offert par le Nantes JUG pour fêter la fin de l\'année.</p>' +
                '<p>Au programme : boissons, petits fours et discussions tech (ou pas).</p>'
        }
        ]
    }, {
        id: '2017_10_26',
        title: "Event Sourcing avec Apache Kafka // L'IoT dans la vraie vie",
        date: new Date(2017, 9, 26), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/preview/Nantes-Java-User-Group/events/243675823',
        place: 'eartsup',
        subjects: [{
            title: "L'IoT dans la vraie vie",
            length: '30min',
            time: '19h00',
            type: 'quickie',
            abstract: "<p>L'internet des objets, décrit par certains comme une nouvelle révolution de l'Internet, est un sujet au coeur d'une multitude d'actualités et de controverses, si bien qu'on a souvent du mal à faire le point sur son réel potentiel.</p>" +
                "<p>Oui mais les faits sont là : investissement des grands du numérique, accélération de startup, bassins d'emplois en France autour de l'IoT, réseau d'objets connectés, l'évolution est en marche, pour de vrai ! Alors, innovation surestimée ou réelle révolution ? </p>" +
                "<p>Ce Quickie a pour but de faire un bilan, sans compromis et en apportant une vision globale sur ce nouvel usage d'Internet, complété par un retour d'expérience à la Cité de l'objet connecté et illustré par l'exemple de la SNCF.</p>",
            speakers: ['benjamin_demonet']
        },
        {
            title: 'Event Sourcing avec Apache Kafka',
            length: '1h',
            time: '19h30',
            type: 'talk',
            abstract: "<p>Quand j'ai découvert Apache Kafka, j'ai rapidement été séduit par son élégance et sa simplicité. J'aimerais partager cette expérience avec vous.</p>" +
                "<p>Malgré son apparence initiale de bus de message, Kafka est un système de stockage de données extrêmement versatile. C'est un log persisté. Naturellement, j'ai fait le lien avec l'Event Sourcing, qui consiste à utiliser un log comme source de vérité d'une application, et ainsi ne jamais perdre une seule goutte de données. Alors je me suis dit : jusqu'où peut-on aller dans le développement d'une application de gestion avec Kafka pour seule base de données ? Qu'est-ce que ça donne ? Quels sont les défis à relever ? Est-ce vraiment différent d'une application centrée autour d'une base SQL ?" +
                "<p>Pour explorer ce terrain j'ai choisi d'implémenter une application très simple, le fameux TodoMVC, celui-là même qui sert de terrain de jeux aux frameworks front. Mon talk sera donc un retour sur cette expérience.</p>" +
                "<p>La présentation inclue une introduction à Kafka et au concept d'Event Sourcing, il n'y a donc aucun pré-requis.</p>",
            speakers: ['hugo_wood']
        }
        ]
    }, {
        id: '2017_09_18',
        title: "WebRTC // Et java 8 devient plus fonctionnel avec VAVR",
        date: new Date(2017, 8, 18), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/preview/Nantes-Java-User-Group/events/242950915',
        place: 'lucca',
        subjects: [{
            title: 'WebRTC : de la visioconférence dans les navigateurs sans plugins',
            length: '20min',
            time: '19h00',
            type: 'quickie',
            speakers: ['abdellatif_el_maknati']
        },
        {
            title: 'Et java 8 devient plus fonctionnel avec VAVR',
            length: '1h',
            time: '19h20',
            type: 'talk',
            abstract: "<p>Vavr est une librairie complètement dédiée au paradigme de programmation fonctionnelle. Elle a la particularité d'aller un peu plus loin que les notions de lambdas, pipelines ou composition de fonctions offertes par Java 8.</p>"
                // "<p>Durant cette session nous découvrirons les structures proposées par Vavr, comme les collections immuables, les values types tels que les Option, les Try, les Either…</p>"
                +
                "<p>Nous verrons comment cette librairie gère des aspects plus fonctionnels, à savoir la composition de fonction, le lifting, la memoization ou le currying.</p>" +
                "<p>Enfin nous terminerons avec la présentation de la syntaxe offerte pour le pattern Matching et le property checking.</p>",
            speakers: ['guillaume_lours']
        }
        ]
    }, {
        id: '2017_08_29',
        title: "Concours de l'été !!!",
        date: new Date(2017, 7, 29), //month begin at 0
        time: '19',
        subjects: [{
            title: 'Concours de l\'été !!!',
            length: 'Tout l\'été',
            abstract: '<p>Pour cet été on organise un concours sur twitter.</p>' +
                '<p>Comment participer ? C\'est simple. Tweetez à @nantesjug une photo de vos vacances avec votre t-shirt Nantes JUG. <a href="https://twitter.com/nantesjug/status/877198919335383042">Petit exemple de notre part.</a></p>' +
                '<p>Pour ceux qui n\'ont pas de compte twitter, vous pouvez nous envoyer un mail à l\'adresse team@nantesjug.org.</p>' +
                '<p>Lots à gagner : </p><ul><li>3 licences Intellij IDEA</li><li>3 places pour le Devfest Nantes</li></ul>',
            speakers: []
        }]
    }, {
        id: '2017_06_19',
        title: "Akka, java 8 // serverless, et le doux parfum des vacances !",
        date: new Date(2017, 5, 19), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/240136198/',
        place: 'insula',
        subjects: [{
            title: 'Akka avec java 8 finalement c\'est cool !',
            length: '45min',
            time: '19h00',
            type: 'talk',
            abstract: '<p>Akka est une super boite à outils pour créer des applications ultra performantes et gérer facilement la concurrence.</p>' +
                '<p>Même si akka a toujours été présenté comme un framework pour les développeurs à la fois java et scala, il faut avouer que l\'api java était plutôt rebutante. L\'arrivée de java 8 a clairement changé la donne et il est enfin possible pour les développeurs java d\'utiliser akka tout en écrivant du jolie code.</p>' +
                '<p>Dans cette session, après une présentation du framework akka nous développerons une application akka 100% java. Au programme il y aura des acteurs, du rest et des streams !</p>',
            speakers: ['alexandre_delègue']
        }, {
            title: 'Serverless: just a buzzword?',
            length: '1h',
            time: '20h00',
            type: 'talk',
            abstract: '<p>Les conteneurs se généralisent depuis maintenant quelques temps. Et un nouveau concept est déjà en train de pointer le bout de son nez : le serverless. Qu’est-ce que c’est ? Est-ce un buzz ou une réelle évolution ? Est-ce que l’on doit déjà mettre à la poubelle les conteneurs ?</p>' +
                '<p>Au cours de cette présentation, nous présenterons les principes du serverless et nous ferons une mise en application avec AWS Lambda, Google Cloud Functions et le framework serverless. Nous essaierons d’apporter un éclairage sur l’intérêt de cette technologie à travers des exemples d’utilisation.</p>',
            speakers: ['julien_landure']
        }, {
            title: 'Cocktail 🍾 🍕 🍹',
            time: '21h00',
            type: 'cocktail',
            abstract: '<p>Quoi de mieux qu\'un petit cocktail pour fêter cette fin de saison.</p>' +
                '<p>Rendez-vous dans le patio, et au programme, boissons, petits fours et discussions tech (ou pas). On refait le monde !</p>'
        }]
    }, {
        id: '2017_05_15',
        title: "Anki Overdrive // CI, CD, pipelines, conteneurs",
        date: new Date(2017, 4, 15), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/239670797/',
        place: 'eartsup',
        subjects: [{
            title: 'CI, CD, pipelines, conteneurs : la cohabitation est elle possible ?',
            length: '1h - 1h30',
            time: '19h00',
            type: 'talk',
            speakers: ['guillaume_membre'],
            abstract: '<p>Si vous croyez que Docker et les Pipelines ne servent qu\'aux chargements et transport de conteneurs, Jenkins, votre fidèle serviteur, vous montrera comment en tirer le meilleur parti.</p>'
        }, {
            title: 'Anki Overdrive : controllez vos voitures "circuit 24" à partir de votre code',
            length: '20min',
            time: '20h30',
            type: 'quickie',
            speakers: ['tugdual_grall'],
            abstract: '<p>Nous nous rappelons tous de notre premier circuit électrique, de notre premiers tours de piste dans un jeu vidéo, je vous propose dans cette présentation de passer à l\'étape suivante:  mélanger un jeux vidéo et un circuit de voiture, avec Anki Overdrive ( https://anki.com/en-us/overdrive )</p>' +
                '<p>Vous découvrirez en quelques minutes la mise en place d\'un circuit, le contrôle des voitures à partir de votre téléphone mobile, et l\'utilisation d\'intelligence artificielle pour plonger dans un nouveau style de jeux.</p>' +
                '<p>Puis vous découvrirez comment "hacker" les voitures pour capturer les données en temps réel, et même controller ces voitures à partir de votre code, donc à partir de n\'importe quel device connecté. (Mio, Leap, ...)</p>'
        }]
    }, {
        id: '2017_04_12',
        title: "Netflix // Devops",
        date: new Date(2017, 3, 12), //month begin at 0
        time: '19h00',
        register: 'https://www.meetup.com/Nantes-Java-User-Group/events/238418834/',
        place: 'eartsup',
        subjects: [{
            title: 'Netflix OSS ou comment  Homer est devenu un super héros',
            length: '45min',
            time: '19h00',
            type: 'talk',
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
            speakers: ['antony_guilloteau'],
            abstract: '<p>"Continuous Delivery" et "DevOps" font partis des buzz word du moment dans l\'IT.</p>' +
                '<p>Si vous n\'êtes pas encore entrés dans ces démarches, ce n\'est qu\'une question de temps ! Préparez-vous à voir bientôt débarquer votre chef sur le bench avec le bouquin "Découvrir DevOps" sous le bras.</p>' +
                '<p>Mais pour les développeurs, ça change quoi le DevOps ? A travers cette conférence, je vais vous faire part des mes différents retours d\'expérience sur ces changements autour des pratiques, organisations et outillages.</p>'
        }]
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
            speakers: ['emeric_martineau'],
            abstract: "<p>Le système d'information de Voyages-Sncf.com ce sont des centaines d'applications.<br>" +
                "Elles sont en Java, en PHP, en Python, en Ruby, en NodeJS... Autant de technologies qui ont leurs préférences au niveau du format de configuration (XML, YAML, INI...).<br>" +
                "Dans ce contexte, il faut un outil qui permet de gérer n'importe quel format de fichiers (excepté binaire) en étant totalement décorrélé de la technologie, le tout le plus simplement possible tout en proposant de gérer des environnements différents.<br>" +
                "Cet outil doit être accessible à tous pour faciliter la vie de tous les collaborateurs : des développeurs, aux testeurs en passant par le support, sans oublier la production.<br>" +
                "En plus il est OpenSource !</p>",
            docs: []
        }, {
            title: "Et si on refaisait le site du NantesJug en Angular 2 ?",
            length: '45min',
            time: '19h45',
            type: 'talk',
            speakers: ['anthonny_querouil'],
            abstract: "<p>Le site du JUG de Nantes, <a href=\"http://http://www.nantesjug.org\">http://www.nantesjug.org</a> est une application Angular 1.0.8 qui date un peu, et comme tout bon jugger, j’aime mon JUG local et je me dis qu’une refonte serait la bienvenue.</p>" +
                "<p>Au cours de ce live-coding, nous partirons d’une application initiée avec angular-cli et nous créerons notre nouvelle version en utilisant TypeScript, un language typé de Microsoft, et la fameuse plateforme de développement on ne peut plus hype, Angular 2.</p>",
            docs: [
                { name: 'sources', url: 'https://github.com/anthonny/nantesjug-2017', type: 'github' }
            ]
        }]
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
            speakers: ['jean_pascal_thiery', 'antoine_le_taxin'],
            abstract: "<p>Kodo Kojo est une solution Open source qui permet de fournir une usine logicielle en 3 clics qui inclut : la gestion de la sécurité, la configuration, le monitoring et la gestion des utilisateurs sur chacune des briques de l'usine.</p>" +
                "<p>Kodo Kojo s'appuie sur Mesos/Marathon/Docker pour lancer ses services ainsi que les briques qui constituent chaque usine logicielle. Nous proposons de vous présenter les solutions que nous avons mises en place pour tester et construire notre projet qui se compose d'une stack technique assez conséquente. Nous répondrons notamment aux questions suivantes :" +
                "<ul><li>Comment tester mon service de pilotage par API de Gitlab/Jenkins/Nexus ?</li>" +
                "<li>Comment tester l'UI sans avoir à installer Java, Maven, Meso, Marathon, Node, Npm,  HaProxy, ...</li>" +
                "<li>Comment automatiser tous ces tests ?</li>" +
                "<li>Comment partager nos livrables simplement ?</li></ul>" +
                "</p>",
            docs: []
        }],
        docs: [
            { name: 'slides', url: 'http://www.slideshare.net/KodoKojo/du-docker-dans-notre-workflow-de-dev-72453736', type: 'slideshare' },
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
            speakers: ['laurent_doguin'],
            abstract: "<p>RxJava seems to be this awesome thing that every cool kids start using. But when you read about it, half of the time it’s hard to make anything out of it. Sure the isolated examples look nice but it’s always hard to put this in perspective with a real app.</p>" +
                "<p>In this talk I’ll go through an application made to store, index and search files. We’ll see the benefit brought by using RxJava , Ratpack and Couchbase together. Nothing too complicated or advanced, just something pragmatic.</p>" +
                "<p>This talk is for you if you want to discover RxJava through a pragmatic example. It’s a beginner talk.</p>",
            docs: []
        }, {
            title: "Applications web reactives avec Spring 5 et Reactor 3",
            length: '40min',
            time: '20h00',
            type: 'talk',
            speakers: ['simon_basle'],
            abstract: "<p>Dans cette présentation nous découvrirons Reactor 3, une librairie réactive alternative à RxJava mais proche de celle-ci. " +
                "Nous verrons comment Spring 5 va mettre l\'accent sur la programmation réactive avec Reactor comme base. Nous comparerons ensuite " +
                "Reactor avec RxJava 1 et RxJava 2, ce qui sera l\'occasion de se focaliser (comme la librairie) sur un contexte Java 8, la spécification " +
                "Reactive Streams et le concept de backpressure.</p>",
            docs: []
        }

        ],
        docs: [
            { name: 'Affiche de la soirée', url: 'https://drive.google.com/open?id=0BzLO1XLmywLJS1A5cm1kOFBhakk', type: 'pdf' }
        ]
    }, {
        id: '2017_01_18',
        title: "I'm a CTO Bitch // Kanban from the startup warfare",
        date: new Date(2017, 0, 18), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/Nantes-Java-User-Group/events/236606281/',
        place: 'hub_creatic',
        subjects: [{
            title: "I'm a CTO Bitch",
            length: '0h40',
            time: '19h00',
            type: 'talk',
            speakers: ['youen_chene'],
            abstract: "<p>CTO, je suis un CTO, enfin! … Entre la course technologique, le juridique, la levée de fonds, le recrutement, le management, la gestion de la roadmap, les comités d’administration, les avant ventes et les 30 mn de code hebdomadaire, ce talk aidera les développeurs à mieux comprendre les CTOs et aux futurs CTOs à mieux appréhender ce nouveau role. </p>",
            docs: []
        },
        {
            title: "Kanban from the startup warfare",
            length: '0h30',
            time: '19h40',
            type: 'talk',
            speakers: ['youen_chene'],
            abstract: "<p>Nous verrons comment l'équipe produit de Saagie s'est organisé autour de l'approche Kanban pour répondre à ce système fortement contraint. Nous partagerons aussi les erreurs et les leçons apprises.</p>" +
                "<p>La présentation sera agrémentée d'un parallélisme avec un empire qui a eu une croissance de startup : l'empire mongol.</p>",
            docs: []
        }
        ],
        docs: [
            { name: 'slides', url: 'https://drive.google.com/open?id=0B4KTOFlyLP1xd1NtZzdTd0pDUTg', type: 'pdf' },
        ]
    },
    {
        id: '2016_10_14',
        title: "Soirée Quickies",
        date: new Date(2016, 11, 14), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/235607836/',
        place: 'insula',
        subjects: [{
            title: "Retour sur Devoxx Belgique 2016",
            length: '0h15',
            time: '19h00',
            type: 'quickie',
            speakers: ['yann_danthu'],
            abstract: "<p>" +
                "Devoxx.be c'est sur 5 jours dont 2 jours University et 3 jours de conférences.<br>" +
                "Je vous propose un petit retour sur mes 3 jours de conférence de Devoxx.be 2016, histoire de vous donnez envie d'aller y faire un tour ;)" +
                "</p>",
            docs: []
        }, {
            title: "Google Design Sprint : à quoi ça sert et pourquoi il faut essayer",
            length: '0h15',
            time: '19h15',
            type: 'quickie',
            speakers: ['matthieu_gioani'],
            abstract: "<p>" +
                "Le Google Design Sprint est une approche de prototypage d'un service ou d'un business en 5 jours qui permet d'avancer rapidement et de lever des hypothèses sur une idée.<br>" +
                "Venez découvrir ce qui fait le succès des Google Design Sprints !" +
                "</p>",
            docs: []
        }, {
            title: "DropWizard for the rest of us",
            length: '0h15',
            time: '19h30',
            type: 'quickie',
            speakers: ['adrien_pessu'],
            abstract: "<p>" +
                "Avec l'essor de l’architecture Microservice, DropWizard est un framework idéal pour développer des services REST.<br>" +
                "Je vous présenterai la simplicité de mise en place d'un microservice REST, ainsi que les possibilités du framework léger et robuste qu'est DropWizard." +
                "</p>",
            docs: [
                { name: 'slides', url: 'https://adrienpessu.github.io/prez/prez-DropWizard-quickie', type: 'html' },
                { name: 'projet', url: 'https://github.com/adrienpessu/dropwizard-demos-quickies', type: 'github' }
            ]
        }, {
            title: "2017: Java 9 et autres outils!",
            length: '0h15',
            time: '19h45',
            type: 'quickie',
            speakers: ['eric_bernardeau'],
            abstract: "<p>" +
                "En 2017, nous devrions avoir Java 9 qui va entraîner pas mal de changement dans nos outils.<br>" +
                "Ce quickie est l'occasion de présenter les modifications / roadmap de ces outils qui sortiront en 2017, comme par exemple spring 5." +
                "</p>",
            docs: []
        }, {
            title: "Webcomponents the state of the art",
            length: '0h15',
            time: '20h00',
            type: 'quickie',
            speakers: ['yvonnick_frin'],
            abstract: "<p>" +
                "Quoi les webcomponents !? Ce truc-là, on en entend parler depuis des années et chacun en a sa propre interprétation.<br>" +
                "Et puis, c’est pas vraiment réutilisable car il faut se traîner le framework associé à chaque fois !</p>" +
                "<p>La spécification W3C est passée en working draft, Chrome et Opéra la supporte déjà entièrement.<br>" +
                "Profitons-en pour faire un état de l’art sur ce concept de composant standard pour le Web ! " +
                "</p>",
            docs: []
        }, {
            title: "Keycloak, une solution simple pour sécuriser vos applications",
            length: '0h20',
            time: '20h15',
            type: 'quickie',
            speakers: ['cyril_vrillaud'],
            abstract: "<p>" +
                "Un quicky de 20mins sur Keycloak (http://www.keycloak.org) une solution de sécurisation des applications (front, API, fédération d’utilisateurs…), qui prendrait la forme d’une démo d'un POC illustrant un use case de Voyages-sncf.com." +
                "</p>",
            docs: []
        }],
        docs: [
        ]
    }, {
        id: '2016_11_30',
        title: "Démystifier ElasticSearch",
        date: new Date(2016, 10, 30), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/235607237',
        place: 'eartsup',
        subjects: [{
            title: 'Démystifier ElasticSearch',
            length: '1h30',
            time: '19h00',
            type: 'talk',
            speakers: ['maxime_odye'],
            abstract: "<p>ElasticSearch est une solution de moteur de recherche utilisée par beaucoup, comprise par peu. Surcouche de l'inévitable Apache Lucene, ElasticSearch en efface la complexité pour y ajouter des interfaces \"user-friendly\". ElasticSearch est une solution Out-of-the-box étonnante, s'adaptant à l'applicatif et aux besoins sans action de l'utilisateur. Force ou faiblesse ? " +
                "<br>Comprendre ce qu'il se passe sous le capot est essentiel pour réaliser des applications performantes et pertinentes. Analyse de texte, types de recherche et clusterisation. Autant d'outils qui méritent d'être appréhendés et compris. ElasticSearch est une brique importante de la stack ELK (ElasticSearch, Logstash, Kibana). Comprendre ce que l'on indexe dans notre moteur et comment nous l'interrogeons est nécessaire pour une restitution pertinente dans Kibana." +
                "</p>",
            docs: []
        }],
        docs: [
            { name: 'Affiche de la soirée', url: ' https://drive.google.com/uc?export=download&id=0B9mpGdJWcahkclNrMG5nRUxob0k', type: 'pdf' }
        ]
    }, {
        id: '2016_10_19',
        title: "Dev' Party 16",
        date: new Date(2016, 9, 19), //month begin at 0
        time: '19',
        register: 'http://www.meetup.com/fr-FR/GDG-Nantes/events/233996882/',
        place: 'epitech',
        subjects: [{
            title: 'Dev\' Party',
            length: '4h',
            time: '19h00',
            type: 'fun',
            abstract: '<p>Sous forme d\'un tournoi "Clash of Code" fourni par Codingame, vous coderez sur différentes épreuves : puzzle, rapidité, moins de ligne de code...' +
                '<br>Co-organisé avec le NantesJUG, cette soirée sera aggrémentée avec pizza, boissons et bien sûr des lots à gagner.' +
                ' <p>N\'oubliez pas votre laptop pour participer !</p>' +
                ' <p>INSCRIPTION sur le meetup du GDG > <a href="http://www.meetup.com/fr-FR/GDG-Nantes/events/233996882/" target="_blank">ICI</a></p>',
            docs: []
        }],
        docs: [
            //        {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B1KMBvIq23BMb1haZFFjSHdFOXc/view', type:'pdf'}
        ]
    }, {
        id: '2016_09_28',
        title: "Soirée Sonar",
        date: new Date(2016, 8, 28), //month begin at 0
        time: '19',
        register: 'https://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/233885243/',
        place: 'eartsup',
        subjects: [{
            title: 'SonarLint et SonarQube pour détecter les bugs, code smells et vulnérabilités',
            length: '2h',
            time: '19h00',
            type: 'talk',
            speakers: ['freddy_mallet'],
            abstract: '<p>Durant cette présentation, Freddy montrera comment totalement intégrer SonarLint et SonarQube dans une chaine de développement' +
                ' pour détecter en continue les problèmes de fiabilité, maintenabilité et sécurité.' +
                ' La présentation s\'appuiera sur des exemples de code source Java, JavaScript, C# et C. </p>',
            docs: []
        }],
        docs: [
            //        {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B1KMBvIq23BMb1haZFFjSHdFOXc/view', type:'pdf'}
        ]
    }, {
        id: '2016_06_23',
        title: "Meet & Greet",
        date: new Date(2016, 5, 23), //month begin at 0
        time: '19',
        register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/231793731/',
        place: 'insula',
        subjects: [{
            title: 'Cocktail, petits fours et bla bla bla :-)',
            length: '4h',
            time: '19h00',
            type: 'cocktail',
            intro: 'Petite soirée pour discuter, échanger et vous souhaitez de bonnes vacances avant la rentrée. ' +
                'Ce sera l\'occasion de parler technique, cuisine, vacances ou foot autour d\'un (ou plusieurs) verre et petits fours.',
            speakers: [],
            abstract: '<p>Petite soirée pour discuter, échanger et vous souhaitez de bonnes vacances avant la rentrée.</p>' +
                '<p>Ce sera l\'occasion de parler technique, cuisine, vacances ou foot autour d\'un (ou plusieurs) verre et petits fours.<br>' +
                'Merci à nos sponsors qui ont permis l\'organisation de cette soirée gratuite.</p>',
            docs: []
        }],
        docs: [
            { name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B1KMBvIq23BMb1haZFFjSHdFOXc/view', type: 'pdf' }
        ]
    }, {
        id: '2016_06_14',
        title: "GraphQL, HTTP2 et Kill mutants !",
        date: new Date(2016, 5, 14), //month begin at 0
        time: '19',
        register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/231323461/',
        place: 'eartsup',
        subjects: [{
            title: 'Fetch your data with GraphQL',
            length: '15min',
            time: '19h00',
            type: 'quickie',
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
            speakers: ['julien_landure'],
            abstract: '<p>HTTP1 est omniprésent en 2016 et HTTP2 est pourtant "sorti" le 15 mai 2015. Qu\'est-ce qu\'on y gagne, nous développeurs ? Les principes d\'optimisation Web seront-ils toujours d\'actualités ? Venez découvrir HTTP2, le futur protocole du Web !</p>',
            docs: [
                //	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube'},
                //	            {name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf'}
            ]
        }, {
            title: 'Kill mutants, save your code!',
            length: '30min',
            time: '20h00',
            type: 'quickie',
            speakers: ['eric_briand'],
            abstract: '<p>Les mutants attaquent et ils en veulent à votre code ! Ils exploitent chaque faille de votre couverture de code et l’expose au grand jour ! Mais grâce à PIT, vous allez pouvoir y remedier très vite et contrecarrer cette invasion ! Vos tests unitaires seront challengés et évoluerons pour devenir plus pertinents. Les mutants n’auront qu’à bien se tenir !</p>' +
                '<p>Lors de cette session, nous parlerons des principes du mutation testing et montrerons son application directe avec PIT, framework de mutation testing Java. Nous utiliserons des tests unitaires plus ou moins pertinents pour etudier la manière dont les mutations mettent en évidence et ciblent les carences des tests.</p>',
            docs: [
                //	            {name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube'},
                //	            {name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf'}
            ]
        }],
        docs: [
            //	    {name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B9mpGdJWcahkcEFocG02MTQ4UFU/view?usp=sharing', type: 'pdf'}
        ]
    }, {
        id: '2016_05_10',
        title: "DDD, P&A, ES, CQRS, ETC",
        date: new Date(2016, 4, 10), //month begin at 0
        time: '19',
        register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/230696969/',
        place: 'eartsup',
        subjects: [{
            title: 'DDD, P&A, ES, CQRS, ETC',
            length: '1h30',
            time: '19h00',
            type: 'talk',
            speakers: ['arnaud_bailly', 'cedric_pineau'],
            abstract: '<p>Parce que nous sommes tous des « fashion victims », parce que vous savez déjà que vous ne saurez pas résister aux sirènes des micro-services, parce vous peinez déjà à justifier l\'approche « full reactive » dont vous rêvez pour ce projet qui doit démarrer, nous vous proposons de prendre un peu de recul et de discuter, pour une fois, d\'architecture logicielle (et de moissonner au passage quelques nouvelles munitions pour votre prochaine « buzzword battle »).</p>' +
                '<p>Le « Domain-Driven Design » est un cadre conceptuel pour le développement de logiciels qui met l\'accent sur l\'expression directe des concepts du métier  sous forme de code, dans le but de diminuer la friction entre experts métiers et informaticiens.</p>' +
                '<p>L\'architecture « Ports And Adapters » est une démarche de structuration du code qui vise à isoler la logique métier des détails techniques de son implémentation.</p>' +
                '<p>« Event Sourcing » désigne un principe d\'architecture, décrit par Martin Fowler, qui met au centre du monde les événements transformant l\'état d\'un système. L\'état n\'est alors rien d\'autre que la suite des événements l\'ayant produit à partir d\'un état initial connu et précisément défini.</p>' +
                '<p>Le principe de « Command Query Responsibility Separation » ou CQRS est un prolongement naturel de l\'Event Sourcing où l\'on introduit une séparation complète des schémas de données en écriture et en lecture.</p>' +
                '<p>Cette présentation est un retour sur nos expériences dans la mise en œuvre de systèmes logiciels basés sur ces démarches de conception et d\'architecture. Nous voulons montrer quels sont les principes de ces architectures, quels en sont les avantages tant techniques que métiers dans des cas d\'utilisation concrets et comment les mettre en œuvre quels que soient les environnements techniques. </p>',
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=bCMPs9xXrZM', type: 'youtube' },
                { name: 'Slides de la présentation', url: 'https://drive.google.com/file/d/0B0aGd3KiW4gVNElNTDczZ0NTYjg/view?usp=sharing', type: 'pdf' }
            ]
        }],
        docs: [
            { name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B9mpGdJWcahkcEFocG02MTQ4UFU/view?usp=sharing', type: 'pdf' }
        ]
    }, {
        id: '2016_04_12',
        title: "Code in the cloud with Eclipse Che & Kill the REST with the Falcor",
        date: new Date(2016, 3, 12), //month begin at 0
        time: '19',
        register: 'http://www.meetup.com/fr-FR/Nantes-Java-User-Group/events/229939263/',
        place: 'hub_creatic',
        subjects: [{
            title: 'Code in the cloud with Eclipse Che: the Next-Gen Eclipse IDE',
            length: '45min',
            time: '19h00',
            type: 'talk',
            speakers: ['stevan_le_meur', 'florent_benoit'],
            abstract: "<p>Cette session présentera les nouveautés du projet Eclipse Che et la façon dont les workspaces ont été redéfinis afin d'être portables et facilement mis à la disposition des développeurs.</p>" +
                "<p>La première démo, montrera comment créer un workspace basé sur un ensemble de machines Docker, comment l’utiliser pour développer des applications Java ainsi que quelques fonctionnalités de l’IDE (debugger, refactoring, ...).</p>" +
                "<p>Nous vous montrerons également comment nous utilisons Che pour développer Che et vous ferons notre retour d\'expérience lorsqu\'il est intégré à des outils tels que JIRA, Jenkins et GitHub.</p>",
            docs: [
            ]
        }, {
            title: 'Kill all the REST with the Falcor',
            length: '45min',
            time: '19h45',
            type: 'talk',
            speakers: ['hugo_wood'],
            abstract: "<p>Tout comme Facebook, Netflix a présenté sa propre technologie qui pourrait sonner le glas des API REST, Falcor.<br>" +
                "Elle déclare avoir réduit la taille de son code serveur de 90% grâce à un unique end-point qui sert toutes les données. Deux entreprises de cette envergure qui implémentent ainsi des concepts très proches, cela mérite que l'on s'y intéresse.</p>" +
                "<p>Après vous avoir expliqué le pourquoi et le comment, je vous propose que l'on explore ce que l'on peut construire avec Falcor.<br>" +
                "Et si on développait une API pour développer des API ? (Leonardo Dicaprio ne fera pas d'apparition lors de cette conférence.)</p>",
            docs: [
            ]
        }],
        docs: [
            { name: 'Affiche de la soirée', url: 'https://drive.google.com/file/d/0B9mpGdJWcahkWkhfdi1oYkJrTWs/view?usp=sharing', type: 'pdf' }
        ]
    }, {
        id: '2016_03_17',
        title: "Soirée Sécurité des applications Java",
        date: new Date(2016, 2, 17), //month begin at 0
        time: '19',
        register: 'http://guestli.st/409116',
        place: 'eartsup',
        subjects: [{
            title: 'REX: Audit de sécurité d\'applications Java',
            length: '20min',
            time: '19h00',
            type: 'talk',
            speakers: ['marc_lebrun'],
            abstract: '<p>Retour d\'expérience, du point du vue du consultant, sur les audits de sécurité portant sur des applications Java:</p>' +
                '<ul>' +
                '<li>Types d\'applications rencontrées,</li>' +
                '<li>Méthodologie,</li>' +
                '<li>Exemples de failles.</li>' +
                '</ul>',
            docs: [
            ]
        }, {
            title: 'Secure Coding Live !',
            length: '1h',
            time: '19h30',
            type: 'talk',
            speakers: ['sebastien_gioria'],
            abstract: '<p>Lors de cette session nous prendrons une application de type shopping Card et appliquerons les bonnes pratiques de secure Coding Java dessus pour la rendre plus resistante aux différentes attaques Web. </p>',
            docs: [
            ]
        }],
        docs: [
            { name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=grqesqXEAFo', type: 'youtube' }
        ]
    }, {
        id: '2016_03_02',
        title: "Vert.X",
        date: new Date(2016, 2, 2), //month begin at 0
        time: '19',
        register: 'http://guestli.st/404760',
        place: 'eartsup',
        subjects: [{
            title: "Vert.x - Sprechen vous reactive fanta'stico ?",
            length: '1h30 min',
            time: '19h',
            type: 'talk',
            speakers: ['clement_escoffier'],
            abstract: "<p>Vous devez bâtir une application qui passe à l’échelle, à base de micro-services ou plus classique, tolérante aux pannes, mais vous ne savez pas par ou commencer ? La seule chose dont vous avez besoin est un fichier jar et d’une machine virtuelle java.</p>" +
                "<p>Vert.x 3 est une librairie pour créer des systèmes réactifs s’exécutant sur une machine virtuelle Java. Vert.x 3 offre une nouvelle manière d’implémenter des applications concurrentes,scalables et tolérantes aux fautes. Avec vert.x 3 vous pouvez développer des applications « micro-services » distribuées en Java, mais aussi en JavaScript, Groovy, Ruby et Ceylon.  Vert.x 3 permet également d’intégrer des applications \"non-vert.x\" tel que node.js, .NET ou C.</p>" +
                "<p>Cette présentation introduit les concepts clés de Vert.x and comment vous pouvez utiliser Vert.x dans votre prochain projet. Cette session explique les systèmes réactifs, la programmation réactive (attention c’est pas la meme chose), comment le modèle de programmation asynchrone proposé par Vert.x vous permet de construire facilement des applications concurrentes et pourquoi c’est fait ainsi. Nous verrons également le passage a l’échelle, la tolérance aux pannes, les perfs, le monitoring et les composants clés de l’éco-système Vert.x…</p>",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=KeZAf0fIOGA', type: 'youtube' }
            ]
        }],
    }, {
        id: '2016_02_25',
        title: "Infrastructure automation & React",
        date: new Date(2016, 1, 25), //month begin at 0
        time: '19',
        register: 'http://guestli.st/404751',
        place: 'hub_creatic',
        subjects: [{
            title: "Why do you need to automate your infrastructure?",
            length: '40 min',
            time: '19h',
            type: 'quickie',
            speakers: ['guillaume_blondeau'],
            abstract: '<p>Dans cette présentation je ferai un retour d\'expérience sur la gestion d\'infrastructure.</p>' +
                '<p>Nous verrons comment nous sommes passés d\'une application hébergée sur Amazon Web Services (AWS) et gérée "à la main" à une solution complétement automatisée, du provisionnement au déploiement.</p>' +
                '<p>Ce sera l\'occasion de parler des problématiques, des solutions et de présenter <a href="http://www.ansible.com/" target="_blank">Ansible</a>, l\'outil d\'automatisation que nous avons utilisé.</p>',
            docs: [
            ]
        }, {
            title: "Let's React",
            length: '1h20',
            time: '19h40',
            type: 'talk',
            speakers: ['mathieu_ancelin'],
            abstract: '<p>React est une librairie JavaScript développée par Facebook pour créer facilement des interfaces graphiques. La particularité de React vient de son modèle de programmation orienté composant et de sa façon de décrire les vues de ces composants. Contrairement à d\'autres librairies, ici pas de templates et de pseudo code, React permet d\'utiliser la pleine expressivité de JavaScript et de bénéficier de tout l\'écosystème Javascript et de toutes les features du langage, notamment tous les goodies apportés par ES2015.</p>' +
                '<p>Durant cette session orientée live coding, nous verrons comment utiliser React pour créer des composants graphiques dans le cadre d\'applications web et d\'applications mobiles natives grâce à React Native.</p>',
            docs: [
            ]
        }],
        docs: [
            { name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=QZOtyKtp5Vg', type: 'youtube' }
        ]
    }, {
        id: '2016_01_19',
        title: "Orchestrating a Continuous Delivery Pipeline with Jenkins and Docker",
        date: new Date(2016, 0, 19), //month begin at 0
        time: '19',
        register: 'http://guestli.st/401376',
        place: 'hub_creatic',
        subjects: [{
            title: "What\'s new in Java 9",
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['laurent_maillet'],
            abstract: "Java 8 est sorti depuis près de deux ans. " +
                "Alors qu\'Oracle avait avancé un rythme de release de version majeurs tous les deux ans, qu\'en est-il réellement ? " +
                "Java 9 s\'annonce-t-il aussi riche que l\'a pu être son prédécesseur ? Je vous propose un tour d'horizon de l\'avancée de Java 9 et de ces nouveautés.",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=XX2OLBdyJ1s', type: 'youtube' }
            ]
        }, {
            title: "Orchestrating a Continuous Delivery Pipeline with Jenkins and Docker",
            length: '1h',
            time: '19h30',
            type: 'talk',
            speakers: ['nicolas_deloof'],
            abstract: "<p>le \"Continuous Delivery\" est un sacré buzz word, et \"Docker\" encore plus, mais les blog que j'ai pu lire sur sujet ne proposent qu'un pipeline naif et minimaliste : compile, test, push docker image, et voilà.</p>" +
                "<p>En 2015 Jenkins adresse clairement plus que de l'Integration Continue, et avec le support récent du workflow plugin nous pouvons orchestrer avec un DSL des pipelines de grande complexité. L'integration avec Docker lui donne encore plus de puissance.</p>" +
                "<p>Pendant cette session, je vais construire un pipeline de CD from scratch pour montrer l'utilisation du workflow et sa flexibilité, ainsi que le support de Docker.</p>",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=o26DbcN11Hw', type: 'youtube' }
            ]
        }],
    }, {
        id: '2015_12_15',
        title: "Livrer chaque jour ce qui est prêt & Continuous Merge avec Git",
        date: new Date(2015, 11, 15), //month begin at 0
        time: '19',
        register: 'http://guestli.st/398028',
        place: 'eartsup',
        subjects: [{
            title: "Livrer chaque jour ce qui est prêt",
            length: '1h',
            time: '19h',
            type: 'talk',
            speakers: ['dimitri_baeli', 'geoffrey_berard'],
            abstract: "<p>C\'est une aventure très enrichissante de passer d\'une organisation de type \"éditeur logiciel\" (Cycle Plan/Dev/Recette/Prod) " +
                "avec une release par mois à une organisation non moins solide de type \"Continuous Delivery\" avec une mise en production par jour de " +
                "\"ce qui est prêt\". C\'est pourquoi nous vous proposons de découvrir les moyens techniques et organisationnels en pratique chez LesFurets.com " +
                "pour garantir la qualité tout en diminuant le \"Time To Market\" : déploiement par les devs, travail en feature branches avec un merge continu, " +
                "itérations avec le business, monitoring de prod pour tous, ...</p>" +
                "<p>Organisation du travail, principes directeurs et pistes à suivre.</p>",
            docs: [
            ]
        }, {
            title: "Continuous Merge avec Git",
            length: '1h',
            time: '20h',
            type: 'talk',
            speakers: ['dimitri_baeli', 'geoffrey_berard'],
            abstract: "<p>Partage du fonctionnement de l\'outillage Git chez LesFurets.com. Le \"merge continu\" étend notre intégration continue pour nous permettre" +
                " de gérer au quotidien plus d’une cinquantaine de branches de développement. Détection des conflits, intégration, qualité... " +
                "Venez découvrir comment nous livrons 5 à 20 branches de code en production chaque jour !</p>" +
                "<p>Présentation beaucoup plus détaillée de notre organisation du code en GIT (feature branching & merge continu)</p>",
            docs: [
            ]
        }],
        docs: [
            { name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=V37UJ7_V22s', type: 'youtube' },
        ]
    }, {
        id: '2015_11_23',
        title: "REX docker puis Monoliths et Microservices",
        date: new Date(2015, 10, 23), //month begin at 0
        time: '19',
        register: 'http://guestli.st/350382',
        place: 'eartsup',
        subjects: [{
            title: "REX docker sur la mise d'une forge logicielle et ALM",
            length: '20 min',
            time: '19h',
            type: 'quickie',
            speakers: ['guillaume_membre'],
            abstract: "<p>Un petit REX sur la mise en place de Docker pour construire une plateforme de forge logicielle et ALM.</p>" +
                "<p>L'idée n'est pas de re-présenter Docker mais plutot ce qui a bien " +
                "marché et moins bien sur le déploiement d'une forge logicielle que " +
                "j'ai mis en place pour un de mes clients, les difficultés à créér des " +
                "images, la facilité à customiser les existantes, le temps passé par " +
                "rapport à l'installation directe sur la machine hote...</p>",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=YzfZsEAgNHc', type: 'youtube' }
            ]
        }, {
            title: "Monoliths et Microservices",
            length: '1h30 min',
            time: '19h30',
            type: 'talk',
            speakers: ['steve_sfartz'],
            abstract: "<p>Monoliths et Microservices : buzz words 2015, il est temps de vous faire un avis sur le sujet.</p>" +
                "<p>Venez découvrir les microservices, et les outils disponibles pour démarrer. " +
                " Illustrations avec la stack Netflix, quelques retours d'expérience, et une démo de la Gateway Programmatique Kong.</p>",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=5LnL1HYmLwY', type: 'youtube' }
            ]
        }],
    }, {
        id: '2015_10_13',
        title: "Soirée Reconnaissance d'écriture et GitHub",
        date: new Date(2015, 9, 13), //month begin at 0
        time: '19',
        register: 'http://guestli.st/346224',
        place: 'eartsup',
        subjects: [{
            title: "Ajoutez de la reconnaissance d'écriture à votre webapp grâce à Polymer",
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['pierre_alban_dewitte'],
            abstract: "<p>MyScript construit une technologie de reconnaissance d'écriture depuis plus de 15 ans. Nous avons récemment ajouté à notre portfolio un composant Polymer permettant d'intégrer très facilement de la reconnaissance d'écriture dans votre webapp.</p>" +
                "<p>Ce quickie sera d'abord l’occasion de comprendre comment fonctionne la reconnaissance d'écriture grâce au machine learning avec une illustration au travers de plusieurs démonstrations.</p>" +
                "<p>Ensuite nous expliquerons l'anatomie du composant Polymer de reconnaissance puis lors d'une séance de codage en direct nous intégrerons de la reconnaissance d'expression mathématique dans une webapp.<br><br></p>" +
                "<p>Venez avec votre téléphone, tablette ou ordinateur portable pour observer Polymer en action.</p>",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=gUfYJ5CgCA4', type: 'youtube' }
            ]
        }, {
            title: "Stratégies de collaboration avec Git & GitHub",
            length: '1h30',
            time: '19h30',
            type: 'talk',
            speakers: ['alain_helaili'],
            abstract: "<p>De nombreuses équipes se contentent de remplacer leur gestionnaire de code source par Git sans vraiment revoir leur mode de collaboration ni exploiter ses possibilités.</p>" +
                "<p>Il n'y a pas mieux pour se récupérer les contraintes du changement et aucun de ses bénéfices. L'objectif de cette présentation est de passer en revue différents workflows basés sur Git et GitHub, en y incluant des stratégies de code review et des exemples d'outils tiers.</p>" +
                "<p>Enfin, on verra comment le workflow humain peut se prolonger par un déploiement automatisé bien que pas forcément continu.</p>",
            docs: [
                { name: 'Vidéo de la présentation', url: 'https://www.youtube.com/watch?v=CUsZYzvrKog', type: 'youtube' }
            ]
        }],
    }, {
        id: '2015_09_24',
        title: "Restitution du Hackathon des communautés nantaises de développeurs",
        date: new Date(2015, 8, 24), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/341355',
        place: 'eartsup',
        subjects: [{
            title: "Restitution du Hackathon des communautés nantaises de développeurs",
            length: '2h',
            time: '19h',
            type: 'talk',
            speakers: [],
            abstract: "<p>Le NantesJUG organise un événement dans le cadre de la Digital Week 2015, le <a href=\"http://www.nantesdigitalweek.com/evenement-2015/hackathon-des-communautes-nantaises-de-developpeurs/\">\"Hackathon des communautés nantaises de développeurs\".</a></p>" +
                "<p>Ce hackathon a pour objectif de réunir les différentes communautés de développeurs nantais autour d'un sujet à base d'Open Data de la ville de Nantes. Chaque communauté doit créer une équipe afin de participer.</p>" +
                "<p>Le sujet sera communiqué à chaque équipe au début de la Digital Week, le 17/09. Elles auront alors une semaine pour relever le défi.</p>" +
                "<p>Lors de la soirée, un jury, composé de membres des différentes communautés, désignera l'équipe gagnante.</p>",
            docs: [
            ]
        }],
    }, {
        id: '2015_06_22',
        title: "Soirée sur l'importance de l'UX & sur Meteor.js",
        date: new Date(2015, 5, 22), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/333678',
        place: 'hub_creatic',
        subjects: [{
            title: "L'expérience utilisateur est importante pour nous",
            length: '45 min',
            time: '19h',
            type: 'talk',
            speakers: ['florence_herrou'],
            abstract: "<p>L'expérience utilisateur est une discipline peu connue et encore très négligée en France, en particulier lors de la conception d'applications métier. " +
                "Pourtant, une bonne ergonomie améliore la productivité et facilite l'adoption par les usagers. Dans beaucoup de projets, en particulier en mode agile, " +
                "le développeur participe à la définition de l'interface et des fonctionnalités.</p>" +
                "<p>Cette conférence le sensibilisera à l'importance de l'expérience utilisateur et lui donnera quelques clés pour savoir comment l'améliorer.</p>",
            docs: [
            ]
        }, {
            title: "Full Stack Reactivity avec Meteor.js",
            length: '45 min',
            time: '19h45',
            type: 'talk',
            speakers: ['anthonny_querouil'],
            abstract: "<p>Vous souhaitez créer des applications réactives et virer vos spinners ? Vous cherchez un environnement de développement javascript efficace ?</p>" +
                "<p>Meteor.js est fait pour vous !</p>" +
                "<p>Je vous présenterai cet outil et ce qui gravite autour.</p>",
            docs: [{
                name: 'Les slides',
                url: 'http://anthonny.github.io/decks/full-stack-reactivity-avec-meteorjs/',
                type: 'html'
            }, {
                name: 'Les sources de Tweetiments',
                url: 'https://github.com/anthonny/tweetiments',
                type: 'github'
            }]
        }],
    }, {
        id: '2015_05_11',
        title: 'Soirée Quickies',
        date: new Date(2015, 4, 11), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/324039',
        place: 'eartsup',
        subjects: [{
            title: "Java 8 en pratique",
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['gabriel_landais'],
            abstract: "<p>Quelques exemples de réécriture de code legacy avec les nouvelles API Java 8.</p>",
        },
        {
            title: 'Gitflow In Action',
            length: '30 min',
            time: '19h30',
            type: 'quickie',
            speakers: ['cecilia_bossard'],
            abstract: "<p>Vous cherchez un modèle de gestion des branches pour Git facile et pratique à utiliser ? Vous souhaitez avoir un workflow simple et agile pour gérer vos versions ?</p>" +
                "<p>Venez jeter un oeil à GitFlow !</p>" +
                "<p>Je vous présenterai ce workflow qui nous a permis de mieux organiser nos versions et de remplacer SVN par Git sans regret.</p>",
            docs: [
                { name: 'Slides', url: 'http://www.slideshare.net/cecilia_bossard/git-flow-in-action', type: 'slideshare' }
            ]
        },
        {
            title: 'Tips and tricks for clean relational db schemas',
            length: '45 min',
            time: '20h',
            type: 'quickie',
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
        }
        ],
        docs: [
            { name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=i4NcsrtZWOA', type: 'youtube' },
        ]
    }, {
        id: '2015_04_16',
        title: 'Soirée Invoke Dynamite / BDD',
        date: new Date(2015, 3, 16), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/317631',
        place: 'netapsys',
        subjects: [{
            title: "BDD & Cucumber: Feature first",
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['renan_michaud'],
            abstract: "<p>Imaginez un projet d’envergure mené en SCRUM avec un backlog constitué d’une multitude d’US plus ou moins organisées. Pensez-vous que ce Backlog ayant l’emprunte forte de la vie courante du BUILD puisse constituer votre référentiel fonctionnel ?" +
                " Non. L'approche BDD permet d'établir ce référentiel et d'en automatiser la vérification." +
                " Avec Cucumber, je vous propose de voir comment effectuer cette automatisation autant sur les web services que sur les IHM du poste de développement à la production !.</p>",
        },
        {
            title: 'Let\'s invoke dynamite',
            length: '1h30',
            time: '19h30',
            type: 'talk',
            speakers: ['antoine_sabot_durand'],
            abstract: "<p>Si l'arrivée d'InvokeDynamic dans Java 7 a marqué un tournant pour la création de langages basés sur la JVM, cette fonctionnalité est restée confidentielle dans l'univers des développeurs de frameworks Java et de Java EE.</p>" +
                "<p>Dans cette présentation nous reviendrons sur les particularités d'InvokeDynamic et sur sa mise en oeuvre en Java.</p>" +
                "<p>Ensuite nous verrons comment remplacer le mécanisme de Proxy utilisé dans CDI par des appels InvokeDynamic.</p>" +
                "<p>Enfin nous expliquerons comment la généralisation d'invokeDynamic pourrait marquer la mort des conteneurs et la fin de Java EE tel que nous le connaissons.</p>",
        }
        ],
    }, {
        id: '2015_03_11',
        title: 'Soirée Cassandra / GAE',
        date: new Date(2015, 2, 11), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/312915',
        place: 'eartsup',
        subjects: [{
            title: "Google App Engine, déployer plus vite que son ombre !",
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['remi_picard'],
            abstract: "<p>\"Cloud\" par çi, \"Solutions PaaS\" par là. Mais quel est donc le sens de ces termes si présents ces dernières années ? Pourquoi tant de succès ? Et le développeur dans tout ça ?</p>" +
                "<p>Si vous vous posez toutes ces questions, venez assister à une présentation de la solution Google App Engine. Celle-ci sera illustrée par une démonstration du déploiement sur le Cloud d'un site Java JEE.</p>",
        },
        {
            title: 'Introduction to Cassandra',
            length: '1h00',
            time: '19h30',
            type: 'talk',
            speakers: ['duyhai_doan'],
            abstract: "<p>In this session, we’ll introduce Apache Cassandra, highlight its architecture, consistency and replication model to explain how the database can provide linear scalability, high availability and consistent performance.</p>" +
                "<p>There will be a quick overview of the Cassandra data model, query language and tooling for developers.</p>" +
                "<p>Sujet en français</p>",
            docs: [
                { name: 'Les slides', url: 'http://www.slideshare.net/doanduyhai/cassandra-introduction-nantesjug', type: 'slideshare' }
            ]
        },
        {
            title: 'Cassandra nice use-cases and worst anti-patterns seen in production',
            length: '30 min',
            time: '20h30',
            type: 'talk',
            speakers: ['duyhai_doan'],
            abstract: "<p>For this session, we'll show some best practices, dig into some nice use-cases seen in production but also the worst anti-patterns to avoid. There will be an interactive demo.</p>" +
                "<p>Sujet en français</p>",
            docs: [
                { name: 'Les slides sur Killrchat', url: 'http://fr.slideshare.net/doanduyhai/killrchat-presentation', type: 'slideshare' }
            ]
        }
        ],
        docs: [
            { name: 'Slides d\'intro', url: 'https://docs.google.com/presentation/d/1bOwzcFsAskoVdozoo-ClgLSxK4IDJhlUpPz_hSTl2_Y/edit?usp=sharing', type: 'drive' },
            { name: 'Restlet', url: 'https://docs.google.com/presentation/d/1PGf2fQMqm4G8ozkW8uLtaZToUM216nK7k0aC6_8_fYw/edit?usp=sharing', type: 'drive' },
            { name: 'Zenika', url: 'https://docs.google.com/presentation/d/1ndb-d18uvE6Z5I_OrwzTcXCSTUrPTIC9sqNMuEPrSsM/edit?usp=sharing', type: 'drive' }
        ]
    }, {
        id: '2015_02_16',
        title: 'Soirée Search Lucene/Solr - Rex Chef',
        date: new Date(2015, 1, 16), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/310620',
        place: 'eartsup',
        subjects: [{
            title: "Chef, oui Chef !",
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['francois_kha'],
            abstract: "Nous allons vous faire un petit retour d'expérience sur la mise en place de Chef à CBP pour livrer plus fréquemment nos applications Java/JEE. Qu'est-ce que Chef ? Pourquoi l'utiliser ? Comment ? Pour quels usages ?<br/> Deux développeurs, un adminsys pour vous répondre." +
                "<p>par François Kha <a href='http://twitter.com/fanchok'>@fanchok</a> - Sébastien Errien <a href='http://twitter.com/SebErrien'>@SebErrien</a> - Bastien Jové <a href='http://twitter.com/Tensibai'>@Tensibai</a></p>",
            docs: [
                { name: 'Les slides', url: 'http://fr.slideshare.net/francoiskha/20150216-quickie-chef-au-jug-nantes', type: 'slideshare' }
            ]
        },
        {
            title: 'Soirée Search Lucene/Solr',
            length: '1h30',
            time: '19h30',
            type: 'talk',
            speakers: ['olivier_tavard'],
            abstract: "<p>Découvrez les outils open source de Search qui ont déjà convaincu de nombreuses entreprises, et qui est proposé par la fondation Apache: Lucene / Solr.</p>" +
                "<p>Dans la première partie de soirée, histoire de savoir de quoi on parle, Olivier vous présentera les projets Lucene et Solr, leurs composants, leur architecture, leurs features, et on saupoudrera tout ça de scalabilité avec SolrCloud (avec démo).</p>" +
                "<p>En deuxième partie de soirée, Olivier vous présentera l’écosystème (ou du moins une partie) qui gravite autour de Lucene /Solr: ManifoldCF qui permet de gérer les connexions aux sources de données (avec démo d’indexation de contenu et recherche en live grâce à Datafari) et Hadoop, car il faut bien parler de Big Data, et parce que Solr devient un des outils de référence pour faire du search sur Hadoop.</p>" +
                "Avec tout ça vous aurez dans vos bagages de quoi gérer des Big projets avec du Big search dedans.</p>",
            docs: [{
                name: 'Les slides',
                url: 'http://fr.slideshare.net/francelabs/presentation-lucene-solr-datafari-nantes-jug',
                type: 'slideshare'
            }]
        }
        ],
        docs: [
            { name: 'Vidéo de la soirée', url: 'https://www.youtube.com/watch?v=RpAGb8fO97k', type: 'youtube' }
        ]
    },
    {
        id: '2015_01_27',
        title: 'JavaFX.forReal() - MongoDB Pub/Sub',
        date: new Date(2015, 0, 27), //month begin at 0
        time: '19',
        register: 'http://guestli.st/306156',
        place: 'netapsys',
        subjects: [{
            title: 'Pub/Sub avec MongoDB',
            length: '30 min',
            time: '19h',
            type: 'quickie',
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
        date: new Date(2014, 11, 15), //month begin at 0
        time: '19',
        register: 'http://guestli.st/301611',
        place: 'eartsup',
        subjects: [{
            title: 'Le BigData NoBullShit: Cas d’utilisation chez Dictanova et Cityzen Data',
            length: '2 h',
            time: '19h',
            type: 'talk',
            speakers: ['damien_raude_morvan', 'david_morin'],
            abstract: "<p>Il y a 2 ans, la mode était de faire du Big Data, désormais il faut faire du Smart Data... Mais concrètement, à quoi est-ce que cela peut bien servir ?</p>" +
                "<p>A travers les expériences de deux entreprises, Dictanova (Damien Raude-Morvan) et de Cityzen Data (David Morin), nous essayerons de vous présenter des exemples concrets d’utilisations du Big Data et répondre par exemple aux questions suivantes :</p>" +
                "<ul><li>Quelle infrastructure mettre en place pour gérer de gros volumes de données ? Quels sont les écueils à éviter ? Les offres de type XaaS sont-elles pertinentes ?</li>" +
                "<li>Comment passer du simple &quot;hello world&quot; en Map/Reduce à un véritable traitement métier ? Comme modéliser un enchaînement de jobs avec Oozie ? Comme obtenir des primitives de plus haut niveau que Map/Reduce ? Cascading, Spark, Tez ?</li>" +
                "<li>Une fois les données stockées, comment effectuer de l’analyse sur ces dernières ? Comment utiliser des langages de requêtage comme Pig ?</li>" +
                "<li>Comment gérer le changement dans son modèle de données ? Modèle de données avec Avro ? Avec Parquet ou encore Thrift ?</li>" +
                "<li>Comment assurer la supervision de jobs en production sur un cluster Hadoop ?</li></ul>",
        }]
    }, {
        id: '2014_11_17',
        title: 'Stresser vos applications web avec Gatling',
        date: new Date(2014, 10, 17), //month begin at 0
        time: '19',
        register: 'http://guestli.st/296148',
        place: 'epsi',
        subjects: [{
            title: 'Les backstages de Devfest 2014',
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['jean-francois-garreau'],
        },
        {
            title: 'Stresser vos applications web avec Gatling',
            length: '1 h 30',
            time: '19h30',
            type: 'talk',
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
        date: new Date(2014, 9, 27), //month begin at 0
        time: '19',
        register: 'http://guestli.st/293664',
        place: 'cantine_juton',
        subjects: [{
            title: 'Une fille dans mon équipe',
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['cecilia_bossard', 'jean_palies'],
            abstract: '<p>Actuellement, 20% des postes dans le domaine de l\'IT sont occupés par des femmes, et la tendance ne va pas en s\'arrangeant. Pourquoi ce désintérêt ?</p>' +
                '<p>Le groupe Women In Technology vous propose de revenir sur ce sujet et de présenter son approche pour essayer d’inverser la tendance.</p>',
        },
        {
            title: 'Java Embarqué / Internet des Objects avec IS2T',
            length: '1 h 30',
            time: '19h30',
            type: 'talk',
            abstract: '<p>A travers une présentation de la plateforme d\'exécution embarquée MicroEJ, la société IS2T parlera du Java dans le monde des objets intelligents ou comment l\'usage de Java permet d\'accélérer la conception d\'un logiciel dans l\'embarqué contraint et d\'en réduire les coûts.  </p>' +
                '<p></p>',
            speakers: ['fred_rivard'],
        }
        ]
    }, {
        id: '2014_09_29',
        title: 'Metrics & Docker  ',
        date: new Date(2014, 8, 29), //month begin at 0
        time: '19',
        register: 'http://guestli.st/286752',
        place: 'eartsup',
        subjects: [{
            title: 'Codehale Metrics',
            length: '30 min',
            time: '19h',
            type: 'quickie',
            speakers: ['damien_raude_morvan'],
            abstract: '<p>En 2014, un développeur Java est plutôt habitué à évaluer la "qualité" de son code - avec SonarQube ou des processus de peer review.</p>' +
                '<p>Mais lorsqu\'on lui parle de la "production", il est souvent désarmé : les métriques qu\'on lui propose ne correspondent à rien de connu et il n\'a pas assez d\'informations pour guider ses améliorations.</p>' +
                '<p>Dans ce quicky, j’essaierais de vous présenter la solution que j\'utilise : le framework Codehale Metrics.</p>' +
                '<p>Ce dernier vise à permettre au développeur de créer des indicateurs techniques ou fonctionnels. Il propose de nombreux choix d\'intégration avec vos frameworks préférés et permet un export des métriques dans de nombreux formats.</p>',
            docs: [
                { name: 'Support de présentation', url: 'http://www.drazzib.com/projects/docs/metrics/#/', type: 'html' }
            ]
        },
        {
            title: 'Lucy in the sky with docker',
            length: '1 h 30',
            time: '19h30',
            type: 'talk',
            abstract: '<p>On parle beaucoup de Docker en ce moment. Je vais tenter de vous expliquer comment fonctionne Docker comme j’aurais aimé qu’on me l’explique.</p>' +
                '<p>Nous allons apprendre à prendre en main Docker pour construire une application web Java 8 et la déployer sur la Google Cloud Platform.</p>',
            speakers: ['david_gageot'],
        }
        ]
    }, {
        id: '2014_06_30',
        title: 'Flyway & Patterns de cache  ',
        date: new Date(2014, 5, 30), //month begin at 0
        time: '20',
        old_time: '19',
        register: 'http://guestli.st/265998',
        place: 'eartsup',
        subjects: [{
            title: 'France - Nigéria',
            length: '90 min',
            type: 'foot',
            time: '18h',
            speakers: ['didier_deschamps'],
            abstract: '<p>Huitième de finale de la coupe du monde.</p> '
        },
        {
            title: 'Comment planner avec Flyway',
            length: '30 min',
            time: '20h',
            type: 'quickie',
            speakers: ['ludovic_praud'],
            abstract: '<p>Pour avoir l\'esprit tranquille avec vos migrations SQL en DEV ou en PROD, voici un petit retour d\'expérience de 2 ans d\'utilisation quotidienne de Flyway.</p> ',
            docs: [
                { name: 'Support de présentation', url: 'https://drive.google.com/file/d/0B41V8oJXwyYhb1pTeHpsQzNsRmhYd3ZPMEhsVHduTm9tSXBr/edit?usp=sharing', type: 'drive' }
            ]
        },
        {
            title: 'Les Patterns de Cache',
            length: '1 h 30',
            time: '20h30',
            type: 'talk',
            abstract: '<p>Comment diminuer le temps de traitement d’un batch ? Le temps d’exécution d\'une requête ? Le cache est un des outils du développeur pour résoudre ses problématiques quotidiennes et les concepts qui gravitent autour sont nombreux.</p>' +
                '<p>Si les mots Cache Aside, Write-Behind, Read-Through ne vous sont pas familiers, cela fait pourtant parti des architectures qu’il est facile à mettre en place et qui dans certains contextes peuvent diminuer de manière drastique la durée d’un batch ou d’une requête.</p>' +
                '<p>Nous aborderons également les différents moyens de scaler horizontalement et verticalement le cache (réplication, miroir, partitionnement) en nous appuyant sur différentes librairies existantes (GemFire, Coherence, Terracotta, Ehcache, Infinispan, Hazelcast) mais également NoSQL et plus généralement les In Memory Data Grid (IMDG)</p>',
            speakers: ['mathilde_lemee'],
        }
        ]
    }, {
        id: '2014_05_20',
        title: 'Devoxx Fr & Gradle',
        date: new Date(2014, 4, 20), //month begin at 0
        time: '19',
        register: 'http://guestli.st/254883',
        place: 'epsi',
        subjects: [{
            title: 'Devoxx France 2014',
            length: '30 min',
            type: 'quickie',
            speakers: ['thibaud_raison', 'pierre_cosson'],
            abstract: '<p>Compte-rendu et tour d\'horizon de l\'édition 2014 de Devoxx France.</p> ',
            docs: [{
                name: 'Support de présentation',
                url: 'https://drive.google.com/file/d/0BzLO1XLmywLJS1Q4alIxeFRxTTA/edit?usp=sharing',
                type: 'drive'
            }, {
                name: 'Listing ressources Devoxx 2014',
                url: 'https://drive.google.com/file/d/0BzLO1XLmywLJbWczVU55RGFFMEE/edit?usp=sharing',
                type: 'drive'
            }]
        },
        {
            title: 'Gradle ne fait pas que remplacer Maven',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Il faut que vous le sachiez, Gradle ne fait pas que remplacer Maven. Il répond à d\'autres problématiques : conventions d\'entreprise, intégration continue, DevOps, parallélisme, gestion avancée des dépendances, ' +
                'variantes de build déclarative, compilation incrémentale, projets polyglottes, artéfacts multiples...</p>' +
                '<p>Dans cette session, vous apprendrez pourquoi on ne peut pas réduire Gradle à un Maven sans XML ou un Ant sous stéroïdes. Vous verrez qu\'écrire une build sera plus jamais une punition. Pire, ça pourrait devenir un plaisir !',
            speakers: ['cedric_champeau'],
        }
        ]
    },
    {
        id: '2014_04_14',
        title: 'Soirée Tools : Developper Efficacement',
        date: new Date(2014, 3, 14), //month begin at 0
        time: '19',
        register: 'http://guestli.st/245676',
        place: 'eartsup',
        subjects: [{
            title: 'Write Java Apps Faster Using SaaS Developer Environments',
            length: '45 min',
            type: 'talk',
            speakers: ['tyler_jewell', 'stevan_le_meur'],
            abstract: '<p>The Java community is filled with terrific solutions for enabling development of apps. Every Java developer has their choice of tools and the openness of the platform makes it accessible to anyone and extensible by everyone.</p>' +
                '<p>But why then, is 99% of all development still done locally? While sales, marketing, customer service, support, finance, and infrastructure has steadily moved to the cloud over the past decade, Java development remains rooted on the desktop. Will it always be this way? </p>' +
                '<p>In this session, we will discuss the evolution of remote development of Java applications and the emergence of SaaS Developer Environments. Often times called a cloud IDE, a SaaS environment can eliminate configuration, increase collaboration, and alleviate management concerns around consistency, compliance, and velocity. In essence, SaaS developer environments can make agile, more agile.</p>' +
                '<p>We will present a beta of the Codenvy Cloud, a sister system to codenvy.com that has been in development since 2011.</p>',
        },
        {
            title: 'Faites un « départ lancé » sur les technos Angular JS, Spring MVC, JPA, REST/HATEOAS',
            length: '1 h 00',
            type: 'talk',
            abstract: '<p>Présentation du principe de « Development Accelerator » avec un générateur de code simple et pragmatique.</p>' +
                '<p>Démos :  génération de deux types d’applications immédiatement utilisables :' +
                '<ul>' +
                '  <li>services RESTful avec Spring Data Rest / HATEOAS</li>' +
                '  <li>application AngularJS, REST/SpringMVC/JPA ou Spring Data</li>' +
                '<ul></p>',
            speakers: ['laurent_guerin', 'benoit_wilcox', 'ludovic_chaboud'],
        }
        ]
    },
    {
        id: '2014_03_17',
        title: 'Du Legacy Au Cloud en Moins d\'Une Heure',
        date: new Date(2014, 2, 17), //month begin at 0
        time: '19',
        register: 'http://guestlistapp.com/events/234840',
        place: 'eartsup',
        subjects: [{
            title: 'Dart, c\'est aussi Angular',
            length: '45 min',
            type: 'talk',
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
            abstract: '<p>Il est de plus en plus simple de développer des applications web de zéro, pour les héberger sur le cloud. Mais est-ce aussi simple quand on part de code existant ? Les techniques adaptées à un projet tout neuf sont-elles utilisables de la même façon ?</p>' +
                '<p>Nous verrons qu’il est possible de partir d’une application legacy, de lui ajouter des fonctionnalités et de la déployer en continu sur le cloud en moins d’une heure.</p>' +
                '<p>Cette session de live coding sera l’occasion de découvrir des techniques de refactoring, de développement piloté par les tests, de test et d’inspection continue. Et ce, en tentant à chaque étape de faire les choses les plus simples possibles.</p>',
            speakers: ['david_gageot'],
        }
        ]
    },
    {
        id: '2014_02_17',
        title: 'Gros projet en JAVA & AngularJS / Travail collaboratif en temps réél',
        date: new Date(2014, 1, 17), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/230988',
        place: 'epsi',
        subjects: [{
            title: 'Vécu - Gros projet en JAVA & AngularJS',
            length: '45 min',
            type: 'talk',
            speakers: ['sebastien_roul', 'medy_belmokhtar'],
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
    }, {
        id: '2014_01_20',
        title: 'Soyons RESTful avec RESTX',
        date: new Date(2014, 0, 20), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/218334',
        place: 'eartsup',
        subjects: [{
            title: 'JParsec',
            length: '20 min',
            type: 'quickie',
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
        date: new Date(2013, 11, 4), //month begin at 0
        time: '19',
        register: 'http://guestli.st/212961',
        place: 'eartsup',
        subjects: [{
            title: 'Grails dans les tranchées',
            length: '20 min',
            type: 'quickie',
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
    }, {
        id: '2013_11_04',
        title: 'Du SQL au NoSQL en moins d\'une heure',
        date: new Date(2013, 10, 4), //month begin at 0
        time: '19',
        register: 'http://guestli.st/206877',
        place: 'epsi',
        subjects: [{
            title: 'Amélioration de la qualité du code par restriction du langage',
            length: '20 min',
            type: 'quickie',
            speakers: ['hugo_wood'],
            abstract: '<p>Lorsque que beaucoup de possibilités s\'offrent à nous, il est difficile de prendre une décision sans expérience.</p>' +
                '<p>Au vu de la piètre qualité générale du code dans l\'industrie, ne serait-il pas intéressant pas de restreindre la flexibilité des langages de programmation afin de "guider" les développeurs n\'ayant pas encore acquis cette expérience ? Je vais présenter quelques fonctionnalités des langages orientés classe dont la difficulté d\'utilisation, la dangerosité, ou l\'inutilité ne sont selon moi pas assez abordées dans la formation du programmeur.</p>'
        },
        {
            title: 'Elastifiez votre application : du SQL au NoSQL en moins d\'une heure',
            length: '1 h 30',
            type: 'talk',
            abstract: 'Au cours de cette session "live coding", Tugdual et David reprendront une application full SQL "à papa" pour la réécrire en NoSQL en 60 minutes.<br/>' +
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
    }, {
        id: '2013_10_10',
        title: 'Cloud Pattern',
        date: new Date(2013, 9, 10), //month begin at 0
        time: '19',
        register: 'https://guestlistapp.com/events/190722',
        place: 'epsi',
        subjects: [{
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
        date: new Date(2013, 5, 18), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Nouveaux impacts du développement web sur le référencement naturel (SEO)',
            length: '1 h',
            type: 'talk',
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
            abstract: '<p>Quentin presentera en s\'appuyant sur l\'experience de Clever Cloud les defis que vous allez rencontrés pour "scaler" une application.</p>' +
                '<p>Cette sessions s\'appuiera sur des retour d\'experience sur différentes applications et framework.</p>',
            speakers: ['quentin_adam']
        }
        ]
    },
    {
        id: '2013_05_14',
        title: 'Neo4J & SoapUI',
        date: new Date(2013, 4, 14), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
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
        date: new Date(2013, 3, 15), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'JavaScript pour le développeur Java',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Dans sa présentation Christophe va nous expliquer pourquoi et comment l\'ancien détracteur de JavaScript est devenu un fan du langage et, en orientant sa présentation vers des développeurs Java comme lui, essayer de nous faire regarder JavaScript sous un autre angle, à apprécier ses forces, à mieux comprendre ses faiblesses et à nous donner envie de s\'y essayer.</p>' +
                '<p>La présentation sera structurée en deux parties :</p>' +
                '<p><b>JavaScript pour le développeur Java</b></p>' +
                '<p>Au cours de cette présentation nous balayerons les caractéristiques de JavaScript du point de vue du développeur Java en appuyant notamment sur les différences entre les deux langages et ce qui peut se transformer en piège pour le développeur qui aurait juger inutile d\'apprendre JavaScript.</p>' +
                '<p><b>La caisse d\'outils du développeur JavaScript</b></p>' +
                '<p>Au secours, votre chef a vu dans DSI-01-MAG-INFORMATIQUE que l\'avenir est au application Web et il veut maintenant que tous vos projets soient en JavaScript. Vous paniquez parce que la dernière fois que vous avez fait du JavaScript, c\'était à la faculté dans un éditeur de texte et vous débugguiez en affichant des boites de dialogue.</p>' +
                '<p>Au cours de cette présentation, nous verrons que l\'écosystème JavaScript a évolué et que vous disposez maintenant de frameworks complets gérant vos couches de présentation, vos test, vos dépendances et même le backend de vos applications. Nous verrons aussi que l\'outillage a progressé et que nous pouvons maintenant faire du débuggage comme dans nos application Java, de l\'intégration continue et même de l\'audit de qualité !</p>',
            speakers: ['christophe_jollivet']
        }]
    },
    {
        id: '2013_03_18',
        title: 'Traçabilité d\'une architecture distribuée & Code Story 2013',
        date: new Date(2013, 2, 18), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Code Story 2013',
            length: '30 min',
            type: 'quickie',
            abstract: '<p>Les architectures distribuées soulèvent un certains nombre de problématiques en terme de traçabilité : détection des anomalies, suivi des utilisateurs, mesure des performances des différents services ...</p>' +
                '<p>Durant cette session, nous vous montrerons - démonstration à l\'appui - comment nous avons apporté une solution simple à ces problématiques, en mettant en place un système de consolidation de logs avec Node.js et MongoDb.</p>',
            speakers: ['sebastien_prunier', 'jerome_creignou']
        },
        {
            title: 'Traçabilité d\'une architecture distribuée avec NodeJS et MongoDB',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Une des bonnes nouvelles du début d\'année a été le concours Code Story pour l\'édition 2013 de Devoxx France. Une superbe occasion de développer et de tester de nouvelles technos, tout en s\'amusant !</p>' +
                '<p>Nous débuterons la session par un retour sur notre participation à la première phase de ce concours, en vous présentant et en comparant nos choix technologiques.</p>',
            speakers: ['sebastien_prunier', 'jerome_creignou']
        }
        ]
    },
    {
        id: '2013_02_11',
        title: 'Soirée NoSQL - Couchbase & MongoDB',
        date: new Date(2013, 1, 11), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Introduction au NoSQL',
            length: '20 min',
            type: 'intro',
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
            abstract: '<p>Présentation de MongoDB</p>',
            speakers: ['manuel_boillod']
        },
        {
            title: 'Couchbase',
            length: '45 min',
            type: 'talk',
            abstract: '<p>Présentation de Couchbase</p>',
            speakers: ['tugdual_grall']
        }
        ]
    },
    {
        id: '2013_01_16',
        title: 'Soirée Langage et Framework : Dart & Clojure',
        date: new Date(2013, 0, 16), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Clojure',
            length: '1 h',
            type: 'talk',
            abstract: '<p>Le paradigme fonctionnel revient à la mode décennie après décennie. Pourquoi l\'est-il aujourd\'hui ? Au travers de Clojure, un langage de cette nouvelle vague, nous explorerons les idées anciennes et nouvelles qu\'elle pousse et que nous retrouverons (ou pas) demain dans notre Java quotidien. (Préférerez vous au final l\'original ou la copie :-) ?)</p>',
            speakers: ['cedric_pineau']
        },
        {
            title: 'Dart',
            length: '1 h',
            type: 'talk',
            abstract: '<p>Dart est un nouveau langage de programmation pour développer des applications web. Créé par Google et ouvert au grand public en octobre 2011, c\'est un langage orienté-objet avec une syntaxe familière que l\'on soit développeur Java ou développeur JavaScript. Ses deux objectifs ? Performance et facilité d\'utilisation.</p>' +
                '<p>Dans cette présentation, nous verrons quels sont les objectifs de Google en introduisant ce nouveau langage. Nous irons au coeur de celui-ci en présentant les différentes spécificités, typage optionnel, les Isolates comme modèle de concurrence, les différents mode d\'exécution, la gestion du DOM... Enfin, nous discuterons des échéances à venir pour savoir si Dart saura s\'imposer ou non en tant que langage d\'avenir pour le web.</p>',
            speakers: ['julien_vey']
        }
        ]
    },
    {
        id: '2012_12_06',
        title: 'Elastic Search',
        date: new Date(2012, 11, 6), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Elastic Search',
            length: '2 h',
            type: 'talk',
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
        }]
    },
    {
        id: '2012_11_07',
        title: 'OpenShift',
        date: new Date(2012, 10, 7), //month begin at 0
        time: '19',
        place: 'sup_info',
        subjects: [{
            title: 'OpenShift: Enjoy the benefits of cloud computing as a developer',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>In this session, Marek will give a quick introduction to Platform as a Service (aka awesome-sauce for developers) with OpenShift as an example. After a few slides and your questions we will spend the rest of the time working with you to get your Web code (see the languages available on our website, but Java in our case) up and running in less than 5 minutes.</p>' +
                '<p>We will also demonstrate how to connect your code to a back-end data store such as MongoDB and MySQL. The goal of this session is to have you excited in running your code in the cloud for free! http://openshift.redhat.com</p>',
            speakers: ['marek_jelen']
        }]
    },
    {
        id: '2012_10_23',
        title: 'Build Living Web Applications with WebSockets',
        date: new Date(2012, 9, 23), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Build Living Web Applications with WebSockets',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Take your desktop and mobile Web apps to the next level with true, real-time connectivity. Learn how to build real-time, multi-user interaction and collaboration into your Web apps using HTML5 and WebSockets.</p>' +
                '<p>Whether you want your app to be a real-time retail experience or a fast-paced MMO, you\'ll learn hands-on skills to turn your mobile apps into live apps, by building peer-to-peer mobile apps, mobile-desktop interaction, and even turning your smartphone into a Nintendo Wii-style remote control.</p>',
            speakers: ['peter_moskovits']
        }]
    },
    {
        id: '2012_10_10',
        title: 'Copyright et Licence & WebMotion',
        date: new Date(2012, 9, 10), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Copyright et Licence',
            length: '1 h',
            type: 'talk',
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
        }]
    },
    {
        id: '2012_06_06',
        title: 'Introduction au langage Ceylon',
        date: new Date(2012, 5, 6), //month begin at 0
        time: '19',
        place: 'netapsys',
        subjects: [{
            title: 'Introduction au langage Ceylon',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Ceylon est un nouveau langage de programmation pour la machine virtuelle Java. Nous sommes fans de Java et de son écosysteme, cependant nous pensons que le langage Java et ses libraires conçus il y a 15 ans sont désuets face aux challenges actuels. Ceylon a été conçu avec plusieurs objectifs</p>' +
                '<p>Facile à apprendre pour les développeurs Java et C# Améliorer le typage fort de Java Fournir une syntaxe déclarative pour exprimer des concepts hierarchiques (interface utilisateurs, configuration systeme, etc...) Promouvoir l\'approche fonctionelle par des objects immuables et des fonction d\'ordre supérieur Support de la méta programmation Modulaire</p>' +
                '<p>Cette introduction à Ceylon vous montrera les fonctionnalités de Ceylon ainsi que les derniers progrès faits sur le compilateur, l\'IDE et la communauté autour de Ceylon.</p>',
            speakers: ['stephane_epardaud']
        }]
    },
    {
        id: '2012_06_04',
        title: 'Hibernate OGM: JPA pour NoSQL',
        date: new Date(2012, 5, 4), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Hibernate OGM: JPA pour NoSQL',
            length: '1 h 30',
            type: 'talk',
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
        }]
    },
    {
        id: '2012_03_14',
        title: 'Introduction à Wicket',
        date: new Date(2012, 2, 14), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Introduction à Wicket',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Wicket est un Framework de présentation Java orienté composant, comme JSF ou GWT, qui propose une séparation très claire entre la vue et les données. Les vues sont écrites en XHTML tandis que la partie dynamique et les données sont codées en Java.</p>' +
                '<p>Lors de cette présentation 100% démo, Manuel présentera les bases du framework en développant une application de gestion de contacts.</p>',
            speakers: ['manuel_boillod']
        }]
    },
    {
        id: '2012_02_09',
        title: 'Application versioning et rolling upgrade',
        date: new Date(2012, 1, 9), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Application versioning et rolling upgrade en haute disponibilité, avec Glassfish',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Une fois qu\'une application est en production, réaliser une montée de version sans perte de service est délicat et peut rapidement vous donner la migraine. Il faut en général le faire manuellement en montant un cluster, en répliquant l\'application et ses sessions, et en jonglant avec le répartiteur de charge et les instances de serveur à chaque montée en version.</p>' +
                '<p>La fonctionnalité de versioning présente dans GlassFish, combinée avec le rolling upgrade (en early preview) permet de réaliser cette montée en version sans perte de service sur une instance stand-alone de GlassFish.</p>' +
                '<p>Dans cette session, Marian présente ces fonctionnalités et comment les utiliser pour réaliser une montée en version d\'application en production sans perte de service, en utilisant exclusivement les services offerts par GlassFish.</p>',
            speakers: ['marian_muller']
        }]
    },
    {
        id: '2012_01_12',
        title: 'Introduction aux DSL en Groovy',
        date: new Date(2012, 0, 12), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Introduction aux DSL (Domain Specific Languages) en Groovy',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Durant cette présentation, Cedric nous expliquera ce que sont les DSL (Domain Specific Languages), leurs champs d\'application et les techniques courantes pour en implémenter. Cédric presentera quelques exemples de DSL écrits avec le langage Groovy, dans l\'objectif de montrer ce que ce langage permet d\'obtenir.</p>',
            speakers: ['cedric_champeau']
        }]
    },
    {
        id: '2011_12_14',
        title: 'Hibernate vs Cloud computing',
        date: new Date(2011, 11, 14), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Hibernate vs Cloud computing',
            length: '1 h 30',
            type: 'talk',
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
        }]
    },
    {
        id: '2011_11_03',
        title: 'Java 7 : Introduction',
        date: new Date(2011, 10, 3), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Java 7 : Introduction',
            length: '1 h 30',
            type: 'talk',
            abstract: '<p>Pour cette soirée, Sebastien va nous presenter les points suivants:' +
                '<ul>' +
                '<li>Rapide historique des versions de Java</li>' +
                '<li>Quoi de nouveau dans Java 7 (invokedynamic, fork/join, nio2, javadoc ...) ?</li>' +
                '<li>Zoom sur les nouveautés dans la syntaxe (Projet Coin), avec exemples de code “avant/après” (Strings in switch, Try-with-ressource, Binary literals, Inférence de type avec l\'opérateur diamond, catch multiple, etc ...)</li>' +
                '<li>Un petit exemple de l\'API NIO2 qui simplifie la vie : la copie de fichier (en une ligne !)</li>' +
                '</ul></p>' +
                '<p>Pour conclure, les perspectives avec Java 8 (Closures, Collection litterals, Projet Jigsaw).</p>',
            speakers: ['sebastien_prunier']
        }]
    },
    {
        id: '2011_10_12',
        title: 'Statefull is Beautiful',
        date: new Date(2011, 9, 12), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
            title: 'Statefull is Beautiful',
            length: '1 h 30',
            type: 'talk',
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
        }]
    },
    {
        id: '2011_06_23',
        title: 'A la découverte de Gradle',
        date: new Date(2012, 6, 0), //month begin at 0
        time: '19',
        place: 'cantine_juton',
        subjects: [{
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
        }]
    }
];
