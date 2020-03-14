import React from 'react'

class App3 extends React.Component {
    constructor() {
        super()
        this.state = {

            email: "",
            password: "",
            loginstats: ""
        }
        this.handlechange = this.handlechange.bind(this)
        this.submithandler = this.submithandler.bind(this)

    }
    submithandler() {

        fetch('http://localhost:4000/loginauth', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password,
            })


        }).then(res => res.text()).then(e => this.setState({ loginstats: e }))
    }
    handlechange(event) {


        const { name, value, checked, type } = event.target
        event.target.type == "checkbox" ? this.setState({ [event.target.name]: event.target.checked }) : this.setState({
            [event.target.name]: event.target.value

        })
    }
    render() {
        return (
            <div>

                <html lang="en">
                    <head>
                        <title>Login V14</title>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />

                        <link rel="icon" type="image/png" href="asset/images/icons/favicon.ico" />

                        <link rel="stylesheet" type="text/css" href="asset/vendor/bootstrap/css/bootstrap.min.css" />
                        <link rel="stylesheet" type="text/css" href="asset/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

                        <link rel="stylesheet" type="text/css" href="asset/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
                        <link rel="stylesheet" type="text/css" href="asset/vendor/animate/animate.css" />

                        <link rel="stylesheet" type="text/css" href="asset/vendor/css-hamburgers/hamburgers.min.css" />
                        <link rel="stylesheet" type="text/css" href="asset/vendor/animsition/css/animsition.min.css" />
                        <link rel="stylesheet" type="text/css" href="asset/vendor/select2/select2.min.css" />
                        <link rel="stylesheet" type="text/css" href="asset/vendor/daterangepicker/daterangepicker.css" />
                        <link rel="stylesheet" type="text/css" href="asset/css/util.css" />
                        <link rel="stylesheet" type="text/css" href="asset/css/main.css" />
                    </head>
                    <body>

                        <div class="limiter">
                            <div class="container-login100">
                                <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                                    <form class="login100-form validate-form flex-sb flex-w">
                                        <span class="login100-form-title p-b-32">
                                            Account Login
					</span>

                                        <span class="txt1 p-b-11">
                                            Username
					</span>
                                        <div class="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                                            <input class="input100" type="email" value={this.state.email} name="email" placeholder="email" onChange={this.handlechange} />
                                            <span class="focus-input100"></span>
                                        </div>

                                        <span class="txt1 p-b-11">
                                            Password
					</span>
                                        <div class="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                                            <span class="btn-show-pass">
                                                <i class="fa fa-eye"></i>
                                            </span>
                                            <input class="input100" type="password" value={this.state.password} name="password" placeholder="password" onChange={this.handlechange} />
                                            <span class="focus-input100"></span>
                                        </div>

                                        <div class="flex-sb-m w-full p-b-48">
                                            <div class="contact100-form-checkbox">
                                                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                                <label class="label-checkbox100" for="ckb1" >
                                                    Remember me
							</label>
                                            </div>

                                            <div>
                                                <a href="#" class="txt3">
                                                    Forgot Password?
							</a>
                                            </div>
                                        </div>



                                    </form>
                                    <div class="container-login100-form-btn">
                                        <button class="login100-form-btn" type="button" onClick={this.submithandler}>
                                            Login
						</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div id="dropDownSelect1"></div>


                        <script src="asset/vendor/jquery/jquery-3.2.1.min.js"></script>

                        <script src="asset/vendor/animsition/js/animsition.min.js"></script>

                        <script src="asset/vendor/bootstrap/js/popper.js"></script>
                        <script src="asset/vendor/bootstrap/js/bootstrap.min.js"></script>

                        <script src="asset/vendor/select2/select2.min.js"></script>

                        <script src="asset/vendor/daterangepicker/moment.min.js"></script>
                        <script src="asset/vendor/daterangepicker/daterangepicker.js"></script>

                        <script src="asset/vendor/countdowntime/countdowntime.js"></script>

                        <script src="asset/js/main.js"></script>

                    </body>
                </html>
                {this.state.loginstats}
            </div>)
    }
}
export default App3