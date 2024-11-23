"use client"
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { TabMenu } from "./components/TabMenu";
import { CompactView } from "./components/CompactView";

const limit = 3

async function fetchPostsInfinite({ pageParam }: FetchPostsProps) {
    const uri = `https://dunzae.site/post/getList?skip=${pageParam}&limit=${limit}`;
    const result = await fetch(uri);

    return result.json();
}
export interface FetchPostsProps {
    pageParam: number
}

export default function Page() {
    const ref = useRef<HTMLDivElement>(null);
    const { data, isError, hasNextPage, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: async ({ pageParam }) => {
            const result = await fetchPostsInfinite({ pageParam });

            if (result.error) throw new Error(result.error);
            return result;
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
        <div className="w-full h-full p-4 bg-[#f0f0f0] overflow-y-auto">
            <TabMenu className="mb-4 lg:mb-8" />
            {!isLoading && !isError && data &&
                data.pages.map(page =>
                    page.posts.map((postPreview: any) => (
                        <CompactView
                            key={postPreview.id}
                            profile={{ id: postPreview.author, image: postPreview.profileImage }}
                            like={postPreview.likeNum}
                            title={postPreview.title}
                            content={postPreview.body}
                            createDate={postPreview.createDate}
                        />
                    ))
                )
            }
            <div className="w-full h-[100px]" ref={ref}/>
        </div>
    )
}