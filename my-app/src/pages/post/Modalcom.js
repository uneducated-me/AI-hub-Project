import { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import url from "./../../data/port.json";
// import set

const Modalcom = ({show, handleClose}) => {

  const [imgfile, uploadimg] = useState([])
  console.log("Image FIles",imgfile[0]);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }
  const navigate = useNavigate();  
 
  const goUpload = () =>{

  //   sendImgUrl().then(res => {
  //     // console.log(res);
  //     setCookie("imgUrl", res.data, { path: "/" });
  //     navigate('/post/upload')
  //     // navigate("/post/list");
  // }).catch(e => {
  //     console.log(e);
  // });
    // const fileurl = imgfile[0]
  }
//   const sendImgUrl = async () => {
//     return await axios.post(url.url + "/posts", imgfile, {
//     });
// }

    return(
        <>
        {
            show ?(<>
             <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title style={{color:'black'}}>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{color:'black'}}>사진 scr 주소</Form.Label>
                            {/* <label for="formFile" className="form-label">Default file input example</label> */}
                            <input className="form-control" type="file" id="formFile" onClick={show} onChange={imgFilehandler}/>
                            {/* <Form.Control
                              type="url"
                              placeholder=""
                              autoFocus
                            /> */}
                          </Form.Group>
                          {/* {imgfile.map((elem) => {
    return <>
      <span key={elem}>
        <img src={elem} height={elem.height} width={elem.width} alt="med1" />
      </span>
    </>
  })} */}

                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={
                          // handleClose
                          goUpload
                        }>

                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
            </>):(<></>)
        }
        
        </>
    )
}

export default Modalcom;