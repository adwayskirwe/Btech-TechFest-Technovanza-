<!DOCTYPE html>
<html lang="en">
<head>
  <title>Wall-E|Technovanza</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="../css/materialize.css"  media="screen,projection"/>
 
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 
 
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>
<style type="text/css" media="screen">

a:hover, a:focus{
  text-decoration: none;
}

.img-responsive{
  width:100%;
  height:auto;
}

#event_title{
  font-family: 'Lobster', cursive;
}

body{
 font-family: 'Roboto', sans-serif;
}

blockquote{
  border-left: 0.4vw solid blue;
}

.container{
  width: 100%
}
#menu {
  position:fixed;
  top:0px;
  width:100%; 
  z-index:9999;
  display: none;
}

.parallax-container{
  width: 100%;
  height: 55vh;
}
.brand-logo img
{
  padding: 9px 15px;
  height:65px;
}

  </style>
  </head>
<body>
<?php  include("../navbar.php"); ?>
<div class="container">

   <div class="parallax-container">
      <div class="parallax"><img src="fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Wall-E</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
              <li><a data-toggle="tab" href="#specification">Specification</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#criteria">Judging criteria</a></li>
              
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">

      <b><blockquote>Tribute to Indian Military</blockquote></b>

    At the 50th anniversary of the infamous war of 1965, a dark conspiracy is in place to instigate war once again. Terrorists are holding the quiet Indian village of Bhuj as hostage and their demands are sure to sour the delicate ties. All three Armed Forces of India must work together to neutralize the situation. The assault on the enemy must be quick and effective. Even a simple oversight may put the life of innocent civilians in jeopardy. First the pilots of the Indian Air Force analyse the conflict zone from the air. They realise that the terrorists have laid siege to the village and are guarding the access paths to the village, both terrestrial and marine. They also acquired a grim piece of intelligence. There are terrorists disguised as civilians hiding among civilians to thwart any attempt at their rescue even if the siege falls.<br>
    The Indian Air Force supplies this intelligence report to the Indian Army along with the ammunition needed to battle the vile forces. Now to break the siege, it must be attacked simultaneously from both land and sea. While the attack from land will be combat-based, the attack from sea needs heavy use of naval artillery. The Naval artillery will be armed with the ammunition provided by the Indian Air Force and supplied by the Indian Army. Once the siege falls, the Indian Army must act fast to rescue the civilians. But the civilians are still endangered by sleeper agent. Using the intelligence provided by the Indian Air Force, the Indian Army must weed him out first. Then it must rescue the civilians and deliver them to safety. <br>
    Death is the only penalty fit for this heinous crime against humanity. This punishment is meted out to the terrorists at the execution zone. Terrorists are supplied to the execution zone by the Indian Navy. Death Sentence is then carried out by the Indian Army. The ammunition used to save the lives of humans is now used to take the lives of these anti-humans.<br>

    <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=p6-hw08JMOM" type="video/mp4">
    
  Your browser does not support the video tag.
</video>

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">

        <b><blockquote>Arena</blockquote></b>
        <ol>
        <li>The field consists of an area having dimensions 6.3m x 6.8m.
        <li>The game field consists of:
        <ol>
<li>Rescue Zone (R.Z)</li>
<li>Army Base Camp (A.B.C)</li>
<li>Execution Zone (E.Z)</li>
<li>Conflict Zone (C.Z)</li>
<li>Manual Start Zone (M.Z)</li>
<li>Auto Zone (SEA)</li>
<li>Air-Intel Recovery Zone (AI)</li>
<li>Ammunition (A.M )</li>
<li>Assault Zone (A.Z )</li>
</ol>



        </ol>


        <b><blockquote>Gameplay</blockquote></b>

