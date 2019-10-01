
function card(){

	var e = document.getElementById("selectCard");
	var result = e.options[e.selectedIndex].value;
	var arrayText=[];
	arrayText[0] ="Thanh toán online bằng Internet Banking hoặc thẻ ATM nội địa để được giảm giá ngay <span style=\"color: red; font-weight: bold;\">5%</span>, hỗ trợ tất cả ngân hàng, thanh toán an toàn qua cổng VTCPay.";
	arrayText[1] = "Thanh toán online bằng thẻ quốc tế Visa/MasterCard/JCB để được giảm giá ngay <span style=\"color: red; font-weight: bold;\">10%</span> thanh toán an toàn qua cổng VTCPay.";
	arrayText[2] = "Sau khi đặt hàng quý khách sẽ chuyển khoản trước 100% đơn hàng để được giảm ngay <span style=\"color: red; font-weight: bold;\">15%</span> và số tiền cần thanh toán chỉ còn <span style=\"color: red; font-weight: bold;\">100.000đ</span> . Vui lòng xem hướng dẫn thanh toán ngay sau bước đặt hàng."
	arrayText[3] = "Sau khi đặt hàng quý khách sẽ chuyển khoản ngân hàng trước 50% tương ứng với <span style=\"color: red; font-weight: bold;\">100.000đ</span> và thanh toán phần còn lại sau khi chúng tôi hoàn thành bàn giao website. Vui lòng xem hướng dẫn thanh toán ngay sau bước đặt hàng."
	arrayText[4] = "<p>Sau khi đặt hàng quý khách vui lòng đến văn phòng công ty Halink để thanh toán đơn hàng.</p><br> <p>CÔNG TY TNHH TM DV HALINK <br>Địa chỉ: 6 Phan Chu Trinh, P. Tân Thành, Q. Tân Phú, TP.HCM <br>Điện thoại: 096.698.1085 - 090.635.1080</p>"
	
	var  unitPirce= [];
		unitPirce[0]=120000;
		unitPirce[1]=150000;
		unitPirce[2]=150000;

	var tam = unitPirce[0]+unitPirce[1]+unitPirce[2];
	var sale = 0 ;
	var total = 0;
	if(result==1) {
		sale = tam*(5/100);
		total = tam - sale;
		document.getElementById("tam").innerHTML = tam;
		document.getElementById("total").innerHTML = total;
		document.getElementById("sale").innerHTML = sale;
		document.getElementById("text_card").innerHTML = arrayText[0];
	}
	if(result==2) {
		sale = tam*(10/100);
		total = tam - sale;
		document.getElementById("tam").innerHTML = tam;
		document.getElementById("total").innerHTML = total;
		document.getElementById("sale").innerHTML = sale;
		document.getElementById("text_card").innerHTML = arrayText[1];
	}
	if(result==3) {
		sale = tam*(15/100);
		total = tam - sale;
		document.getElementById("tam").innerHTML = tam;
		document.getElementById("total").innerHTML = total;
		document.getElementById("sale").innerHTML = sale;
		document.getElementById("text_card").innerHTML = arrayText[2];
	}
	if(result==4) {
		total = tam - sale;
		document.getElementById("tam").innerHTML = tam;
		document.getElementById("total").innerHTML = total;
		document.getElementById("sale").innerHTML = sale;
		document.getElementById("text_card").innerHTML = arrayText[3];
	}
	if(result==5) {
		total = tam - sale;
		document.getElementById("tam").innerHTML = tam;
		document.getElementById("total").innerHTML = total;
		document.getElementById("sale").innerHTML = sale;
		document.getElementById("text_card").innerHTML = arrayText[4];
	}

}

function order(){


	var name = "Trần Công Dũng";
	var phone = "0985582807";
	var email = "trancongdung12@gmail.com";
	var address = "101b Lê Hữu Trác";
	var note = "Ahihi đồ ngốc :))";

	document.getElementById("name").value = name;
	document.getElementById("phone").value = phone;
	document.getElementById("email").value = email;
	document.getElementById("address").value = address;
	document.getElementById("note").value = note;

	alert("Chào Dũng \n Bạn đã đặt hàng thành công");

	
	



}