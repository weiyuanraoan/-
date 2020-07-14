export default {
	dateTime(e) {
		let old = new Date(e)
		let now = new Date();
		//获取old具体时间
		let d = old.getTime();
		let h = old.getHours();
		let m = old.getMinutes();
		let Y = old.getFullYear();
		let M = old.getMonth()+1;
		let D = old.getDate()-2;
		//获取now时间
		let nd = old.getTime();
		let nh = old.getHours();
		let n = old.getMinutes();
		let nY = old.getFullYear();
		let nM = old.getMonth()+1;
		let nD = old.getDate();
		//当前的时间
		if (D === nD && M === nM && Y === nY){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			
			return h+':'+m			
		}
		//前天时间
		if (D+1 === nD && M === nM && Y === nY){
			if(h<10){
				h = '0'+h;
			}
			if(m<10){
				m = '0'+m;
			}
			
			return '前天'+h+':'+m		
			}
			else{
				//大于两天
				return Y+'/'+M+'/'+D
			}
		}
	
}
