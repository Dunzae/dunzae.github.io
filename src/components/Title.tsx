interface ITitleComponent {
    textColor?: string;
}

function TitleComponent({
    textColor
}: ITitleComponent) {
    return (
        <div style={{ color: textColor }} className="flex-shirink-0 w-auto h-auto">
            {/* 블로그 이름 */}
            <div className="text-[60px] font-[Agdasima] font-light">
                LogSomething
            </div>

        </div>
    )
}

export default TitleComponent;