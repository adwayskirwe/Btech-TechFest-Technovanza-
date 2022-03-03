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
      <h1><div id="event_title">Cway</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tagline">Tagline</a></li>


              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
               <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#contact">Contact  us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="tagline" class="tab-pane fade in active">
          1.From Embedded Systems to networking, from hardware drivers to legacy games, C and its successor C++ have shown their versatility and functionality. This event in 3 eloquent rounds is aimed at testing how good our participating C-Farers are at implementing them. 
          2.Expect a depth from this often mistaken one-dimensional language family, and be ready to take a dive! 
          <b><blockquote>Will C you on 26th December 2015,8:45 am</blockquote></b>


     

      
     
      </div>

       

      <div id="gameplay" class="tab-pane fade in">
            <b><blockquote>Round 1:MCQ</blockquote></b>
            1.This round is totally paper based.
            2.All the contestants will be given a set of 20-25 MCQs and a crossword puzzle.
            3.Time allotted will be 30 minutes and scores will be carried forward.
            <b><blockquote>Round 2:Two_Edgy And Shuffle</blockquote></b>
            1.This round will be both paper and programming based.
            2.All the contestants will be given a shuffled code and the output.
            3.And also they will be given two problem statements for TWO_EDGY round.
            4.For the shuffled code the contestants have to write the correct sequence of the code that produces the expected output.
            5.Basic C template will be provided and anything more than two line will result in a zero score for TWO_EDGY round.
            The time allotted will be 30 minutes and points earned will be carried forward.
            <b><blockquote>Round 3:Code Less</blockquote></b>
            1.All the contestants will be given two problem statements.
            2.Contestants have to code the solution with minimum number of characters.
            3.Contestant who codes with minimum number of characters, scores maximum.
            4.At the end of this round a total score of all the contestants will be calculated and the winner will be declared.


     
     
      </div>
      
      <div id="rules" class="tab-pane fade">
          <br><br>
          1.All the programming for this contest will be done in C programming language.<br>
          2.Each person can register only once.<br>
          3.The competition will be executed in 3 rounds.<br>
          4.In case of a tie, ‘Fastest finger first’ game will be played.<br>
          5.Participants are not allowed to bring any media devices such as pen drives, CD, DVD etc.<br>
          6.Cell phones must be switched off.<br>
          7.Any violation of rules will lead to disqualification.<br>
          8.Apart from these rules, additional rules will be disclosed on the spot.<br>
          9.All other details and further explanation about the event will be disclosed on the spot.<br>
          10.The marking scheme is subject to change on site considering the participation strength.<br>
          11.All decisions made by the event heads will be final.<br>

      
     
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

