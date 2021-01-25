import React from "react";

const Banner = () => {
	return (
		<div className="banner">
			<h1 className="banner__page-title">Entitease</h1>
			<div className="banner__footer">
				<ul className="banner__footer-links">
					<li className="banner__footer-link">
						<a href="https://github.com/sprioleau/entitease">source →</a>
					</li>
					<li className="banner__footer-link">
						<a href="https://github.com/sprioleau">about →</a>
					</li>
				</ul>
				<div className="banner__footer-byline">
					<span className="banner__footer-created-by">created by</span>
					<a href="https://github.com/sprioleau" className="banner__footer-credit">
						@sprioleau →
					</a>{" "}
					<span className="banner__footer-emoji">👨🏾&zwj;💻</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
