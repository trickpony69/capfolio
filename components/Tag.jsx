function Tag(props) {
    const { title } = props;

    return (
        <div className="px-4 py-2 text-2xl text-gray-600 font-thunder-medium rounded-full border border-gray-400">
            {title}
        </div>
    );
}

export default Tag;
