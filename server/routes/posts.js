const { Router } = require('express')
const { Post } = require("./../models/");
const asyncHandler = require("./../utils/async-handler") //try catch문을 사용하지 않고 오류처리 미들웨어를 사용할 수 있도록하는 함수입니다.
const { User } = require("./../models/")

const router = Router();


//게시글 작성 : 2번
//게시글이 작성되면 post형식의
// '/posts/' 에 해당하는 url이 라우팅되어 접근
router.post("/", async (req, res, next) => {
    const { img } = req.body;
    console.log(img);
    //formData에서 req.body를 통해 들어온 title, content를 가져옴
    try {

        //Post에 해당하는 스키마에 create 함수를 실행하고,
        //title과 content를 넣음.
        await Post.create({
            img
        });

        //에러가 나지 않고 정상적으로 저장이 되면 
        //응답을 json 형태로 보내줍니다.
        res.json({
            result: '저장이 완료되었습니다.'
        })

    } catch (e) {
        //에러가 발생 할 경우, 오류 처리 미들웨어로 넘겨줍니다.
        next(e);
    }
})


//게시글 삭제 : 2번
router.get("/:shortId/delete", async (req, res, next) => {

    //shortId를 파라미터를 통해 가져옵니다.
    const { shortId } = req.params;

    try {
        //shortId에 해당하는 document를 삭제합니다.
        await Post.deleteOne({ shortId });

        //만약 오류가 나지 않고 삭제를 완료했다면, json형태를 응답해줍니다.
        res.json({
            result: '삭제가 완료 되었습니다.'
        })

    } catch (e) {
        next(e);
    }
});


module.exports = router; 