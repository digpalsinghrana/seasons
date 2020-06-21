import React from 'react';
import './SeasonsDisplay.css';

const SeasonConfig={
    summer:{
        text:"Let's hit the beach!!",
        iconName:'sun'
    },
    winter:{
        text:"Burr, It's chilly!!",
        iconName:'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 8){
        return lat > 0?'summer':'winter';
    }
    else{
        return lat>0?'winter':'summer';
    }
    
};

const SeasonsDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth);
    const {text,iconName} = SeasonConfig[season];

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`} />
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} icon massive`} />
    </div>
    );
};

export default SeasonsDisplay;