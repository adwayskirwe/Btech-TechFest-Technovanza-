<!DOCTYPE html>
<html lang="en">
<head>
  <title>Robomaze|Technovanza</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
 
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
  font-family: 'Muli', cursive;
}

body{
 font-family: 'Roboto', sans-serif;
}

blockquote{
  border-left: 0.4vw solid #428bc2;
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
<?php  include("navbar.php"); ?>

<div class="container">

   <div class="parallax-container">
      <div class="parallax"><img src="fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Robomaze</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#problem">Problem Statement</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>              
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#arena">Arena</a></li>
              <li><a data-toggle="tab" href="#specification">Specification</a></li>
              <li><a data-toggle="tab" href="#eligible">Eligibility</a></li>
              
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
            <b><blockquote> Problem Statement: </blockquote></b>

            To design a manually controlled bot that can traverse given path through different terrains including various obstacles, bridges, inclines and much more than what is expected.<br>

            <b><blockquote> Objective: </blockquote></b>
            To ride your way through the narrow alleys to find a way out of the perplexing maze and to collect maximum points as you travel through it.<br>
     
      </div>

       <div id="gameplay" class="tab-pane fade">
              <br>
              1.The driver will be blindfolded before entering the arena, and thus won’t be able to see the arena throughout the competition.<br>
              2.The driver will be instructed by the other two team-mates (instructors) to find a way out of the grid.<br>
              3.The event comprises of three levels, the details of which are as follows:-<br>
              <b><blockquote>1st level:</blockquote></b>
              1.All participants will compete in the first level.<br>
              2.Maze will be full of bumpy roads, flip doors and obstacles and your aim is to complete the arena in minimum time
              efficiently and to reach the exit.<br>
              3.Teams will be ranked according to the time taken for completing the arena.<br>
              <b><blockquote>2nd level:</blockquote></b>
              1.In 2nd level selected teams from the 1st level will compete in this level.<br>
              2.Competitors of this level won’t have any prior idea of the arena and won’t be allowed to see the arena before their turn as it will be kept in the closed tent.<br>
              3.The path contains bumpers, tumbling rollers, flips, bridge, false paths, sliding, etc. Also there will be speed breakers followed by sharp turns.<br>
              4.Teams will be ranked according to the time taken for completing the arena.<br>
              5.Top 10 teams will qualify for the next level.<br>
              <b><blockquote>3rd level:</blockquote></b>
              1.Selected participants from the 2nd level will participate in third level.<br>
              2.Competitors of this level won’t have any prior idea of the arena and won’t be allowed to see the arena before their turn as it will be kept in the closed tent.<br>
              3.The final arena will be a surprise. It may contain nail-net bridge, rotating fans, greasy surface etc. Your bots should be ready to tackle all the hurdles.<br>
                     


       </div>

      <div id="rules" class="tab-pane fade in">

         <br>
          1.Arena should not be damaged in any circumstances. Doing so may lead to disqualification.<br>
          2.If participants calls for any kind of argument it will be sorted properly but only after completion of all rounds, in any circumstances rounds will not be interrupted.<br>
          3.Any part of the bot should not detach / be left in the arena. Pulling wires to handle the bot would result in disqualification.<br>
          4.Disputes if any will be resolved by the Organizers and his decision will be final. Event managers can revise the rule at any point of time if it is necessary.<br>
          5.Team must adhere to the spirit of healthy competition.<br>
          6.Focus is on developing robots and innovation. Teams may be inquired about the developmental process of their robot and general awareness of robotics.<br>
          7.Participants will be given time slots according to their arrival at arena venue.<br>
          8.Each team will have to report sharply at their allotted time slots otherwise will have to wait until all other participants complete their turn.<br>
          9.At the time of reporting, all team members should be present with working bot. Any kind of repairing is not allowed inside arena. If bot stops working properly, team members will have to leave the arena. Coordinators will decide if second chance is to be given or not.<br>
          
          <b><blockquote>Technical rules and regulations:</blockquote></b>
          1.Participants need to properly insulate their motors.<br>
          2.The bot will initially start from the entry line and in its way it will cross certain checkpoints as it reaches the finish line.<br>
          3.If the bot gets stuck at any point and needs manual intervention then it will make the bot to restart from the last checkpoint crossed. Only coordinators can touch the bot in that case, team members cannot touch the bot during its run.<br>
          4.The arena will be modified in the 2nd and 3rd levels where some surprise elements will be added.<br>
          The time will not be stopped under any circumstances until and unless it is the fault from our part.<br>
      
     
      </div>
      
     
      <div id="arena" class="tab-pane fade in">

        <br>
        1.Arena will be made up of red bricks.<br>
        2.There will be different arenas for all the three levels.<br>
        3.Arena dimensions :- Outer Dimensions of arena:<br>
        <li>Path width : - 300 mm. Wall Width: 90 mm.<br>
        <li>Wall height : - 110 mm.<br>
        <li>Flip door : - Height: 110 mm. Width: 10 mm.<br>
        <li>Material : - Plywood/ bricks. 4500mm X 4500 mm.<br>

      
     
      </div>

      <div id="specification" class="tab-pane fade in">


       <b><blockquote> Team Specification:</blockquote></b>
        A team can consist of maximum 3 participants. Students from different educational institutes can form a team.<br>

       <b><blockquote> Bot Specification:</blockquote></b>
        1.Maximum bot size 250mmX250mmX250mm ( l*b*h).<br>
        2.Maximum weight : 5 Kg.<br>
        3.Maximum voltage at any point: 18 volts (+2 volts). No current limit.<br>
        4.The manual bot can be controlled wired or wirelessly.<br>
        5.Teams can use on-board power supply or external power supply.<br>
        6.The use of standard chassis, readymade Lego kits is allowed.<br>
        7.The length of connecting wire should be up to 3.5 m.<br>
     
     
      </div>

       <div id="eligible" class="tab-pane fade">

       <b><blockquote>Judging Criteria</blockquote></b>
        1.Scoring will be on the basis of TIME required to complete the task.<br>
        2.Also the teams will get the benefit of the checkpoints. The point system will change accordingly in the further round of the event.<br>

      
     
      </div>
      
      <div id="contact" class="tab-pane fade">

      

      
     
      </div>
  </div>
  </div>
</div>

<script src="https://fastcdn.org/FlowType.JS/1.1/flowtype.js"></script>


<script type="text/javascript">
  $('body').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :16,
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

      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

