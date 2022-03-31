<script lang="ts">
    import Card from "../shared/Card.svelte";
    import { user } from "../stores/authStore";
    import Button from "../shared/Button.svelte";
    import { emailIsValid, passwordIsValid } from "../helper/utilityHelper";

    let w: number;

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

<Card>
    <div class="container" slot="header" bind:clientWidth={w}>
        <div class="signup">
            <div class="email-pass">
                <div class="form-field">
                    <label for="email">Email:</label>
                    <input type="text" id="email" bind:value={fields.email} />
                    <div class="error">{errors.email}</div>
                </div>
                <div class="form-field">
                    <label for="pass">Password:</label>
                    <input type="password" id="pass" bind:value={fields.pass} />
                    <div class="error">{errors.pass}</div>
                </div>
                <Button type="primary" flat={true}
                    >Sign In (Temporay Unavailible)</Button
                >
                <Button type="secondary" flat={true}
                    >Sign Up (Temporay Unavailible)</Button
                >
            </div>
            <div class="social">
                <div class="hor-line">
                    <span>or</span>
                </div>
                <img
                    src="/img/social/btn_google_signin_light_normal_web.png"
                    alt="Sign in with Google"
                    on:click={user.signInWithGoogle}
                />
            </div>
            <Button type="secondary" flat={true} on:click={user.accountSignOut}
                >sign Out</Button
            >
        </div>
    </div>
</Card>

<style>
    .container {
        display: flex;
    }

    .signup {
        text-align: center;
        padding: 20px;
        min-width: 400px;
        width: 100%;
    }

    .hor-line {
        border: 1px solid #ccc;
        width: 80%;
        margin: 50px auto;
    }

    .hor-line > span {
        position: absolute;
        transform: translate(-50%, -50%);
        background-color: lightgrey;
        padding: 0 20px;
    }

    .form-field {
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
        color: var(--primaryText);
    }

    .error {
        font-weight: bold;
        font-size: 12px;
        color: var(--error);
    }
</style>
