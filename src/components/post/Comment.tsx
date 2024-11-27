import ProfileImage from "@assets/images/user-fill.webp"

interface CommentProps {
    author: string,
    content: string,
    createDate: string
}

function Comment({
    author,
    content,
    createDate
}: CommentProps) {
    return (
        <div className="p-4 shadow-sm rounded-lg border border-gray-300">
            <div className="flex w-full gap-2 items-center border-b border-b-gray-300 pb-2">
                <figure
                    className="bg-white rounded-[50%] flex-shrink-0"
                >
                    <img
                        src={ProfileImage}
                        alt="user"
                        width={40}
                        height={40}
                        className=""
                    />
                </figure>
                <figcaption className="flex flex-grow flex-col items-start">
                    <div>{author}</div>
                </figcaption>
            </div>

            <div className="flex justify-between bg-white p-4 ">
                <div>{content}</div>
                <div className="font-light text-md text-[#8f8f8f]">{createDate}</div>
            </div>
        </div>

    )
}

export default Comment;