There are two different ways in which the task can be completed.
<ol>
<li>1st Way : Navy Ship With Clamping Mechanism
The army robot will start from manual start zone and operate the air-Intel (AI) (by rotation).
<li>It will then pick up the ammunition from the air-Intel (AI) and a code will be displayed.
<li>The navy bot can start only when it picks up the ammunition.
<li>Now the navy bot starts and crosses the sea through track 1 moving towards the execution zone (EZ) and displaces the terrorist1 (T1) into the execution zone (EZ).
<li>The navy bot will return to initial point with ammunition through track 3 only.
<li>Meanwhile, according to the code displayed on the air-Intel (AI), the identity of the terrorist3 who is one among the hostages (H1, H2, H3, H4) will be revealed.
<li>Now, the navy bot will place the terrorist2 (T2) and terrorist3 in the execution zone (EZ) and return through track 3 only.
<li>After making the hostages free from the terrorist, the army robot will place them on the Hostage rescue zone (RZ).
<li>The army bot will move towards the execution zone (EZ) along with the ammunition.
<li>The task will be completed when the navy bot places both the terrorists in the sea within the execution zone (EZ) and army bot plants the ammunition on the terrorist in the form of a pyramid and reaches a point at a safe distance from the execution zone.
<li>2nd Way : Navy Ship Without Clamp
<li>The army robot will start from manual start zone (MZ) and operate the air-Intel (AI) (by rotation).
<li>It will then pick up the ammunition (AM) from the air-Intel (AI) and a code will be displayed.
<li>The army robot will pick the ammunition (AM) and place it on the navy bot.
<li>The navy bot can start only when army robot places the ammunition (AM) on the navy bot.
<li>Now the navy bot starts and crosses the sea through track 2, moving towards the execution zone (EZ) and pushes the terrorist1 into the execution zone. The bot will have to change its path when it encounters a node within track2.
<li>The navy bot will return to initial point with ammunition through track 3.
<li>Meanwhile, according to the code displayed on the air- Intel (AI), the identity of the terrorist3
<li>Now, the army bot will pick up terrorist2 (T2) and terrorist3 and hand them over to navy bot which will then place them in the execution zone (EZ) and return through track 3 only.
<li>After making the hostages free from the terrorist, the army robot will place them on the Hostage rescue zone (RZ).
<li>The army bot will move towards the execution zone (EZ) along with the ammunition (AM).
<li>The task will be completed when the army bot plants the ammunition (AM) on the terrorists which are in the execution zone and reaches a point at a safe distance from the execution zone (EZ). (Safe distance is indicated by C.Z.)
NOTE :
DURING THE GAMEPLAY, THE AMMUNITION AND THE TERRORISTS ONCE DISPLACED FROM THEIR INITIAL POSITIONS, CAN BE PLACED IN THE ARMY BASE CAMP, THE EXECUTION ZONE OR ON THE NAVY BOT ONLY.
AS THE NAVY BOT GRID IS EXACT MIRROR IMAGE OF EACH OTHER, THE PARTICIPANTS MUST BE READY WITH 2 CODES, SO THAT AT THE TIME OF EVENT, DEPENDING ON WHICH SIDE THEY GET, SUITABLE CODE CAN BE USED.
Ammunition
The ammunition will be initially placed on the air-Intel (AI).
The ammunition has to be placed on the navy bot to have access to it

      </li>


       </div>
<div id="specification" class="tab-pane fade in">

      <b><blockquote>Tribute to Indian Military</blockquote></b>

    At the 50th anniversary of the infamous war of 1965, a dark conspiracy is in place to instigate war once again. Terrorists are holding the quiet Indian village of Bhuj as hostage and their demands are sure to sour the delicate ties. All three Armed Forces of India must work together to neutralize the situation. The assault on the enemy must be quick and effective. Even a simple oversight may put the life of innocent civilians in jeopardy. First the pilots of the Indian Air Force analyse the conflict zone from the air. They realise that the terrorists have laid siege to the village and are guarding the access paths to the village, both terrestrial and marine. They also acquired a grim piece of intelligence. There are terrorists disguised as civilians hiding among civilians to thwart any attempt at their rescue even if the siege falls.<br>
    The Indian Air Force supplies this intelligence report to the Indian Army along with the ammunition needed to battle the vile forces. Now to break the siege, it must be attacked simultaneously from both land and sea. While the attack from land will be combat-based, the attack from sea needs heavy use of naval artillery. The Naval artillery will be armed with the ammunition provided by the Indian Air Force and supplied by the Indian Army. Once the siege falls, the Indian Army must act fast to rescue the civilians. But the civilians are still endangered by sleeper agent. Using the intelligence provided by the Indian Air Force, the Indian Army must weed him out first. Then it must rescue the civilians and deliver them to safety. <br>
    Death is the only penalty fit for this heinous crime against humanity. This punishment is meted out to the terrorists at the execution zone. Terrorists are supplied to the execution zone by the Indian Navy. Death Sentence is then carried out by the Indian Army. The ammunition used to save the lives of humans is now used to take the lives of these anti-humans.<br>

    <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=p6-hw08JMOM" type="video/mp4">
    
  Your browser does not support the video tag.
</video>

      
     
      </div>
      <div id="rules" class="tab-pane fade in">

      <b><blockquote>Tribute to Indian Military</blockquote></b>

    At the 50th anniversary of the infamous war of 1965, a dark conspiracy is in place to instigate war once again. Terrorists are holding the quiet Indian village of Bhuj as hostage and their demands are sure to sour the delicate ties. All three Armed Forces of India must work together to neutralize the situation. The assault on the enemy must be quick and effective. Even a simple oversight may put the life of innocent civilians in jeopardy. First the pilots of the Indian Air Force analyse the conflict zone from the air. They realise that the terrorists have laid siege to the village and are guarding the access paths to the village, both terrestrial and marine. They also acquired a grim piece of intelligence. There are terrorists disguised as civilians hiding among civilians to thwart any attempt at their rescue even if the siege falls.<br>
    The Indian Air Force supplies this intelligence report to the Indian Army along with the ammunition needed to battle the vile forces. Now to break the siege, it must be attacked simultaneously from both land and sea. While the attack from land will be combat-based, the attack from sea needs heavy use of naval artillery. The Naval artillery will be armed with the ammunition provided by the Indian Air Force and supplied by the Indian Army. Once the siege falls, the Indian Army must act fast to rescue the civilians. But the civilians are still endangered by sleeper agent. Using the intelligence provided by the Indian Air Force, the Indian Army must weed him out first. Then it must rescue the civilians and deliver them to safety. <br>
    Death is the only penalty fit for this heinous crime against humanity. This punishment is meted out to the terrorists at the execution zone. Terrorists are supplied to the execution zone by the Indian Navy. Death Sentence is then carried out by the Indian Army. The ammunition used to save the lives of humans is now used to take the lives of these anti-humans.<br>

    <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=p6-hw08JMOM" type="video/mp4">
    
  Your browser does not support the video tag.
