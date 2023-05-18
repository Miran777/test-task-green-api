import React, { useEffect, useState } from 'react'


const Chat = ({idInstance, apiTokenInstance, phoneNumber}) => {
    const [textInput, setTextInput] = useState('')
    const [messageArray, setMessageArray] = useState([])




    const sendMessage = async () => {

        await fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
            method: 'POST',
            body: JSON.stringify({
                'chatId': `${phoneNumber}@c.us`,
                "message": textInput,
              }),
            headers: {
                'Connection': 'keep-alive',
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': 41,
            },
        })
        .then(() => {
            setMessageArray([...messageArray, {
                text: textInput,
                right: true
            }])
            setTextInput('')
        })
        .catch(() => alert('Проверьте, корректно ли вы ввели данные'))

    }

    const deleteMessage = (currentId) => {
        fetch(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${currentId}`, {
            method: 'DELETE',
            headers: {
                'Connection': 'keep-alive',
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': 41,
            },
        })
    }


    const getMessage = () => {
        fetch(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`, {
            method: 'GET',
            headers: {
                'Connection': 'keep-alive',
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': 41,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data === null) {
                deleteMessage(data.receiptId)
                return
            }
            else if (data.body?.senderData?.chatId == `${phoneNumber}@c.us`) {
                const textFrom = data.body?.messageData?.textMessageData?.textMessage
                    setMessageArray([...messageArray, {
                        text: textFrom,
                        right: false,
                    }])
                    console.log(messageArray)
                deleteMessage(data.receiptId)
            }
            else {
                deleteMessage(data.receiptId)
            }
        })
        .catch(err => err)
    }


    useEffect(() => {
        getMessage()
    },)


  return (
    <div className='w-full h-[90vh] bg-green-200 flex items-center'>
        <div className='w-3/4 mx-auto bg-white h-5/6 rounded-lg'>
            <div className='flex justify-around border-b border-green-200 py-2'>
                <p>idInstance: <span className='text-2xl'>{idInstance ? idInstance : 'pls write your idInstance!'}</span></p>
                <p>apiTokenInstance: <span className='text-2xl'>{apiTokenInstance ? apiTokenInstance : 'pls write your apiTokenInstance'}</span></p>
            </div>
            <h2 className='text-3xl flex justify-center border-b border-green-200 py-2 mb-4'>{phoneNumber ? phoneNumber : 'pls write number'}</h2>
            <div className='h-5/6 border-red-500 flex flex-col-reverse justify-end'>
                <label className='my-2 p-8 flex justify-end border-t'>
                    <input className='min-w-1/5 mr-2 py-1 px-2 border border-black' onChange={e => setTextInput(e.target.value)} type="text" value={textInput} />
                    <button onClick={sendMessage} className='bg-green-800 text-white px-2 py-1 rounded-sm'>send</button>
                </label>
                <div className='h-5/6 border border-red-600 p-4'>
                    {messageArray.map((message, index) => <p key={index} className={`text-2xl ${message.right ? 'text-right text-green-600' : 'text-left text-blue-600'}`}>{message.text}</p>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat