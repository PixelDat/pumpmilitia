import { Close } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"

const Preview = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="h-[457px] bg-cover bg-no-repeat bg-[url('/images/preview.png')] flex flex-row items-center justify-center space-x-2">
            {
                !showModal ?
                    <>
                        <div style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)} className='font-gameria text-vivd-lime-green-10 text-[24px]'>
                            GAMEPLAY TRAILER
                        </div>
                        <div className="" onClick={() => setShowModal(true)}>
                            <Image
                                className="pb-1"
                                width={20}
                                height={20}
                                src={'/svg/play.svg'}
                                alt=""
                                priority />
                        </div>
                    </>
                    :

                    <iframe id="background-video"
                        width='100%'
                        height='457px'
                        src={`http://www.youtube.com/embed/wXOgnFyj7JM?autoplay=0&mute=1&controls=1&loop=1&fitToBackground=1&enablejsapi=1&origin=http://localhost:3000`}
                        style={{
                            position: 'relative',
                            zIndex: 0,
                            objectFit: 'cover',
                            // transform: 'translate(-50%, -50%)',
                        }}>

                    </iframe>
            }

        </div>
    )
}

export default Preview