export const colors = {
	primary: '#006cff',
	primaryDarken: '#004bb2',
	primaryLighten: '#3389ff',
	secondary: '#f50057',
	secondaryDarken: '#ab003c',
	secondaryLighten: '#f73378',
	green: '#4caf50',
	greenDarken: '#388e3c',
	grayText: '#b4b4b4',
};

export const appSettings = {
	baseURL: 'https://e-learn.monamedia.net/Api',
	key: 'VnVOQG0zODlNb25hRGV2',
	colors: {
		second: '#f50057',
		primary: '#006cff',
	},
	selectStyle: {
		control: (oldStyle, state) => {
			return {
				...oldStyle,
				borderColor:
					state.isFocused || state.isSelected || state.isHovered
						? '#006cff !important'
						: '#c0ccda',
				outline: 0,
				boxShadow: state.isFocused
					? `0 0 0 0.2rem rgba(250,0,94, 0.25)`
					: 'none',
				borderRadius: '3px',
			};
		},
		multiValue: (oldStyle, state) => {
			return {
				...oldStyle,
				backgroundColor: '#ff750138',
				color: '#006cff',
				fontWeight: '500',
				border: '1px solid #006cff',
			};
		},
		multiValueLabel: (oldStyle, state) => {
			return {
				...oldStyle,
				color: '#006cff',
			};
		},
		option: (oldStyle, state) => {
			return {
				...oldStyle,
				backgroundColor: state.isSelected
					? '#006cff'
					: state.isFocused
					? 'rgba(250,0,94, 0.25)'
					: '#fff',
			};
		},
	},
	UID: 20, //20 teacher || 1071 student
};
