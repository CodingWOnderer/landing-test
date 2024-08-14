"use client";

import React, { useState } from "react";
import { Input, InputProps } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../craft";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const [passwordShow, setPasswordShow] = useState<boolean>(false);
        return (
            <div className={cn(" w-full inline-flex relative")}>
                <Input
                    {...props}
                    className={cn("pr-9 placeholder:text-xs", className)}
                    ref={ref}
                    type={passwordShow ? "text" : "password"}
                />
                <Button
                    className="absolute right-0 hover:bg-transparent"
                    type="button"
                    size={"icon"}
                    onClick={() => setPasswordShow(!passwordShow)}
                    variant={"ghost"}
                    disabled={props.value === "" || props.disabled}
                >
                    {passwordShow ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
                    <span className="sr-only">
                        {passwordShow ? "Hide password" : "Show password"}
                    </span>
                </Button>
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
