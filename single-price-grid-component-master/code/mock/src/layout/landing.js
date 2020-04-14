import React from 'react';
const Layout =()=> {
        return(
            <div className="container box">
              <div className="row">
                <div className="col box1">
                
                <h4>Join our community</h4>

                <p className="text">30-day, hassle-free money back guarantee</p>

                <p className="para">Gain access to our full library of tutorials along with expert code reviews. 
                Perfect for any developers who are serious about honing their skills.</p>
                </div>
              </div>
              <div className="row">
                <div className="col box2">
               <h5>Monthly Subscription</h5>

               <p id="subs"> <strong>$29</strong><span> per month</span></p>

               <p id="access">Full access for less than $1 a day</p>

                <form className="form">
                 <button type="submit" id="submit">Sign Up</button>
                </form>
                </div>
                <div className="col box3">
                <h5>Why Us</h5>

                <p className="tuts">Tutorials by industry experts<br></br>
                Peer &amp; expert code review<br></br>
                Coding exercises<br></br>
                Access to our GitHub repos<br></br>
                Community forum<br></br>
                Flashcard decks<br></br>
                New videos every week</p>
                </div>
             </div>
                <footer>
                    <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">Anagha</a>.
                    </p>
                </footer>
            </div>
         
) }
export default Layout;
