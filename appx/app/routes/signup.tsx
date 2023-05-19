export default function () {
  return (
    <form className="container-fluid text-center pt-3 col-sm-6 col-md-5 col-lg-4 col-xl-3">
      <a href="../index.html">
        <img
          src="../img/png/Logo.png"
          className="my-4 img-fluid"
          width="72px"
          height="72px"
          alt="Logo R"
        />
      </a>
      <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
      {/* Reference for autocomplete: https://html.spec.whatwg.org/multipage/form-
     control-infrastructure.html#autofilling-form-controls%3A-the-autocomplet
     e-attribute*/}
      <div className="mb-3">
        <label htmlFor="r-input-name" className="w-100 visually-hidden">
          Name
        </label>
        {/* Autocomplete: name: Full name */}
        <input
          id="r-input-name"
          type="text"
          className="form-control p-2"
          placeholder="Name"
          autoComplete="name"
          required=""
          autofocus=""
        />
      </div>
      <label htmlFor="r-input-email" className="w-100 visually-hidden">
        Email
      </label>
      {/* Autocomplete: email: 	Email address */}
      <input
        id="r-input-email"
        type="email"
        className="form-control p-2"
        placeholder="Email"
        autoComplete="email"
        required=""
      />
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
      />
      <label htmlFor="r-input-password" className="w-100 visually-hidden">
        Password
      </label>
      {/* Autocomplete: new-password : A new password (e.g. when creating an account or changing a password)*/}
      <input
        id="r-input-password"
        type="password"
        className="form-control p-2"
        placeholder="Password"
        autoComplete="new-password"
        required=""
      />
      <button className="btn btn-lg btn-primary btn-block my-3" type="submit">
        Get Started
      </button>
      <a href="SignIn.html">You already have an account?</a>
      <p className="mt-5 mb-3 text-muted small">© 2020. J &amp; J</p>
    </form>
  );
}
