module.exports = {
	format_time: (date) => {
	  return date.toLocaleTimeString();
	},
	// The custom helper 'format_date' takes in a timestamp
	format_date: (date) => {
	  // Using JavaScript Date methods, we get and format the month, date, and year
	  // We need to add one to the month since it is returned as a zero-based value
	  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
		// We add five years to the 'year' value to calculate the end date
		new Date(date).getFullYear()
	  }`;
	},
	get_emoji: () => {
		const randomNum = Math.random();
		let book = "https://images.unsplash.com/photo-1599597437147-150934b5d2e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2109&q=80";
	
		if (randomNum > 0.8) {
		  book = "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2175&q=80";
		} else if (randomNum > 0.5) {
		  book = "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80";
		} else if (randomNum > 0.3) {
			book = "https://images.unsplash.com/photo-1462953491269-9aff00919695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80";
		}
	
		return `${book}`;
	  },
  };
