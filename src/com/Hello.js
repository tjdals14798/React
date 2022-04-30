import React from "react";

export default function Hello({name,color,isSpecial}){
    return(
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            {/* {isSpecial && <b>*</b>} */}
            안녕하세요 {name}.
            </div>
    ) 
}

Hello.defaultProps = {
    name:'이름없음'
}