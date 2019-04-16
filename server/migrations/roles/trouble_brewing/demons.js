export default [{
		type: "demon",
		edition: "troubles_brewing",
		label: "imp",
		name: {
			en: "Imp",
			it: "",
		},
		icon: 'Img_icon.png',
		tokens: [{
			label: "dead",
			name: {
				en: "Dead"
			},
			quantity: 1
		}],
		wake: 2,
		description: {
			en: "Each night, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp",
			it: "",
		},
		flavour: {
			en: "Bloodstains on a dinner jacket? No. This is cooking sherry. How careless.",
			it: "",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
	{
		type: "minion",
		edition: "troubles_brewing",
		label: "spy",
		name: {
			en: "Spy",
			it: "Spia",
		},
		icon: 'Spy_icon.png',
		tokens: [],
		wake: 0,
		description: {
			en: "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead",
			it: "",
		},
		flavour: {
			en: "Bloodstains on a dinner jacket? No. This is cooking sherry. How careless.",
			it: "",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
	{
		type: "minion",
		edition: "troubles_brewing",
		label: "baron",
		name: {
			en: "Baron",
			it: "Barone",
		},
		icon: 'Baron_icon.png',
		tokens: [],
		wake: 0,
		description: {
			en: "There are extra Outsiders in play. [+2 Outsiders]",
			it: "",
		},
		flavour: {
			en: "Bloodstains on a dinner jacket? No. This is cooking sherry. How careless.",
			it: "",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
	{
		type: "minion",
		edition: "troubles_brewing",
		label: "scarlet_woman",
		name: {
			en: "Scarlet Woman",
			it: "",
		},
		icon: 'Scarlet Woman_icon.png',
		tokens: [{
			label: "is_the_demon",
			name: {
				en: "Is the Demon"
			},
			quantity: 1
		}],
		wake: 1,
		description: {
			en: "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers do not count)",
			it: "",
		},
		flavour: {
			en: "Bloodstains on a dinner jacket? No. This is cooking sherry. How careless.",
			it: "",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
];