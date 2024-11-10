import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import RegisterComponent from "@components/Register";
import ax from "@utils/axios";
import ServerError from "@utils/error";
import { InputsType } from "@components/Register";
import { useAppDispatch, useAppSelector } from "@slices/store";
import { setAccessToken, setRefreshToken } from "@slices/auth";
import { setLocalStorageItem } from "@utils/storage";

const idPattern = /\w{6}.+/
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[^  |\n]+$/gm

function RegisterContainer() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(({auth}) => auth.accessToken);
    const refreshToken = useAppSelector(({auth}) => auth.refreshToken);
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<InputsType>();

    useEffect(() => {
        if(accessToken !== undefined && refreshToken !== undefined) {
            navigate("/");
        }
    }, [accessToken, refreshToken])

    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, email, password, remember }) => {
        setErrorMessage("");

        const result = await ax.postApi("/auth/signUp", { id, email, password })
        if (result.error !== undefined) {
            setErrorMessage(ServerError[result.error]);
        } else {
            dispatch(setAccessToken(result.data?.accessToken));
            dispatch(setRefreshToken(result.data?.refreshToken));
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

            navigate("/");
        }
    }, [])

    const onSubmitError: SubmitErrorHandler<InputsType> = useCallback((errors) => {
        if (errors.id && errors.id.message) {
            setErrorMessage(errors.id.message);
            return;
        }

        if (errors.email && errors.email.message) {
            setErrorMessage(errors.email.message);
            return;
        }

        if (errors.password && errors.password.message) {
            setErrorMessage(errors.password.message);
            return;
        }
    }, []);

    const memorizedHandleSubmit = useMemo(() => handleSubmit(onSubmit, onSubmitError), []);

    if (accessToken && refreshToken)
        return <Navigate to="/" />;
    
    return (
        <RegisterComponent
            onSubmit={memorizedHandleSubmit}
            errorMessage={errorMessage}
            register={register}
            idPattern={idPattern}
            emailPattern={emailPattern}
            passwordPattern={passwordPattern}
        />

    )
}

export default RegisterContainer;