import PostPreviewComponent from "@components/post/Preview";
import TabMenuComponent from "@components/common/menu/TabMenu";
import LayoutComponent from "@components/common/Layout";
import { useInfiniteQuery } from "@tanstack/react-query";
import ax from "@utils/axios";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export interface FetchPostsProps {
    pageParam: number
}

const limit = 3

async function fetchPostsInfinite({ pageParam }: FetchPostsProps) {
    const uri = `/post/getList?skip=${pageParam}&limit=${limit}`;
    const result = await ax.get(uri);

    return result;
}

function HomePage() {
    const ref = useRef<HTMLDivElement>(null);
    const { data, isError, hasNextPage, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: async ({ pageParam }) => {
            const result = await fetchPostsInfinite({ pageParam });

            if (result.status !== 200) throw new Error(result.data);
            return result.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => lastPageParam + limit,
    })

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && hasNextPage && !isLoading) {
                fetchNextPage();
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0,
        });

        if (ref.current !== null) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current !== null) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, [hasNextPage, isLoading, fetchNextPage]);

    return (
        <LayoutComponent>
            <div className="px-[10px] py-[10px] min-h-dvh bg-[#f2f2f2] lg:px-[40px] lg:py-[40px]">
                <div>
                    {/* 공지 사항, 업데이트 목록 */}
                    <div className="px-[10px] py-[10px] mb-[10px] box-border bg-[#f2f2f2] font-Titillium font-bold lg:flex lg:static lg:mb-[20px]">
                        <TabMenuComponent />
                    </div>
                </div>
                <div >
                    {(!isError && data) && data.pages.map(page => page.posts.map((post: any) =>
                        <Link to={`/view?id=${post.id}`} >
                            <PostPreviewComponent
                                profile={post.author}
                                title={post.title}
                                content={post.body}
                                thumbnail={post.thumbnail}
                                like={post.likeNum}
                                createDate={post.createDate}
                            />
                        </Link>
                    ))}
                    <div
                        className="w-full h-[100px]" ref={ref}
                    />
                </div>
            </div>

        </LayoutComponent>
    )
}

export default HomePage;