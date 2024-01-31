import { Route, Switch } from "wouter";
import { ShowcaseOne } from "@/pages/ShowcaseOne/ShowcaseOne";
import { ShowcaseTwo } from "@/pages/ShowcaseTwo/ShowcaseTwo";
import { Congrats } from "@/pages/Congrats/Congrats";
import { ActiveLink } from "./components/ActiveLink/ActiveLink";

function App() {
	return (
		<>
			<nav className="flex items-center gap-4 justify-center border-b border-gray-400 py-4">
				<ActiveLink href="/" linkName="Showcase Form One" />
				<ActiveLink href="/showcase-two" linkName="Showcase Form Two" />
			</nav>
			<main>
				<Switch>
					<Route path="/">
						<ShowcaseOne />
					</Route>

					<Route path="/showcase-two">
						<ShowcaseTwo />
					</Route>

					<Route path="/congrats/:name">
						<Congrats />
					</Route>

					<Route>
						<div className="my-10 flex justify-center">
							404: nothing found!
						</div>
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
