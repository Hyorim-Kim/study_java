function zipCheck(){
	//alert("aa");
	let url = "zipcheck.jsp?check=y";
	window.open(url, "post", "toolbar=no, width=500, height=400, top=200, left=300, scrollbars=yes, menubar=no");
}

function idCheck(){
	if(regForm.id.value == "id"){
		alert("id를 입력하시오");
		regForm.id.focus();
		return;
	}// else 권장X
	let url2 = "idcheck.jsp?id=" + regForm.id.value;
	window.open(url2, "id", "toolbar=no, width=300, height=150, top=200, left=300, scrollbars=yes, menubar=no");
}

function inputCheck(){
	//alert("cc");
	if(regForm.id.value === ""){
		alert("아이디를 입력하시오");
		regForm.id.focus();
		return false;  // =return
	}
	
	if(regForm.passwd.value !== regForm.repasswd.value){
		alert("비밀번호 불일치!");
		regForm.passwd.focus();
		return false;  // =return
	}
	
	if(regForm.name.value === ""){
		alert("이름을 입력하시오");
		regForm.name.focus();
		return false;  // =return
	}
	
   // 이메일은 정규 표현식으로 확인 
   let regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
   if ( !regForm.email.value.match(regExp)) {
        alert("이메일을 정확히 입력하시오"); 
        regForm.email.focus();
      return;  
   }

   //전화번호
   let regExp2 = /^\d{2,3}-\d{3,4}-\d{4}/;   //010-111-1234 
   if ( !regForm.phone.value.match(regExp2)) {
      alert("전화번호를 정확히 입력하시오");
      regForm.phone.focus(); 
      return; 
   }
   
    if(regForm.job.value ===""){
      alert("직업을 입력하시오");
      regForm.job.focus();
      return false;   
   }
    
   document.regForm.submit();
}

// 쇼핑몰 로그인 후 자신의 정보 수정용
function memberUpdate(){
	//alert("1");
	// 입력자료 오류 검사 후 ... 그러나 생략
	document.upForm.submit();
}

function memberUpdateCancel(){
	//alert("2");
	location.href="../guest/guest_index.jsp";
}

function memberDelete(){
	alert("회원탈퇴는 죽음");
}



