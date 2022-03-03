<!DOCTYPE html>
<?php  session_start(); ?>
<html lang="en">
<head>
  <title>Code Swap|Technovanza</title>
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
      <h1><div id="event_title">Codeswap</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li ><a data-toggle="tab" href="#tagline">Tagline</a></li>
            

              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
               <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#contact">Contact  us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 



     <div class="tab-content">


        <div id="introduction" class="tab-pane fade in active">
              <br>
              Code Swap is a co-ordination based programming challenge where the players in a team will interchange their codes while coding. <br>
              SWAPPING allows the players to code for not only one but two programs in different languages which makes it all more interesting and challenging. <br>
              However the players must note that in the game, time plays an important factor. <br>
              Here the players must construct a code such that it gets executed by using your programming capabilities with the ability to get the desired result. <br>
              <b>PREREQUISITE: Basic Programming knowledge of Java ,Java servlet,PHP,C++</b><br>
       


       </div>


      <div id="tagline" class="tab-pane fade ">

              <br>
              <b>Teamwork –</b> is the underlying stanchion of this event.<br> 
              How well can you work with someone else’s code? And how well can you time your own code to match them? C++ and Java are fickle friends if you have no clarity, but what about your own?! Test your compatibility – in coding! But know this before you test your might - Compile or Crumble!<br>
                    
     
      </div>

     

      <div id="gameplay" class="tab-pane fade in">

              <b><blockquote>Round 1: Tick Tock - Problems with Constraints</blockquote></b>
              <b> </b>
              This round will consist of programs which will have few constraints and will be judged against time. If program is completed by both the members of the team and if it gets properly executed in both java and c++ then that team will get qualified for the second round. <br>
              <b>Criteria for selection :</b>The team that finishes first and whose code is precise and to the point will get selected. 
              
              <b><blockquote>Round 2: Hidden Swap </blockquote></b>
              The second and the final round the team members will be given to solve two programs and the team must obtain the output for both the programs one in java servlets and other in php. Some part of the code will be hidden and coders will have to use their presence of mind in order to solve the problem after swapping. <br>
              <b>Criteria for selection :</b>The team that will obtain the output for the two programs in both java servlet as well as php will be the winners. 
              
              <b><blockquote>Tie-breaker Round: </blockquote></b>
              Incase there is a tie between teams during any round, the teams will be asked questions based upon a technology. 
              
              <b><blockquote>Criteria for selection:</blockquote></b> 
              The team answering the questions first will be the qualifying team.
                    
      
     
      </div>
      
      <div id="rules" class="tab-pane fade">
            <br>
            1.Code Swap is based on Java,java servlets,php and C++ Programming language.<br>
            2.It is a team event and each team will be of 2 members. The team cannot be changed after registration.<br>
            3.Each person can register only once.<br>
            4.The participants have to go through 3 rounds in Code Swap and a Tie Breaker round if they tie with someone.<br>
            5.The additional round will be disclosed on site which may or may not involve explicit coding.<br>
            6.After receiving the Problem Statement the Members will not be allowed to discuss the approach to be followed.<br>
            7.Use of comments, declaring and defining unnecessary variables and blank lines won’t be allowed while coding.<br>
            8.Each Participant will write one line of code either in ‘C++’ or ‘Java’ or ‘PHP’ and will have to swap his line with his/her partner and will write the next line of code in other language and so on.<br>
            9.Participants are not allowed to bring any media devices such as pen drives, CD, DVD etc.<br>
            10.Cell phones must be switched off.<br>
            11.All the stationeries such as pen, paper etc. will be provided.<br>
            12.Any violation of rule may lead to disqualification of your team.<br>
            13.Apart from these Rules, some additional rules will be disclosed on the spot.<br>
            14.The marking scheme is subject to change on site considering the participation strength.<br>
            15.The decision of the head and organizers is final and binding.<br>
                 
      
     
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

