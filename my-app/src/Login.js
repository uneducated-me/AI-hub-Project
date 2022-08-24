import SignUpForm from "./pages/user/SignUpForm"
import LoginForm from "./pages/user/LoginForm"
import { useEffect, useState } from "react";

const Login = () => {
    const [view, setView] = useState({
        signIn: true,
        signUp: false
    });

    // 로그인 입력받을 데이터를 props로 넘겨줌
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    const onChangeSignInData = (e) => {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value
        })
    }

    // 회원가입 입력받을 데이터를 props로 넘겨줌
    const [signUpData, setSignUpdata] = useState({
        email: "",
        password: "",
        repassword: "",
        name: ""
    });

    useEffect(() => {
        // console.log(signUpData);
    }, [signUpData]);

    // 회원가입 data를 입력받는 함수
    const onChangeSignUpData = (e) => {
        setSignUpdata({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    return(
    <>
    <div className="container">
    <div className="row justify-content-center">

<div className="col-4" >
<a onClick={() => {
        setView({
            signIn: true,
            signUp: false
        }) 
    }}>
    <h1 className="h1Text center" >로그인
    </h1>
</a>
</div>
<div className="col-4">
<a onClick={() => {
        setView({
            signIn: false,
            signUp: true
        })
    }}>
    <h1 className="h1Text center">회원가입
    {/* <span style={{letterSpacing:'normal', padding:'10%'}}></span> */}
    </h1>
</a>
</div>


{
view.signIn ? (<LoginForm signInData={signInData}
    onChangeSignInData={onChangeSignInData} />) : (<></>)
}
{
view.signUp ? (<SignUpForm signUpData={signUpData} setSignUpdata={setSignUpdata}
    onChangeSignUpData={onChangeSignUpData} />) : (<></>)
}


</div>
    </div>
   
    </>
)}
export default Login;