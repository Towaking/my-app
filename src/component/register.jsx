export const Register = () => {

    return (
        <div className="form">
            <div className="left">
                <div className="vector1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="456" height="417" viewBox="0 0 456 417" fill="none">
                        <g filter="url(#filter0_f_108_98)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.471 -32.006C157.808 -44.0321 193.116 -88.3964 224.073 -69.2839C255.515 -49.8714 222.559 5.24649 238.103 38.7677C251.512 67.685 315.247 74.8072 304.862 104.942C292.295 141.407 226.453 121.029 200.06 149.156C182.464 167.907 208.463 204.396 192.57 224.61C177.374 243.937 147.403 240.927 123.471 246.565C93.0349 253.737 60.3066 276.816 32.6114 262.298C5.19165 247.925 -0.516973 209.781 -5.10473 179.167C-8.90211 153.828 0.0583377 128.943 9.03034 104.942C15.8357 86.7376 33.128 75.0338 40.5388 57.0668C49.5436 35.235 40.6225 6.61629 56.7158 -10.6685C72.9097 -28.0614 101.042 -24.1501 123.471 -32.006Z" fill="#438E93"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_108_98" x="-156" y="-224" width="612" height="641" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_108_98"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="vector2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="692" height="741" viewBox="0 0 692 741" fill="none">
                        <g filter="url(#filter0_f_108_100)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M228.75 309.09C299.491 294.052 324.205 110.579 379.069 157.724C437.962 208.33 264.753 307.759 304.705 374.358C345.678 442.659 486.521 355.315 535.347 418.236C568.062 460.396 471.765 502.709 428.131 533.416C395.609 556.304 356.858 575.651 317.295 571.69C281.541 568.11 264.532 510.168 228.75 513.452C186.883 517.295 171.84 582.357 130.301 588.855C85.5042 595.862 27.9466 586.509 2.72748 548.807C-22.0164 511.815 13.4329 462.664 16.1728 418.236C18.7111 377.077 0.826114 334.007 18.2781 296.649C36.0777 258.546 69.3171 212.17 111.279 214.65C162.291 217.666 178.765 319.716 228.75 309.09Z" fill="#625068"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_108_100" x="-156" y="0" width="848" height="741" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_108_100"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="vector3">
                <svg xmlns="http://www.w3.org/2000/svg" width="621" height="497" viewBox="0 0 621 497" fill="none">
                    <g filter="url(#filter0_f_108_99)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M254.633 317.201C273.186 317.884 292.239 310.948 306.139 298.64C357.247 253.384 374.71 144.155 442.661 150.701C497.597 155.993 452.865 257.834 455.022 312.983C456.158 342.035 451.043 369.634 452.359 398.678C453.672 427.669 470.383 455.625 462.75 483.624C454.576 513.612 438.684 548.721 408.972 557.847C377.63 567.474 346.376 542.729 316.871 528.432C297.699 519.142 288.636 493.118 267.664 489.375C232.231 483.052 193.924 517.716 162.144 500.82C133.939 485.824 136.225 444.113 125.762 413.932C111.48 372.738 54.41 316.82 89.2793 290.647C134.699 256.555 197.88 315.109 254.633 317.201Z" fill="#88ACE1"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_108_99" x="-71.83" y="0.418945" width="691.986" height="709.594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_108_99"/>
                        </filter>
                    </defs>
                    </svg>
                </div>
            </div>
            <div className="right">
                <label className="title">Register Account</label>
                <form>
                    <div className="name">
                        <div className="fname">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="fname" className="input" required/>
                        </div>
                        <div className="lname">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" className="input" required/>
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="input" required/>
                    </div>
                    <div className="pw">
                        <label htmlFor="pw">Password</label>
                        <input type="password" id="pw" name="pw" className="input" required/>
                    </div>
                    <div className="button">
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}