import { Close } from "@mui/icons-material"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Preview = () => {
    const [showModal, setShowModal] = useState(false)
    const [pathname, setPathname] = useState('')
    useEffect(() => {
        if (window) {
            const path: any = window.location.protocol + '//' + window.location.host;
            setPathname(path)
        }
    }, [])
    return (
        <div className="h-[457px] bg-cover bg-no-repeat bg-[url('/images/preview.jpeg')] flex flex-row items-center justify-center space-x-2">
            <iframe id="background-video"
                width='100%'
                height='457px'
                // https://youtu.be/pc5j03DBYN8?si=Yk9KDwqS4GZsjBS1
                src={`https://www.youtube.com/embed/pc5j03DBYN8?si=0a5wuFOEH1adqbwY`}
                // style={{
                //     position: 'relative',
                //     zIndex: 0,
                //     objectFit: 'cover',
                // }}
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>


           

        </div>
    )
}

export default Preview