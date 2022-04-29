import PropType from 'prop-types';
import { useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
function Tab({ tabList }) {
	let [activedIndex, setActivedIndex] = useState(0);
	function switchIndex(evt) {
		console.log(evt);
		let index = evt.currentTarget.dataset.index;
		setActivedIndex(index);
	}
	return (
		<div
			className={'component'}
			style={{
				display: 'flex',
				alignItems: 'stretch',
				justifyContent: 'space-between',
				width: '100%',
				padding: '20px 10px',
				boxSizing: 'border-box',
			}}>
			{tabList.map((item, index) => {
				return (
					<div
						className={[
							'tab__item',
							index === activedIndex ? 'actived' : '',
						]}
						data-index={index}
						onClick={switchIndex}
						key={index}
						style={{ padding: '1em' }}>
						<Link to={item.path}>
							{item.path}
							{item.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
Tab.propType = {
	tabList: PropType.array,
};
export default Tab;
