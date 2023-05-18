const Data = ({idInstance, setIdInstance, apiTokenInstance, setApiTokenInstance, phoneNumber, setPhoneNumber}) => {


  return (
    <div className='flex bg-blue-200 w-full h-[90vh] items-center justify-center'>
      <div className='basis-1/5 text-center border-2 border-black'>
        <h2 className='text-4xl'>Data green-api</h2>
        <form className='p-6 flex-column'>
            <input onChange={e => setIdInstance(e.target.value)} value={idInstance} placeholder='idInstance' className='px-4 py-1 border border-r-black mb-2' type="text"/>
            <input onChange={e => setApiTokenInstance(e.target.value)} value={apiTokenInstance} placeholder='apiTokenInstance' className='mb-2 px-4 py-1 border border-r-black' type="text" />
            <p>Write the number of the person you want to write to like this: 79002981142</p>
            <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder='phoneNumber' className='px-4 py-1 border border-r-black' type="text" />
        </form>
      </div>
    </div>

  )
}

export default Data