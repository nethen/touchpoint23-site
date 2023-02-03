function Nav(){
    return (
        <div className='flow-root mt-[37px] font-apfelgrotezk'>
            <div className='flex float-left text-[20px] ml-[29px] gap-x-[44px]'>
                <div className='flex items-center gap-x-[9px] w-[175px]'>
                    <p>CONFERENCE</p>
                    <img src='./sm_rect.png' className='h-[15px] '></img>
                </div>
                <div className='flex items-center gap-x-[9px]'>
                    <p>SCHEDULE</p>
                    <img src='./lg_rect.png' className='h-[15px] '></img>
                </div>
                <div className='flex items-center gap-x-[9px] w-[175px]'>
                    <p>INTERVIEW</p>
                    <img src='./sm_rect.png' className='h-[15px] '></img>
                </div>
                <div className='flex items-center gap-x-[9px] w-[175px]'>
                    <p>ABOUT</p>
                    <img src='./sm_rect.png' className='h-[15px] '></img>
                </div>
            </div>
            <p className='float-right bg-transparent border border-black mr-[50px] text-[20px] px-[8px]'>BUY TICKETS</p>
        </div>
        );
}

export default Nav;