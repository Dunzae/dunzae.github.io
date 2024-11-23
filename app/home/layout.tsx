import { TitleBar } from "@common/components/TitleBar";
import { MenuBar } from "@common/components/MenuBar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full h-full flex flex-col lg:flex-row">
            <TitleBar className="lg:w-[450px] lg:flex-grow-0 lg:flex-shrink-0" />
            <MenuBar className="bg-white" />
            <div className="w-full h-full">
                {children}
            </div>
        </main>
    )
}