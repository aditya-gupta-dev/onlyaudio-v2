export default function BottomBar({ inputRef, clickListener }) {
    return(
        <div className='fixed bottom-0 left-0 w-full'>
        <div className='p-3 bg-base-300 w-full flex flex-row'>
          <input ref={inputRef} type="text" placeholder="Enter your query" className='input input-primary w-full'/>
          <button className='btn btn-primary mx-2' onClick={(e) => clickListener(inputRef.current.value)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M8 15h5M17 11h-5M7 11h.01M12 4a8 8 0 100 16 8 8 0 000-16z"/>
            </svg>
          </button>
        </div>
      </div>
    );
}