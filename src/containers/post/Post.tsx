import ax from "@utils/axios";
import { useState } from "react";
import { setHidden, setType } from "@slices/modal";
import { useAppDispatch } from "@slices/store";
import { useLocation } from "react-router-dom";
import PostComponent from "@components/post/Post";

interface PostProps {
    post: {
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
}

export default function Post({
    post
}: PostProps) {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [comment, setComment] = useState("");

    const commentOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    const onCommentSubmit = async () => {
        const result = await ax.postApi("/post/comment/write", {
            content: comment,
            postId: params.get("id")
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
        <PostComponent
            {...post}
            comment={comment}
            commentOnSubmit={onCommentSubmit}
            commentOnChange={commentOnChange}
        />
    )
}