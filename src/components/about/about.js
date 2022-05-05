import React from "react";
import './about.scss';

function About() {
    return (
        <div className="container">
            <h1 class="text-center mt-5 mb-4">About The Photo Booth Lady...</h1>
			<div class="row text-center responsive">
				<div class="videoWrapper">
					<video class="mejs__player" style={{width:"100%", height:"100%"}} controls width="100%" height="100%"
					preload="auto" poster="http://www.thephotoboothlady.com/img/babackgroundsm.jpg">
					<source src="http://www.thephotoboothlady.com/img/PhotoboothladyLLC.mp4" type="video/mp4" />
				    </video>
                </div>
            </div>
			<div class="mt-5">
				<p>The Photo Booth Lady is committed to providing a quality service at a fair price. We educate our customers, treat them nicely and above all else respect their time!</p>
				<br/>
				<p>Unlike many other photo booths companies, The Photo Booth Lady is not a large corporation, it's owned and operated by me, the founder, Michelle Pennington and my husband. Because of that I can work with almost any budget and my customers get great personalized service and attention! We are a preferred Bark.com and Thumbtack Professional and have won a "Best Of" award for 2016 ~ please check out our 5 STAR reviews!</p><br/>

				<p>All of our booth rentals are for UNLIMITED photo booth sessions, so your guests can enjoy the booth all day/evening long without the worry of 'using it too much.'</p> <br/>

				<p>We create photo layouts specific to your special event and I promise you will LOVE it!</p> <br/>
				<p>We supply all the props to make your photos even more fun and exciting and if you are having a themed party we provide themed props as well.</p><br/>

				<p>If you are social media crazy then we have the perfect booth for you. Our photo booth can upload your photos directly to Facebook, Instagram, and Twitter and your party/event can be trending before it's even over. AWESOME
				</p><br/>
			</div>
        </div>
    )
}

export default About;