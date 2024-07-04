import GenderCheckBox from "./GenderCheckBox"

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign up <span className="text-blue-700">QuickChat</span>
                </h1>

                <form>
                    <label className="label p-2">
                        <span className="text-base label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="john doe" className="input input-bordered input-info w-full max-w-xs" />

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="john@123" className="input input-bordered input-info w-full max-w-xs" />

                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="input input-bordered input-info w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="confirm password" className="input input-bordered input-info w-full max-w-xs" />
                    </div>

                    <GenderCheckBox/>
                    <a href="#" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </a>

                    <div>
                    <button className="btn btn-block btn-sm mt-2">Sign Up</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup
