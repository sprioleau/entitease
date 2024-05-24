import Link from "next/link";
import { Logo } from "../Icon";

export default function Banner() {
	return (
		<div className="banner">
			<Link href="/">
				<span className="banner__logo">
					<Logo />
				</span>
				<h1 className="banner__page-title">EntitEase</h1>
			</Link>
		</div>
	);
}
