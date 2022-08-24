import Canvas from "./pages/post/Canvas"
// import $ from "jquery";
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from 'react-router';

const Upload = () => {
    const navigate = useNavigate();  
    const [imgfile, uploadimg] = useState('')
    let fileUrl= imgfile[0]
    console.log("Image FIles",fileUrl);
    const imgFilehandler = (e) => {
      if (e.target.files.length !== 0) {
        uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
      }
    }

    function uploadCanvasToServer() {
        navigate("/post/list")
      };


    return(
        <>

            <div className="container center">

                <div className="row justify-content-center">

                <div className="col-4" >
                {/* <a> */}
                    <h1 className="h1Text center" >업로드
                    </h1>
                {/* </a> */}
                </div>
            </div>
            <div className="blank"></div>
            {/* <form> */}
                <div className="center">
                   
                    <Form.Group className="mb-3 short center" controlId="exampleForm.ControlInput1">
                        {/* <div className="con"> */}
                        {/* <label for="formFile" className="form-label">Default file input example</label> */}
                        <input className="form-control" type="file" id="formFile" onChange={imgFilehandler} multiple />
                        <div className="blank"></div>
                       
                        {/* <Button variant="outline-light" >제출</Button> */}
                    {/* </div> */}
                    </Form.Group>
                    {imgfile && (
                        <Canvas url={fileUrl}/>
                            // <img
                            //     alt="sample"
                            //     src={fileUrl}
                            //     // style={{ margin: "auto" }}
                            // />
                            )
                            }

                            {/* onClick={show} onChange={imgFilehandler} */}
                    {/* <label for="formFile" className="form-label">Default file input example</label> */}
                    {/* <input className="form-control" type="file" id="formFile"/> */}
                    {/* <div className="upload-box">
                        <button className="btn-upload">파일선택</button>
                        <input className="btn-file d-none" type="file"></input>
                    </div> */}

            {/* 
                    <div style={{display:'flex'}}>
                        <input className="form-control form-control-lg" id="fileInput" type="file"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-outline-light">제출</button>
                    </div> */}
                    
                    {/* <div id="jsCanvas" className="canvas">canvas</div> */}
                    {/* <canvas></canvas> */}

                </div>
                <div className="blank"></div>
                <div className="center">
                {/* <h3>정말 업로드 하시겠습니까?
                    <br/>
                    사진은 서버에 영원히 저장됩니다
                </h3> */}
                <button className="btn btn-outline-info" onClick={uploadCanvasToServer}>확인</button>

                </div>
                    {/* </form> */}
                <div className="blank"/>
            </div>
        </>
    )

}

export default Upload;