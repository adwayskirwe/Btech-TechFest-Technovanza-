 <!--THIS PAGE USES FLOWTYPE JS-->

 <!DOCTYPE html>
 <?php  session_start(); ?>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
<title>I Build|Technovanza</title>
      <style>



      .container{
          width: 85vw;
      }

      .card-panel{
        color:white;
      }

      .img{
        width:100%;
        height:auto;
      }

      .re{
        font-size:1em;
        font-weight: bold;
      }

      .se{
        font-size: 0.8em;
        font-weight: bold;
      }

      

      div.ri{
        text-align: center;
        font-size: 1.5em;
        color: black;

      
      }
/*IF NEEDED
        .card:hover .card-content {
        font-size:110%;
        transition: 0.25s;
        } 

        .card:hover .card-image img{
          height: 100%;
          width:100%;
          transition: width 10s height 10s;
          z-index: 1;

        } 

        .modal{
          width: 90%;
          max-height: 90%;
        }

        TRANSLUCENT OVERLAY IMAGE ON CLICK

*/

  
    
    .imgWrap {
  position: relative;
  
  overflow: hidden;
}

.imgDescription {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  /* offset left fullsize of container 
  since overflow is hidden
  */
  left: calc(100% * -1);
  /* make sure there are no margins for full overlay*/
  margin: 0px 0px 0px 0px;
  background: rgba(183, 28, 28, 0.5);
  color: #fff;
  /* transition after hover (left to right)*/
  transition: .8s;
}

.imgWrap:hover .imgDescription {
  /* transition during hover (right to left)*/
  transition: .8s;
  left: 0px;
  color: black;
}
.brand-logo img
{
  padding: 9px 15px;
  height:65px;
}
#menu {
  position:fixed;
  top:0px;
  width:100%; 
  z-index:9999;
  display: none;
}


@media only screen and (max-width: 768px)
{div.re
  {
font-size:0.6em;
}
}
@media only screen and (min-width: 768px)
{div.se
  {
font-size:0.9em;
}
}

      </style>
    </head>

    <body>
<?php  include("navbar.php"); ?>
<div class="container">
<div class="row">
  <div class="col l12 m12 s12">
<center>
<h1><hr>I BUILD</hr></h1>
</center>
<hr>
</hr>
</div>
</div>
  <!--CARDS BEGIN HERE-->
    <div class="row">
        <div class="col l4 m4 s6">

          <div class="card hoverable">
            <div class="card-image">
              <div class="imgWrap">
              <img class="img" src="images/web/Bridge the gap.jpg" >
              <div class="ri"><p class="imgDescription "><br><br>
                    <b>PRIZE : RS 20,000</b>
                    
              </p></div>
              </div>
              <span class="card-title"><div class="re">Bridge The Gap</div></span>
            </div>
            <div class="card-content hide">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <div class="se"><a href="bridgethegap.php">READ MORE</a></div>
            </div>
          </div>
        </div>

         <div class="col l4 m4 s6">

          <div class="card hoverable">
            <div class="card-image">
              <img class="img" src="fun_bg.jpg">
              <span class="card-title"><div class="re">Smart City</div></span>
            </div>
            <div class="card-content hide">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <div class="se"><a href="smartcity.php">READ MORE</a></div>
            </div>
          </div>
        </div>

         


      



      
        



        
       
<!--
         <div class="col l4 m4 s6">

          <div class="card hoverable">
            <div class="card-image">
              <img src="photos/robowar.jpg">
              <span class="card-title">WALL-E</span>
            </div>
            <div class="card-content hide">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>

         <div class="col l4 m4 s6">

          <div class="card hoverable">
            <div class="card-image">
              <img src="photos/robowar.jpg">
              <span class="card-title">ROBOSOCCER</span>
            </div>
            <div class="card-content hide">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>

        -->




      </div><!--3rd row ends here-->




      </div><!--container class ends here-->





    














      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript">
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
       

    </body>
  </html>