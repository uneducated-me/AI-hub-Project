import { useNavigate } from "react-router-dom";
import "./mainStyle.css"

const Main = () => {

    const navigate = useNavigate();

    return (
        <main>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <section className="py-5 text-center container">
                <h1 className="fw-light fw-bold">인생샷 공작소</h1>
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <p className="lead text-white">
                            인생샷 공작소에 오신 여러분 환영 합니다!<br/>
                            여러분의 인생샷을 만들고 공유해 보세요!
                        </p>
                        <p>
                            <br/><br/>
                            <button type="button" className="btn btn-lg btn-secondary fw-bold border-white bg-black" 
                            onClick={() => {
                                navigate("/user")
                            }}>Login/SignUp</button>
                        </p>    
                    </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main;