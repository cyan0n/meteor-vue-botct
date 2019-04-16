export default [
	{
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "washerwoman",
		name: {
			en: "Washerwoman",
			it: "Lavandaia",
		},
		icon: 'Washerwoman_icon.png',
		tokens: [
			{
				label: "wrong",
				name: {
					en: "Wrong"
				},
				quantity: 1
			},
			{
				label: "townsfolk",
				name: {
					en: "Townsfolk"
				},
				quantity: 1
			},
		],
		wake: 1,
		description: {
			en: "You start knowing that 1 of 2 players is a particular Townsfolk",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "librarian",
		name: {
			en: "Librarian",
			it: "Biblotecario",
		},
		icon: 'Librarian_icon.png',
		tokens: [
			{
				label: "wrong",
				name: {
					en: "Wrong"
				},
				quantity: 1
			},
			{
				label: "outsider",
				name: {
					en: "Outsider"
				},
				quantity: 1
			},
		],
		wake: 1,
		description: {
			en: "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play)",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "investigator",
		name: {
			en: "Investigator",
			it: "Investigatore",
		},
		icon: 'Investigator_icon.png',
		tokens: [
			{
				label: "wrong",
				name: {
					en: "Wrong"
				},
				quantity: 1
			},
			{
				label: "minion",
				name: {
					en: "Minion"
				},
				quantity: 1
			},
		],
		wake: 1,
		description: {
			en: "You start knowing that 1 of 2 players is a particular Minion",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "chef",
		name: {
			en: "Chef",
			it: "Cuoco",
		},
		icon: 'Chef_icon.png',
		tokens: [],
		wake: 1,
		description: {
			en: "You start knowing how many pairs of evil players are neighboring each other",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "empath",
		name: {
			en: "Empath",
			it: "Empatica",
		},
		icon: 'Empath_icon.png',
		wake: 3,
		description: {
			en: "Each night, you learn how many of your 2 alive neighbors are evil",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "fortune_teller",
		name: {
			en: "Fortune Teller",
			it: "Chiromante",
		},
		icon: 'Fortune Teller_icon.png',
		wake: 3,
		tokens: [
			{
				label: "red_herring",
				name: {
					en: "Red Herring"
				},
				quantity: 1
			}
		],
		description: {
			en: "Each night, you learn which character died by execution today",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "undertaker",
		name: {
			en: "Undertaker",
			it: "Becchino",
		},
		icon: 'Undertaker_icon.png',
		wake: 2,
		tokens: [
			{
				label: "dead",
				name: {
					en: "Dead"
				},
				quantity: 1
			}
		],
		description: {
			en: "Each night, you learn which character died by execution today",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "monk",
		name: {
			en: "Monk",
			it: "Monaco",
		},
		icon: 'Monk_icon.png',
		wake: 2,
		tokens: [
			{
				label: "safe",
				name: {
					en: "Safe"
				},
				quantity: 1
			}
		],
		description: {
			en: "Each night, choose a player (not yourself): they are safe from the Demon tonight",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "ravenkeeper",
		name: {
			en: "Ravenkeeper",
			it: "",
		},
		icon: 'Ravenkeeper_icon.png',
		wake: 4,
		tokens: [],
		description: {
			en: "If you die at night, you are woken to choose a player: you learn their character",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "virgin",
		name: {
			en: "Virgin",
			it: "Vergine",
		},
		icon: 'Virgin_icon.png',
		wake: 0,
		tokens: [{
			label: "no_ability",
			name: {
				en: "No Ability"
			},
			quantity: 1
		}],
		description: {
			en: "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately",
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
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "slayer",
		name: {
			en: "Slayer",
			it: "",
		},
		icon: 'Slayer_icon.png',
		wake: 0,
		tokens: [{
			label: "no_ability",
			name: {
				en: "No Ability"
			},
			quantity: 1
		}],
		description: {
			en: "Once per game, during the day, publicly choose a player: if they are the Demon, they die",
			it: "",
		},
		flavour: {
			en: "Die.",
			it: "Muori.",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
	{
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "soldier",
		name: {
			en: "Soldier",
			it: "",
		},
		icon: 'Soldier_icon.png',
		wake: 0,
		tokens: [],
		description: {
			en: "You are safe from the Demon",
			it: "",
		},
		flavour: {
			en: "Die.",
			it: "Muori.",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
	{
		type: "townsfolk",
		edition: "troubles_brewing",
		label: "mayor",
		name: {
			en: "Mayor",
			it: "",
		},
		icon: 'Mayor_icon.png',
		wake: 0,
		tokens: [],
		description: {
			en: "If no execution occurs while only 3 players live, you win. If you die at night another player might die instead",
			it: "",
		},
		flavour: {
			en: "Die.",
			it: "Muori.",
		},
		almanac: {
			en: "",
			it: "",
		}
	},
];