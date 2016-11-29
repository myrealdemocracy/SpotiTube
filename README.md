# SpotiTube
Users login with their Spotify account and we find matching YouTube videos for songs in their playlist of choice.
<!doctype html>
<html>
<head>
<title>SpotiTube</title>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">
 <link rel="stylesheet" type="text/css" href="assets/style.css">
</head>
<header id="masterhead">
        <div class="container">
            
            <nav>
                <a href="index.html"><h5 class="center-align"><b>About<b></a></h5>
  </div>
                
    
            </nav>
        </div>
    </header>
    <div id="main-container" class="container">
        <section class="main-section">
            <h1>About Spotitube</h1>
    
     <div class="divider"></div>
  <div class="section">
    <h5>How It All Began</h5>
    <p>Spotitube was originally designed by Morgan () using a different programming language, Python. Our group of up and coming web developers began to transform the Python language to Javascript. Spotiube contains multiple programming languages designed to make user usage easy and pleasing to the eye. Programs include Javascript, HTMl, CSS with the help of the website Materialize, OAuth and the Spotify and Youtube Api's</p>
  </div>
  <div class="divider"></div>
  <div class="section">
    <h5> Getting Started</h5>
    <p>So the first thing we had to do is have a modal pop up immediately displaying the Spotify login, with a Welcoming message about what our website actually does. If the user denies access to Spotify display a different modal explaining that our website needs access to their Spotify account in order to function, then we another login to Spotify button would appear to redirect them to login again.</p> <br> </br>
    <p>
        After that we needed another modal to pop up which is the progress bar indicating how far along the loading is going when the user clicks on the "convert to youtube" button. The user cannot close the modal, but the modal closes automatically after the Videos have been converted and sorted from Youtube.</p> 
        
        <p>Then we had to Display the users Playlists. On our website we load 20 playlist for the user,and if the user has more than 20 playlist there is a button appended to the bottom that the user can press to load more of their playlist. Then we focused on when the page is redirected back to our site after successful authentication, and after we request the playlist data from Spotify, the side menu automatically, then when the User selects the playlist for Youtube conversion on the side menu, the side bar closes.Then we had to get the tracks info from Spotify API for selected playlist and store data for each track into an array of objects.</p>
        <p>Then came the styling for the left side. We set the tracks table to not extend past the height of the window.For larger playlists, we made it scrollable.Then we made it so that the user was able to scroll on the left side without it affecting the right side. Then we made the player take up the entire space of the left side. </p> 
        
        <p>After all the styling on the Spotify side, we looped through our trackData array to search YouTube for 5 videos for each song which we then used to create data structures to hold temporary search results. We later wrote the algorithm to rank the search results in terms of relativity to the track and pick the highest scorer.After all of that we moved the  progress bar at appropriate intervals which closed the modal upon completion.</p>
        <p>One of the last parts to our project was the completion of the styling to the Youtube side.We had to display the Users YouTube videos after the ranking, and when the user clicks on the video thumbnails, the video opens for viewing above the other grids of videos. The videothat is being viewed changes as user clicks on different thumbnails.</p>
        <p>The last part of our project</p>
  </div>
  <div class="divider"></div>
  <div class="section">
    <h5>Future Development</h5>
    <p>This is where we would talk about what we want to add to the webpage in the future or if we had more time.</p>
  </div>
<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thank You</h5>
                <p class="grey-text text-lighten-4">Thank you for viewing our About me page. To go back to our website simply backspace.</p>
               
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text"></h5>
                <i class="fa fa-github fa-3x" aria-hidden="true"></i>
            
                <ul>
                  
                  <li><a class="grey-text text-lighten-3" href="#!">Connect with us on github! <link rel="stylesheet" href="https://github.com/spotitube-team/SpotiTube"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2016 Copyright Text
           
            </div>
          </div>
        </footer>
            
</body>
</html>