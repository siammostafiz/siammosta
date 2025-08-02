import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">{INFO.about.title}</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								{/* 👤 Image */}
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* ❤️ What I Like */}
						<div className="about-interests-section">
							<div className="interests-title">What I Like To Do!</div>
							<div className="interests-grid">
								<div className="interest-item">
									<img src="/b1.jpg" alt="Troubleshooting" />
									<span>Troubleshooting system issues</span>
								</div>
								<div className="interest-item">
									<img src="/b2.jpg" alt="Network" />
									<span>Identifying network problems</span>
								</div>
								<div className="interest-item">
									<img src="/b3.jpg" alt="Linux" />
									<span>Linux, Windows & E-commerce</span>
								</div>
								<div className="interest-item">
									<img src="/b4.jpg" alt="Reading" />
									<span>Reading tech blogs & news</span>
								</div>
								<div className="interest-item">
									<img src="/b5.jpg" alt="Tools" />
									<span>Exploring tools & open-source</span>
								</div>
								<div className="interest-item">
									<img src="/b6.jpg" alt="Adventure" />
									<span>Adventure & exploring places</span>
								</div>
							</div>
						</div>

						{/* 🔗 Socials (Desktop) */}
						<div className="about-socials">
							<Socials />
						</div>

						{/* 📱 Mobile Socials */}
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					{/* 📄 Footer */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
