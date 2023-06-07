import {useNavigate} from "react-router";
import {Link} from "@remix-run/react";

export default function () {
    const navigation = useNavigate();

    return (
        <form className="position:relative min-h:100vh max-w:100vw p:2em">
            <div className={"flex justify-content:center align-items:center mb:1.5em"}>
                <img
                    onClick={() => navigation("/")}
                    src="/png/Logo.png"
                    className="my-4 img-fluid"
                    width="72px"
                    height="72px"
                    alt="Logo R"
                />
            </div>


            <h1 className="font:bold font-size:2.5em">Let's Sing you in.</h1>
            <h2 className="font:semibold font-size:2em">Welcome back.</h2>
            <h2 className="font:semibold font-size:2em">You've ben missed!</h2>

            <div className={"flex flex:col gap:1em mt:3.5em"}>
                <div>
                    <label htmlFor="r-input-username" className={"font:bold font-size:1.2em pb:0.3em"}>
                        Username
                    </label>
                    <input
                        id="r-input-username"
                        type="text"
                        className="form-control p-2"
                        placeholder="Username"
                        autoComplete="username"
                    />
                </div>

                <div>
                    <label htmlFor="r-input-password" className={"font:bold font-size:1.2em pb:0.3em"}>
                        Password
                    </label>
                    <input
                        id="r-input-password"
                        type="password"
                        className="form-control p-2"
                        placeholder="Password"
                        autoComplete="current-password"
                    />
                </div>
            </div>

            <div className={"position:absolute bottom:0 left:2em right:2em pb:1.5em"}>
                <button className="btn btn-lg btn-primary btn-block mb-3" type="button"
                        onClick={() => navigation("/dashboard")}>
                    Sign In
                </button>
                <Link to={"/signup"} className={"flex justify-content:center align-items:center text-decoration:none"}>
                    Don't have an account? <span className={"font:bold ml:0.5em"}>Register</span>
                </Link>
            </div>
        </form>
    );
}
