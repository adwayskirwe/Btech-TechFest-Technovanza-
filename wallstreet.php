<!DOCTYPE html>
<?php  session_start(); ?>
<html lang="en">
<head>
  <title>Fast N Furious|Technovanza</title>
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
      <div class="parallax"><img src="images/fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">WallStreet</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Intoduction</a></li>
           
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>

              

              <li><a data-toggle="tab" href="#rules">Rules</a></li>
            
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
              <br><br>WallStreet is a Virtual Stock Market (VSM) that will test your trading skills and ability to deduce the effects of news and events on stock market and share prices. This game will act as a tool for you to gain knowledge and learn real time trading over an exchange. Compete against other people, buying and selling virtual stocks, invest wisely and finish up with the highest net worth of stocks to win the Grand Prize!<br>
              
         

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">
            
            <br><br>
            1.The competition comprises of a virtual amount of Rs. 100,000 to be provided to the teams to place their bids and buy shares.<br>
            2.Throughout the competition various virtual news alerts will be shown which will affect the prices of
            various companies and the participants will have to act accordingly.<br>
            3.After every round, the top few contestants will be shortlisted and the game paces up.<br>
            4.At the end of the competition the team with the maximum profit earned will be declared as the winner which will be decided by the software.<br>
            5.Any doubts and queries during the competition can be discussed with the organizers.<br>
            6.Prizes up to Rs. 20,000 will be awarded to the winner.<br>
            7.The game will be fast paced since a month’s activity in the stock market will be adjusted in a small time frame.<br>
            8.Understanding news requires practice. It is strongly recommended that the participants have a basic idea about the basic terms used in the stock market beforehand.<br>
            <b><blockquote>Rounds :</blockquote></b>
            1.The game will consist of a total of four rounds.
            2.The rounds are based on elimination.
            3.At the end of every round, few participants with the lowest scores will be eliminated.
            4.The game speeds up at the commencement of every new round.



       
       </div>

      <div id="rules" class="tab-pane fade in">

                <br><br>
                1.Total game time is 5 hours including a 45 minute break.<br>
                2.Students and working professionals at various levels from all over the country can participate.<br>
                3.Participation is free of cost.<br>
                4.A single person or a group of two can participate.<br>
                5.Participants should have knowledge of the basic terms used in the stock market.<br>
                6.Pen, paper and calculator (if required by the participant) should be brought by them.<br>
                            

           
     

      
     
      </div>
      
     
    
      <div id="contact" class="tab-pane fade in">

      

      
     
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

