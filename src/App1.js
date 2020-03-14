import React from 'react'

class App1 extends React.Component{

    constructor(){
        super()
    this.state={
        fullname:"",
        email:"",
        password:"",
        contact:""
    }
    this.handlechange=this.handlechange.bind(this)
    this.submithandler=this.submithandler.bind(this)
    
    }
    submithandler(){
console.log("hello")
        fetch('http://localhost:4000/signup', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify( {"fullname": this.state.fullname,
         "email":this.state.email,
        "password":this.state.password,
         "contact":this.state.contact})
        
        
        })
       }
    handlechange(event){
    
        
        const{name,value,checked,type}=event.target
       event.target.type=="checkbox" ? this.setState({[event.target.name]: event.target.checked}) : this.setState({
         [event.target.name]: event.target.value
    
        })
    }
    render(){
       return(
           <div>
               
<html lang="en">

<head>
    
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content="Colorlib Templates"/>
    <meta name="author" content="Colorlib"/>
    <meta name="keywords" content="Colorlib Templates"/>

    
    <title>Au Register Forms by Colorlib</title>

    
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"/>
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all"/>

    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>

    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all"/>
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all"/>

    
    <link href="css/main.css" rel="stylesheet" media="all"/>
</head>

<body>
    <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Registration Info</h2>
                    <form method="POST">
                        <div class="input-group">
                            <input class="input--style-3" type="text" value={this.state.fullname} name="fullname" placeholder="fullname" onChange={this.handlechange}/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="email" value={this.state.email} name="email" placeholder="email" onChange={this.handlechange}/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="number" value={this.state.contact} name="contact" placeholder="contact" onChange={this.handlechange} />
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="password" value={this.state.password} name="password" placeholder="password" onChange={this.handlechange} />
                        </div>
                       
                        
                    </form>
                    <div class="p-t-10">
                            <button class="btn btn--pill btn--green" type="button" onClick={this.submithandler}>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    </div>

    
    <script src="vendor/jquery/jquery.min.js"></script>
    
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    
    <script src="js/global.js"></script>

</body>

</html>
{this.state.email}
{this.state.password}
{this.state.fullname}
{this.state.contact}
</div>
           
       )
    }
}
export default App1