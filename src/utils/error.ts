type ServerErrorType = {
    [key : string] : string
}

const ServerError : ServerErrorType= {
    "The input is empty" : "입력값이 비었습니다.",
    "The input is invalid" : "입력값이 유효하지 않습니다.",
    "The user exists" : "아이디나 이메일이 이미 존재합니다.", 
    "User does not exist" : "해당 사용자가 존재하지 않습니다.",
    "Password is not correct" : "패스워드가 틀렸습니다.",
    "Unknown Error" : "알 수 없는 오류입니다.",
    "The server is down" : "서버가 작동중이 아닙니다."
}

export default ServerError;