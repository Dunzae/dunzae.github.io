import LayoutComponent from "@components/common/Layout";
import Editor from '@components/editor/Editor';
import AddBlock from '@components/editor/AddBlock';
import GlobalTool from '@components/editor/GlobalTool';
import ButtonGroup from "@components/editor/ButtonGroup";
import { useAppDispatch, useAppSelector } from '@slices/store';
import { useEffect, useRef } from "react";
import { setWidth } from "@slices/editor";


function WritePage() {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const editor = useAppSelector(({editor}) => editor.editor)
    const fontType = useAppSelector(({ editor }) => editor.fontType);
    const fontWeight = useAppSelector(({ editor }) => editor.fontWeight);

    useEffect(() => {
        if(ref.current !== null) {
            dispatch(setWidth(ref.current.clientWidth));
        }
    }, [])

    return (
        <LayoutComponent>
            <div className="flex flex-col bg-[#f2f2f2] lg:flex-row lg:h-dvh">
                <div className="flex-grow min-h-[300px] overflow-x-hidden my-4 p-4 bg-white lg:m-5 cursor-pointer"
                    ref={ref}
                    onClick={() => editor?.commands.focus()}
                    style={{
                        fontFamily: fontType,
                        fontWeight: fontWeight,
                    }}
                >
                    <Editor />
                </div>
                <div className="py-5 border-l border-l-gray w-full flex flex-col overflow-hidden gap-4 flex-shrink-0 lg:w-[300px] lg:h-full ">
                    <div className="p-2 flex flex-col w-full min-h-[300px] flex-shrink bg-white rounded-[20px]">
                        <AddBlock />
                    </div>
                    {/* <div className="px-3 py-3 flex-grow-0 overflow-y-auto bg-white font-Roboto flex-shrink-0"
                        style={{
                            scrollbarWidth: 'none'
                        }}
                    >
                        <GlobalTool />
                    </div> */}

                    <div className="flex flex-grow flex-row gap-2 justify-center lg:flex-shrink-0 lg:justify-end lg:flex-col ">
                        <ButtonGroup />
                    </div>
                </div>

            </div >
        </LayoutComponent>
    )
}

export default WritePage;