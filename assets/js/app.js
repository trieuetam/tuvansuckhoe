//Event click save data to db
function save_data()
{
	var form_element = document.getElementsByClassName('form_data');

	var form_data = new FormData();

	for(var count = 0; count < form_element.length; count++)
	{
		form_data.append(form_element[count].name, form_element[count].value);
	}

	var ajax_request = new XMLHttpRequest();

	ajax_request.open('POST', 'process_data.php');

	ajax_request.send(form_data);

	ajax_request.onreadystatechange = function()
	{
		if(ajax_request.readyState == 4 && ajax_request.status == 200)
		{
			var response = JSON.parse(ajax_request.responseText);
        }
	}
}


//call api and paste script
const xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://api-tuvansuckhoe.herokuapp.com/tatca", true);
xhttp.send()
xhttp.onreadystatechange = function(){
    if(this.readyState ==4){
        var know = JSON.parse(this.responseText)
	//console.log(know)
	for(var i of know){
        var createscipt = document.createElement("script");
        var t = created.appendChild(createscipt);
        t.innerHTML = "var know = "+ JSON.stringify(i);
	}
	//console.log(t)
	document.body.appendChild(t);
    }
}


//Event click
var ques = document.getElementById("question")
var messageBox =  document.querySelector(".messager-box")
var dark=  document.querySelector(".dark")

var close = document.getElementById("close")
var form=  document.querySelector(".form")
var mess_title=  document.querySelector(".mess_title")
var open=  document.getElementById("messclick")

close.addEventListener("click", function(){
    form.classList.remove('visible')
});
open.addEventListener("click", function(){
    form.classList.toggle('visible')
    mess_title.classList.add('d-none')
});

ques.addEventListener("click", function(){
    messageBox.classList.toggle('active')
    dark.classList.toggle('active')
});

var bar_s = document.querySelector('.input-form__bar')
var listSup = document.querySelector('.list-support')
bar_s.addEventListener("click", function(){
    listSup.classList.toggle('active')
});

dark.addEventListener("click", function(){
    messageBox.classList.remove('active')
    dark.classList.remove('active')
});

var btn  = document.querySelector('button');
btn.addEventListener("click", function(){
    talk()
});

var nav = document.querySelector('.nav');
var bar = document.querySelector('.fa-bars');
bar.addEventListener("click", function(){
    this.classList.toggle('fa-times')
    nav.classList.toggle('nav-toggle')
});


function creElementAI(x){
    //Create element child for AI
    var createEle = document.createElement("div");
    createEle.className = 'ai-mes'
    var result =  created.appendChild(createEle);

   var createEleChild = document.createElement("div");
   createEleChild.className = 'ai'
   var childResult =  result.appendChild(createEleChild);
    return childResult.innerHTML = x
}

function creElementUser(x){
     //Create element child for user
     var createEle2 = document.createElement("div");
     createEle2.className = 'user-mes'
     var result2 =  created.appendChild(createEle2);

     var createEle3 = document.createElement("div");
     createEle3.className = 'user'
     var childResult2 =  result2.appendChild(createEle3);
    return childResult2.innerHTML = x
}

var listItemSP1 = document.getElementById('items-sup1')
listItemSP1.addEventListener("click", function(){
    listSup.classList.remove('active')
        creElementAI("Bộ Y tế yêu cầu các cơ sở khám bệnh, chữa bệnh sẵn sàng tổ chức phân loại người bệnh ngay từ khi người bệnh đến đăng ký khám bệnh tại các cơ sở khám bệnh, chữa bệnh; phân luồng và bố trí buồng khám riêng đối với người bệnh có triệu chứng viêm đường hô hấp cấp tính (ho, sốt,...); đặc biệt lưu ý khi có yếu tố dịch tễ của người bệnh sống hoặc đến từ Trung Quốc trong vòng 14 ngày.")
        creElementAI("Khi có diễn biến nặng hoặc được xác định dương tính với chủng virus Corona mới sẽ chuyển người bệnh tới Bệnh viện tuyến cuối theo phân tuyến điều trị:")
        creElementAI("👉Bệnh viện Bệnh Nhiệt đới Trung ương (cơ sở Kim Chung) tiếp nhận người bệnh từ Hà Tĩnh trở ra. Trường hợp hết cơ số giường bệnh dự phòng của Bệnh viện Bệnh Nhiệt đới Trung ương người bệnh sẽ được chuyển đến: Bệnh viện Bạch Mai, Bệnh viện Nhi Trung ương.👉Bệnh viện Trung ương Huế tiếp nhận người bệnh khu vực các tỉnh miền Trung và Tây Nguyên (từ Quảng Bình đến Phú Yên).")
        creElementAI("👉Bệnh viện Bệnh Nhiệt đới thành phố Hồ Chí Minh tiếp nhận người bệnh thuộc các tỉnh từ Khánh Hòa trở vào. Trường hợp hết cơ số giường bệnh dự phòng của Bệnh viện Bệnh Nhiệt đới thành phố Hồ Chí Minh, người bệnh sẽ được chuyển đến Bệnh viện Chợ Rẫy, Bệnh viện Nhi đồng 1, Bệnh viện Nhi đồng 2, Bệnh viện Nhi đồng thành phố Hồ Chí Minh.")
});

