import React, { useState, useEffect } from "react";

const SecondsCounter = ({count}) => {


	return (
            <div className="card text-center my-5">
                <h1>
                    Seconds Counter
                </h1>
                <h2>
                    <span className="m-2 p-1 border rounded">{Math.floor(count / 1000 % 10)}</span>
                    <span className="m-2 p-1 border rounded">{Math.floor(count / 100 % 10)}</span>
                    <span className="m-2 p-1 border rounded">{Math.floor(count / 10 % 10)}</span>
                    <span className="m-2 p-1 border rounded">{Math.floor(count % 10)}</span>
                </h2>
            </div>
	);
};

export default SecondsCounter;