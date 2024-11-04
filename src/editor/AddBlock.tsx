import MenuList from './MenuList'

function AddBlock() {
   
    return (
        <div
            className="px-3 py-3 flex-grow-0 overflow-y-auto bg-white"
            style={{
                scrollbarWidth: 'none'
            }}
        >
            <div className="text-2xl font-NanumGothic font-bold mb-3">
                블록 추가
            </div>
            <MenuList />
        </div>
    )
}

export default AddBlock;