<!DOCTYPE html>
<html lang="en">
<head>
  <title>Robosumo|Technovanza</title>
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
<?php include("navbar.php");  ?>
<div class="container">

   <div class="parallax-container">
      <div class="parallax"><img src="fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Robosumo</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#criteria">Judging criteria</a></li>
              <li><a data-toggle="tab" href="#arena">Arena</a></li>
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">

    <br>  
   <b><i>"It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward." </i></b><br>


        Be the first robot to push intentionally a opponent off the table OR be the last robot remaining on the table. <br>
        <b><blockquote>Team Specification :</blockquote></b> 
        Any team can participate in Robosumo. A team may consist of a maximum of 6 participants. These participants can be from same or different institutes. <br>
        <b>Team Name :</b> Every team must have a name which must be unique. Technovanza reserves the right to reject entries from any Team whose name it deems inappropriate, offensive or conflicting. Organizers must be notified during if a Team's name has been changed. <br>
        <b><blockquote>Certificate Policy :</blockquote></b>
        1.Certificate of appreciation/participation will be awarded to the all teams. And certificate of excellence will be given to top three teams.<br>
        2.Disqualified teams will not be considered for any certificates.<br>
           

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">

<br>
       Each battle will consist of three rounds.<br>
        1.Each round will be of 2 minutes.<br>
        2.Bot will be considered eliminated if it either falls off the arena or is immobile or cannot perform linear movement within 30 seconds.<br>
        3.If at the end of 3 rounds if the bots are still active and both inside the arena the result will be decieded on the basis of a tie breaker.<br>
        4.Tiebreaker will consist of a ring of reduced diameter and it will be a single round of 1 min.<br>


       </div>

      <div id="rules" class="tab-pane fade in">

      




<b><blockquote>DIMENSIONS</blockquote></b>
      1.The dimensions of the robot used for Robosumo is 40x40 (length x breadth) (10% tolerance allowed). All dimensions are in cm.<br>
      2.The maximum permissible weight for the robot is 15 kg.<br>
      3.The robot should not be split intentionally into components or parts during the match.<br>
      <b><blockquote>MOBILITY</blockquote></b>
      1.The robot should exhibit linear motion along the arena floor during the match.<br>
      2.Jumping, flying and hopping is not allowed. The robot displaying such a motion will be disqualified.<br>
      <b><blockquote>ROBOT CONTROL REQUIREMENTS</blockquote></b>
      1.The robot should be wired or wireless. In case of wireless robot, the battery should be on-board.<br>
      2.All required measures should be taken in case of wireless robots.<br>
      <b><blockquote>BATTERY & POWER</blockquote></b>
      1.The maximum voltage between any two points on the robot during the match is 24V. A variance of 2V can be considered due to batteries not being exactly equal to said voltages.<br>
      2.Batteries such as LiPo, NiCd, sealed Lead Acid, Li-ion can be used. Change of battery won’t be allowed during the match.<br>
      3.All efforts must be made to protect battery terminals from a direct short and causing a battery fire, failure to do so will cause direct disqualification.<br>
      4.Use of damaged, non-leak proof batteries may lead to disqualification.<br>
      5.Special care should be taken to protect the on-board batteries. If judges found that the battery is not properly protected, then team will be disqualified immediately.<br>
      <b><blockquote>WEAPONS SYSTEM</blockquote></b>
      1.The robots should not have any attacking weapons on the robot; the robot should only PUSH the opponent robot outside the arena.<br>
      2.Use of wedges are allowed to push away the opponent robot.<br>
      3.No lifting or flipper mechanism can be used.<br>
      4.No moving weapon is allowed.<br>



   

      
     
      </div>
      
      <div id="criteria" class="tab-pane fade">
<br>
     <i>A robot is declared victorious if its opponent is immobilized.</i><br>
        1.A robot will be declared immobile if it cannot display linear motion of at least one inch in a timed period of 30 seconds. A robot with one side of its drive train disabled will not be counted out if it can demonstrate some degree of controlled movement. In case both the robots remain mobile after the end of the round then the winner will be decided subjectively.<br>
        2.A robot that is deemed unsafe by the judges after the match has begun will be disqualified and therefore declared the loser. The match will be immediately halted and the opponent will be awarded a win.<br>
        3.If a robot is thrown out of the arena the match will stop immediately, and the robot still inside the arena will automatically be declared as the winner.<br>
        4.If the robots become entangled with each other, the robots should be taken back to initial positions and then the match will continue.<br><br>
        <b>NOTE :</b> Qualification of a robot to next level is subjective and totally on the decision of the judges. A robot winning in a round against an opponent doesn’t guarantee its entrance into the next round. If the judges find the winner robot incompetent to enter into the next round, it may get disqualified. Judges can disqualify both the robots of a match from advancing to next round. All the decisions taken by the judge will be final and binding to all. Any queries afterwards will not be entertained.

      
     
      </div>
      <div id="arena" class="tab-pane fade">
<br>
      1.The arena will be circular with radius of 5ft.<br>
      2.The arena will feature obstacles which the robot should tackle and complete the task of pushing the robot outside the arena.<br>
      3.The obstacle will be hollow pit of 18mm , symmetrically along the diameter perpendicular to the line joining the centre of the two bots. The obstacle will leave a narrow gap in the centre.<br>

      <div class="row">
        <div class="col l10 m10 s10 offset-l1 offset-m1 offset-s2">
        <img src="images/web/robosumo1.jpg" ><br><center><b>Figure 1</b></center><br>
        </div>
        </div>
        <img src="images/web/robosumo2.jpg" ><br><center><b>Figure 2</b></center><br>
      
     
      </div>
      <div id="contact" class="tab-pane fade in active">

      
      
     
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

      <script type="text/javascript" src="../js/materialize.min.js"></script>
      <script type="text/javascript" src="../js/sidenav.js"></script>
      <script type="text/javascript" src="../js/parallax.js"></script>
</body>

</html>

