<!DOCTYPE html>
<?php  session_start(); ?>
<html lang="en">
<head>
  <title>C-Way|Technovanza</title>
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
      <h1><div id="event_title">Technohunt</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tagline">Tagline</a></li>

              <li><a data-toggle="tab" href="#theme">Theme</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
               <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#contact">Contact  us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="tagline" class="tab-pane fade in active">
         
         <br><br>TechnoHunt is an exciting brew of creativity, teamwork & presence of mind. Put your analytical and logical skills to the test and advance with each clue you uncover. It takes two to tango and it goes the same here. Efficiency and understanding in the duo is the key. <br>
          Hunt through the premises for clues and code through the conundrum for the next. So unleash the explorer in you & make your every move count.<br>

      
     
      </div>

      <div id="theme" class="tab-pane fade ">
      <br><br>
          1.Many ages ago, our mother Earth was covered with thick white sheets of ice. Anything visible was frozen. Just listening to it sends chills across your spine. Yes, this was the era of ICE AGE.<br>
          2.Now here you are, a small pre-historic squirrel named “Scrat”, whose only dream is to reach “Scratlantis”. By all means you need to reach this beautiful green land, covered with oak trees having acorn nuts in abundance. Your ultimate goal is to reside in this little haven.<br>
          3.But here’s the deal, in order to reach “Scratlanits” you need to overcome many hurdles, complete breath taking tasks and cope up with the harsh weather.<br>
          4.So are you ready for this hunt for the ultimate treasure of acorns???!!!
          If you are ready to accomplish this mission, register right now.<br>
          <b><blockquote>See you all on the 27th Dec,fellas.</blockquote></b>

      
     
      </div>

       

      <div id="gameplay" class="tab-pane fade ">
      <br><br>
           1.There will be three levels with varying increasing difficulty which will include quizzes, puzzles, riddles and programs.<br>
          2.The participants will have to work in unison to solve the questions and uncover the clues.<br>
          3.Each level will be the doorway for the next level and only after successful completion of initial levels they can move on to the next level.<br>
          4.Detailed description about all the levels will be given during the event.<br>
          5.Each successful completion of task will give you points. On the completion of the third level a team will get bonus points.<br>
          6.The points of previous levels will be carried forward to the next level.<br>
          7.A helpline facility is provided for each level and upon using it the points will be deducted.<br>


     
     
      </div>
      
      <div id="rules" class="tab-pane fade">
          <br><br>
          1.Each team consists of two individuals.<br>
          2.Techno Hunt involves complex programming and problem solving skills. Participants must be acquainted with at least one programming language preferably C, C++ or Java.<br>
          3.Negative marks would be given for using hints which would be provided in the last two rounds.<br>
          4.The team cannot be changed after registration which will be free.<br>
          5.Each team can register only once.<br>
          Participants are not allowed to bring any media devices such as pen drives, CD, DVD etc.<br>
          6.Cell phones must be switched off.<br>
          7.All stationary such as pen, paper etc. will be provided.<br>
          8.Any violation of rules will lead to disqualification of your team.<br>
          9.Apart from these rules, additional rules will be disclosed on the spot.<br>
          10.Marking scheme is subject to change on site depending on the participation strength.<br>
          11.The decision of the organizers is final and binding.<br>

      
     
      </div>
      <div id="contact" class="tab-pane fade">

      

      
     
      </div>
      <div id="gallery" class="tab-pane fade">

     

      
     
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
<script type="text/javascript" src="js/jquery.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

