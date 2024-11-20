import LayoutComponent from "@components/common/Layout";
import Post from "@components/post/Post";
import { useQuery } from "@tanstack/react-query";
import ax from "@utils/axios";
import { useSearchParams } from "react-router-dom";

interface FetchPostProps {
    id: string
}

async function fetchPost({ id }: FetchPostProps) {
    const uri = `/post?id=${id}`;
    const result = await ax.get(uri);

    return result;
}

function ViewPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, isError, isLoading } = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
            const id = searchParams.get("id") ?? "";
            const result = await fetchPost({ id });

            if (result.status !== 200) throw new Error(result.data);
            return result.data;
        }
    })

    if (isError) {
        return <div>Error</div>
    }

    return (
        <LayoutComponent>
            {isLoading && <div>Loading</div>}
            {data && <Post
                author={data.author}
                title={data.title}
                body={data.body}
                likeNum={data.likeNum}
                thumbnail={data.thumbnail}
                createDate={data.createDate}
            />}

        </LayoutComponent>
    )
}

export default ViewPage;