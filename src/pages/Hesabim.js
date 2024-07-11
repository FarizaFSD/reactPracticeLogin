import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hesabim = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    // sayfa açılır açılmaz otomatik çalışacak kodlaru useEffect içine yazıyoruz
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <h1>Hesabım</h1>
        </div>
    )
}

export default Hesabim