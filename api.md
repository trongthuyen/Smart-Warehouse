<!-- get equipmentData (bao gồm light, cooler, door) -->
<!-- http://localhost:8080/api/warehouse/:id/equipments -->
<!-- GET -->
getEquipmentData = [
	{
		id: autoincrease,
		name: string,
		imgId: string,
		description: string,
		mode: boolean,
		rise: boolean,
	}
]

<!-- get hourlyData (của các sensor) -->
<!-- http://localhost:8080/api/warehouse/:id/hourly-data -->
<!-- GET -->
getHourlyData = [
	{
		amt: Math.floor(Math.random() * 10),
		humid: float,
		name: string, (hourly)
		temper: float
	}
]

<!-- get dailyData (của các sensor) -->
<!-- http://localhost:8080/api/warehouse/:id/daily-data -->
<!-- GET -->
getdailyData = [
	{
		amt: Math.floor(Math.random() * 10),
		humid: float,
		name: string, (daily)
		temper: float
	}
]

<!-- get monthlyData (của các sensor) -->
<!-- http://localhost:8080/api/warehouse/:id/monthly-data -->
<!-- GET -->
getMonthlyData = [
	{
		amt: Math.floor(Math.random() * 10),
		humid: float,
		name: string, (monthly)
		temper: float
	}
]


<!-- get equipment info (3 thiết bị là light, cooler, door) -->
<!-- http://localhost:8080/api/warehouse/:id/control-equipment-info -->
<!-- GET -->
getControlEquipmentInfo = [
	{
		id: int,                    id của thiết bị được hiển thị trên dashboard
		name: string,               tên thiết bị có id đấy :v
		image: string,              avt của thiết bị đấy
		proper1: string,            còn lại hard code :)
		para1: string,
		proper2: string,
		para2: string,
		proper3: string,
		para3: string,
		proper4: string,
		para4: string,
		proper5: string,
		para5: string,
	}
]


<!-- get danh sách các thiết bị light, cooler, door -->
<!-- http://localhost:8080/api/warehouse/:id/equipment-list -->
<!-- GET -->
getEquipmentList = [
	{
		id: autoincrease,               id của row
		name: string,                   tên của thiết bị
		type: string,                   Light, Cooler hoặc Door
		location: string,               địa chỉ nhà kho
		state: boolean,                 trạng thái của thiết bị
		fInfo: string,                  thông tin thêm
		date: dd/mm/yyyy,               ngày mà thiết bị chào đời
		time: HH:MM AM/PM"              giờ mà thiết bị chào đời
	}
]