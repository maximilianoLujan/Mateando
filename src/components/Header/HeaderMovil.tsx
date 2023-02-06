import { useState } from "react"
import { motion ,AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"

export default function HeaderMovil(){
    const [menuVisible,setMenuVisible] = useState(false)

    const handleClickMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return(
        <div className="w-full relative flex flex-col md:hidden">
            <div className="flex justify-between py-2 px-6">
                <div onClick={handleClickMenu} className="cursor-pointer">
                    {menuVisible
                    ?<svg fill="#000000" width="32px" height="32px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z"></path>
                            </g>
                    </svg>
                    :<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="menu-hotdog"> <path id="vector" d="M5 6H19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> <path id="vector_2" d="M3 12H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> <path id="vector_3" d="M5 18H19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/> </g> </g> </g>
                    </svg>}
                </div>
                <div className="cursor-pointer">
                    <svg fill="#000000" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 383.852 383.852" xmlSpace="preserve">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M382.667,248.54c-2.528-6.168-8.48-9.896-14.776-9.904c-0.032,0-0.064-0.008-0.096-0.008c-0.104,0-0.192,0.04-0.296,0.048 c-1.232,0.032-2.464,0.232-3.688,0.56c-0.456,0.12-0.888,0.24-1.328,0.392c-0.224,0.08-0.456,0.112-0.688,0.2 c-20.072,8.248-41.392,12.432-63.384,12.432c-91.976,0-166.808-74.832-166.808-166.808c0-21.992,4.176-43.312,12.432-63.384 c0.12-0.28,0.16-0.576,0.256-0.864c0.12-0.352,0.224-0.704,0.32-1.072c0.36-1.32,0.584-2.648,0.6-3.976 c0-0.056,0.024-0.112,0.024-0.176c0-0.016-0.008-0.04-0.008-0.056c0-0.96-0.112-1.904-0.288-2.832c-0.04-0.2-0.072-0.4-0.112-0.6 c-0.208-0.92-0.472-1.832-0.84-2.696c-0.144-0.336-0.344-0.624-0.504-0.944c-1.672-3.336-4.44-6.144-8.168-7.672 c-4.36-1.784-9.024-1.464-12.96,0.416c-0.04,0.016-0.088,0.024-0.128,0.048c-23.912,9.832-45.496,24.264-64.152,42.92 c-77.432,77.528-77.432,203.672,0.008,281.216c38.768,38.72,89.68,58.072,140.6,58.072s101.84-19.36,140.616-58.08 c18.592-18.6,33-40.112,42.832-63.944c0.048-0.088,0.064-0.192,0.104-0.288c0.456-0.952,0.824-1.944,1.088-2.976 c0.016-0.08,0.048-0.152,0.072-0.232C384.155,255.18,383.995,251.772,382.667,248.54z M316.691,303.148 c-65.064,64.968-170.92,64.968-235.968,0c-64.976-65.056-64.976-170.912-0.008-235.96c6.944-6.944,14.448-13.064,22.312-18.576 c-2.256,12.064-3.424,24.36-3.424,36.848c0,109.624,89.184,198.808,198.808,198.808c12.48,0,24.784-1.168,36.848-3.424 C329.739,288.7,323.635,296.204,316.691,303.148z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g>
                    </svg>
                </div>
            </div>
            <AnimatePresence>
                {menuVisible &&
                    (<motion.div
                        key='modal'
                        initial={{ width: 0 }}            
                        animate={{ width: '100vw' }}            
                        exit={{ width: 0 }}
                        transition={{duration:1}}
                        className="w-screen overflow-hidden absolute items-center flex flex-col h-96 bg-principal rounded-b-3xl"
                        style={{bottom:'-392px'}}
                    >
                        <h1 className="text-2xl font-bold">MATEANDO</h1>
                        <svg width="174" height="64" viewBox="0 0 174 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="87" cy="32" r="10" fill="white"/>
                            <g clipPath="url(#clip0_0_1)">
                            <path d="M0 30.1177H15.0588V33.8824H0V30.1177ZM24.4706 33.8824H39.5294V30.1177H24.4706V33.8824ZM48.9412 30.1177V33.8824H64V30.1177H48.9412Z" fill="white"/>
                            </g>
                            <g clipPath="url(#clip1_0_1)">
                            <path d="M110 30.1177H125.059V33.8824H110V30.1177ZM134.471 33.8824H149.529V30.1177H134.471V33.8824ZM158.941 30.1177V33.8824H174V30.1177H158.941Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="64" height="64" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_0_1">
                            <rect width="64" height="64" fill="white" transform="translate(110)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <Navbar /> 
                    </motion.div>)
                }
            </AnimatePresence>
        </div>
    )
}