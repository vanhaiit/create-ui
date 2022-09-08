import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ItemMenu({ element }) {
	const id = element?.id;
	const title = element?.title;
	const children = element?.children;
	const isChildren = children.length;
	const menuChild = element?.menuChild;
	const isMenuChild = menuChild.length;
	const isProduct = element?.productInformation;
	const isCountProduct = isProduct.length;

    return(
	    <div className="group inline-block relative font-sans font-medium text-sm">
		    <button
			    className="text-white pt-2 pb-4 pl-3 pr-3 inline-flex items-center hover:text-[red] hover:border-b-2 hover:border-black"
		    >
				<span className={classNames(id === 0 && "text-[red]")}>{title}</span>
		    </button>
			<ul className={classNames("absolute hidden text-zinc-600 pt-1 group-hover:block", (isCountProduct > 0 || isMenuChild > 0) ? "w-96" : "w-64")}>
				{
					isChildren > 0 && isMenuChild === 0 && isCountProduct === 0 && children.map((e, index) =>
						<li className="" key={e.id}>
							<a
								href="#"
								className={classNames("bg-white hover:text-zinc-800 py-2 px-4 block text-left", index === 0 && "pt-6", index === isChildren-1 && "pb-6")}
							>
								{e.item}
							</a>
						</li>
					)
				}
				{/*{*/}
				{/*	isChildren === 0 && isMenuChild !== 0 && isCountProduct !== 0 && menuChild.map((e, index) =>*/}
				{/*		<li className="" key={e.id}>*/}
				{/*			<a*/}
				{/*				href="#"*/}
				{/*				className={classNames("bg-white hover:text-zinc-800 py-2 px-4 block text-left")}*/}
				{/*			>*/}
				{/*				{e.title}*/}
				{/*			</a>*/}
				{/*		</li>*/}
				{/*	)*/}
				{/*}*/}
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
