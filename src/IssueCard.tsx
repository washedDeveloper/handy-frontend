import React from 'react';

interface Props {
    issue: Issue;
}

interface Issue {
    title: string;
    description: string;
    difficulty: string;
    skills: string;
    languages: string;
    link: string;
}

const IssueCard: React.FC<Props> = (props) => {
    return (
        <div className='IssueCard w-2/5 h-auto 
        mx-auto my-4 px-4 py-6 text-left
        bg-gray-800
        border-gray-900 border-2 rounded-md'>
            <h2 className='text-2xl my-2'>
                { props.issue.title }
            </h2>
            <p className='text-gray-500 my-2'>
                { props.issue.description }
            </p>
            <p className='my-2'>
                Difficulty: {props.issue.difficulty}
            </p>
            <p className='my-2'>
                Skills: {props.issue.skills.split(',').join(', ')}
            </p>
            <p className='my-2'>
                Skills: {props.issue.languages.split(',').join(', ')}
            </p>
            <p>
                Link: <a href={props.issue.link}
                className='text-purple-800 underline'>
                    {props.issue.link}
                </a>
            </p>
        </div>
    );
}
export default IssueCard;