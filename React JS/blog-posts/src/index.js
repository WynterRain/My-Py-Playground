import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import img_h from './images/Heona.png'
import img_k from './images/KayB.jpg'
import img_i from './images/Mom.jpg'
import UserCard from './UserCard';


const App = () => {
    return(
        <div className = 'ui comments'>
            <UserCard>
                <div>
                    Hello My Name Is Heona, and I live in USA
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'Mom' 
                    date = 'Today at 5:00:00PM'  
                    text = '@Heona and @KayB, did you finish your homework?'
                    picture = {img_i}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'Heona' 
                    date = 'Today at 5:00:01PM' 
                    text = 'Yes! Everything is done including next weeks homework!'
                    picture = {img_h}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'Mom' 
                    date = 'Today at 5:02:00PM'  
                    text = '@KayB, how about you?'
                    picture = {img_i}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'Heona' 
                    date = 'Today at 6:00:01PM' 
                    text = '@KayB Hello? . . . '
                    picture = {img_h}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'Mom' 
                    date = 'Today at 9:02:00PM'  
                    text = '@KayB, . . .'
                    picture = {img_i}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'KayB' 
                    date = 'Today at 11:59:59PM' 
                    text = "uhhhh no ;-; . . . . I'm still on last month's Kumon."
                    picture = {img_k}
                />
            </UserCard>

        </div>

    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')

)

