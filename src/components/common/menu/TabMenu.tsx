function TabMenuComponent() {
    return (
        <div className="w-full bg-white border border-gray flex justify-center rounded-md lg:border-b-2 lg:block">
            <span className="p-4 inline-block cursor-pointer">Recommended</span>
            <span className="p-4 inline-block cursor-pointer box-border text-gray opacity-40">Update</span>
        </div>
    )
}

export default TabMenuComponent;