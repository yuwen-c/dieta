import React from 'react';

// pass emoji itself and it's label, like "sheep"
const Emoji = ({emoji, label}) => {
    return(
        <span
        className="emoji pr1"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden="true"   
        // purely decorative content, hide it from a accessibility device
        >
        {emoji}
        </span>
    )
}

export default Emoji;