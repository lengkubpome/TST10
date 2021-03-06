import { map, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Province {
	id: number;
	code: string;
	name: string;
	geo_id: number;
}
@Injectable({
	providedIn: 'root'
})
export class ProvinceService {
	private provices = new BehaviorSubject<Province[]>(PROVINCES_THAI_DATA);

	constructor() {}

	getProvinces(): Observable<Province[]> {
		return this.provices;
	}
	getProvincesZone(zone: number): Observable<Province[]> {
		return this.provices.pipe(
			map((provinces) =>
				provinces.filter((province) => province.geo_id === zone)
			)
		);
	}
}

const PROVINCES_THAI_DATA: Province[] = [
	{ id: 1, code: '10', name: 'กรุงเทพมหานคร', geo_id: 2 },
	{ id: 2, code: '11', name: 'สมุทรปราการ', geo_id: 2 },
	{ id: 3, code: '12', name: 'นนทบุรี', geo_id: 2 },
	{ id: 4, code: '13', name: 'ปทุมธานี', geo_id: 2 },
	{ id: 5, code: '14', name: 'พระนครศรีอยุธยา', geo_id: 2 },
	{ id: 6, code: '15', name: 'อ่างทอง', geo_id: 2 },
	{ id: 7, code: '16', name: 'ลพบุรี', geo_id: 2 },
	{ id: 8, code: '17', name: 'สิงห์บุรี', geo_id: 2 },
	{ id: 9, code: '18', name: 'ชัยนาท', geo_id: 2 },
	{ id: 10, code: '19', name: 'สระบุรี', geo_id: 2 },
	{ id: 11, code: '20', name: 'ชลบุรี', geo_id: 5 },
	{ id: 12, code: '21', name: 'ระยอง', geo_id: 5 },
	{ id: 13, code: '22', name: 'จันทบุรี', geo_id: 5 },
	{ id: 14, code: '23', name: 'ตราด', geo_id: 5 },
	{ id: 15, code: '24', name: 'ฉะเชิงเทรา', geo_id: 5 },
	{ id: 16, code: '25', name: 'ปราจีนบุรี', geo_id: 5 },
	{ id: 17, code: '26', name: 'นครนายก', geo_id: 2 },
	{ id: 18, code: '27', name: 'สระแก้ว', geo_id: 5 },
	{ id: 19, code: '30', name: 'นครราชสีมา', geo_id: 3 },
	{ id: 20, code: '31', name: 'บุรีรัมย์', geo_id: 3 },
	{ id: 21, code: '32', name: 'สุรินทร์', geo_id: 3 },
	{ id: 22, code: '33', name: 'ศรีสะเกษ', geo_id: 3 },
	{ id: 23, code: '34', name: 'อุบลราชธานี', geo_id: 3 },
	{ id: 24, code: '35', name: 'ยโสธร', geo_id: 3 },
	{ id: 25, code: '36', name: 'ชัยภูมิ', geo_id: 3 },
	{ id: 26, code: '37', name: 'อำนาจเจริญ', geo_id: 3 },
	{ id: 27, code: '39', name: 'หนองบัวลำภู', geo_id: 3 },
	{ id: 28, code: '40', name: 'ขอนแก่น', geo_id: 3 },
	{ id: 29, code: '41', name: 'อุดรธานี', geo_id: 3 },
	{ id: 30, code: '42', name: 'เลย', geo_id: 3 },
	{ id: 31, code: '43', name: 'หนองคาย', geo_id: 3 },
	{ id: 32, code: '44', name: 'มหาสารคาม', geo_id: 3 },
	{ id: 33, code: '45', name: 'ร้อยเอ็ด', geo_id: 3 },
	{ id: 34, code: '46', name: 'กาฬสินธุ์', geo_id: 3 },
	{ id: 35, code: '47', name: 'สกลนคร', geo_id: 3 },
	{ id: 36, code: '48', name: 'นครพนม', geo_id: 3 },
	{ id: 37, code: '49', name: 'มุกดาหาร', geo_id: 3 },
	{ id: 38, code: '50', name: 'เชียงใหม่', geo_id: 1 },
	{ id: 39, code: '51', name: 'ลำพูน', geo_id: 1 },
	{ id: 40, code: '52', name: 'ลำปาง', geo_id: 1 },
	{ id: 41, code: '53', name: 'อุตรดิตถ์', geo_id: 1 },
	{ id: 42, code: '54', name: 'แพร่', geo_id: 1 },
	{ id: 43, code: '55', name: 'น่าน', geo_id: 1 },
	{ id: 44, code: '56', name: 'พะเยา', geo_id: 1 },
	{ id: 45, code: '57', name: 'เชียงราย', geo_id: 1 },
	{ id: 46, code: '58', name: 'แม่ฮ่องสอน', geo_id: 1 },
	{ id: 47, code: '60', name: 'นครสวรรค์', geo_id: 2 },
	{ id: 48, code: '61', name: 'อุทัยธานี', geo_id: 2 },
	{ id: 49, code: '62', name: 'กำแพงเพชร', geo_id: 2 },
	{ id: 50, code: '63', name: 'ตาก', geo_id: 4 },
	{ id: 51, code: '64', name: 'สุโขทัย', geo_id: 2 },
	{ id: 52, code: '65', name: 'พิษณุโลก', geo_id: 2 },
	{ id: 53, code: '66', name: 'พิจิตร', geo_id: 2 },
	{ id: 54, code: '67', name: 'เพชรบูรณ์', geo_id: 2 },
	{ id: 55, code: '70', name: 'ราชบุรี', geo_id: 4 },
	{ id: 56, code: '71', name: 'กาญจนบุรี', geo_id: 2 },
	{ id: 57, code: '72', name: 'สุพรรณบุรี', geo_id: 2 },
	{ id: 58, code: '73', name: 'นครปฐม', geo_id: 2 },
	{ id: 59, code: '74', name: 'สมุทรสาคร', geo_id: 2 },
	{ id: 60, code: '75', name: 'สมุทรสงคราม', geo_id: 2 },
	{ id: 61, code: '76', name: 'เพชรบุรี', geo_id: 4 },
	{ id: 62, code: '77', name: 'ประจวบคีรีขันธ์', geo_id: 4 },
	{ id: 63, code: '80', name: 'นครศรีธรรมราช', geo_id: 6 },
	{ id: 64, code: '81', name: 'กระบี่', geo_id: 6 },
	{ id: 65, code: '82', name: 'พังงา', geo_id: 6 },
	{ id: 66, code: '83', name: 'ภูเก็ต', geo_id: 6 },
	{ id: 67, code: '84', name: 'สุราษฎร์ธานี', geo_id: 6 },
	{ id: 68, code: '85', name: 'ระนอง', geo_id: 6 },
	{ id: 69, code: '86', name: 'ชุมพร', geo_id: 6 },
	{ id: 70, code: '90', name: 'สงขลา', geo_id: 6 },
	{ id: 71, code: '91', name: 'สตูล', geo_id: 6 },
	{ id: 72, code: '92', name: 'ตรัง', geo_id: 6 },
	{ id: 73, code: '93', name: 'พัทลุง', geo_id: 6 },
	{ id: 74, code: '94', name: 'ปัตตานี', geo_id: 6 },
	{ id: 75, code: '95', name: 'ยะลา', geo_id: 6 },
	{ id: 76, code: '96', name: 'นราธิวาส', geo_id: 6 },
	{ id: 77, code: '97', name: 'บึงกาฬ', geo_id: 6 }
];
