import React from "react";
import './our_booths.scss';

function OurBooths (){
    return (
        <div className="text-center ourbooth row justify-content-around">
            <h1 className="ob-title">Our Booths</h1>
            <p>Photo Booth Features</p>
            <div class="card text-center col-sm-10 col-lg-3 mb-3">
                <img src="/images/360Stock.jpg" class="card-img-top image-fluid" alt="Fissure in Sandstone"/>
                <div class="card-body">
                    <span className="card-title"><h1>360 VIDEO</h1></span>
                    <h1 class="card-text">$350-$450/hr</h1>
                    <hr />
                    <p className="card-text">Digital prints $99/hr</p>
                    <hr />
                    <p classNameName="card-text">$449 (3 hrs)</p>
                    <hr />
                    <p classNameName="card-text">$599 (4 hrs)</p>
                    <hr />
                    <p classNameName="card-text">Open Booth Concept, Unlimited Real-Time Videos, Custom Graphics, Animated Props, Video Soundtrack, Quality Design, Online Video Library, VIP Red Carpet Entry, Rope & Stanchions, 360 LED Lighting, Event Branding, Two Staff Attendants.</p>
                </div>
            </div>
            <div className="card text-center col-sm-10 col-lg-3">
                <img src="/images/MirrorBoothWedding.jpg" className="card-img-top mx-auto image-fluid" alt="Fissure in Sandstone"/>
                <div className="card-body">
                <span classNameName="card-title"><h1>MIRROR BOOTH</h1></span>
                    <h1 className="card-text">$300-$400/hr</h1>
                    <hr />
                    <p className="card-text">Digital prints $99/hr</p>
                    <hr />
                    <p classNameName="card-text">$449 (3 hrs)</p>
                    <hr />
                    <p classNameName="card-text">$599 (4 hrs)</p>
                    <hr />
                    <p classNameName="card-text">Open Booth Concept, Unlimited Photo Booth Sessions, Unlimited Prints, Photo Strips, Pic Collages, Professional Prop Kit, LED Lighting, Interactive Touch Screen, On-site Gaming, Green Screen Adaptable, Emoji Stamps, Event Advertising, Two Staff Attendants.</p>
                </div>
            </div>
            <div className="card text-center col-sm-10 col-lg-3">
                <img src="/images/PartyBooth.jpg" className="card-img-top mx-auto image-fluid" alt="Fissure in Sandstone"/>
                <div className="card-body">
                <span classNameName="card-title"><h1>PARTY BOOTH</h1></span>
                    <h1 className="card-text">$200/hr</h1>
                    <hr />
                    <p className="card-text">Digital prints $99/hr</p>
                    <hr />
                    <p classNameName="card-text">$449 (3 hrs)</p>
                    <hr />
                    <p className="card-text">$599 (4 hrs)</p>
                    <hr />
                    <p classNameName="card-text">Open Booth Concept, Closed Booth Concept, Unlimited Photo Booth Use, Instant Prints, Choice of Photo Design, Photo Strips, Pic Collages, Digital Photo Sharing, Online Gallery of Photos, Event Marketing, Customer Follow-up (Business Use Only), Survey Questionnaire (Business Use Only), Friendly Booth Attendant.</p>
                </div>
            </div>
        </div>
    )
}
export default OurBooths;