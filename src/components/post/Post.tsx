import { timeToLocalTime } from "@utils/functions"
import Comment from "./Comment"

interface PostProps {
    author: string
    title: string
    body: string
    likeNum: string
    comments: {
        author: string,
        content: string,
        createDate: string
    }[],
    thumbnail: string
    createDate: string
}

function Post({
    author,
    title,
    body,
    likeNum,
    comments,
    thumbnail,
    createDate
}: PostProps) {
    console.log(body);

    return (
        <div className="p-4 w-full h-full flex flex-col gap-4">
            <div className="w-full p-6 flex items-center justify-center mb-4 lg:border lg:border-gray-300 flex-shrink-0 bg-white border border-neutral-200 rounded-xl relative">
                {/* {thumbnail !== undefined && <img src={`${process.env.SERVER_URL}/images/thumbnails/${thumbnail}`} className="hidden lg:block w-full h-full object-cover absolute" />} */}
                <div className="w-full text-3xl text-black text-center p-3 rounded-xl font-bold font-NanumGothic break-words ">
                    {title}
                </div>
            </div>
            <div className="p-5 mb-4 text-black shadow-lg rounded-xl flex-grow bg-white border border-neutral-300" dangerouslySetInnerHTML={{
                __html: body
            }} />

            <div>
                <h3 className="pl-1 text-xl font-bold font-NanumGothic mb-4">댓글</h3>
                <div className="flex flex-col gap-4 pb-10">
                    {
                        comments.map((comment, index) =>
                            <Comment
                                key={index}
                                author={comment.author}
                                content={comment.content}
                                createDate={comment.createDate}
                            />

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Post;