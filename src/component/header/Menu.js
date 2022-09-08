import React from 'react';

// images
import logo from '../images/logo.png';
import search from '../images/search.png';
import ItemMenu from "./ItemMenu";

function Menu() {
	const listMenu = [
		{
			id: 0,
			title: 'SALE',
			children: [],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 1,
			title: 'ÁO POLO',
			children: [
				{
					id: 1.1,
					item: 'ÁO POLO TRƠN'
				},
				{
					id: 1.2,
					item: 'ÁO POLO HỌA TIẾT'
				},
				{
					id: 1.3,
					item: 'ÁO POLO CAN PHỐI'
				},
				{
					id: 1.4,
					item: 'ÁO POLO BO KẺ'
				},
				{
					id: 1.5,
					item: 'ÁO POLO KẺ'
				},
				{
					id: 1.6,
					item: 'ÁO POLO MELANGE'
				},
			],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 2,
			title: 'ÁO THUN',
			children: [
				{
					id: 2.1,
					item: 'ÁO THUN IN HÌNH'
				},
				{
					id: 2.2,
					item: 'ÁO THUN CAN PHỐI'
				},
				{
					id: 2.3,
					item: 'ÁO THUN TRƠN'
				},
			],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 3,
			title: 'QUẦN SHORT',
			children: [
				{
					id: 3.1,
					item: 'SHORT KAKI'
				},
				{
					id: 3.2,
					item: 'SHORT ĐŨI'
				},
				{
					id: 3.3,
					item: 'SHORT GIÓ'
				},
			],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 4,
			title: 'SƠ MI NGẮN TAY',
			children: [],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 5,
			title: 'SƠ MI - QUẦN DÀI',
			children: [
				{
					id: 5.1,
					item: 'SƠ MI DÀI TAY DẠ'
				},
				{
					id: 5.2,
					item: 'SƠ MI DÀI TAY HỌA TIẾT'
				},
				{
					id: 5.3,
					item: 'SƠ MI DÀI TAY KẺ'
				},
				{
					id: 5.4,
					item: 'SƠ MI DÀI TAY TRƠN'
				},
				{
					id: 5.5,
					item: 'QUẦN ÂU'
				},
				{
					id: 5.6,
					item: 'QUẦN KAKI'
				},
				{
					id: 5.7,
					item: 'QUẦN JEAN'
				},
			],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 6,
			title: 'COLLECTION',
			children: [
				{
					id: 6.1,
					item: 'VIAGGIO | TORANO x KIM LÝ'
				},
				{
					id: 6.2,
					item: 'NHÂM MẠNH DŨNG x TORANO'
				},
				{
					id: 6.3,
					item: 'HOÀNG ĐỨC x TORANO'
				},
				{
					id: 6.4,
					item: 'CHEERS | THE PARTY'
				},
				{
					id: 6.5,
					item: 'CHOSEN BY KIM LY'
				},
				{
					id: 6.6,
					item: 'MASCHILE | TORANO x KIM LY'
				},
			],
			menuChild: [],
			productInformation: [],
		},
		{
			id: 8,
			title: 'Phụ Kiện',
			children: [],
			menuChild: [
				{
					id: 81.1,
					title: 'Quần lót',
				},
				{
					id: 81.2,
					title: 'Tất Nam',
				},
				{
					id: 81.3,
					title: 'Thắt lưng',
				}
			],
			productInformation: [
				{
					id: 82.1,
					title: 'Thắt lưng Torano AL042',
					img: 'https://traffic-edge06.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20210405/al040.jpg'
				},
				{
					id: 82.2,
					title: 'Thắt lưng Torano AL041',
					img: 'https://traffic-edge14.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20210405/al041.jpg'
				},
				{
					id: 82.3,
					title: 'Thắt lưng Torano AL040',
					img: 'https://traffic-edge43.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20210405/al042_nv.jpg'
				}
			],
		},
	];
    return(
	    <div className="flex flex-row items-center justify-between bg-zinc-800 sticky py-5 px-10 top-0 left-0 right-0">
		    <a href="+">
			    <img
				    src={logo}
				    alt="Logo"
				    className="h-10 min-h-[23px] max-h-[50px] w-full"
			    />
		    </a>

		    <div>
			    {
				    listMenu.map((e) =><ItemMenu key={e.id} element={e} />)
			    }
		    </div>

		    <form className="relative">
			    <input
				    placeholder="Tìm sản phẩm"
				    className="py-2 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
			    />
			    <img
				    src={search}
				    alt="icon Search"
				    className="w-6 h-6 absolute right-[6px] top-[6px]"
			    />
		    </form>
	    </div>
    );
}

export default Menu;
