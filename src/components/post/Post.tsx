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
        <div className="p-4 h-full flex flex-col">
            <div className="w-full relative mb-8 h-[100px] lg:h-[200px] shadow-xl lg:border lg:border-gray-300">
                {thumbnail !== undefined && <img src={`${process.env.SERVER_URL}/images/thumbnails/${thumbnail}`} className="hidden lg:block w-full h-full object-cover absolute" />}
                <div className=" w-full h-full flex justify-center items-center absolute">
                    <div className="text-white text-center bg-black p-3 rounded-xl text-[40px] font-bold font-NanumGothic">
                        {title}
                    </div>
                </div>
            </div>
            <div className="p-5 text-white shadow-xl bg-[#1f1f1f] rounded-xl flex-grow" dangerouslySetInnerHTML={{
                __html: body
            }} />


            <div className="flex justify-between">
                <div>
                    좋아요 수 : {likeNum}
                </div>
                <div>
                    <div>
                        작성자 : {author}
                    </div>

                    <div>
                        {createDate}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;