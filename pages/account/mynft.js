import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { Connect } from '../../components'

function mynft() {
    const { user, isAuthenticated } = useMoralis()
    if (!isAuthenticated) return <Connect />

    const [NFT, setNFT] = useState()

    // useEffect(() => {
    //     user && fetch(`https://eth-rinkeby.alchemyapi.io/v2/demo/getNFTs/?owner=${user?.get('ethAddress')}`).then(res => res.json()).then(data => setNFT(data?.ownedNfts)).catch(e => console.log(e))
    // }, [user])
    // console.log(parseInt(Number("0x0000000000000000000000000000000000000000000000000000000000000007")))
    // console.log(NFT)

    return (
        <>
        <h1>NFT List</h1>
            {NFT?.length && <>

            </>}
        </>
    )
}

export default mynft