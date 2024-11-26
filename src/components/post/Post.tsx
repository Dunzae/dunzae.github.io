import "./style.scss";
import Comment from "./Comment"
import ax from "@utils/axios";
import { useState } from "react";
import { setHidden, setType } from "@slices/modal";
import { useAppDispatch } from "@slices/store";
import { useLocation } from "react-router-dom";

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
    const dispatch = useAppDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [comment, setComment] = useState("");

    const onCommentSubmit = async () => {
        const result = await ax.postApi("/post/comment/write", {
            content: comment,
            postId : params.get("id")
        });

        if (result.error !== undefined) {
            dispatch(setType("Fail"));
            dispatch(setHidden(false));
        } else {
            dispatch(setType("Success"));
            dispatch(setHidden(false));
        }
    }

    return (
        <div className="p-4 w-full h-full flex flex-col gap-4 tiptap prose max-w-full">
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
                <h3 className="pl-1 pb-1 text-xl font-bold font-NanumGothic border-b border-b-gray-300 mb-4">댓글</h3>
                {comments.length !== 0 && <div className="flex flex-col gap-4 pb-10">
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
                </div>}
                <div>
                    <h4 className="text-lg font-bold font-NanumGothic mb-2">댓글 달기</h4>
                    <div className="w-full flex gap-4">
                        <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" className="border border-b-black p-2 flex-grow outline-none" placeholder="댓글을 입력해주세요" />
                        <button className="bg-black text-white rounded-lg p-2" onClick={onCommentSubmit}>작성 완료</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;