import React from "react";

const Footer = () => {
	return (
		<div className="footer">
			<ul className="footer__links"></ul>
			<div className="footer__byline">
				<span className="footer__emoji">👨🏾&zwj;💻</span>
				<span className="footer__created-by">
					created by
					<a href="https://github.com/sprioleau" className="footer__credit">
						@sprioleau →
					</a>
				</span>
			</div>
			<li className="footer__link">
				<a href="https://github.com/sprioleau/entitease">source →</a>
			</li>
		</div>
	);
};

export default Footer;
