
import React, { useState } from 'react';

function InputData() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    return (
        <div>
            <h2>Input Data</h2>

            <div>
                <label>Nama: </label>
                <input
                    type="text"
                    placeholder="Masukkan Nama ..."
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
            </div>

            <div>
                <label>Email: </label>
                <input
                    type="email"
                    placeholder="Masukkan Email ..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Alamat: </label>
                <input
                    type="text"
                    placeholder="Masukkan Alamat ..."
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                />
            </div>

            <h3>Hasil Inputan:</h3>

            <p><b>Nama  :</b> {nama}</p>
            <p><b>Email :</b> {email}</p>
            <p><b>Alamat:</b> {alamat}</p>
        </div>
    );
}

export default InputData;