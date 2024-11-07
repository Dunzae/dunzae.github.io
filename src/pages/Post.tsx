import LayoutComponent from "@components/common/Layout";
import PostComponent from "@components/post/Post"

function HomePage() {
    return (
        <LayoutComponent>
            <div className="h-dvh overflow-hidden">
                <PostComponent />
            </div>
        </LayoutComponent>
    )
}

export default HomePage;