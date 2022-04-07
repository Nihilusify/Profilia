<script>

</script>


<div class="container">
    <div class="screen">
        <div class="screen__content">
            <form class="profile">
                <div class="imgBx">
                    <img src="/img/social/Google_Sign_In.png" alt="test"/>
                </div>
                <div class="content">
                    <div class="login__field">
                        <input type="text" class="profile__input" placeholder="Name" >
                    </div>
                    <div class="login__field">
                        <input type="text" class="profile__input" placeholder="Surname">
                    </div>
                    <div class="login__field">
                        <input type="text" class="profile__input" placeholder="Email">
                    </div>
                    <div class="login__field">
                        <input type="text" class="profile__input" placeholder="Contact Number">
                    </div>
                </div>
                <button class="button profile__update">
                    <span class="button__text">Update</span>
                    <i class="button__icon fas fa-chevron-right" />
                </button>
            </form>            
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




<!-- <body>
    <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src="/img/social/Google_Sign_In.png" alt="test"/>
            </div>
            <div class="content">
                <input type="text" class="name" placeholder="Name">
                <input type="text" class="surname" placeholder="Surname">
                <input type="text" class="email" placeholder="Email">
                <input type="text" class="contact" placeholder="Contact Number">
            </div>
        </div>
    </div>
</body> -->

<style>
    /* body {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        position: relative;
        width: 1100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 30px;
    }
    .container .card {
        position: relative;
        max-width: 300px;
        height: 215px;
        background: var(--formBackground);
        margin: 30px 10px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        transition: 0.3s ease-in-out;
    }
     .container .card:hover {
        height: 420px;
    } 
    .container .card .imgBx {
        position: relative;
        width: 260px;
        height: 260px;
        top: -60px;
        left: 20px;
        z-index: 1;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        text-align: center;
    }
    .container .card .imgBx img {
        max-width: 100%;
        border-radius: 4px;
    }
    .container .card .content {
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: #111;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .container .card:hover .content {
        visibility: visible;
        opacity: 1;
        margin-top: -40px;
        transition-delay: 0.3s;
    } */



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
    .container .screen .screen__content .profile .imgBx { 
        position: relative;
        /* width: 260px;
        height: 260px; */
        /* top: -60px;
        left: 20px; */
        z-index: 1;
        /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); */
        text-align: center;
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
    .profile {
        width: 320px;
        padding: 30px;
    }

    .login__field {
        padding: 20px 0px;
        position: relative;
    }

    .profile__input {
        border: none;
        border-bottom: 2px solid var(--primary);
        background: none;
        padding: 10px;
        padding-left: 24px;
        font-weight: 700;
        width: 75%;
        transition: 0.2s;
    }

    .profile__input:active,
    .profile__input:focus,
    .profile__input:hover {
        outline: none;
        border-bottom-color: var(--primary);
    }

    .profile__update {
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

    .profile__update:active,
    .profile__update:focus,
    .profile__update:hover {
        border-color: var(--secondary);
        outline: none;
    }

    .button__icon {
        font-size: 24px;
        margin-left: auto;
        color: var(--secondary);
    }
</style>