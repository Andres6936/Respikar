import {Link, useLocation} from "@remix-run/react";

export default function BottomNavigator() {
    const location = useLocation();
    
    const getClassIfActive = (to: string) => {
        if (location.pathname === to) {
            return "col"
        } else {
            return "col text-muted"
        }
    }
    
    return (
        <footer className="bg-light mt-auto py-3 border-top fixed-bottom d-block d-sm-none">
            <div className="container mx-0 row row-cols-4 gx-5">
                <Link className={getClassIfActive("/")} to="/">
                    <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
                        <use xlinkHref="#bi-house-door" />
                    </svg>
                </Link>
                <Link className={getClassIfActive("/alarm")} to="/alarm">
                    <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
                        <use xlinkHref="#bi-bell" />
                    </svg>
                </Link>
                <Link className={getClassIfActive("/howto")} to="/howto">
                    <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
                        <use xlinkHref="#bi-book" />
                    </svg>
                </Link>
                <Link className={getClassIfActive("/profile")} to="/profile">
                    <svg viewBox="0 0 16 16" width="1.5em" height="1.5em">
                        <use xlinkHref="#bi-gear" />
                    </svg>
                </Link>
            </div>
        </footer>
    )
}