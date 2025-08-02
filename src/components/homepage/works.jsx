import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./lin.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Upwork</div>
							<div className="work-subtitle">
								Radhat Linux System Administrator
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./ad.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Google Ads Specialist</div>
							<div className="work-subtitle">
								Google Ads & Digital Marketing
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
