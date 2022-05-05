import React from "react";
import './contact.scss';

function Contact() {
    return (
        <div>
            <section class="mb-4 p-3 mt-5 contact">
                
                

                <div class="row justify-content-around">
                    <div class="col-lg-5 mb-md-0 form-row mt-5">
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Book Now</h2>
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div class="row">
                                <div class="col-lg-6 mb-2">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"  placeholder="Your Name" />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-2">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"  placeholder="Your Email"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-2">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"  placeholder="Subject" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-2">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"  placeholder="Your Message"></textarea>
                                    </div>

                                </div>
                            </div>
                        </form>

                        <div class="text-md-left form-button">
                            <a class="btn" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                    <div class="col-lg-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Serving North and South Carolina, Georgia and Tennessee</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>980-800-3020</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>emailme@photoboothlady.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact;