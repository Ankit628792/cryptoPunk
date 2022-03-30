import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'

function SingleNFT() {
    return (
        <div className='max-w-[80rem] mx-auto p-8 lg:p-10 text-lg'>
        <div className='flex flex-col md:flex-row md:items-center gap-10 xl:gap-x-20 py-5'>
            <img className='max-h-96 max-w-sm 2xl:max-h-[500px] 2xl:max-w-[500px] rounded-lg object-cover opac' src="https://lh3.googleusercontent.com/SdDTwgK0AYJRfcKIVxNuFtxkqyXSzWZkSDmbNHs2qaWPBA0lxTtnPAMi-7XYT97449oDMNk9CVynWTnHm-2GmduelsMvi3CPcVkIW0g=w600" alt="" />
            <div className='text-teal-50 w-full md:pl-5 2xl:pl-10'>
                <p className='text-teal-300 mb-2'>Monster Ape Club | MAC</p>
                <h1 className='text-3xl md:text-4xl 2xl:text-5xl'>Monster Ape #817</h1>
                <p>Owned by <span className='text-teal-300'>Montanacowboy</span></p>
                <div className='border border-teal-900 rounded-lg p-4 w-full max-w-sm'>
                    <p>Sale ends March 8, 2022 at 9:33am IST </p>
                    <hr className='border-teal-900' />
                    <p className='my-1'>Current Price</p>
                    <p className='text-2xl md:text-3xl xl:text-4xl mt-2 mb-4'>💲0.14 <span className='text-teal-100 text-lg'>($409.97)</span></p>
                    <button className='py-2 px-4 rounded-3xl bg-teal-400 hover:bg-teal-500 text-teal-900 border-2 border-teal-500 font-medium'>Buy Now</button>
                </div>
            </div>
        </div>

        <div className='lg:flex lg:items-start gap-10 py-5'>
            <div className='max-w-2xl'>
                <div className='coin__desc max-h-96 my-4  overflow-y-auto'>
                    <h1 className="relative pb-2 before:content-[''] before:w-20 before:h-1 before:bg-teal-300 before:absolute before:bottom-0 before:left-0 before:rounded-full text-xl lg:text-2xl 2xl:text-3xl font-medium">Description</h1>
                    {/* {HTMLReactParser(cryptoDetails?.description)} */}
                    <p className='my-1'>Created by <span className='text-teal-300'>MACDeployer</span></p>
                    <p>Monster Ape Club is a collection of 7,999 unique generated 3D Monster Apes, stored on the Ethereum Blockchain.</p>
                </div>

                <div className='coin__desc max-h-96 my-4  overflow-y-auto'>
                    <h1 className="relative pb-2 before:content-[''] before:w-20 before:h-1 before:bg-teal-300 before:absolute before:bottom-0 before:left-0 before:rounded-full text-xl lg:text-2xl 2xl:text-3xl font-medium">About Monster Ape Club | MAC</h1>
                    {/* {HTMLReactParser(cryptoDetails?.description)} */}
                    <p>Monster Ape Club is a collection of 7,999 unique generated 3D Monster Apes, stored on the Ethereum Blockchain.
                        The art is made by N-Hance Studio. Their artists collaborated with Blizzard, Riot Games, and other famous projects.</p>
                </div>

                <div className='max-w-sm min-w-max my-4 gap-y-4'>
                    <h1 className="relative pb-2 before:content-[''] before:w-20 before:h-1 before:bg-teal-300 before:absolute before:bottom-0 before:left-0 before:rounded-full text-xl lg:text-2xl 2xl:text-3xl font-medium">Details</h1>
                    <div className='flex items-center justify-between gap-x-4 p-1'>
                        <span>Contract Address</span>
                        <span className='text-teal-100'>0x32dd...b75b</span>
                    </div>
                    <hr className='border-teal-900' />
                    <div className='flex items-center justify-between gap-x-4 px-1'>
                        <span>Token Id</span>
                        <span className='text-teal-100'>817</span>
                    </div>
                    <hr className='border-teal-900' />
                    <div className='flex items-center justify-between gap-x-4 px-1'>
                        <span>Blockchain</span>
                        <span className='text-teal-100'>Ethereum</span>
                    </div>
                </div>
            </div>
            <div className='max-w-xl py-5 lg:pt-0'>
                <h1 className="relative pb-2 before:content-[''] before:w-20 before:h-1 before:bg-teal-300 before:absolute before:bottom-0 before:left-0 before:rounded-full text-xl lg:text-2xl 2xl:text-3xl font-medium">Details</h1>
                <div className='max-w-xl overflow-auto scrollbar__hidden'>

                    <table className='w-[575px]'>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th className='text-teal-100'>Price</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td><ShoppingCartOutlined className='' /> Sold</td>
                                <td className='text-teal-100'>💲0.03</td>
                                <td>0x3839873</td>
                                <td>0xjshjhd</td>
                                <td>2 years ago</td>
                            </tr >
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SingleNFT