</video>

      
     
      </div>
      
      <div id="criteria" class="tab-pane fade">

      <b><blockquote>Tribute to Indian Military</blockquote></b>

    At the 50th anniversary of the infamous war of 1965, a dark conspiracy is in place to instigate war once again. Terrorists are holding the quiet Indian village of Bhuj as hostage and their demands are sure to sour the delicate ties. All three Armed Forces of India must work together to neutralize the situation. The assault on the enemy must be quick and effective. Even a simple oversight may put the life of innocent civilians in jeopardy. First the pilots of the Indian Air Force analyse the conflict zone from the air. They realise that the terrorists have laid siege to the village and are guarding the access paths to the village, both terrestrial and marine. They also acquired a grim piece of intelligence. There are terrorists disguised as civilians hiding among civilians to thwart any attempt at their rescue even if the siege falls.<br>
    The Indian Air Force supplies this intelligence report to the Indian Army along with the ammunition needed to battle the vile forces. Now to break the siege, it must be attacked simultaneously from both land and sea. While the attack from land will be combat-based, the attack from sea needs heavy use of naval artillery. The Naval artillery will be armed with the ammunition provided by the Indian Air Force and supplied by the Indian Army. Once the siege falls, the Indian Army must act fast to rescue the civilians. But the civilians are still endangered by sleeper agent. Using the intelligence provided by the Indian Air Force, the Indian Army must weed him out first. Then it must rescue the civilians and deliver them to safety. <br>
    Death is the only penalty fit for this heinous crime against humanity. This punishment is meted out to the terrorists at the execution zone. Terrorists are supplied to the execution zone by the Indian Navy. Death Sentence is then carried out by the Indian Army. The ammunition used to save the lives of humans is now used to take the lives of these anti-humans.<br>

    <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=p6-hw08JMOM" type="video/mp4">
    
  Your browser does not support the video tag.
</video>

      
     
      </div>
      
      <div id="contact" class="tab-pane fade in active">

      <b><blockquote>Tribute to Indian Military</blockquote></b>

    At the 50th anniversary of the infamous war of 1965, a dark conspiracy is in place to instigate war once again. Terrorists are holding the quiet Indian village of Bhuj as hostage and their demands are sure to sour the delicate ties. All three Armed Forces of India must work together to neutralize the situation. The assault on the enemy must be quick and effective. Even a simple oversight may put the life of innocent civilians in jeopardy. First the pilots of the Indian Air Force analyse the conflict zone from the air. They realise that the terrorists have laid siege to the village and are guarding the access paths to the village, both terrestrial and marine. They also acquired a grim piece of intelligence. There are terrorists disguised as civilians hiding among civilians to thwart any attempt at their rescue even if the siege falls.<br>
    The Indian Air Force supplies this intelligence report to the Indian Army along with the ammunition needed to battle the vile forces. Now to break the siege, it must be attacked simultaneously from both land and sea. While the attack from land will be combat-based, the attack from sea needs heavy use of naval artillery. The Naval artillery will be armed with the ammunition provided by the Indian Air Force and supplied by the Indian Army. Once the siege falls, the Indian Army must act fast to rescue the civilians. But the civilians are still endangered by sleeper agent. Using the intelligence provided by the Indian Air Force, the Indian Army must weed him out first. Then it must rescue the civilians and deliver them to safety. <br>
    Death is the only penalty fit for this heinous crime against humanity. This punishment is meted out to the terrorists at the execution zone. Terrorists are supplied to the execution zone by the Indian Navy. Death Sentence is then carried out by the Indian Army. The ammunition used to save the lives of humans is now used to take the lives of these anti-humans.<br>

    <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=p6-hw08JMOM" type="video/mp4">
    
  Your browser does not support the video tag.
</video>

      
     
      </div>
  </div>
  </div>
</div>

<script src="https://fastcdn.org/FlowType.JS/1.1/flowtype.js"></script>


<script type="text/javascript">
  $('body').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :20,
 maximum : 1200
});       
 
   $('blockquote').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :20,
 maximum : 1200
});     
   (function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);
</script>

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>

      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

      <script type="text/javascript" src="../js/materialize.min.js"></script>
      <script type="text/javascript" src="../js/sidenav.js"></script>
      <script type="text/javascript" src="../js/parallax.js"></script>
</body>

</html>

