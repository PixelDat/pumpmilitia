import { Close } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"

const Preview = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="h-[457px] bg-cover bg-no-repeat bg-[url('/images/preview.png')] flex flex-row items-center justify-center space-x-2">
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
            {
                showModal &&

                <div onClick={() => setShowModal(false)} style={{
                    top: 0,
                    zIndex: 99999999,
                    position: 'fixed',
                    height: '100vh',
                    width: '100%',
                }} className="bg-[#00000050]">

                    <div className="w-6/12">
                        <div style={{ position: 'relative' }}>
                            <Close onClick={() => setShowModal(false)} sx={{ color: 'white' }} />
                        </div>
                        <iframe id="background-video"
                            width='50%'
                            height='50%'
                            src={`http://www.youtube.com/embed/wXOgnFyj7JM?autoplay=1&mute=1&controls=0&loop=1&fitToBackground=1&enablejsapi=1&origin=http://localhost:3000`}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                // minWidth: '100%',
                                // minHeight: '100%',
                                // width: 'auto',
                                // height: 'auto',
                                zIndex: 0,
                                transform: 'translate(-50%, -50%)',
                            }}>

                        </iframe>
                    </div>

                </div>

            }

        </div>
    )
}

export default Preview