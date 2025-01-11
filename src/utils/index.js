export const getFormattedPrice = price => `€${price.toFixed(2)}`;

const categories = [
	{ id: 'transmission', iconName: 'gearbox' },
	{ id: 'AC', name: 'AC', iconName: 'wind' },
	{ id: 'engine', iconName: 'gas-station' },
	{ id: 'kitchen', name: 'Kitchen', iconName: 'cup-hot' },
	{ id: 'radio', name: 'Radio', iconName: 'radio' },
	{ id: 'bathroom', name: 'Bathroom', iconName: 'shower' },
	{ id: 'refrigerator', name: 'Refrigerator', iconName: 'fridge' },
	{ id: 'microwave', name: 'Microwave', iconName: 'microwave' },
	{ id: 'gas', name: 'Gas', iconName: 'gas' },
	{ id: 'water', name: 'Water', iconName: 'water' },
	{ id: 'TV', name: 'TV', iconName: 'tv' },
];

export const getCamperEquipment = camper => {
	return categories.reduce((acc, category) => {
		if (camper[category.id]) {
			acc.push({
				id: category.id,
				name: category.name || camper[category.id],
				iconName: category.iconName,
			});
		}

		return acc;
	}, []);
};

export const formatFormField = form => {
	const words = form.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]*/g) || [];

	return words
		.filter(word => word)
		.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
};
