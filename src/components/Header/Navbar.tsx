export default function Navbar(){
    return(
        <nav className="w-1/2 md:w-full">
            <ul className="flex flex-col items-start md:flex-row">
                <li className="mb-8 flex items-center">
                    <a className="flex" href="">
                        <svg className="mr-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3867 1.32942C26.2633 1.32465 26.1402 1.34275 26.0234 1.38281L23.4219 2.23047L23.4023 2.23828C21.9824 2.77004 20.7971 3.78904 20.0612 5.11328H20.0599L20.0547 5.1263L20.026 5.18099L18.806 8.44531C18.0346 8.57693 17.0982 8.66666 16 8.66666C13.1066 8.66666 11.3198 8.04666 10.7864 7.66666C11.3198 7.28666 13.1066 6.66666 16 6.66666C16.4666 6.66666 16.907 6.6802 17.3203 6.71354L18.0534 4.77343C17.32 4.7001 16.6133 4.66666 16 4.66666C13.7321 4.66666 10.1717 5.10795 9.03514 6.61718C8.97739 6.66626 8.92541 6.72174 8.88019 6.78255C8.88019 6.78255 8.35793 7.44507 7.83071 8.24609C7.5671 8.6466 7.29974 9.08307 7.08331 9.51823C6.86689 9.95339 6.66665 10.3448 6.66665 10.9297C6.66665 11.042 6.67577 11.1523 6.69139 11.2604C5.87532 12.1999 3.33331 15.5083 3.33331 20.3789C3.33331 23.6918 5.07934 26.2166 7.50389 27.7656C9.92843 29.3147 13.0098 30 16 30C18.9902 30 22.0715 29.3147 24.4961 27.7656C26.9206 26.2166 28.6666 23.6918 28.6666 20.3789C28.6666 15.5083 26.1246 12.1999 25.3086 11.2604C25.3242 11.1523 25.3333 11.042 25.3333 10.9297C25.3333 10.3448 25.1331 9.95339 24.9166 9.51823C24.7002 9.08307 24.4329 8.6466 24.1693 8.24609C23.642 7.44507 23.1198 6.78255 23.1198 6.78255C23.0729 6.7219 23.0191 6.66685 22.9596 6.61849C22.727 6.31027 22.3989 6.04531 21.9948 5.82161C22.5019 5.04787 23.2268 4.44097 24.0989 4.11328L26.6432 3.28385C26.8684 3.21393 27.0617 3.06668 27.1889 2.8681C27.316 2.66952 27.369 2.43239 27.3383 2.19858C27.3076 1.96477 27.1953 1.74932 27.0212 1.59029C26.847 1.43125 26.6223 1.33886 26.3867 1.32942ZM9.5768 9.23958C11.0554 10.3291 14.0197 10.6667 16 10.6667C17.0804 10.6667 18.4502 10.5603 19.7174 10.293C19.7615 10.285 19.805 10.2742 19.8476 10.2604C20.8521 10.0377 21.7796 9.71378 22.4232 9.23958C22.4501 9.27979 22.4704 9.30535 22.4974 9.34635C22.7338 9.70551 22.9664 10.09 23.125 10.4089C23.2836 10.7277 23.3333 11.0232 23.3333 10.9297C23.3333 11.0419 23.28 11.2256 22.987 11.5065C22.6939 11.7874 22.1833 12.111 21.5104 12.3893C20.1647 12.9459 18.1865 13.3333 16 13.3333C13.8135 13.3333 11.8353 12.9459 10.4896 12.3893C9.81669 12.111 9.30601 11.7874 9.013 11.5065C8.71999 11.2256 8.66665 11.0419 8.66665 10.9297C8.66665 11.0232 8.71641 10.7277 8.87498 10.4089C9.03355 10.09 9.26619 9.70551 9.50258 9.34635C9.52957 9.30535 9.54987 9.27979 9.5768 9.23958ZM7.78514 13.082C8.31255 13.5452 8.9636 13.922 9.72524 14.237C11.3955 14.9277 13.5838 15.3333 16 15.3333C18.4162 15.3333 20.6045 14.9277 22.2747 14.237C23.0364 13.922 23.6874 13.5452 24.2148 13.082C25.0968 14.2424 26.6666 16.7986 26.6666 20.3789C26.6666 23.02 25.4127 24.8066 23.4206 26.0794C21.4284 27.3522 18.6765 28 16 28C13.3235 28 10.5715 27.3522 8.57941 26.0794C6.58728 24.8066 5.33331 23.02 5.33331 20.3789C5.33331 16.7986 6.90316 14.2424 7.78514 13.082Z" fill="#0A0A0A"/>
                        </svg>
                        <p className="text-xl">MATES</p>
                    </a>
                </li>
                <li className="mb-8 flex items-center">
                    <a className="flex" href="">
                    <svg className="mr-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3_114)">
                        <path d="M24.6344 7.36231C22.5944 5.33118 19.2801 5.33118 17.2449 7.36643C15.3615 9.26124 13.5759 14.0341 15.771 16.2291C17.9122 18.3704 22.6332 16.7427 24.6337 14.7552C24.6347 14.7546 24.6354 14.7539 24.6361 14.7529C26.6689 12.7203 26.6696 9.40637 24.6344 7.36231Z" fill="white"/>
                        <path d="M15.6965 4.48663L12.7423 1.53238C12.3343 1.12438 11.6733 1.12438 11.2654 1.53238C10.8574 1.94 10.8574 2.60163 11.2654 3.00932L14.2196 5.96357C14.6276 6.37157 15.2885 6.37157 15.6965 5.96357C16.1045 5.55594 16.1045 4.89432 15.6965 4.48663Z" fill="white"/>
                        <path d="M30.4678 19.2578L27.5135 16.3036C27.1055 15.8956 26.4445 15.8956 26.0366 16.3036C25.6286 16.7112 25.6286 17.3728 26.0366 17.7805L28.9908 20.7347C29.3989 21.1428 30.0598 21.1428 30.4678 20.7347C30.8758 20.3271 30.8758 19.6655 30.4678 19.2578Z" fill="white"/>
                        <path d="M13.0657 7.96212L11.0481 7.4215C10.4926 7.27018 9.91831 7.60275 9.76906 8.15993C9.61981 8.71712 9.95025 9.28968 10.5075 9.439L12.5251 9.97962C13.0776 10.1292 13.6543 9.80149 13.8041 9.24118C13.9534 8.68393 13.6229 8.11137 13.0657 7.96212Z" fill="white"/>
                        <path d="M31.2256 12.8281L29.208 12.2875C28.6511 12.1366 28.0779 12.4688 27.9289 13.026C27.7796 13.5832 28.1102 14.1558 28.6674 14.305L30.6849 14.8456C31.2374 14.9952 31.8142 14.6675 31.964 14.1072C32.1133 13.55 31.7828 12.9773 31.2256 12.8281Z" fill="white"/>
                        <path d="M31.9641 8.15987C31.8151 7.60268 31.2422 7.27012 30.685 7.42143L28.6674 7.96206C28.1102 8.11137 27.7797 8.68387 27.929 9.24112C28.0787 9.80143 28.6556 10.1291 29.2081 9.97956L31.2256 9.43893C31.7829 9.28968 32.1134 8.71718 31.9641 8.15987Z" fill="white"/>
                        <path d="M23.8402 0.036019C23.2849 -0.113981 22.7104 0.217519 22.5611 0.774457L22.0205 2.79202C21.8712 3.34927 22.2017 3.92183 22.7589 4.07108C23.3114 4.22064 23.8882 3.89296 24.038 3.33264L24.5786 1.31508C24.7279 0.757831 24.3974 0.185269 23.8402 0.036019Z" fill="white"/>
                        <path d="M24.5786 20.952L24.038 18.9344C23.889 18.3772 23.3162 18.045 22.7589 18.196C22.2017 18.3453 21.8712 18.9178 22.0205 19.475L22.5611 21.4926C22.7109 22.0529 23.2875 22.3806 23.8402 22.231C24.3974 22.0818 24.7279 21.5092 24.5786 20.952Z" fill="white"/>
                        <path d="M19.7126 2.79202L19.172 0.774457C19.0231 0.217519 18.4502 -0.113981 17.893 0.036019C17.3357 0.185332 17.0052 0.757831 17.1545 1.31508L17.6951 3.33264C17.8449 3.89296 18.4217 4.22064 18.9742 4.07108C19.5315 3.92183 19.862 3.34933 19.7126 2.79202Z" fill="white"/>
                        <path d="M30.4677 1.53238C30.0597 1.12438 29.3987 1.12438 28.9908 1.53238L26.0366 4.48663C25.6286 4.89425 25.6286 5.55588 26.0366 5.96357C26.4447 6.37163 27.1055 6.37163 27.5135 5.96357L30.4678 3.00932C30.8758 2.60169 30.8758 1.94007 30.4677 1.53238Z" fill="white"/>
                        <path d="M14.2941 17.706C13.5147 16.9268 13.0138 15.9283 12.7967 14.7744L0.305935 27.2647C-0.101815 27.6725 -0.101815 28.3339 0.305935 28.7417L3.2585 31.6942C3.66625 32.1019 4.32768 32.1019 4.73543 31.6942L17.2229 19.2065C16.0687 18.9884 15.0705 18.4825 14.2941 17.706Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_3_114">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                        <p className="text-xl text-white">BOMBILLAS</p>
                    </a>
                </li>
                <li className="mb-8 flex items-center">
                    <a className="flex" href="">
                        <svg className="mr-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="32" height="32" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_3_152" transform="scale(0.03125)"/>
                            </pattern>
                            <image id="image0_3_152" width="32" height="32" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGiSURBVFiF7da/S5ZRFAfwT2JGBokNOQZZYYMoWFMtgRAOhYvhlG01NUR/Q44SNDhJS0t/QkPgJlTQIggmYkQKStEvx2p47gPm+77Pe+4rr5L4hcOFc77POV/uPc+5lxhuYRl/6thH3A3mqcGxAOcsVnESa/i9K34uCRnEUqtCqnAzFZhrEH+S4lOtJO8IcI6n9VeDeOnvakVAZwa3B+fr+HtbKRzFFSyq33y7bRU3cgtUNeEprKAP77FVwT2Nq9jGBWzkCqmHsvleBvlPE/9eTpGqJizPdiWYq+SdyREQacIBTAR4w2kdSvyfeIvNHEE7MSnWfFW2rcl8iOzAAuYDvBGM4jXeKH7bKcziFdYDOf5BuQPTQf7DxH+0w/cs+W43+igyCfeCH2ntPigBTXEk4NAL6Evrt0aEnOs4ivsYwwlcxxfFLNk3AZeSwWfFe/HrfgqYwQvFDPig9g3ZdgGf8C5KPvR/QVNEjmAc/QHexXYJGEjWFkQEPFdcq80wicftELAh1tXXcovznzThA9wJ8Hr2qKUGlxXTLOcR+l0x/8P4C7P7aZLwvz6mAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <p className="text-xl">TERMOS</p>
                    </a>
                </li>
                <li className="mb-8 flex items-center">
                    <a className="flex" href="">
                        <svg className="mr-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.76 11.42H19.6L21.6 5.18C21.7068 4.8756 21.9199 4.61995 22.2 4.46L25.52 2.72L24.44 0.5L21.14 2.24C20.2924 2.69225 19.6488 3.45027 19.34 4.36L16.96 11.4H7.24C6.06711 12.4591 5.12853 13.7517 4.48447 15.1948C3.8404 16.6379 3.50508 18.1997 3.5 19.78C3.60441 22.9914 4.97978 26.03 7.32376 28.2277C9.66775 30.4254 12.7885 31.6024 16 31.5C19.2115 31.6024 22.3323 30.4254 24.6762 28.2277C27.0202 26.03 28.3956 22.9914 28.5 19.78C28.4921 18.2031 28.1555 16.6451 27.5115 15.2056C26.8675 13.7662 25.9304 12.4768 24.76 11.42ZM7.64 14H24.36C24.9637 14.7447 25.4555 15.5734 25.82 16.46H6.18C6.5445 15.5734 7.03634 14.7447 7.64 14ZM26.5 19.88C26.4909 21.2693 26.1625 22.6379 25.54 23.88L22.66 21.38L19.34 24.24L16 21.34L12.66 24.24L9.34 21.34L6.46 23.84C5.83754 22.5979 5.50907 21.2293 5.5 19.84V18.92H26.46C26.48 19.16 26.5 19.48 26.5 19.78V19.88ZM16 29.5C14.4757 29.5264 12.9632 29.2279 11.5631 28.6244C10.163 28.0209 8.90751 27.1263 7.88 26L9.34 24.72L12.66 27.62L16 24.66L19.34 27.56L22.66 24.66L24.12 25.94C23.0979 27.0772 21.8448 27.9831 20.4445 28.597C19.0442 29.2109 17.5289 29.5188 16 29.5Z" fill="black"/>
                        </svg>
                        <p className="text-xl">ACCESORIOS</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}