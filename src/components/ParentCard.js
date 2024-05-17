import SecondChildCard from './2nd Child';
import SignUpForm from './SignUpForm';

function ParentCard (){

    return (
        <>
        <div className=' w-full h-screen bg-teal-700 flex justify-center items-center'>
        <div className='flex w-[60vw] h-[85vh] border-4 border-white mx-auto bg-transparent overflow-hidden rounded-3xl'>
            <SecondChildCard/>
            <SignUpForm/>
        </div>
        
        </div>
        </>
    )

}

export default ParentCard;