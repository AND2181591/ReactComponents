import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45pm" 
                    blogPost="Awesome!" 
                    image={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Joe" 
                    timeAgo="Today at 2:00am" 
                    blogPost="Groovy!"
                    image={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Andrew" 
                    timeAgo="Yesterday at 5:00pm" 
                    blogPost="Tubular!"
                    image={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);