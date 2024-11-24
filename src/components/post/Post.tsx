import { timeToLocalTime } from "@utils/functions"
import { FcLike } from "react-icons/fc";

interface PostProps {
    author: string
    title: string
    body: string
    likeNum: string
    thumbnail: string
    createDate: string
}

function Post({
    author,
    title,
    body,
    likeNum,
    thumbnail,
    createDate
}: PostProps) {
    console.log(body);

    return (
        <div className="p-4 w-full h-full flex flex-col">
            <div className="w-full p-6 flex items-center justify-center mb-4 shadow-xl lg:border lg:border-gray-300 flex-shrink-0 bg-white border border-neutral-200 rounded-xl relative">
                {/* {thumbnail !== undefined && <img src={`${process.env.SERVER_URL}/images/thumbnails/${thumbnail}`} className="hidden lg:block w-full h-full object-cover absolute" />} */}
                <div className="w-full text-3xl text-black text-center p-3 rounded-xl font-bold font-NanumGothic break-words ">
                    {title}
                </div>
            </div>
            <div className="p-5 text-black shadow-2xl rounded-xl flex-grow bg-white border border-neutral-300" dangerouslySetInnerHTML={{
                __html: body
            }} />


            <div className="flex justify-between items-center p-4">
                <div className="text-right">
                    작성자 - {author}
                </div>

                <div>
                    {timeToLocalTime(createDate)}
                </div>
            </div>
        </div>
    )
}

export default Post;