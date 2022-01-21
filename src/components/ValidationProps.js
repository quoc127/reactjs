import React from "react";
import propTypes from "prop-types";

class ValidationProps extends React.Component{
    render(){
        const {number1, number2} = this.props;
        return(
            <div>
                <h1>Kết quả của phép tính {number1} + {number2} = {number1 + number2}</h1>
            </div>
        );
    }
}

ValidationProps.defaultProps={
    number1: 4,
    number2: 2
}

// sử dụng props-type để kiểm tra dữ liệu
ValidationProps.propTypes={
    number1: propTypes.number,
    number2: propTypes.number
}

export default ValidationProps;