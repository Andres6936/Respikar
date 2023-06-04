export default function () {
  return (
    <form className="container-fluid pt-5 text-center col-sm-6 col-md-5 col-lg-4 col-xl-3">
      <a href="../index.html">
        <img
          src="/png/Logo.png"
          className="my-4 img-fluid"
          width="72px"
          height="72px"
          alt="Logo R"
        />
      </a>
      {/* Reference for autocomplete: https://html.spec.whatwg.org/multipage/form-
     control-infrastructure.html#autofilling-form-controls%3A-the-autocomplet
     e-attribute*/}
      <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
      <label htmlFor="r-input-username" className="w-100 visually-hidden">
        Username
      </label>
      {/* Autocomplete: username: A username */}
      <input
        id="r-input-username"
        type="text"
        className="form-control p-2"
        placeholder="Username"
        autoComplete="username"
        required=""
        autofocus=""
      />
      <label htmlFor="r-input-password" className="w-100 visually-hidden">
        Password
      </label>
      {/* Autocomplete: current-password: The current password for the account identified by the username field (e.g. when logging in) */}
      <input
        id="r-input-password"
        type="password"
        className="form-control p-2"
        placeholder="Password"
        autoComplete="current-password"
        required=""
      />
      <div className="my-3">
        <label>
          <input
            className="mx-2"
            type="checkbox"
            defaultValue="r-remember-me"
          />
          Remember Me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Sign In
      </button>
      <a href="SignUp.html">Don't have an account?</a>
      <p className="mt-5 mb-3 text-muted small">© 2020. J &amp; J</p>
    </form>
  );
}
