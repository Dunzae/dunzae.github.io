import PostPreviewComponent from "@components/PostPreview";
import TabMenuComponent from "@components/common/menu/TabMenu";
import LayoutComponent from "@components/common/Layout";

function HomePage() {
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
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                </div>
            </div>
        </LayoutComponent>
    )
}

export default HomePage;