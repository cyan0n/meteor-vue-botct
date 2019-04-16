export default [{
		type: "outsider",
		edition: "troubles_brewing",
		label: "butler",
		name: {
			en: "Butler",
			it: "Maggiordomo",
		},
		icon: 'Butler_icon.png',
		tokens: [{
			label: "master",
			name: {
				en: "Master"
			},
			quantity: 1
		}],
		wake: 3,
		description: {
			en: "Each night, choose a player (not yourself): tomorrow, you may only vote when they are, even if drunk or poisoned",
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
		type: "outsider",
		edition: "troubles_brewing",
		label: "drunk",
		name: {
			en: "Drunk",
			it: "Ubriaco",
		},
		icon: 'Drunk_icon.png',
		tokens: [{
			label: "is_the_drunk",
			name: {
				en: "Is the Drunk"
			},
			quantity: 1
		}],
		wake: 0,
		description: {
			en: "You do not know you are the Drunk, You think you are a Townsfolk, but your ability malfunctions",
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
		type: "outsider",
		edition: "troubles_brewing",
		label: "recluse",
		name: {
			en: "Recluse",
			it: "Investigatore",
		},
		icon: 'Recluse_icon.png',
		tokens: [],
		wake: 0,
		description: {
			en: "You might register as evil & as a Minion or Demon, even if dead",
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
		type: "outsider",
		edition: "troubles_brewing",
		label: "saint",
		name: {
			en: "Saint",
			it: "Santo",
		},
		icon: 'Saint_icon.png',
		wake: 0,
		description: {
			en: "If you die by execution, you lose",
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