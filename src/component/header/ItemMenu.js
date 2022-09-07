import React from 'react';
import PropTypes from 'prop-types';

function ItemMenu({ element }) {
	const id = element?.id;
	const title = element?.title;
	const children = element?.children;

    return(
	    <div className="group inline-block relative font-sans font-medium text-sm">
		    <button
			    className="text-white hover:text-rose-600 py-2 pl-4 pr-1 inline-flex items-center"
		    >
				<span className={id === 0 ? "text-rose-600": ""}>{title}</span>
		    </button>
			<ul className="absolute hidden text-zinc-600 pt-1 group-hover:block w-64">
				{
					children.length > 0 &&  children.map((e) =>
						<li className="" key={e.id}>
							<a
								href="#"
								className="bg-white hover:text-zinc-800 py-2 px-4 block text-left"
							>
								{e.item}
							</a>
						</li>
					)
				}
			</ul>
	    </div>
    );
}

ItemMenu.propTypes = {
	element: PropTypes.object,
};

ItemMenu.defaultProps = {
	element: {},
};

export default React.memo(ItemMenu);
