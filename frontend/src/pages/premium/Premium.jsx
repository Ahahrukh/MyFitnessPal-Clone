import React from "react";
import TopSection from "./TopSection";
import "./PremiumStyles.css";
import OptionsGrid from "./OptionsGrid";
import YourGoalsSection from "./YourGoalsSection";
import VictoryStories from "./VictoryStories";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import GoPremium from "./GoPremium";
import NavbarPremium from "../../components/premium/NavbarPremium";

const Premium = () => {
	return (
		<>
			<NavbarPremium />
			<TopSection />
			<OptionsGrid />
			<YourGoalsSection />
			<VictoryStories />
			<FrequentlyAskedQuestions />
			<GoPremium />
		</>
	);
};

export default Premium;
