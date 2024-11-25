import LayoutComponent from "@components/common/Layout";
import Loading from "@components/common/Loading";
import Post from "@components/post/Post";
import { useQuery } from "@tanstack/react-query";
import ax from "@utils/axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query'

interface FetchPostProps {
    id: string
}

async function fetchPost({ id }: FetchPostProps) {
    const uri = `/post?id=${id}`;
    const result = await ax.get(uri);

    return result;
}

function ViewPage() {
    const queryClient = useQueryClient()
    const [searchParams] = useSearchParams();
    const { data, isError, isLoading } = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
            const id = searchParams.get("id");
            if (id === null) throw new Error("id is null");

            const result = await fetchPost({ id });
            if (result.status !== 200) throw new Error(result.data);
            return result.data;
        }
    })

    useEffect(() => {
       return () => {
        queryClient.resetQueries({
            queryKey : ["post"],
            exact: true,
        })
       }
    }, [queryClient])

    if (isError) {
        return <div className="flex items-center justify-center">
            <p>서버에서 에러가 발생했습니다.</p>
            <p>다시 실행해주세요!</p>
        </div>
    }

    return (
        <LayoutComponent>
            {isLoading ? <Loading /> :
                (data && <Post
                    author={data.author}
                    title={data.title}
                    body={data.body}
                    likeNum={data.likeNum}
                    comments={data.comments}
                    thumbnail={data.thumbnail}
                    createDate={data.createDate}
                />)
            }

        </LayoutComponent>
    )
}

export default ViewPage;