import PostPreviewComponent from "@components/PostPreview";
import TabMenuComponent from "@components/TabMenu";
import LayoutComponent from "@components/Layout";

function HomePage() {
    return (
        <LayoutComponent>
            <div className="px-[10px] py-[10px] min-h-dvh bg-[#f2f2f2] lg:px-[40px] lg:py-[40px]">
                <div>
                    {/* 공지 사항, 업데이트 목록 */}
                    <div className="fixed top-[100px] left-0 px-[10px] py-[10px] box-border bg-[#f2f2f2] lg:flex lg:top-0 lg:px-0 lg:py-0 lg:static lg:mb-[20px]">
                        <TabMenuComponent />
                    </div>
                    {/* fixed 공간을 차지 하기 위한 div */}
                    <div className="w-full h-[58px] mb-[10px] lg:hidden" />
                </div>
                <div >
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                </div>
            </div>
        </LayoutComponent>
    )
}

export default HomePage;