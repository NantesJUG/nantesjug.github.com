---
layout: page
title: Nantes JUG
tagline: Groupe d'utilisateurs Java Nantais
---
{% include JB/setup %}


Le NantesJUG réunit régulièrement la communauté Java de Nantes et de sa région autour d'intervenants qui viennent nous parler de la plateforme Java et de son écosystème.

Intéressé pour en savoir plus, vous investir dans l'aventure nantaise, participer, ou tout simplement suivre nos rencontres, n'hésitez pas, c'est libre et gratuit.

Nous vous invitons également à rejoindre notre groupe:

* <a href="https://twitter.com/nantesjug" target="_nantesjug">Twitter</a> 
* <a href="http://groups.google.com/group/nantesjug" target="_nantesjug">Google Groups</a>
* <a href="http://www.linkedin.com/groups/Nantes-JUG-1701467" target="_nantesjug">LinkeIn</a>
* \#nantesjug channel sur freenode.net



    
## Nos Soirées

Les rencontres ont lieu à <a href="http://cantine-nantes.org/" target="_nantesjug">La Cantine Numérique</a>, 11 impasse Juton - Chaussée de la Madeleine, 44000 Nantes



<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


