import React from 'react'

const SignupForm = () => {
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-6 ps-0 my-3">
                        <label for="accountType" className="rounded-4 border-1 d-flex align-items-center justify-content-start p-4">
                            <input type="radio" name="accountType" value="translator" cloassName="h-[20px] w-[20px]" />
                            <span className="ms-3">I am a Translator</span>
                        </label>
                    </div>
                    <div className="col-md-6 pe-0 my-3">
                        <label for="accountType" className="rounded-4 border-1 d-flex align-items-center justify-content-start p-4">
                            <input type="radio" id="" name="accountType" value="client" cloassName="h-[20px] w-[20px]" />
                            <span className="ms-3">I am looking for a translator</span>
                        </label>
                    </div>
                </div>

                <div className="mb-3 form-floating">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="Enter email" />
                    <label htmlFor="floatingInput" className="form-label">Email address</label>
                </div>
                <div className="mb-3 form-floating">
                    <input name="password" type="password" className="form-control" id="floatingInput" placeholder="Pick a password" />
                    <label htmlFor="floatingInput" className="form-label">Email address</label>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
