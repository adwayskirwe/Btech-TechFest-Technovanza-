<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Case</title>
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
      <div class="parallax"><img src="photos/coding.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">AI Wars</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay"> Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#result">Result</a></li>
        
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
            
            <br><br>Always cherished striking gold, trading at Dalal Street/Nasdaq? Think you can grab opportunities and make most of out of the dynamic stock market? Are you that smart investor who can buy right and sell right? <br>
            Do you believe that the Stock Market is where you belong? BRACE YOURSELF. <br>
            Here comes the simulation of it i.e. VIRTUAL STOCK MARKET game presented by Technovanza in association with Endeavor . It is an exciting opportunity to show your investment skills and win prizes by playing this game.<br>
        
    </div>

    <div id="gameplay" class="tab-pane fade ">
                <br><br>
                1.VSM is a multiplayer game which is conducted online.<br>
                2.Participants interested need to login to TECHNOVANZA website and can play this game when it will be put live.<br>
                3.Every participant is given some amount of money(dummy) before he/she starts playing the game i.e. the balance of each participant is credited with a particular amount initially.<br>
                4.Here, you can buy and sell dummy shares of various companies.<br>
                5.The company listings would be according to BSE(Bombay Stock Exchange).<br>
                6.Participants can view the number of shares and price of each share for every company. (Note: The information would not be real and it is only for the sake of playing game)<br>
                7.Participants can now choose for which company they would like to invest. This can be done by buying the shares of that company.<br>
                8.Every time a participant buys shares of a particular company, corresponding amount would be deducted from his/her balance.<br>
                9.Participants could also sell their shares, which they own, at current price of the shares.<br>
                10.The rate of shares of a particular company is decided according to the growth/decline of the company in Stock Market, news pertaining to that company etc.<br>
                11.The rates will be fluctuating in between the game and would be visible to all the participants.<br>
                12.Participants could also view the growth of company from the period when the game started in form of graphs which would help them decide which company’s share to buy.<br>
                13.Participants will be provided with the new statistics and can plan accordingly<br>
                14.The participant with highest balance at the end of the game will be the winner of VSM.<br>
                15.The final balance of each participant would be calculated by summing the price value of all the shares the participant owns and the money(amount) that he has.<br>
              

        
    </div>

    <div id="rules" class="tab-pane fade ">
              <br><br>
              1.Every participant is allowed to play the game with single login identity. Participants found playing the game with multiple logins would be disqualified.<br>
              2.Participants can not buy more than a particular amount of shares of a particular company which would be fixed by the game developer team and would be conveyed to all the participants at start of the game.<br>
              3.The decisions taken by the organisers would be final and binding.<br>
              
    </div>
    <div id="result" class="tab-pane fade">

     


    </div>
    <div id="contact" class="tab-pane fade ">

      

    </div>

    <div id="gallery"  class="tab-pane fade in active">

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

