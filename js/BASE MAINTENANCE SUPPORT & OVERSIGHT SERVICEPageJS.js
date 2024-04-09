
const set2english = () => {
    document.getElementById("mainContent").innerHTML = `
    <div class="fh5co-loader"></div>

	<div id="page">
	<nav class="fh5co-nav" role="navigation">
	<div class="container">
		<div class="row">

			<div class="col-xs-12 text-center menu-1 menu-wrap">
				<ul>
					<li class="active">
						<div class="col-xs-12 text-center logo-wrap">
							<div id="fh5co-logo"><a href="index.html"><img style="height: 100px;"
										src="images/logoaero (2).png" /></a></div>
						</div>
					</li>
					<li><a href="about.html">About US</a></li>
					<li style="position: relative;" class="has-dropdown">
						<a  id="t1"href="engineering service.html">ENGINEERING SERVICES  <span style="float:right" id="nav0bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="CONSULTANCY.html">CONSULTANCY</a></li>
							<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">BASE MAINTENANCE
									SUPPORT </a></li>
							<li><a href="Recruitment Services.html">Recruitment Services</a></li>


						</ul>
					</li>

					<li style="position: relative;" id="nav1" class="has-dropdown">
						<a href="technical manegment support.html">Technical Management Support  <span style="float:right" id="nav1bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="aircraft asset management.html">AIRCRAFT ASSET MANAGEMENT</a></li>
							<li><a href="project support.html">PROJECT MANAGEMENT </a></li>
							<li><a href="record review.html">RECORDS MANAGEMENT</a></li>
							<li><a href="AIRCRAFT LEASE TRANSFERS.html">AIRCRAFT LEASE TRANSFERS</a></li>
							<li><a href="aircraft repossessing.html">AIRCRAFT REPOSSESSING</a></li>


						</ul>
					</li>
					<li class="has-dropdown"><a href="technical training.html">Aviation Training
							Services  <span style="float:right" id="nav2bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
						  </svg></span></a>
						<ul class="dropdown">
							<li><a href="esa part 66 examination.html">EASA BASIC MODULES EXAMINATION </a>
							</li>
							<li><a href="type rating courses.html">TYPE RATING COURSES</a></li>

							<li><a href="ONLINE COURSES.html"> ONLINE COURSES </a></li>
							<li><a href="OTHERS TRAINING.html"> OTHERS TRAINING </a></li>

							<li class="itemToHoverOver">
								<a href="CABIN CREW INITIAL TRAINING.html"> CABIN CREW  TRAINING </a>
								<ul class="dpdn">
									<div>
										<li><a href="HOW TO BECOME A CABIN CREW.html"> <svg
													xmlns="http://www.w3.org/2000/svg" width="16"
													height="16" fill="currentColor"
													class="bi bi-arrow-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
														d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
												</svg> HOW TO BECOME A CABIN
												CREW ?
											</a></li>
									</div>
								</ul>

							</li>


						</ul>
					</li>

					<li><a href="contact.html">Contact</a></li>
					<li class="has-dropdown"><img class="mobileHide" src="images/en.png"
							style="width: 30px; height: 30px; cursor: pointer;"></a>
						<ul style="top: 110% !important;" class="  dropdown hideNonMobile mobileLgNav " >
							<li onclick="changeLanguage('fr')" style="cursor: pointer; color : white"><img
									src="images/fr.png" style="width: 30px; height: 30px; cursor: pointer;">
								Frensh</li>

						</ul>
					</li>
				</ul>
			</div>
		</div>

	</div>
	<!-- </div> -->
</nav>

		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner"
			style="background-image: url(images/change5.jpg);" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="display-t js-fullheight">
							<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
								<h1>	BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE  </h1>

							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div id="fh5co-featured-menu" style="padding: 3% 0% 0% 0%;" class="fh5co-section">
			<div class="container">
				<div class="row">


					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" >
						<div class="fh5co-item animate-box">
							<img src="images/change7.jpg" class="img-responsive" alt="">
							<h3  style="color: #bd9973; padding-bottom: 2%;">A TRULY GLOBAL SOLUTION TO ENSURE SMOOTH MAINTENANCE, BASED ON MAINTENANCE SUPPORT AND OVERSIGHT SERVICES</h3>
							<div id="article1" style="overflow: hidden;height:250px"  >
							<p  style="color : white !important;">
								With over 20 years’ of providing Technical services  to the Aviation sector, AeroTEC are proud to introduce our Base Maintenance Support & oversight services.
							</p>
							<p  style="color : white !important;">
								AeroTEC provides a flexible and adaptable base maintenance support & oversight service to airlines who require extra support for C-check. At AeroTEC we have our own expert team of high-quality Technical Representatives, Project Supervisors & Material Coordinators, backed by 20 years of experience in the industry.
							</p>
                            <p  style="color : white !important;">
                                Our Base Maintenance team are highly equipped to provide critical management, reporting & problem identification, and can put together courses of action for both Airlines & MRO.
                            </p>
                            <p  style="color : white !important;">
                                Working with a team with many years of industry knowledge and experience and have supported some of the world’s leading airlines Including Royal Air Maroc & Air Arabia Group, Air France , Vueling, Ryanair.
                            </p>
							</div>
							<div style="width:100% ; display:flex; justify-content:center">
							<button id="bt1" onclick="showtext1()" type="button" style="    background-color: transparent;color: #bd9973;border: 1px solid #bd9973;border-radius: 25px;" >Read more</button>
							</div>

						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" style="padding: 3% 0% 0% 0%;" >
						<div class="fh5co-item margin_top animate-box">
							<img style="width: 100%;" src="images/change9..jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"> WHY CHOOSE BASE MAINTENANCE SERVICES FROM AeroTEC ?

							</h3>
							<div id="article2" style="overflow: hidden;height:250px"  >

							<ul  style="color : white !important;">
                                <li>
                                    Choosing AeroTEC for Base Maintenance means you’re working with a team with 20 years of industry knowledge and experience.
                                </li>
                                <li>
                                    Our commitment to offering flexible availability for clients worldwide guarantees you expert support as and when you require it.
                                </li>
                                <li>
                                    We have a team of high-quality, trusted specialists and experts who are asset focused.
                                </li>
                                <li>
                                    Strong communication between Airline and MRO ensures transparency at every stage of maintenance.
                                </li>
                                <li>
                                    We’re committed to ensuring that checks are completed on time and on budget, every time.
                                </li>
                                <li>
                                    We can identify problems, create solutions and influence outcomes with ease.
                                </li>
                            </ul>
                            <p  style="color : white !important;">
                                For a more detailed overview of our full base maintenance support packages and to find out how AeroTEC can help you, get in touch today to talk to our expert representatives.


                            </p>
							<p  style="color : white !important;">
							Our technical representatives will coordinate the planning with the MRO as per the work scope agreed. They not only know the requirements, but also the type of aircraft and the things they need to pay attention to.
							</p>
							<p  style="color : white !important;">
							By being on site, with the aircraft, they will conduct their own inspections constantly. When areas are opened, they will have a close look at the surrounding area and document that so that you know what the quality is and where future issues might arise.
							</p>
							<p  style="color : white !important;">
							Thinking of solutions, we always try to find the most economical and optimal option for finding the correct parts and components, considering time and costs. When a repair is needed, our representatives have the knowledge to think along with the MRO or propose repair options that are the most convenient, cost effective and according to the standards required for future lease or aircraft sales.
							</p>
							<p  style="color : white !important;">
							A crucial item is documentation : whatever is done during the base maintenance visit, it needs to be correctly documented. The completed task cards are audited, repair documents and certification are filed. We make sure that the base maintenance visit is complete and compliantly.							</p>
						</div>
							<div style="width:100% ; display:flex; justify-content:center">
							<button id="bt2" onclick="showtext2()" type="button" style="    background-color: transparent;color: #bd9973;border: 1px solid #bd9973;border-radius: 25px;" >Read more</button>
							</div>
							</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container fh5co-section">


		<div class="row">
			<div style="    height: 600px;display :flex; flex-direction: column; justify-content: center;"
				class="col-md-6  col-sm-6 ">
				<h1 style="color: white;">Don't be shy, let's chat.</p>

					<div style="display : flex ; justify-content:center"  ><a href="mailto:info@yourdomainname.com" class="btn btn-primary btn-outline">Contact
							Us</a>
					</div>
			</div>
			<div class="col-md-6  col-sm-6 ">
				<form id="form-wrap" action="https://formspree.io/f/mpzvqyle" method="POST">
					<div class="row form-group">
						<div class="col-md-12">
							<label for="lastName">Your Last Name</label>
							<input type="text" class="form-control" id="lastName" name="lastName">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="Firstname">Your First Name</label>
							<input type="text" class="form-control" id="Firstname" name="Firstname">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="Companyname">Your company Name</label>
							<input type="text" class="form-control" id="Companyname" name="Companyname">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="email">Your Email</label>
							<input type="text" class="form-control" id="email" name="email">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="subject">Your subject</label>
							<input type="text" class="form-control" id="subject" name="subject">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="message">Your Message</label>
							<textarea name="message" id="message" cols="30" rows="10"
								class="form-control"></textarea>
						</div>
					</div>
					<p id="my-form-status"></p>
					<div class="row form-group">
						<div class="col-md-12">
							<input id="my-form-button" type="submit" class="btn btn-primary btn-outline btn-lg"
								value="Submit Form">
						</div>
					</div>

				</form>
			</div>
		</div>

	</div>


		<footer style="padding: 0px;" id="fh5co-footer" role="contentinfo" class="fh5co-section">
			<div style="padding:3% 2% 0% 2%;">
				<div class="row ">
					<div class="col-md-3 fh5co-widget">
						<a href="./index.html"><img src="images/logoaero (2).png" /></a>
					</div>
					<div class="col-md-1 col-md-push-1 fh5co-widget">
						<h4>Links</h4>
						<ul class="fh5co-footer-links">
							<li><a href="/index.html">Home</a></li>
							<li><a href="/about.html">About</a></li>
							<li><a href="technical training.html">Services</a></li>
						</ul>
					</div>

					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4>Categories</h4>
						<div style="display: flex;">
							<ul class="fh5co-footer-links">
								<li><a href="/project support.html">Project support</a></li>
								<li><a href="/AIRCRAFT LEASE TRANSFERS.html">Transition Support</a></li>
								<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">Base Maintenance Representative</a></li>
								<li><a href="/engineering service.html">Engineering support</a></li>
							</ul>

						</div>
					</div>
					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4>Categories</h4>
						<div style="display: flex;">

							<ul class="fh5co-footer-links">
								<li><a href="esa part 66 examination.html">EASA Part 66 Examination</a></li>
								<li><a href="type rating courses.html">TYPE RATING COURSES</a></li>

							</ul>
						</div>
					</div>

					<div class="col-md-4 col-md-push-1 fh5co-widget">
						<h4>Contact Information</h4>
						<ul class="fh5co-footer-links">
							<li><a href="tel://212698977462">+212698977462</a></li>
							<li><a href="mailto:contact@aerotecsupport.com">contact@aerotecsupport.com</a></li>
						</ul>

						<div class="newFooter ">
							<div class="rounded-social-buttons">
								<a class="social-button facebook" href="https://www.facebook.com/profile.php?id=61557399107688" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg><!-- <i class="fab fa-facebook-f"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button twitter" href="https://twitter.com/AeroTecTraining" target="_blank"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button linkedin" href="https://www.linkedin.com/in/aerotech-support-a19791300/" target="_blank"><svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><svg class="svg-inline--fa fa-whatsapp fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><!-- <i class="fab fa-whatsapp"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button instagram" href="https://www.instagram.com/aerotecsupport24/" target="_blank"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram"></i> Font Awesome fontawesome.com --></a>
							</div>
						</div>

					</div>

				</div>


			</div>
		</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
	</div>



    `
}


