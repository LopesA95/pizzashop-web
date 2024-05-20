import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="h-full border-r border-foreground/5 bg-muted"></div>

            <div>
                <Outlet />
            </div>
        </div>
    )

}
