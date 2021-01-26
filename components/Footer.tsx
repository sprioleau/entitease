import React from "react";

const Footer = () => {
	return (
		<div className="footer">
			<ul className="footer__links">
				<li className="footer__link">
					<a href="https://github.com/sprioleau/entitease">source →</a>
				</li>
				<li className="footer__link">
					<a href="https://github.com/sprioleau">about →</a>
				</li>
			</ul>
			<div className="footer__byline">
				<span className="footer__emoji">👨🏾&zwj;💻</span>
				<span className="footer__created-by">created by</span>
				<a href="https://github.com/sprioleau" className="footer__credit">
					@sprioleau →
				</a>{" "}
			</div>
		</div>
	);
};

export default Footer;
