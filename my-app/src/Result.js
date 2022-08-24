import Canvas from "./pages/post/Canvas"
import $ from "jquery";

const Upload = () => {

    function uploadCanvasToServer() {
        const canvas = document.getElementById('jsCanvas');
        // canvas.className = ''
        // canvas.style.backgroundImage = ;
        const imgBase64 = canvas.toDataURL('image/png');
        const decodImg = atob(imgBase64.split(',')[1]);
      
        let array = [];
        for (let i = 0; i < decodImg .length; i++) {
          array.push(decodImg .charCodeAt(i));
        }
      
        const file = new Blob([new Uint8Array(array)], {type: 'image/png'});
        const fileName = 'canvas_img_' + new Date().getMilliseconds() + '.png';
        let formData = new FormData();
        formData.append('file', file, fileName);
      
        $.ajax({
          type: 'post',
          url: '/posts',
          data: formData,
          processData: false,
          contentType: false,
          success: function (data) {
            alert('Uploaded !!')
          }
        })
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
            <form>
                <div className="center">
                    {/* <div className="upload-box">
                        <button className="btn-upload">파일선택</button>
                        <input className="btn-file d-none" type="file"></input>
                    </div> */}

            {/* 
                    <div style={{display:'flex'}}>
                        <input className="form-control form-control-lg" id="fileInput" type="file"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-outline-light">제출</button>
                    </div> */}
                    <Canvas />
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
                    </form>
                <div className="blank"/>
            </div>
        </>
    )

}

export default Upload;