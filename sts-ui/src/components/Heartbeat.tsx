import React, { useState, useEffect } from 'react';

import { GetHeartbeat } from "../api/GetHeartbeat"

export const Heartbeat = () => {
    const [heartbeat, setHeartbeat] = useState("Waiting for proof of life...");
    useEffect(() => {
        GetHeartbeat().then((data) => {
            setHeartbeat(data['currentTime']);
        })
    }, []);

    return (
        <section>
            <span>API alive as of: </span>
            <span>{heartbeat}</span>
        </section>
    )
}
