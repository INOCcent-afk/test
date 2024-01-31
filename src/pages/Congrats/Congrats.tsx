import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useLocation, useParams } from "wouter";

export const Congrats = () => {
	const params = useParams();
	const [_, navigate] = useLocation();

	if (!params.name) {
		navigate("/404");
		return null;
	}

	const { height, width } = useWindowSize();

	return (
		<div className="h-[500px] w-full flex justify-center items-center">
			<Confetti width={width} height={height} className="" />

			{params.name && (
				<h1 className="uppercase">{decodeURIComponent(params.name)}</h1>
			)}
		</div>
	);
};
