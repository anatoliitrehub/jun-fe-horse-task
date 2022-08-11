import React from 'react';
import io from 'socket.io-client';
// import socket from './socket';

import { observer } from "mobx-react"
import pic from "./pic.png";


import store from './store/store';


function Client() {



    function OnStart() {
        console.log("click Start");
        const socket1 = io.connect('http://localhost:3002');
        socket1.emit('start');

        socket1.on('ticker', function (response) {

            const res = Array.isArray(response) ? response : [response];

            store.NewArr(res)

        })

        store.NewWinner(" ");
        store.Show("noShow");

    }

    function Win(name) {
        store.NewWinner(name);
        store.Style("orange");
        store.Show("show");
    }


    return (
        <>
            <div className='butt' onClick={OnStart}>START</div>

            {store.arr.map(item => {
                return (
                    <>
                        <div style={{ margin: "10px 30px", display: "flex" }}>
                            <div className={store.style} style={{
                                width: (item.distance + 100), border: "solid 1px red", color: "blue", background: "yellow"
                            }}>{item.name}</div><span ><img src={pic} alt="" width="50px" /></span>
                            <span>{item.distance}</span>
                            {(item.distance >= 1000 && store.winner === " ") ?
                                Win(item.name)
                                : null}
                        </div>
                    </>)
            }
            )}

            <div className={store.show}>winner {store.winner} !!!</div>


        </>
    )
}

export default observer(Client);