import { FC } from "react";
import { Link, useRoute } from "wouter";

interface Props {
	href: string;
	linkName: string;
}

export const ActiveLink: FC<Props> = ({ href, linkName }) => {
	const [isActive] = useRoute(href);

	return (
		<Link href={href}>
			<a className={isActive ? "font-bold" : "underline"}>{linkName}</a>
		</Link>
	);
};
