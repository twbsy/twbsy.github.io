const checkbox1=document.getElementById("checkbox1")
const checkbox2=document.getElementById("checkbox2")
const checkbox3=document.getElementById("checkbox3")
const signupbutton=document.getElementById("signupbutton")

checkbox3.addEventListener('click',function(){
    if(this.checked){
        checkbox1.checked=true;
        checkbox2.checked=true;
        signupbutton.style.display='block';
    }
    else{
        checkbox1.checked=false;
        checkbox2.checked=false;
        signupbutton.style.display='none';
    }
})

// test.js

document.addEventListener('DOMContentLoaded', function() {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const checkbox3 = document.getElementById("checkbox3");
    const signupbutton = document.getElementById("signupbutton");

    checkbox3.addEventListener('click', function() {
        if (this.checked) {
            checkbox1.checked = true;
            checkbox2.checked = true;
            signupbutton.style.display = 'block';
        } else {
            checkbox1.checked = false;
            checkbox2.checked = false;
            signupbutton.style.display = 'none';
        }
    });

    signupbutton.addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('psw').value;
        var terms1 = document.getElementById('checkbox1').checked;
        var terms2 = document.getElementById('checkbox2').checked;
        var terms3 = document.getElementById('checkbox3').checked;

        if (username.trim() === '' || password.trim() === '') {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }

        else if (username.trim()!=''&&password.trim()!='') {
            // 회원가입 성공 시 로컬 스토리지에 회원 정보 저장
            localStorage.setItem('username', username);
            localStorage.setItem('password',password);
            // 회원가입 후 마이페이지로 이동
            location.href = 'test.05.signup.html';
        } else {
            alert('모든 약관에 동의해야 회원가입이 가능합니다.');
        }
    });
});


