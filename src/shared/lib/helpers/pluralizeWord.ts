export const pluralizeWord = (count: number) => {
	if (count === 1) {
	  return 'товар';
	} else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
	  return 'товара';
	} else {
	  return 'товаров';
	}
  }