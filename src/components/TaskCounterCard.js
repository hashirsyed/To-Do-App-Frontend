


function TaskCounterCard ({status , count , color,text}) {

return <div className={`${color} shadow-md rounded-lg px-7 py-5 border-none`}>
    <h1 className={`text-black font-semibold text-xl text-${text}`}>{status}</h1>
    <h1 className={`text-black font-bold text-5xl mt-5 text-${text}`}>{count}</h1>
</div>


}

export default TaskCounterCard;