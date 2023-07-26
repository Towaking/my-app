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
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="input"/>
                    </div>
                    <div className="pw">
                        <label htmlFor="pw">Password</label>
                        <input type="password" id="pw" name="pw" className="input"/>
                    </div>
                    <div className="stay">
                        <input type="checkbox" name="sty" id="sty"  />
                        <label htmlFor="sty" id="stas" >Stay sign in</label>
                    </div>
                    <div className="button">
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );

}