

<style type="text/css">
    .navbar-collapse.collapse {
        display: none!important;
    }
    /*for modal */
    
    #modal1 {
        margin-top:50px;
        width:50% !important;
        max-height:90% !important; 
        
        
    }
    ::-webkit-scrollbar {
display: none;
}
::-moz-scrollbars
{
    display: none;
}

</style>

<ul id="dropdown3" class="dropdown-content">
    <li><a href="logout.php">LOG OUT</a>
    </li>
    <li><a href="profile.php">MY PROFILE</a>
    </li>
</ul>



<div class="navbar-fixed" id="menu">
    <nav class="black">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src="images/logo.png">
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">




                <li><a href="index.php">Home</a>
                </li>
                <li><a href="Events/event.php">Event</a>
                </li>
                <li><a href="spotlight/spotlight.php">Spotlight</a>
                </li>
                <li><a href="Initiatives/initiative.php">Initiatives</a>
                </li>
                <li><a href="Lectures/lectures.php">Lectures</a>
                </li>
                <li><a href="Competitions/competition.php">Competitions</a>
                </li>
                <li><a href="Gallery/gallery.php">Gallery</a>
                </li>
                <li><a href="">Press</a>
                </li>

                <?php error_reporting(0); if($_SESSION[ "login"]=="yes" ) { echo "<li><a class='dropdown-button' href='#!' data-activates='dropdown3'>";echo $_SESSION[ 'name'];echo "<i class='material-icons right'>arrow_drop_down</i></a></li>"; } else { echo "<li><a class='modal-trigger' href='#modal1'>My Account</a></li>"; } ?>


            </ul>

            <ul id="slide-out" class="side-nav black">
                <a href="#" class="brand-logo"><img src="images/logo.png">
                </a>
                <br>


                <?php error_reporting(0); if($_SESSION[ "login"]=="yes" ) { echo "<li><a class='dropdown-button' href='#!' data-activates='dropdown3'>";echo $_SESSION[ 'name'];echo "<i class='material-icons right'>arrow_drop_down</i></a></li>"; } ?>
                <li><a style="color:white" href="index.php">Home</a>
                </li>
                <li><a style="color:white" href="Events/event.php">Event</a>
                </li>
                <li><a style="color:white" href="spotlight/spotlight.php">Spotlight</a>
                </li>
                <li><a style="color:white" href="Initiatives/initiative.php">Initiatives</a>
                </li>
                <li><a style="color:white" href="Lectures/lectures.php">Lectures</a>
                </li>
                <li><a style="color:white" href="Competitions/competition.php">Competitions</a>
                </li>
                <li><a style="color:white" href="Gallery/gallery.php">Gallery</a>
                </li>
                <li><a style="color:white" href="">Press</a>
                </li>
                <li><a style="color:white" class="modal-trigger" href="#modal1">My Account</a>
                </li>
            </ul>


            <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>


        </div>
    </nav>
</div>




<!-- Modal Structure -->
<div id="modal1" class="modal white">
 <div class="modal-content">
 <div class="row">
<a class="modal-close" style="float:right;margin-bottom:5px;color:black;font-size:1.4em;">X</a>
        </div>
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s3" style="font-color:black;"><a href="#test1">LOGIN</a>
                    </li>
                    <li class="tab col s3" style="font-color:black;"><a href="#test2">SIGN UP</a>
                    </li>

                </ul>
            </div>



            <div id="test1" class="col s8">
                <br>
                <br>
                <br>
                <form method="post" action="technovanza/login.php">
                    <div class="row">
                        <div class="input-field col s12 m12 ">
                            <i class="small material-icons prefix">person_pin</i>
                            <input name="email" type="email" class="validate">
                            <label for="icon_prefix">Email</label>
                        </div>
                    </div>



                    <div class="row">
                        <div class="input-field col s12 m12 S">
                            <i class="small material-icons prefix">lock</i>
                            <input name="password" type="password" class="validate">
                            <label for="icon_prefix">Password</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s3 offset-s3">
                            <center>
                                <button class="btn waves-effect waves-light" type="submit" name="submit2">LOGIN</button>
                            </center>
                        </div>

                        <div class="col s3" style="margin-top:10px;">
                            <center>
                                <a href="#" style="color:black;">Forget password?</a>
                            </center>
                        </div>
                    </div>
                </form>



            </div>
            <!-- div id with test1 ends here-->



            <div id="test2" class="col s12">





                <form method="post" action="technovanza/register.php">
                    <div class="row">
                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">person_pin</i>
                            <input name="name" type="text" class="validate">
                            <label for="icon_prefix">Name</label>
                        </div>

                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">mail</i>
                            <input name="email" type="text" class="validate">
                            <label for="icon_prefix">Email</label>
                        </div>

                    </div>

                    <div class="row">
                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">lock</i>
                            <input name="password" type="password" class="validate">
                            <label for="icon_prefix">Password</label>
                        </div>

                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">lock</i>
                            <input name="confirm" type="password" class="validate">
                            <label for="icon_prefix">Confirm pswd</label>
                        </div>

                    </div>

                    <div class="row">
                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">school</i>
                            <input name="college" type="text" class="validate">
                            <label for="icon_prefix">College</label>
                        </div>

                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">description</i>
                            <input name="branch" type="text" class="validate">
                            <label for="icon_prefix">Branch</label>
                        </div>


                        <div class="input-field">

                            <input name="eventname" type="hidden" value="<?php $a='f';echo $a; ?>" class="validate">

                        </div>


                    </div>

                    <div class="row">
                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">today</i>
                            <input name="year" type="text" class="validate">
                            <label for="icon_prefix">Year</label>
                        </div>

                        <div class="input-field col s12 m5 offset-m1">
                            <i class="small material-icons prefix">call</i>
                            <input name="mobile" type="text" class="validate">
                            <label for="icon_prefix">Mobile</label>
                        </div>
                        <div class="input-field">

                            <input name="isEvent" type="hidden" value="<?php $a='f';echo $a; ?>" class="validate">

                        </div>
                    </div>

                    <div class="row">
                        <center>
                            <button class="btn waves-effect waves-light" type="submit" name="submit">REGISTER</button>
                        </center>
                    </div>

                </form>





            </div>
            <!-- div id with test 2 ends here -->
        </div>
        <!--div class=row ends here-->


    </div>
    <!--   modal content ends here-->

</div>
<script type="text/javascript" src="js/jquery.min.js"></script>
 <script type="text/javascript">
    $(document).ready(function() {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
       $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '20%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
    }

  );


    });

    $(".button-collapse").sideNav();
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
 

<!--  modal class with id modal1 ends here-->


