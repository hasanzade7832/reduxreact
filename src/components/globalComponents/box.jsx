import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // ثبت تم PrimeReact
import 'primereact/resources/primereact.min.css'; // ثبت استایل‌های PrimeReact
import 'primeicons/primeicons.css'; // ثبت آیکون‌های PrimeIcons
import "../../assets/styles/global.css"

const CustomComponent = () => {
    return (
        <>
            <div style={{ background: '#3A454A', width: '38%', height: '100px', position: 'relative' }}>
                <Button
                    label="+"
                    className="p-button-success button-small"
                    style={{ position: 'absolute', top: '0px', right: '0px' }}
                />
                <hr style={{border:"0.5px solid black",position:"absolute",width:"100%",marginTop:"30px"}}/>
            </div>
        </>
    );
};

export default CustomComponent;
