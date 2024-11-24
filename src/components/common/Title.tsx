interface ITitleComponent {
    textColor?: string;
}

function TitleComponent({
    textColor
}: ITitleComponent) {
    return (
        <div style={{ color: textColor }} className="w-full text-center flex-shirink-0 h-auto border-b border-b-gray-200 lg:border-b-0">
            {/* 블로그 이름 */}
            <div className="text-[60px] font-[Agdasima] font-light ">
                LogSomething
            </div>

        </div>
    )
}

export default TitleComponent;