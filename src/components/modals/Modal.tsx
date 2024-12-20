import { useAppDispatch, useAppSelector } from "@slices/store";
import { setHidden } from "@slices/modal";

// Modal 컴포넌트
import YoutubeComponent from "./Youtube";
import ShortCutComponent from "./ShortCut";
import PreviewComponent from "./Preview";
import SubmitComponent from "./Submit";
import SettingComponent from "./Setting";
import FailComponent from "./Fail";
import SuccessComponent from "./Success";

function ModalComponent() {
    const dispatch = useAppDispatch();
    const hidden = useAppSelector(({ modal }) => modal.hidden);
    const type = useAppSelector(({ modal }) => modal.type)

    return (
        <div
            onClick={(e) => {
                dispatch(setHidden(true));
            }}
            className={`${hidden ? 'hidden' : 'fixed'} top-0 left-0 bottom-0 right-0 bg-gray-100 z-[10000] bg-opacity-50`}
        >
            <div className="w-full h-full flex items-center justify-center">
                {type === "ShortCut" && <ShortCutComponent />}
                {type === "Youtube" && <YoutubeComponent />}
                {type === "Preview" && <PreviewComponent />}
                {type === "Submit" && <SubmitComponent />}
                {type === "Setting" && <SettingComponent />}
                {type === "Fail" && <FailComponent />}
                {type === "Success" && <SuccessComponent />}
            </div>
        </div>
    )
}

export default ModalComponent;