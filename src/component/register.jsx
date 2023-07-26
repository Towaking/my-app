export const Register = () => {
    return (
        <>
            <form>
                <div>
                    <div className="fname">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="lname">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" />
                    </div>
                </div>
                <div className="name">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="pw">
                    <label htmlFor="pw">Password</label>
                    <input type="password" id="pw" name="pw" />
                </div>
                <div className="stay">
                    <input type="checkbox" name="sty" id="sty" />
                    <label htmlFor="sty">Stay sign in</label>
                </div>
                <div className="button">
                    <button>Create</button>
                </div>
            </form>
        </>
    );
}