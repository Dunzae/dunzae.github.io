import { useAppSelector } from "@slices/store";

function ModalComponent() {
    const hidden = useAppSelector(({ modal }) => modal.hidden);

    return (
        <div className={`${hidden ? 'hidden' : 'fixed'} top-0 left-0 bottom-0 right-0 bg-gray-100 z-[10000] opacity-50`}
            onClick={(e) => e.stopPropagation()}
        >

        </div>
    )
}

export default ModalComponent;