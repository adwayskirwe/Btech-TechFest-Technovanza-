<!DOCTYPE html>
<html lang="en">
<head>
  <title>RoboSoccer|Technovanza</title>
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
  width:100%
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
      <h1><div id="event_title">Robosoccer</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#problem">Problem Statement</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#specification">Specification</a></li>            

              <li><a data-toggle="tab" href="#arena">Arena</a></li>
              <li><a data-toggle="tab" href="#scoring">Scoring</a></li>
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="problem" class="tab-pane fade in active">
          <b><blockquote> Prooblem Statement</blockquote></b>
          Objective is to build a manually controlled bot as per given specifications and which can play soccer successfully.
     
      </div>

       <div id="gameplay" class="tab-pane fade">
            <br>1.There will be 2 players from each team at the arena.<br>
            2.One will be the driver and other will be wire holder.<br>
            3.For participation, each team should have his own bot of specified dimensions.<br>
            4.Bots will be pre-analyzed by referee. He will select or reject bots by taking consideration the rules and dimension limit.<br>
       


       </div>

      <div id="rules" class="tab-pane fade in">


            <br>
            1.The match consists of two halves. Each half will have a duration of four minutes.<br>
            2.The ball will be placed at the centre of the arena. Each bot will stand at corner of their respective goalpost in the beginning.<br>
            3.In case of draw the match will be led to extra time of three minutes. In this extra time the team scoring first will be declared the winner. The match will be declared before completion of extra time in case of foul in favour of opponent team.<br>
            4.The machine can transform to its size only at arena. But cannot divide in parts.<br>
            5.Each team will be given a span of 2 min at the beginning of each halve to make any changes or modifications in the bot.<br>
            6.If the bot becomes immobile during the match then each team will be given 1 min to do any necessary modification .Only two such Chance will be given and in occurrence of further cases the opponent team will be credited advantage of 2 points.<br>
            7.With first goal a team would gain five points. After each successive goal, +1 extra point than previous goal points will be given. If goal streak if break, then after that team scores any goal, that goal will be given points as first goal.<br>
            8.With each foul culprit team will be credited by -2 points.<br>
            9.The match paused in case of any entanglement of wires of both the bots.<br>
            10.Any clamp in the structure of the bot should not cover more than half the diameter of the ball.<br>
            11.Any kind of kicking mechanism to ball in the structure of bot is not allowed.<br>
            12.Wired applicants are not required to bring their own power supply. Only wireless bots are allowed to use their independent power source.<br>

      
     
      </div>


      <div id="specification" class="tab-pane fade in">

         <b><blockquote> Bot specifications:</blockquote></b>
          1.Bot can be wireless or wired.<br>
          2.Wireless should have a minimum range of 12 feet.<br>
          3.Wire length must be greater than 11 feet .<br>
          <b><blockquote>Bot dimensions:</blockquote></b>
          1.Length <= 30 cm<br>
          2.Breadth <= 30 cm<br>
          3.Height <= 30 cm <br>
          (10% tolerance allowed)
          4.Weight <= 5 kg<br>
     

      
     
      </div>

      
      <div id="arena" class="tab-pane fade">

      <br>
        1.Arena Dimensions: 8 feet by 6 feet<br>
        2.Goal post Dimensions:40cm*25cm<br>
        3.Ball Diameter: 7cm<br>
        4.The arena will have a plywood base with a green coloured carpet surface for the pitch.<br>
        5.The arena will have wall boundaries.<br>
        6.The ball used in the game will be a plastic based ball.<br>
              
     
      </div>
      <div id="scoring" class="tab-pane fade">

      <br>
      1.With first goal a team would gain five points. After each successive goal, +1 extra point than previous goal points will be given. If goal streak if break, then after that team scores any goal, that goal will be given points as first goal.<br>
      2.With each foul culprit team will be credited by -2 points.<br>
      3.Team Scoring higher points will be winner.<br>

      
     
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

