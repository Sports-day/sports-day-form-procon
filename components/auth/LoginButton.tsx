'use client'
import {Button} from "@mui/material";
import * as React from "react";
import {useRouter} from "next/navigation";

export default function LoginButton() {
    const subDirectory = process.env.SUB_DIRECTORY ? process.env.SUB_DIRECTORY : "/"
    const router = useRouter()

    const handleLogin = async () => {
        await fetch("/api/auth/callback", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        })
        router.replace(subDirectory)
    }

    return (
        <Button
            variant="contained"
            onClick={handleLogin}
            disableElevation
            sx={{
                width: "100%",
                color: 's-dark.main',
                backgroundColor: 's-light.main',
                borderRadius: "9px",
                py: 1.5
            }}
        >
            ログイン
        </Button>
    );
}
