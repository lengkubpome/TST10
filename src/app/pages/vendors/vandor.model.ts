export interface VendorDetail {
	id: string;
	fullName: string;
	address?: string;
	birthDate?: Date;
	phone?: string;
	photo?: string;
	carList: string[];
}
export const VENDOR_DATA: VendorDetail[] = [
	{
		id: '3411600360077',
		fullName: 'นาย บุญล้อม ดอนสีดา',
		address: '37 หมู่ที่ 8 ตำบลนิคมพัฒนา อำเภอโนนสัง จังหวัดหนองบัวลำภู',
		carList: [ 'กอ 9555 ขอนแก่น', 'ขง 9440 ขอนแก่น' ],
		phone: '0868551705',
		photo:
			'https://gravatar.com/avatar/efa527d4f437bd29a0e280d13188d98d?s=400&d=robohash&r=x'
	},
	{
		id: '3411600360075',
		fullName: 'นาย บุญล้อม ดอนสีดา2',
		address: '37 หมู่ที่ 8 ตำบลนิคมพัฒนา อำเภอโนนสัง จังหวัดหนองบัวลำภู',
		carList: [ 'กอ 9555 ขอนแก่น', 'ขง 9440 ขอนแก่น' ],
		phone: '0868551705',
		photo:
			'https://api.adorable.io/avatars/400/efa527d4f437bd29a0e280d13188d98d.png'
	},
	{
		id: '3411600360072',
		fullName: 'นาย บุญล้อม ดอนสีดา3',
		address: '37 หมู่ที่ 8 ตำบลนิคมพัฒนา อำเภอโนนสัง จังหวัดหนองบัวลำภู',
		carList: [ 'กอ 9555 ขอนแก่น', 'ขง 9440 ขอนแก่น' ],
		phone: '0868551705',
		photo:
			'https://avatars.dicebear.com/v2/female/efa527d4f437bd29a0e280d13188d98d.svg'
	}
];
