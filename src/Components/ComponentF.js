
import React, { Component } from 'react'
import { UserConsumer } from './userContext'


export default class ComponentF extends Component {
    render() {

        return (
            <UserConsumer>
                {

                    (anyname) => { return <div>

                        Hello {anyname}

                                          </div>}
                
                    // username =>{
                    //     return <div>Hello {username}</div>
                    // }
                
                }
            </UserConsumer>
              )

    }
}
