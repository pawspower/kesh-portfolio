import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {Document, Page, Text, Image, PDFViewer, Stylesheet, Font} from '@react-pdf/renderer'

const MyResumePDF = dynamic(() => import('../public/assets/kesh-resume.pdf'), {
    ssr: false
});

const View = () => {
    const [client, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    },[])

    return (
        
        <MyResumePDF />
       
        
    )
}
export default View