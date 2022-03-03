<!DOCTYPE html>
<html lang="en">
<head>
  <title>Ultimate Coder|Technovanza</title>
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
      <h1><div id="event_title">Ultimate Coder</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tagline">Tagline</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>

              <li><a data-toggle="tab" href="#rules">Rules</a></li>
               <li><a data-toggle="tab" href="#contact">Contact Us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="tagline" class="tab-pane fade in active">
      <br>
          An event of magnanimous proportions, UC will test the skills of the participants to determine not just the coding expertise but also their competence at handling deadlines, distractions and dejecting impositions. <br>
          The event is not just mentally laborious but also physically taxing. Multiple rounds of tougher than ever questions and unlikely than ever physical tasks! Anyone can code in comfort, but how well can you stand the test of time when bare concentration is a luxury? Can you trump the hurdles to produce the best code and emerge as the “Ultimate” coder?! <br>
          <b><blockquote>Coders be ready for an ultimate event on 28th December 2015,9:00 am</blockquote></b><br>



     

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">

        
          <br>

          1.This event would be based on C and Java programming language.<br>
          2.The competition would include 5 levels or rounds in all.<br>
          3.Each round will be of 15 min. There will be an associated physical task with each round.<br>
          4.Elimination will be carried out on the basis of number of contestants.<br>
          5.Contestants will be given a sheet with questions of varying difficulty.<br>
          6.Along with the questions will be given a basic input and output scenario.<br>
          7.They can choose to solve any amount of questions at any point in the competition.<br>
          8.Language choice is the contestant’s decision.<br>
          9.Marks will only be allotted if the answer is compiled and internal hidden inputs give the expected output.<br>
          10.The points of each round will be CARRIED on to till the final round.<br>
          11.Participants must follow the instructions specified in each round strictly.<br>
          12.Contestant can solve any number of programs to get maximum marks.<br>



       </div>

      <div id="rules" class="tab-pane fade ">

      

      <br>
        1.Participants are not allowed to bring any media devices such as pen drives, CD, DVD etc.<br>
        2.Participants must be acquainted with at least C, Java.<br>
        3.Cell phones must be switched off.<br>
        4.Paper and other required material will be provided.<br>
        5.Apart from these rules, additional rules will be disclosed on the spot.<br>
        6.All measures will be taken to accommodate all participants; however considering participation, first come first serve will be the key.<br>
        7.Compilation and execution of the answers is mandatorily hidden and under no circumstances will they be disclosed to the participants.<br>
        8.Participants can only view their points after every round.<br>
        9.The marking scheme is subject to change on site considering the participation strength.<br>
        10.Any violation of rules will lead to disqualification.<br>
        11.All decisions made by event heads will be final.<br>



      
     
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

      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

