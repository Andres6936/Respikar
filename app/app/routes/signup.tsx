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

            <h1 className="font:bold font-size:2.5em text-align:center">Please Sign Up</h1>

            <div className="flex flex:col gap:1em mt:3.5em">
                <div>
                    <label htmlFor="r-input-name" className={"font:bold font-size:1.2em pb:0.3em"}>
                        Name
                    </label>
                    <input
                        id="r-input-name"
                        type="text"
                        className="form-control p-2"
                        placeholder="Name"
                        autoComplete="name"
                    />
                </div>

                <div>
                    <label htmlFor="r-input-email" className={"font:bold font-size:1.2em pb:0.3em"}>
                        Email
                    </label>
                    <input
                        id="r-input-email"
                        type="email"
                        className="form-control p-2"
                        placeholder="Email"
                        autoComplete="email"
                    />
                </div>

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
                        autoComplete="new-password"
                    />
                </div>
            </div>

            <div className={"position:absolute bottom:0 left:2em right:2em pb:1.5em"}>
                <button className="btn btn-lg btn-primary btn-block my-3" type="submit">
                    Get Started
                </button>
                <Link to={"/signin"} className={"flex justify-content:center align-items:center text-decoration:none"}>
                    You already have an account?
                </Link>
            </div>
        </form>
    );
}