var listItemSP2 = document.getElementById('items-sup2')
listItemSP2.addEventListener("click", function(){
    listSup.classList.remove('active')
    
    var createEle = document.createElement("div");
    createEle.className = 'ai-mes'
    var result =  created.appendChild(createEle);

   var createEleChild = document.createElement("div");
   createEleChild.className = 'ai'
   var childResult =  result.appendChild(createEleChild);
    childResult.innerHTML = 'COVID-19 (từ tiếng Anh: coronavirus disease 2019 nghĩa là bệnh virus corona 2019)[10] là một bệnh đường hô hấp cấp tính truyền nhiễm gây ra bởi chủng virus corona SARS-CoV-2 và các biến thể của nó. Đây là một loại virus mới phát hiện điều tra ổ dịch bắt nguồn từ khu chợ lớn chuyên bán hải sản và động vật ở Vũ Hán, tỉnh Hồ Bắc, Trung Quốc. Virus gây viêm đường hô hấp cấp ở người và cho thấy có sự lây lan từ người sang người. Ngoài chủng virus corona mới phát hiện này, đã có 6 chủng virus corona khác được biết tới ngày nay có khả năng lây nhiễm ở người sang người. Bệnh được phát hiện lần đầu tiên trong đại dịch COVID-19 năm 2019–2020'

   var createEleChild2 = document.createElement("a");
   createEleChild2.className = 'linkhref'
   createEleChild2.setAttribute('href', "https://vi.wikipedia.org/wiki/B%E1%BB%87nh_virus_corona_2019");
   createEleChild2.setAttribute('target', "_blank");

   var createEleChild4 =  childResult.appendChild(createEleChild2);
   createEleChild4.innerHTML = 'Xem thêm'

});

var listItemSP3 = document.getElementById('items-sup3')
listItemSP3.addEventListener("click", function(){
    listSup.classList.remove('active')
    creElementAI("1. Tránh tiếp xúc với những người đi về từ vùng dịch<br>2. Tránh đi du lịch nếu đang có sốt, ho hoặc khó thở. Đến ngay cơ sở y tế khi có triệu chứng nghi ngờ. Đồng thời chia sẻ lịch trình di chuyển của bạn với nhân viên y tế.<br>3. Tránh tiếp xúc với người sốt ho. Thường xuyên rửa tay xà phòng, tránh chạm tay vào mắt, mũi, miệng.<br>4. Khi ho, hắt hơi hãy che kín miệng và mũi bằng khăn giấy hoặc tay áo. Sau khi, sử dụng khăn giấy bỏ vào thúng rác rồi rửa tay.<br>5. Nếu thấy có dấu hiệu ốm khi đi lại, du lịch thông báo ngay cho nhân viên hàng không, đường sắt, ô tô và tìm đến cơ sở y tế càng sớm càng tốt.")
    creElementAI("6. Chỉ sử dụng các loại thực phẩm chín.<br>7. Không khạc nhổ bừa bãi nơi công cộng. Tránh tiếp xúc gần với các loại động vật nuôi hoặc hoang dã.<br>8. Đeo khẩu trang khi tới chỗ đông người hoặc khi tiếp xúc với người có triệu chứng bệnh.<br>9. Cần giữ môi trường sạch sẽ, quan trọng là thoáng không khí ngoài trời và khi có ánh nắng thì nên ra ngoài.")
});

var listItemSP4 = document.getElementById('items-sup4')
listItemSP4.addEventListener("click", function(){
    listSup.classList.remove('active')
    var createEle = document.createElement("div");
    createEle.className = 'ai-mes'
    var result =  created.appendChild(createEle);

   var createEleChild = document.createElement("div");
   createEleChild.className = 'ai'
   var childResult =  result.appendChild(createEleChild);
    childResult.innerHTML = 'Hãy liên hệ với Cơ quan y tế gần nhất tại địa phương hoặc thông báo tới Đường dây nóng của Bộ Y tế về phòng, chống dịch Covid-19 tại:<br>19009095'

   var createEleChild2 = document.createElement("a");
   createEleChild2.className = 'linkhref'
   createEleChild2.setAttribute('href', "https://hcdc.vn/hoidap/index/chitiet/ed7d23efb3fdca0756437975fc46a182");
   createEleChild2.setAttribute('target', "_blank");

   var createEleChild4 =  childResult.appendChild(createEleChild2);
   createEleChild4.innerHTML = 'Xem các cơ sở điều trị'
});


function talk() {
     save_data()

     var user = document.getElementById("userBox").value;

     var created = document.getElementById("created") 

    if(user == "")
        alert("Bạn chưa nhập bất kì kí tự nào!")
    else
    {

      
       //check neu user nhap vao co trong know
       if(user in know){
           creElementUser(user)
           setTimeout(() => {
               creElementAI(know[user])
           }, 1000);
       } 
   
       else{
           creElementUser(user)
           
           setTimeout(() => {
               creElementAI("AI không thể trả lời câu hỏi của bạn,<br> Nếu có vấn đề cần giải quyết vui lòng liên hệ Hotline: 1900 9095")
           }, 1000);
       }
       document.getElementById("userBox").value = ''   
    }

}
