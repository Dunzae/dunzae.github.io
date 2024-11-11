import LoginComponent from "@components/Login";
import ax from "@utils/axios";
import ServerError from "@utils/error";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { setAccessToken, setRefreshToken } from "@slices/auth";
import { useAppDispatch, useAppSelector } from "@slices/store";
import { setLocalStorageItem } from "@utils/storage";
import { useNavigate } from "react-router-dom";

export type InputsType = {
    id: string;
    password: string;
    remember: boolean;
}

const idPattern = /\w{6}.+/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[^  |\n]+$/gm

function LoginContainer() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const accessToken = useAppSelector(({auth}) => auth.accessToken);
    const refreshToken = useAppSelector(({auth}) => auth.refreshToken);
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<InputsType>();

    useEffect(() => {
        if(accessToken !== undefined && refreshToken !== undefined) {
            navigate("/");
        }
    }, [accessToken, refreshToken])

    // 로그인 버튼을 눌렀을 경우
    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, password, remember }) => {
        setErrorMessage("");

        const result = await ax.postApi("/auth/signIn", {id, password});
        if(result.error !== undefined) {
            setErrorMessage(ServerError[result.error])
        } else {
            dispatch(setAccessToken(result.data.accessToken));
            dispatch(setRefreshToken(result.data.refreshToken));

            if(remember) {
                setLocalStorageItem("token", {
                    accessToken: result.data?.accessToken,
                    refreshToken: result.data?.refreshToken,
                })
            } else {
                setLocalStorageItem("token", {
                    accessToken: result.data?.accessToken,
                    refreshToken: result.data?.refreshToken,
                }, {
                    exp : "1h"
                })
            }
        }
    }, [])

    // 규칙을 위반했을 경우
    const onSubmitError : SubmitErrorHandler<InputsType> = useCallback((errors) => {
        if (errors.id && errors.id.message) {
            setErrorMessage(errors.id.message);
            return;
        }

        if (errors.password && errors.password.message) {
            setErrorMessage(errors.password.message);
            return;
        }
    }, [])

    const memorizedHandleSubmit = useMemo(() => handleSubmit(onSubmit, onSubmitError), []);

    return <LoginComponent
        onSubmit={memorizedHandleSubmit}
        errorMessage={errorMessage}
        register={register}
        idPattern={idPattern}
        passwordPattern={passwordPattern}
    />
}

export default LoginContainer;