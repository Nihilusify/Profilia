<script>
    import { user } from "../stores/authStore";
    import { emailIsValid, passwordIsValid } from "../helper/utilityHelper";

    let fields = { email: "", pass: "" };
    let errors = { email: "", pass: "" };
    let valid = false;

    const validateFields = () => {
        valid = true;
        errors = { email: "", pass: "" };

        if (!emailIsValid(fields.email)) {
            valid = false;
            errors.email = "Must be a valid email adress";
        }

        if (!passwordIsValid(fields.pass)) {
            valid = false;
            errors.pass =
                "Must contain 6-20 chars, one number, one uppercase and one lower case";
        }
    };
</script>

<div class="container">
    <div class="screen">
        <div class="screen__content">
            <form class="login">
                <div class="login__field">
                    <i class="login__icon fas fa-user" />
                    <input
                        type="text"
                        class="login__input"
                        placeholder="User name / Email"
                    />
                </div>
                <div class="login__field">
                    <i class="login__icon fas fa-lock" />
                    <input
                        type="password"
                        class="login__input"
                        placeholder="Password"
                    />
                </div>
                <button class="button login__submit">
                    <span class="button__text">Log In Now</span>
                    <i class="button__icon fas fa-chevron-right" />
                </button>
            </form>
            <div class="social-login">
                <h3>log in via</h3>
                <div class="social-icons">
                    <img
                        src="/img/social/Google_Sign_In.png"
                        alt="Sign in with Google"
                        on:click={user.signInWithGoogle}
                    />
                </div>
            </div>
        </div>
        <div class="screen__background">
            <span
                class="screen__background__shape screen__background__shape4"
            />
            <span
                class="screen__background__shape screen__background__shape3"
            />
            <span
                class="screen__background__shape screen__background__shape2"
            />
            <span
                class="screen__background__shape screen__background__shape1"
            />
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .screen {
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        position: relative;
        height: 600px;
        width: 360px;
        box-shadow: 0px 0px 24px var(--primary);
    }

    .screen__content {
        z-index: 1;
        position: relative;
        height: 100%;
    }

    .screen__background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        -webkit-clip-path: inset(0 0 0 0);
        clip-path: inset(0 0 0 0);
    }

    .screen__background__shape {
        transform: rotate(45deg);
        position: absolute;
    }

    .screen__background__shape1 {
        height: 520px;
        width: 520px;
        background: var(--primaryText);
        top: -50px;
        right: 120px;
        border-radius: 0 72px 0 0;
    }

    .screen__background__shape2 {
        height: 220px;
        width: 220px;
        background: var(--primary);
        top: -172px;
        right: 0;
        border-radius: 32px;
    }

    .screen__background__shape3 {
        height: 540px;
        width: 190px;
        background: linear-gradient(270deg, var(--primary), var(--secondary));
        top: -24px;
        right: 0;
        border-radius: 32px;
    }

    .screen__background__shape4 {
        height: 400px;
        width: 200px;
        background: var(--primary);
        top: 420px;
        right: 50px;
        border-radius: 60px;
    }

    .login {
        width: 320px;
        padding: 30px;
        padding-top: 156px;
    }

    .login__field {
        padding: 20px 0px;
        position: relative;
    }

    .login__icon {
        position: absolute;
        top: 30px;
        color: var(--secondary);
    }

    .login__input {
        border: none;
        border-bottom: 2px solid var(--primary);
        background: none;
        padding: 10px;
        padding-left: 24px;
        font-weight: 700;
        width: 75%;
        transition: 0.2s;
    }

    .login__input:active,
    .login__input:focus,
    .login__input:hover {
        outline: none;
        border-bottom-color: var(--primary);
    }

    .login__submit {
        background: var(--primaryText);
        font-size: 14px;
        margin-top: 30px;
        padding: 16px 20px;
        border-radius: 26px;
        border: 1px solid #d4d3e8;
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        align-items: center;
        width: 100%;
        color: var(--primary);
        box-shadow: 0px 2px 2px var(--primary);
        cursor: pointer;
        transition: 0.2s;
    }

    .login__submit:active,
    .login__submit:focus,
    .login__submit:hover {
        border-color: var(--secondary);
        outline: none;
    }

    .button__icon {
        font-size: 24px;
        margin-left: auto;
        color: var(--secondary);
    }

    .social-login {
        position: absolute;
        height: 140px;
        width: 160px;
        text-align: center;
        bottom: 0px;
        right: 0px;
        color: var(--primaryText);
    }

    .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
