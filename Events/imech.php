 <!--THIS PAGE USES FLOWTYPE JS-->

 <!DOCTYPE html>
 <?php  session_start(); ?>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="../css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
<title>I Mech|Technovanza</title>
      <style>

body::-webkit-scrollbar {
    width: 1em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

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
 
}
h1
{
  margin-top:100px;
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
<?php  include("../navbar.php"); ?>

<div class="container">
<div class="row">
<div class="col l12 m12 s12">
<center>
<h1><hr>I MECH</hr></h1>
</center>
<hr>
</hr>
</div>
</div>
  

  <!--CARDS BEGIN HERE-->
    <div class="row">
        <div class="col l4 m4 s6 offset-l1 offset-m1">

          <div class="card hoverable">
            <div class="card-image">
              <div class="imgWrap">
              <img class="img" src="fun_bg.jpg" >
              <div class="ri"><p class="imgDescription "><br><br>
                    <b>PRIZE : RS 20,000</b>
                    
              </p></div>
              </div>
              <span class="card-title"><div class="re">ROBOWARS</div></span>
            </div>
            <div class="card-content hide">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <div class="se"><a href="robowars.php">READ MORE</a></div>
            </div>
          </div>
        </div>

         <div class="col l4 m4 s6 offset-l1 offset-m1">

          <div class="card hoverable">
            <div class="card-image">
              <img class="img" src="fun_bg.jpg">
              <span class="card-title"><div class="re">VRC</div></span>
            </div>
            <div class="card-content hide">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <div class="se"><a href="vrc.php">READ MORE</a></div>
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





    

    <!--IN CASE IF NEDDED
    <div class="row">
         <div class="col l3 m6 s12">
            <div class="card hoverable">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="photos/robowar.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                <p><a class="waves-effect waves-light modal-trigger" href="#modal1">Read more</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
      </div> 
    </div>


    </div> 

   



    

  
  <div id="modal1" class="modal modal-fixed-footer">

    <div class="modal-header">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
      <div class="modal-content">
    


        <div class="row">
            <div class="col s12">
              <ul class="tabs">
                <li class="tab col s3"><a class="active" href="#test1">Introduction</a></li>
                <li class="tab col s3"><a  href="#test2">Rules</a></li>
                <li class="tab col s3 "><a href="#test3">Judging criteria</a></li>
                <li class="tab col s3"><a href="#test4">Tuotorials</a></li>
                <li class="tab col s3"><a href="#test4">Contact us</a></li>
              </ul>
            </div>

            <div id="test1" class="col s12"><img src="photos/robowar.jpg" height="300" width="300"></div>
            <div id="test2" class="col s12">Test 2Four wickets down, 302 on the board. An excellent first day for a batting side, by almost any measure. Almost. India's number six was R Ashwin, a man who has played 32 Test matches, a man with undoubted batting talent, but also a man who had never batted anywhere in the top six before, and had only twice even batted at seven. On Thursday, Ashwin walked in at 236 for 4, a far less secure situation than 302 for 4.Four wickets down, 302 on the board. An excellent first day for a batting side, by almost any measure. Almost. India's number six was R Ashwin, a man who has played 32 Test matches, a man with undoubted batting talent, but also a man who had never batted anywhere in the top six before, and had only twice even batted at seven. On Thursday, Ashwin walked in at 236 for 4, a far less secure situation than 302 for 4.Four wickets down, 302 on the board. An excellent first day for a batting side, by almost any measure. Almost. India's number six was R Ashwin, a man who has played 32 Test matches, a man with undoubted batting talent, but also a man who had never batted anywhere in the top six before, and had only twice even batted at seven. On Thursday, Ashwin walked in at 236 for 4, a far less secure situation than 302 for 4.</div>
            <div id="test3" class="col s12">Test 3Four wickets down, 302 on the board. An excellent first day for a batting side, by almost any measure. Almost. India's number six was R Ashwin, a man who has played 32 Test matches, a man with undoubted batting talent, but also a man who had never batted anywhere in the top six before, and had only twice even batted at seven. On Thursday, Ashwin walked in at 236 for 4, a far less secure situation than 302 for 4.</div>
            <div id="test4" class="col s12">Test 4Four wickets down, 302 on the board. An excellent first day for a batting side, by almost any measure. Almost. India's number six was R Ashwin, a man who has played 32 Test matches, a man with undoubted batting talent, but also a man who had never batted anywhere in the top six before, and had only twice even batted at seven. On Thursday, Ashwin walked in at 236 for 4, a far less secure situation than 302 for 4.</div>
       </div>
    </div>

      <div class="modal-footer">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">CLOSE</a>
    </div>
  </div>-->



















      <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="../js/materialize.min.js"></script>
     <script type="text/javascript" src="../js/flowtype.js"></script>
 
      <script type="text/javascript">

 $('p').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :20,
 maximum : 1200
}); 

 $('h').flowtype({
 minimum :500 ,
 minFont :8,
 maxFont :20,
 maximum : 1200
});   
      </script>
       

    </body>
  </html>