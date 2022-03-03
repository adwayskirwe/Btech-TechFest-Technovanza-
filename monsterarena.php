<!DOCTYPE html>
<html lang="en">
<head>
  <title>Monster Arena|Technovanza</title>
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

.img{
  height: 40vh;
  max-width: 60vw;
}

  </style>
  </head>
<body>
<?php  include("navbar.php"); ?>

<div class="container">

   <div class="parallax-container">
      <div class="parallax"><img src="images/fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Monsterarena</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
              <li><a data-toggle="tab" href="#specification">Specification</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#criteria">Judging criteria</a></li>
              <li><a data-toggle="tab" href="#arena">Arena</a></li>
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">

      <br>Teams must build a manually or automatically controlled bot which can endure the obstacles of the arena.<br>
<b><blockquote>Team Specification : </blockquote></b>
A team may consist of a maximum of 4 participants. Students from different educational institutes can form a team. <br>

<b><blockquote>Certificate Policy : </blockquote></b>
1. Certificate of appreciation/participation will be awarded to the all teams. And certificate of excellence will be given to top three teams.<br> 2. Disqualified teams will not be considered for any certificates.<br>

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">

       <br>This event consists of two rounds as stated :<br>

<b><blockquote>ROUND 1:</blockquote></b>
1.Each team will run its manually controlled bot on arena.<br>
2.This round is basically qualification round to enter final round.<br>
3.In this round your bot will be tested structurally,mechanically ,technically and your skills of controlling bot will be challenged upto its peak.<br>
4.Your bot have to go through various modules(difficulties) as quickly as possible and cross finishing line.<br>
5.There will be penalties and bonus in the competiton as well.<br>
<b><blockquote>ROUND 2:</blockquote></b>
1.Final round will have same gameplay as qualification rounds.<br>
2.Only those teams who qualified 1st round are eligible to participate in final round.<br>
3.New modules will be added for final round in the arena ,which will be disclosed on that day.This event consists of two rounds as stated.<br>


       </div>
      <div id="specification" class="tab-pane fade in">

     <b><blockquote>Bot Specifications</blockquote></b>
1.The maximum dimensions are length 30cm, width 30cm and height 30cm (10 % tolerance is allowed).<br>
2.The bot can be made manual or automatic.<br>
3.The manual bot can be controlled wired or wirelessly.<br>
4.Teams can use on-board power supply or external power supply.<br>
5.The use of standard chassis, readymade Lego kit is allowed.<br>
6.The maximum voltage to be used is 24V.s<br>
7.Minimum length of the connecting wires should be 2 metres.<br>

      
     
      </div>
      <div id="rules" class="tab-pane fade in">

      <br>1.Overall judgement will be timebased i.e those bots reaching the finishing line in minimum amount of time shall proceed to final round which will be timebased too.<br>
2.If the bot falls of the track then the bot will be manually placed back to track with a penalty of 5 seconds.<br>
3.If the bot gets stuck in any module then bot will be placed manually at the start of that particular module with a penalty of 3/5 seconds depending upon that module.<br>
4.The bot can skip three modules with a penalty of 10 seconds. The modules which are skipped thereafter will lead to a penalty of 20 seconds.<br>
5.There are several checkpoints in entire track of arena ,each checkpoint contain some bonus (5/7/10 seconds).<br><br>







<table class="table">
  <thead>
    <tr>
      <th>Sr.no.</th>
      <th>Module</th>
      <th>Penalty(in secs)</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rollers</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Balls</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>S bridge</td>
      <td>3</td>
      
    </tr>

     <tr>
      <th scope="row">4</th>
      <td>Marbles</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Circular bridge</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Grid</td>
      <td>5</td>
      
    </tr>

     <tr>
      <th scope="row">7</th>
      <td>Humps</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Cans</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Net</td>
      <td>5</td>
      
    </tr>

     <tr>
      <th scope="row">10</th>
      <td>Sand</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Magnetic doors</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Sea saw</td>
      <td>5</td>
      
    </tr>

     <tr>
      <th scope="row">13</th>
      <td>Pyramids</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>Bricks bridge</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>Rotating doors</td>
      <td>3</td>
      
    </tr>

     <tr>
      <th scope="row">16</th>
      <td>Stones</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">17</th>
      <td>Acrylic slope</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">18</th>
      <td>Cubic pyramid</td>
      <td>3</td>
      
    </tr>

     <tr>
      <th scope="row">19</th>
      <td>Suspension bridge</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">20</th>
      <td>Cubic pyramid</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">21</th>
      <td>Death valley</td>
      <td>5</td>
      
    </tr>

     <tr>
      <th scope="row">22</th>
      <td>  Lucky door</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">23</th>
      <td>Dodge blocks</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">24</th>
      <td>Maze</td>
      <td>3</td>
      
    </tr>

     <tr>
      <th scope="row">25</th>
      <td>Brick dry masonary</td>
      <td>5</td>
      
    </tr>
    <tr>
      <th scope="row">26</th>
      <td>Slope metal wire path</td>
      <td>3</td>
      
    </tr>
    <tr>
      <th scope="row">27</th>
      <td>  Slope</td>
      <td>3</td>
      
    </tr>

     <tr>
      <th scope="row">28</th>
      <td>Bricks</td>
      <td>5</td>
      
    </tr>
  </tbody>
</table>







    

      
     
      </div>
      
      <div id="criteria" class="tab-pane fade">
<br>
1.Time taken by bot to cross finishing line.<br>
2.Number of modules skipped by and left incomplete by bot.<br>
3.Number of checkpoints touched.<br><br>

<b>NOTE :</b>
1.A bot causing any type on damage to the arena will be disqualified.<br>
2.Pulling wires to handle the bot would result in disqualification.<br>
3.The organisers have the right to Disqualify any participant indulging in malpractices.<br>
4.The decision of the Event Organizers is final and cannot be debated on.<br>
5.Same bot cannot be used by more than one team.<br>

      
     
      </div>
      <div id="arena" class="tab-pane fade">

<br><br>
            
              <img src="images/web/monsterarena1.jpg" ><br><center><b>Figure 1</b></center><br>
            
              <img src="images/web/monsterarena2.jpg" ><br><center><b>Figure 2</b></center><br>

              <img src="images/web/monsterarena3.jpg" ><br><center><b>Figure 3</b></center><br>

     
      
     
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

      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

