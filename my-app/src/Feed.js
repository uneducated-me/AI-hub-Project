import Gallery from "react-photo-gallery";
import { photos } from "./photo";
// import { ReactComponent as FeedIcon } from "./icon/feed.svg"


const Feed = () => {
    return(
        <div>
            <div className="blank"></div>
            <h1 style={{textAlign:"center"}}>메인 피드</h1>
            <div className="blank"></div>

            <Gallery photos={photos} direction={"column"}/>
        
            <div className="blank" />
        </div>
        
        
    )
}

export default Feed;