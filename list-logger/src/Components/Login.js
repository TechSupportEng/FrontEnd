import React from "react"

export const Login = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: ""
  })

  const changeHandler = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: [event.target.value]
    })
  }
  const submitHandler = event => {
    event.preventDefault()
    axios
      .post("", credentials)
      .then(response => {
        localStorage.setitem("token", response.data.key)
        history.pushState("/view")
      })
      .catch(error => {
        console.log("This is an error from the Login submitHandler", error)
      })
  }

  return (
    <div>
      <form onsubmit={submitHandler}>
        <h2>Sign In</h2>
        <label>Name</label>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Wriggley"
          onChange={changeHandler}
          value={credentials.name}
        />
        <label>Password</label>
      </form>
    </div>
  )
}

export default Login
