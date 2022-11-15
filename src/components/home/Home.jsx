import React from 'react'
import Axios from 'axios'
function Home() {

    function test() {
        Axios.get("http://localhost:3001/getContent").then((response) => {
            console.log(response.data)
          })
    }
    return(<div className='home-main'>
        <button onClick={ () => {
            console.log('clicked!')
            test()
        }}>    testing my endpoints</button>
    </div>)
}

export default Home;