const set2french = () => {
    document.getElementById("mainContent").innerHTML = `
    <div class="fh5co-loader" style="display: none;"></div>

	<div id="page"><nav class="fh5co-nav" role="navigation">
	<div class="container">
		<div class="row">

			<div class="col-xs-12 text-center menu-1 menu-wrap">
				<ul>
					<li class="active">
						<div class="col-xs-12 text-center logo-wrap">
							<div id="fh5co-logo"><a href="index.html"><img style="height: 100px;"
										src="images/logoaero (2).png" /></a></div>
						</div>
					</li>
					<li><a href="about.html">À propos de nous</a></li>
					<li style="position: relative;" class="has-dropdown">
						<a  id="t1"href="engineering service.html">SERVICES D'INGÉNIERIE  <span style="float:right" id="nav0bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="CONSULTANCY.html">CONSEIL</a></li>
							<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">SOUTIEN À LA MAINTENANCE DES BASES </a></li>
							<li><a href="Recruitment Services.html">Services de recrutement</a></li>


						</ul>
					</li>

					<li style="position: relative;" id="nav1" class="has-dropdown">
						<a href="technical manegment support.html">Assistance à la gestion technique  <span style="float:right" id="nav1bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="aircraft asset management.html">GESTION DES ACTIFS AÉRONEFS</a></li>
							<li><a href="project support.html">GESTION DE PROJET</a></li>
							<li><a href="record review.html">LA GESTION DES DOSSIERS</a></li>
							<li><a href="AIRCRAFT LEASE TRANSFERS.html">TRANSFERTS DE LOCATION D'AÉRONEFS</a></li>
							<li><a href="aircraft repossessing.html">REPRISE D'AÉRONEF</a></li>


						</ul>
					</li>
					<li class="has-dropdown"><a href="technical training.html">Services de formation aéronautique<span style="float:right" id="nav2bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
						  </svg></span></a>
						<ul class="dropdown">
							<li><a href="esa part 66 examination.html">EXAMEN DES MODULES DE BASE DE L'EASA </a>
							</li>
							<li><a href="type rating courses.html">COURS DE QUALIFICATION DE TYPE</a></li>

							<li><a href="ONLINE COURSES.html"> COURS EN LIGNE </a></li>
							<li><a href="OTHERS TRAINING.html"> AUTRES FORMATIONS</a></li>

							<li class="itemToHoverOver">
								<a href="CABIN CREW INITIAL TRAINING.html"> FORMATION INITIALE DU PERSONNEL DE CABINE</a>
								<ul class="dpdn">
									<div>
										<li><a href="HOW TO BECOME A CABIN CREW.html"> <svg
													xmlns="http://www.w3.org/2000/svg" width="16"
													height="16" fill="currentColor"
													class="bi bi-arrow-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
														d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
												</svg> COMMENT DEVENIR UN ÉQUIPAGE DE CABINE ?
											</a></li>
									</div>
								</ul>

							</li>


						</ul>
					</li>

					<li><a href="contact.html">Contact</a></li>
					<li class="has-dropdown"><img class="mobileHide" src="images/fr.png"
							style="width: 30px; height: 30px; cursor: pointer;"></a>
						<ul style="top: 110% !important;" class="  dropdown hideNonMobile mobileLgNav " >
							<li onclick="changeLanguage('en')" style="cursor: pointer; color : white"><img
									src="images/en.png" style="width: 30px; height: 30px; cursor: pointer;">
								Anglais</li>

						</ul>
					</li>
				</ul>
			</div>
		</div>

	</div>
	<!-- </div> -->
</nav>

		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(&quot;images/change5.jpg&quot;); height: 730px; background-position: 0px 0px;" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="display-t js-fullheight" style="height: 730px;">
							<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 730px;">
								<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">	SERVICE DE SOUTIEN ET DE SUPERVISION À LA MAINTENANCE DE LA BASE  </font></font></h1>

							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div id="fh5co-featured-menu" style="padding: 3% 0% 0% 0%;" class="fh5co-section">
			<div class="container">
				<div class="row">


					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
						<div class="fh5co-item animate-box fadeInUp animated-fast">
							<img src="images/change7.jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UNE SOLUTION VÉRITABLEMENT GLOBALE POUR ASSURER UNE MAINTENANCE LISSE, BASÉE SUR DES SERVICES D'ASSISTANCE À LA MAINTENANCE ET DE SUPERVISION</font></font></h3>
							<div id="article1" style="overflow: hidden;height:250px">
							<p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								Avec plus de 20 ans d'expérience dans la fourniture de services techniques au secteur de l'aviation, AeroTEC est fier de présenter nos services de support et de surveillance de la maintenance de base.
							</font></font></p>
							<p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								AeroTEC fournit un service d'assistance et de surveillance de maintenance de base flexible et adaptable aux compagnies aériennes qui ont besoin d'une assistance supplémentaire pour les contrôles C. Chez AeroTEC, nous disposons de notre propre équipe d'experts composée de représentants techniques, de superviseurs de projet et de coordonnateurs de matériaux de haute qualité, soutenus par 20 ans d'expérience dans l'industrie.
							</font></font></p>
                            <p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                Notre équipe de maintenance de base est hautement équipée pour assurer la gestion critique, le reporting et l'identification des problèmes, et peut élaborer des plans d'action pour les compagnies aériennes et le MRO.
                            </font></font></p>
                            <p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                Travailler avec une équipe possédant de nombreuses années de connaissances et d'expérience dans le secteur et avoir soutenu certaines des plus grandes compagnies aériennes mondiales, notamment Royal Air Maroc et Air Arabia Group, Air France, Vueling, Ryanair.
                            </font></font></p>
							</div>
							<div style="width:100% ; display:flex; justify-content:center">
							<button id="bt1" onclick="showtext1()" type="button" style="    background-color: transparent;color: #bd9973;border: 1px solid #bd9973;border-radius: 25px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En savoir plus</font></font></button>
							</div>

						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" style="padding: 3% 0% 0% 0%;">
						<div class="fh5co-item margin_top animate-box fadeInUp animated-fast">
							<img style="width: 100%;" src="images/change9..jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">POURQUOI CHOISIR LES SERVICES DE MAINTENANCE DE BASE D'AeroTEC ?

							</font></font></h3>
							<div id="article2" style="overflow: hidden;height:250px">

							<ul style="color : white !important;">
                                <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Choisir AeroTEC pour la maintenance de base signifie que vous travaillez avec une équipe possédant 20 ans de connaissances et d'expérience dans l'industrie.
                                </font></font></li>
                                <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Notre engagement à offrir une disponibilité flexible à nos clients du monde entier vous garantit une assistance experte selon vos besoins.
                                </font></font></li>
                                <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Nous disposons d’une équipe de spécialistes et d’experts de grande qualité et de confiance, axés sur les actifs.
                                </font></font></li>
                                <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Une communication solide entre la compagnie aérienne et MRO garantit la transparence à chaque étape de la maintenance.
                                </font></font></li>
                                <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Nous nous engageons à garantir que les contrôles soient effectués à temps et dans les limites du budget, à chaque fois.
                                </font></font></li>
                                <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    Nous pouvons facilement identifier les problèmes, créer des solutions et influencer les résultats.
                                </font></font></li>
                            </ul>
                            <p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                Pour un aperçu plus détaillé de nos packages complets de support de maintenance de base et pour découvrir comment AeroTEC peut vous aider, contactez-nous dès aujourd'hui pour parler à nos représentants experts.


                            </font></font></p>
							<p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
							Nos représentants techniques coordonneront la planification avec le MRO selon la portée des travaux convenue. Ils connaissent non seulement les exigences, mais aussi le type d’avion et les éléments auxquels ils doivent prêter attention.
							</font></font></p>
							<p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
							En étant sur place, à bord des avions, ils effectueront constamment leurs propres inspections. Lorsque les zones seront ouvertes, ils examineront de près la zone environnante et documenteront cela afin que vous sachiez quelle est la qualité et où de futurs problèmes pourraient survenir.
							</font></font></p>
							<p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
							En pensant aux solutions, nous essayons toujours de trouver l'option la plus économique et la plus optimale pour trouver les bonnes pièces et composants, en tenant compte du temps et des coûts. Lorsqu'une réparation est nécessaire, nos représentants ont les connaissances nécessaires pour réfléchir avec le MRO ou proposer les options de réparation les plus pratiques, les plus rentables et selon les normes requises pour les futures locations ou ventes d'avions.
							</font></font></p>
							<p style="color : white !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
							Un élément crucial est la documentation : quoi que ce soit qui est fait lors de la visite de maintenance en base, il doit être correctement documenté. Les fiches de tâches complétées sont auditées, les documents de réparation et les certifications sont classés. Nous nous assurons que la visite de maintenance en base est complète et conforme.							</font></font></p>
						</div>
							<div style="width:100% ; display:flex; justify-content:center">
							<button id="bt2" onclick="showtext2()" type="button" style="    background-color: transparent;color: #bd9973;border: 1px solid #bd9973;border-radius: 25px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En savoir plus</font></font></button>
							</div>
							</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container fh5co-section">


		<div class="row">
			<div style="    height: 600px;display :flex; flex-direction: column; justify-content: center;" class="col-md-6  col-sm-6 ">
				<h1 style="color: white;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ne soyez pas timide, discutons.</font></font><p></p>

					<div style="display : flex ; justify-content:center"><a href="mailto:info@yourdomainname.com" class="btn btn-primary btn-outline"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Contactez-nous</font></font></a>
					</div>
			</h1></div>
			<div class="col-md-6  col-sm-6 ">
				<form id="form-wrap" action="https://formspree.io/f/mpzvqyle" method="POST">
					<div class="row form-group">
						<div class="col-md-12">
							<label for="lastName"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Votre nom de famille</font></font></label>
							<input type="text" class="form-control" id="lastName" name="lastName">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="Firstname"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ton prénom</font></font></label>
							<input type="text" class="form-control" id="Firstname" name="Firstname">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="Companyname"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le nom de votre société</font></font></label>
							<input type="text" class="form-control" id="Companyname" name="Companyname">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="email"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Votre e-mail</font></font></label>
							<input type="text" class="form-control" id="email" name="email">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="subject"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Votre sujet</font></font></label>
							<input type="text" class="form-control" id="subject" name="subject">
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<label for="message"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Votre message</font></font></label>
							<textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
						</div>
					</div>
					<p id="my-form-status"></p>
					<div class="row form-group">
						<div class="col-md-12">
							<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><input id="my-form-button" type="submit" class="btn btn-primary btn-outline btn-lg" value="Soumettre le formulaire"></font></font>
						</div>
					</div>

				</form>
			</div>
		</div>

	</div>


	<footer style="padding: 0px;" id="fh5co-footer" role="contentinfo" class="fh5co-section">
			<div style="padding:3% 2% 0% 2%;">
				<div class="row ">
					<div class="col-md-3 fh5co-widget">
						<a href="./index.html"><img src="images/logoaero (2).png"></a>
					</div>
					<div class="col-md-1 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Liens</font></font></h4>
						<ul class="fh5co-footer-links">
							<li><a href="/index.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Maison</font></font></a></li>
							<li><a href="/about.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">À propos</font></font></a></li>
							<li><a href="technical training.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prestations de service</font></font></a></li>
						</ul>
					</div>

					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Catégories</font></font></h4>
						<div style="display: flex;">
							<ul class="fh5co-footer-links">
								<li><a href="/project support.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Accompagnement de projet</font></font></a></li>
								<li><a href="/AIRCRAFT LEASE TRANSFERS.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Soutien à la transition</font></font></a></li>
								<li><a href="/BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Représentant de l'entretien de la base</font></font></a></li>
								<li><a href="/engineering service.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Support technique</font></font></a></li>
							</ul>

						</div>
					</div>
					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Catégories</font></font></h4>
						<div style="display: flex;">

							<ul class="fh5co-footer-links">
								<li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EASA Part 66 Examination</font></font></a></li>
								<li><a href="type rating courses.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TYPE RATING COURSES</font></font></a></li>

							</ul>
						</div>
					</div>

					<div class="col-md-4 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Coordonnées</font></font></h4>
						<ul class="fh5co-footer-links">
							<li><a href="tel://212698977462"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+212698977462</font></font></a></li>
							<li><a href="mailto:contact@aerotecsupport.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">contact@aerotecsupport.com</font></font></a></li>
						</ul>

						<div class="newFooter ">
							<div class="rounded-social-buttons">
								<a class="social-button facebook" href="https://www.facebook.com/profile.php?id=61557399107688" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg><!-- <i class="fab fa-facebook-f"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button twitter" href="https://twitter.com/AeroTecTraining" target="_blank"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button linkedin" href="https://www.linkedin.com/in/aerotech-support-a19791300/" target="_blank"><svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><svg class="svg-inline--fa fa-whatsapp fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><!-- <i class="fab fa-whatsapp"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button instagram" href="https://www.instagram.com/aerotecsupport24/" target="_blank"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram"></i> Font Awesome fontawesome.com --></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
	</div>






    `
}


try {
    if (localStorage.getItem("lang") == "fr") {
        set2french()
    } else {
        set2english()
    }

} catch (error) {
    set2english()
}
