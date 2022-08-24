import $ from "jquery";
import { useRef, useState } from "react";
import axios from "axios";
import port from "./../../data/port.json";

function SignUpForm ({ signUpData, onChangeSignUpData, setSignUpdata }) {

    const emailRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    const onClickSignUpButton = () => {
        if (signUpData.email === "") {
            alert("이메일을 입력해주세요.");
            emailRef.current.focus();
            return;
        }

        if (signUpData.password === "") {
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
            return;
        }

        if (signUpData.repassword === "") {
            alert("비밀번호 확인을 입력해주세요.");
            $("#repassword").focus();
            return;
        }

        if (signUpData.name === "") {
            alert("이름을 입력해주세요.");
            $("#name").focus();
            return;
        }

        if (signUpData.password !== signUpData.repassword) {
            alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
            setSignUpdata({
                ...signUpData,
                password: "",
                repassword: ""
            });
            $("#password").focus();
            return;
        }

        sendSignUpData().then(res => {
            console.log(res.data);
            alert(res.data.result);
            window.location.reload();
        }).catch(e => {
            console.log(e);
            setErrorMessage(e.response.data.error);
        });

    }

    const sendSignUpData = async () => {
        return await axios.post(port.url + "/user/signUp", signUpData);
    }
    return(
        <>
        <div className="blank"></div>

         <form>
             <div className="login">
                 <div className='loginCon'>
                     <span>이메일</span>
                     <input name="email" id="email" type="email" placeholder="" onChange={onChangeSignUpData} aria-required="false" maxLength="100" aria-invalid="true"></input>
                     
                 </div>
                 <div className='loginCon'>
                     <span>비밀번호</span>
                     <input name="password" id="password" type="password" placeholder="" onChange={onChangeSignUpData} aria-required="false" maxLength="100" aria-invalid="true"></input>
                 </div>
                 <div className='loginCon'>
                     <span>비밀번호 확인</span>
                     <input name="repassword" id="repassword" type="password" placeholder="" onChange={onChangeSignUpData} aria-required="false" maxLength="100" aria-invalid="true"></input>
                 </div>
                 <div className='loginCon'>
                     <span>이름</span>
                     <input name="name" id="name" type="text" placeholder="" onChange={onChangeSignUpData} aria-required="false" maxLength="100" aria-invalid="true"></input>
                 </div>
             </div>
             <div className="mb-3">
                <p className="text-danger">
                    {errorMessage}
                </p>
            </div>
             <div className="login">
             <button type="button" onClick={onClickSignUpButton} className="btn btn-outline-light" style={{margin:'1%'}}>회원가입</button>
             </div>
         </form>
        </>
     )
}
export default SignUpForm