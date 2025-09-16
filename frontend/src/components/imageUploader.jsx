

const ImageUploader = ({ onUpload }) => {
        return (
            <div className="flex flex-col items-center justify-center mb-6">
                <label className="block text-lg font-bold text-green-700 mb-2">Upload Your Meal (Only prepared meals work for now)</label>
                    <div className="flex justify-center w-full">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={onUpload}
                            className="block text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                        />
                    </div>
            </div>
        );
};

export default ImageUploader;