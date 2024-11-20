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
        <>
            <div className="w-full h-[200px] relative">
                {thumbnail !== undefined && <img src={`${process.env.SERVER_URL}/images/thumbnails/${thumbnail}`} className="w-full h-full object-cover absolute" />}
                <div className=" w-full h-full flex justify-center items-center absolute">
                    <div className="text-white p-3 rounded-xl text-[40px] font-bold font-NanumGothic">
                        {title}
                    </div>
                </div>
            </div>
            <div className="px-5" dangerouslySetInnerHTML={{
                __html: body 
            }}>

            </div>
            <div>
                {author}
            </div>
            <div>
                {likeNum}
            </div>
            <div>
                {createDate}
            </div>
        </>
    )
}

export default Post;