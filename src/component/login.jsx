import '../assets/css/register.css';

export const Login = () => {
    return (
        <div className="form">
            <div className="vector"></div>
            <div className="right">
                <label className="title">Create Account</label>
                <form>
                    <div className="name">
                        <div className="fname">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="fname" className="input" />
                        </div>
                        <div className="lname">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" className="input"/>
                        </div>
                    </div>
                    <div className="button">
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );

}