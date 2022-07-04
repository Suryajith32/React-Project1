import React from 'react'
import './signup.css'

function signup() {
  return (

    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label class="First">First Name<span class="text-danger">*</span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter First Name"/>
                        </div>

                         <div class="mb-3 col-md-6">
                            <label class="First">Email Address<span class="text-danger">*</span></label>
                            <input type="text" name="email" class="form-control" placeholder="Email Address"/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label class="First">Phone<span class="text-danger">*</span></label>
                            <input type="phone" name="phone" class="form-control" placeholder="Enter Phone Number"/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label class="First">Password<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="Enter Password"/>
                        </div>
                       
                        
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">Signup Now</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">If you have account, Please <a href="#">Login Now</a></p>
            </div>
        </div>
    </div>
</div>

  )
}

export default signup