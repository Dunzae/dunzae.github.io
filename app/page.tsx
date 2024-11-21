import { TabMenu } from "./components/TabMenu";
import { CompactView } from "./components/CompactView";
export default function Home() {
  return (
    <main className="p-4">
      <TabMenu className="mb-4 lg:mb-8"/>
      <CompactView
        profile={{ image: "/images/emptyThumbnail.png", id: "rjs595959" }}
        like="3"
        title="제목"
        content="내용"
        createDate="2024-11-21"
        />
    </main>
  );
}
