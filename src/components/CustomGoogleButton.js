import { GoogleIcon } from "./Icons";


function CustomGoogleButton ({ text , onClick }) {

    return (
        <>
        <button className="w-full p-3 rounded-md border border-black mt-3" onClick={onClick}>
            <div className="flex items-center justify-center">
                <div className="mr-4">
                    <GoogleIcon/>
                </div>
                <div >
                    <p className="font-medium text-sm text-gray-800">{text}</p>
                </div>
            </div>
        </button>
        </>
    )

}


export default CustomGoogleButton;