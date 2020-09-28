(function () {
	const updateCSSVariables = () => {
		const root = document.documentElement;
		if (root && typeof window !== 'undefined') {
			root.style.setProperty('--app-height', window.innerHeight + 'px');
		}
	};

	updateCSSVariables();
	window.addEventListener('resize', updateCSSVariables);
	if (window.PerfectScrollbar !== 'undefined') {
		const ps = new PerfectScrollbar('#body-content', {
			wheelSpeed: 2,
			wheelPropagation: true,
			minScrollbarLength: 20,
		});
	}
})();
